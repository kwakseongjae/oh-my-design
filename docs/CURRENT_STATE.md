# CURRENT STATE — 단일 복원 지점

갱신: **2026-09-17 저녁** · 오너 지적 2건(라우트·토스) 처리. 우선순위는 2026-09-16 재편분 유지. 분기 `codex/track-foundation`, baseline `15ff0139`
(main과 동일 커밋). 9/7~9/8 스프린트 산출물은 **전부 미커밋 상태로 보존**되어 있다.

## ▶ 2026-09-29 · 성장 전략 결정 17개 → 병렬 실행 착수 (521 · 227)

- **문서.**
  - `docs/GROWTH_PLAN_2026-09-29.md` — 계획
  - `docs/GROWTH_DECISIONS_2026-09-29.md` — 결정 17개 + 정정
  - `docs/research/2026-09-29-growth/` — Emil 해부, 경쟁 지형. gitignored 로컬
  - Aphrodite: `~/Desktop/projects/aphrodite-mela/docs/ADVANCEMENT-PLAN-2026-09-29.md`
- **오너 선택.** D1 KR 깊이 먼저 → 18:12 재결정: **번들 기반 쇼케이스 심화(verified 67) 먼저**, partial 100은 그 뒤, D2 회사명 금지 + apple 예외, D10 웨이브 5~8, **A1 Aphrodite = 범용 에이전트 캔버스(pen.dev형)**. 나머지는 추천안이고, A3·A5·A7은 컨셉 A에 맞춰 조정했다.
- **정정.**
  - KR 캡처 번들은 verified 67개(수요 상위 전부)에만 있고 partial 100개엔 없다. 그래서 쇼케이스 심화와 partial 검증 두 경로로 나뉜다.
  - "국가 미기재 3"은 오탐이었다(toss·krds·serendie는 Core v2 형식, 레지스트리 정상).
- **차단과 해소.** 9/29 오후 macOS가 Desktop 기존 파일 읽기를 막았다(EPERM). 재부팅 후 복구됐다. 스크래치패드는 사라졌지만 산출물은 레포에 남아 있다.
- **실행 중 (18:05~).**
  - Aphrodite 컨셉 A 계획 개정(Opus)
  - 한글 타이포 원전 조사(Sonnet)
  - skills.sh 노출 규칙·이름 충돌 조사(Sonnet)
  - Aphrodite P0 승인 가드 수정(Opus) — 워크트리 `../aphrodite-mela-p0`, 브랜치 `fix/approval-guard-0-2-8`, 로컬 커밋만
  - npm 2.0.2 strict 게이트 해소(Opus) — OmD 격리 워크트리
  - KR 쇼케이스 인벤토리(Sonnet, 읽기 전용)
- **완료 — 계측 복구 (18:30).** 서버측 카운터 `/api/active`는 살아 있었다: 9/28 DAU 386, WAU 2,108, MAU 9,668, 30일 전부 기록됨. `scripts/growth/snapshot.mjs`를 추가했다(GitHub 별·트래픽·리퍼러, npm, skills.sh 스킬별 설치, DAU/WAU/MAU → `data/growth/metrics.jsonl`). 주 1회 이상 실행한다(GitHub 트래픽은 14일만 보관). 미커밋.
- **완료 — 원고 2편 사실 확인 (18:45).**
  - 배민 글은 OK 28, STALE 2(날짜, 선데이 테이블 예제의 9/20 일정)이고 근거 없는 주장은 0이다. Core 글은 OK 32, STALE 1(날짜)이다.
  - 수정본은 `.omd/execution/2026-09-08/sprint90/content/*/article/*.2026-09-29.md`에 있다. 배민 글에는 한글 타이포 스킬 예고 한 줄을 넣었다(날짜·이름 없음).
  - 발행 전 남은 일: `web/public/blog-assets/`에 에셋 4개 복사, 매니페스트 재생성, 발행일(오너).
- **완료 — skills.sh 조사 (18:50).**
  - skills.sh는 크롤링하지 않는다. `npx skills add` 설치 텔레메트리로 행이 생기고, 행은 frontmatter `name` 단위다. `omd:apply`와 `omd-apply`처럼 트리마다 이름이 달라 중복 행이 생긴다. 그래서 "401 설치"는 합산이고 실제 최고치는 18이다.
  - 숨김 수단은 `metadata.internal: true` 하나다. 기존 40행은 남는다. 삭제는 수동 요청(공개 게시라 오너 결정)이다.
  - 이름은 `design-system`만 정확히 충돌한다(ui-ux-pro-max 32.6K, ecc 8.8K). W6 전에 개명한다. 나머지 5개는 충돌 없음.
  - 적용할 경로 표: `docs/research`가 아니라 스크래치패드 `omd-out/skills-sh-indexing.md`(첫 공개 스킬과 함께 적용).
- **완료 — Aphrodite P0 (19:05).**
  - 승인 우회 경로 3개(act, click, MCP use_interface)가 모두 실제였다. 새 테스트 43개 중 37개가 수정 전 실패했다.
  - 수정은 사람 전용 액션 집합을 권한 판정 첫 단계에서 거절하고, UI에서 `isTrusted`로 한 번 더 막는다. 0.2.8로 올렸다.
  - 커밋 `59ccba3`(워크트리 `../aphrodite-mela-p0`, 브랜치 `fix/approval-guard-0-2-8`, 로컬만).
  - 본 세션 재실행: 새 테스트 44/44, 전체 459/461(실패 1은 기존 아이콘 테스트).
  - 남은 위험: OS 수준 컴퓨터 유즈 클릭은 trusted라 구분 못 한다 → 0.3 후보로 OS 인증(Touch ID 등)을 승인에 건다.
- **정정 — 2.0.2 게이트 (19:00).**
  - D4 전제가 틀렸다. strict는 픽스처가 1개 이상이고 모두 PASS여야 통과한다. CI에서는 픽스처 6개 출력이 gitignore라 전부 MISSING이고, 영수증은 노트북 절대경로를 고정한다. 그래서 prepublishOnly에 걸린 게이트는 CI에서 절대 통과할 수 없다.
  - landing 3개는 "영수증 없음"이 아니라 통합성 검사 실제 FAIL이다(위 2026-09-27 기록 정정).
  - llms-full.txt는 2.0.2 CHANGELOG 누락으로 CI 검사가 실패했다 → 재생성함(미커밋).
  - 오너 재결정 대기. 보고서: 스크래치패드 `omd-out/release-202-report.md`, 워크트리 `.claude/worktrees/agent-a55ee5c9247ca43b1`.
- **결정 (19:15).** 2.0.2는 게이트를 로컬 단계로 옮겨 면제 출시한다(구현 중, 태그 전 재확인). Aphrodite 0.2.8은 draft PR #2(#1 위에 쌓음).
- **완료 — KR 쇼케이스 인벤토리 (19:10).**
  - 방식: 65개는 DESIGN.md 제자리 편집(assemble 재생성 금지 — 단일 home 표면 하드코딩). toss·krds는 graph 투영이라 별도 트랙이다.
  - 번들의 components[]는 스타일 변형 수라 상한이다(cgv 383 = 6종).
  - 상태값은 `surfaces[].elements[]`의 `::state-hover|pressed|focus`에 있다. focus는 신뢰도가 낮다.
  - 번들만으로 '5개 이상 × hover·pressed·focus 전부'인 곳은 0/67이다 → 쇼케이스 기준 재정의가 필요하다.
  - 가장 싼 9곳(상태 측정됐으나 미선언): upstage, toss-securities, lguplus, samsung, remember, yeogiotte, flex, catchtable, sktelecom.
  - 번들 백업 위치가 미정이다(`artifacts/README.md:67`).
- **결정 (19:30).** 쇼케이스는 번들로 먼저 하고 상위 20곳은 표적 재측정한다. 번들을 iCloud Drive에 백업했다(177+333 파일 해시 일치, `artifacts/README.md` 백업 위치 기재).
- **쇼케이스 착수 (19:45).**
  - 수요 순위는 Upstash 누적 select 80,552건에서 뽑았다. KR 상위 20(legacy 형식 verified): karrot, baemin, kakao, samsung, naver, banksalad, yeogiotte, 29cm, socar, wanted, tossbank, kakaobank, hyundaicard, likelion, ohouse, channeltalk, zigzag, ably, upstage, remember. toss(11,189, 전체 14%)와 krds는 Core v2 graph 트랙이라 따로 한다.
  - 파일럿 2개가 돌고 있다: 번들 심화(toss-securities, lguplus), 표적 재측정(karrot, baemin — hover·pressed·키보드 focus).
- **완료 — 2.0.2 출시 준비 (19:55).**
  - 커밋 `6237385b`(브랜치 `worktree-agent-a55ee5c9247ca43b1`, main HEAD 바로 위). strict 게이트를 prepublishOnly에서 뺐고, 규칙 파일은 바이트 동일하다.
  - D4 제외는 fixtures.json의 기록이다(필터가 아니라 매 실행 출력). CHANGELOG에 면제 한 줄을 넣고 llms-full을 재생성했다.
  - prepublishOnly 전 구간이 통과했다. pack: 854파일, 7.1MB, 레퍼런스 521.
  - 로컬 strict는 BLOCKED로 남는다(의도된 상태). main 병합과 태그 푸시는 오너 GO를 기다린다.
- **2.0.2 출시 진행 (20:00, 오너 GO).**
  - main을 `6237385b`로 fast-forward하고 태그를 푸시했다 → CI 1차 실패. node18-smoke가 루트 의존성만 설치하는데 수집기 번들이 `web/scripts/lib/reference-source.mjs`에서 js-yaml을 불러서다. 로컬은 web/node_modules로 풀려 못 잡았다. publish 전이라 npm엔 아무것도 안 나갔다.
  - 수정 `abf37284`: 루트 devDependency `js-yaml@4.3.0` 한 줄. Node 18 클린 설치·빌드·팩 스모크 통과, web 의존성 있는 publish 조건에서 번들 바이트 동일, 미러 검사 통과를 로컬에서 확인했다.
  - main → `abf37284`, 미공개 태그 v2.0.2를 새 커밋으로 옮김 → CI 2차 실행 중.
- **2.0.2 CI 2차 (20:10).**
  - node18-smoke는 통과했다. publish는 테스트 1건(install-skills Core v2 closure)이 CI에서 5초 타임아웃으로 실패했고, 재실행하니 테스트는 전부 통과했다.
  - 그 뒤 `npm publish`의 PUT이 **E404**로 실패했다(prepublishOnly 통과, provenance 서명 완료 후). npm은 인증 실패를 404로 돌려준다. `NPM_TOKEN`은 2026-06-10에 만든 것이라, 쓰기 토큰 90일 한도로 만료된 것으로 추정한다.
  - 오너 조치가 필요하다: 새 토큰으로 시크릿을 갱신하거나 npm Trusted Publishing을 설정한다. npm latest는 여전히 2.0.0.
- **npm 전환 (20:20, 오너 결정: Trusted Publishing).**
  - main `2112f070`: release.yml을 토큰 없이 OIDC로 발행하게 바꿨다. npm ^11.5.1을 설치하고 NODE_AUTH_TOKEN을 제거했다.
  - main `436da615`: CI에서 5초를 넘긴 install-skills 테스트에 30초 타임아웃을 줬다(단언은 그대로).
  - 오너가 npmjs.com에 trusted publisher를 등록하면 v2.0.2 태그를 `436da615`로 옮기고 재실행한다.
- **완료 — 파일럿 커밋 (20:15).**
  - `5f649000`: toss-securities 3→12 컴포넌트, lguplus 2→13. 본 세션이 헤드라인 2건을 번들로 재확인했고 게이트가 전부 통과했다. 푸시함.
  - 헬퍼 스크립트는 `web/scripts/reference-deepen/`(미커밋).
- **완료 — /hangul 초안 (20:20).**
  - `skills/hangul/`(미커밋): SKILL.md 151줄, rules, measured-67, check.mjs(셀프테스트 PASS). KRDS·TDS·SEED 본문 행간은 전부 1.5로 원문 확인했다(SEED 수치는 캐논 문서 정정 필요).
  - 우리 사이트를 검사하니 한국어 페이지에 `lang="en"`, font-card.tsx에 `break-all`이 잡혔다.
  - 평가 채널은 오너 확인 뒤 돌린다.
- **완료 — 표적 재측정 파일럿 (20:20).**
  - karrot·baemin 각 6개 컨트롤의 hover·pressed·키보드 focus를 측정했다. baemin은 focus 표시가 없고, karrot는 ::before 오버레이 hover다.
  - 레포 프로브 도구는 종료 때 멈춘다 → 수정 중.
- **배민 글 QA 1차.** REVISION: SVG 팔레트, "-세요", 캡션 누락 → 2차 수정 중.
- **웨이브 실행 중 (20:25).** 배민 2차 수정, karrot·baemin 쇼케이스 저작, 번들 심화 1배치(coupang·kurly·nhncloud / hyundai·yanolja·kream / oliveyoung·kakaopay·musinsa), 프로브 도구 수정과 상위 20 A배치(kakao·samsung·naver).
- **/hangul 평가 (20:40, 오너 결정: Claude + Codex).**
  - 계획은 `docs/research/2026-09-29-growth/hangul-eval-plan.md`다. 프롬프트 3 × (스킬 없음 / 스킬 파일 + 적용 지시 1줄) × 3회를 채널마다 돌린다. create-next-app 16.3.7 템플릿(lang="en"·Geist 기본값 유지, AGENTS/CLAUDE.md 제거)을 쓰고 check.mjs로 채점한다.
  - Codex(gpt-6-astra, 설정 기본값) 18회는 실행 중이다(스크래치패드 `hangul-eval/`). Claude 18회는 현재 웨이브가 끝난 뒤 서브에이전트로 돌린다.
- **배민 글 (20:55).**
  - 2차 수정 커밋 `6985ae1d`(브랜치 `worktree-agent-a624066df7c6d1fcb`, `643851d0` 위): SVG를 사이트 팔레트 정확값으로 바꿨고, "-세요"를 없앴고, 캡션·en alt를 넣었고, 주어 오류와 중복 /cli 링크를 고쳤다.
  - 렌더 확인: 1440·390px, ko·en 모두 가로 넘침 없음, 그림 로드 정상.
  - QA 2차 진행 중. 남은 것은 발행일(오너)과 main 반영 GO다.
  - 부수 발견: 사이트 동의 배너가 한국어 페이지에서도 영어이고, 이미 죽은 GA/Mixpanel 사용을 고지한다.
- **완료 — 배민 글 발행 (22:05, 오너 GO).**
  - main `0a041e32`(체리픽 4커밋, 날짜 2026-09-29). QA 2차 PASS, 1440·390 렌더 확인.
  - 라이브 확인: ko·en 200, 에셋 2개 200, /blog 목록 노출.
- **완료 — 쇼케이스 웨이브 1 (22:06).**
  - 커밋 `3bbf9e2a` 푸시(feature 브랜치).
  - 번들 9곳: coupang 2→8, kurly 3→7, nhncloud 3→12, hyundai 1→12, yanolja 2→11, kream 0→11, oliveyoung 1→9, musinsa 4→9, kakaopay(정정만).
  - 재측정 2곳: karrot 5→16, baemin 7→13(쇼케이스 기준은 미달).
  - 헤드라인 11건 전부 본 세션이 증거와 대조했다.
  - 배민 골든 테스트 핀을 갱신했다(컴포넌트 7→13, 소스 5→6, Core parity 레거시 sha). **staged Core v2 baemin 마이그레이션은 이제 정본보다 뒤처졌다 — 컷오버 재개 시 재이관.**
  - main 반영(프로덕션)은 오너 GO가 필요하다.
- **레시피 메모 (웨이브 2용).**
  - 상태 프레임은 변형이 아니라 요소에서 직접 스캔한다. 색 센서스는 상태값을 포함한다.
  - 테두리 스타일은 미측정이다("1px #hex"로 통일할 것).
  - fg/bg 접두어를 필수로 한다. check-claims는 hover·pressed hex를 검사하지 않는다(보강 필요).
  - `components: {}`는 append-components가 인식하지 못한다.
  - 'interactionCount 0 = 상태 없음' 오독이 3회 났다(린트 후보).
- **/hangul 평가 — Codex 완료 (22:50).**
  - 조건: gpt-6-astra, medium. max는 20분 한도를 넘겨 폐기했다.
  - 스킬 없음 BLOCK 중앙값: p1 2(2–3), p2 1(1–1), p3 2(2–3) — 9회 전부 ≥1.
  - 스킬 있음: 9회 전부 BLOCK 0·WARN 0 → 성공 기준을 충족했다.
  - 없음 쪽 BLOCK은 거의 HG-7이다: 제목 자간 −2.8~−3.5px ≈ −0.06em으로, 실측 하한 −0.03em 밖이다. HG-1(라틴 전용 스택)은 1회. Codex는 스킬 없이도 lang="ko"를 넣었다.
  - 주의: 체커는 스킬 규칙을 검사하므로 B의 0은 구조상 기대값이다. 가치의 근거는 A가 캐논·실측에 근거한 규칙을 어긴다는 점이다.
  - Claude 18회는 진행 중이다.
- **웨이브 2 커밋 `6432d4ca`:** 9곳, 헤드라인 9건 대조. 도구 커밋 `4a092f2b`: probe 종료 수정, probe-keyboard-states.mjs 추가. 오늘 KR 심화 누계는 22곳이다.
- **GitHub Actions:** 공개 레포라 사용량 문제는 없다. 매일 실패하던 Quality 스케줄은 js-yaml 빌드 오류 때문이었고 abf37284·436da615로 수정했다(main 이후 2회 통과). 내일 09:17 KST 스케줄로 재확인한다.
- **완료 — npm 2.0.2 공개 (22:59).**
  - 오너가 npmjs.com에 Trusted Publisher를 등록했다(kwakseongjae/oh-my-design · release.yml).
  - v2.0.2 태그를 main `0a041e32`로 옮겼다 → CI publish 성공, latest=2.0.2, provenance(SLSA v1) 확인. 레지스트리 반영에 약 9분 걸렸다.
  - 예전 NPM_TOKEN 시크릿·토큰은 오너가 정리하면 된다(선택).
- **완료 — 쇼케이스 웨이브 3 (23:10).**
  - 커밋 `f57bf602`.
  - 번들 6곳: catchtable 5→17, kbank 1→10, miricanvas 0→14, shinhancard 2→15, shinhanbank 0→11, naverwebtoon 3→11.
  - 재측정 3곳: kakao 6→10, samsung 1→11(작성자 focus 2px dotted #000, 4/5), naver 8→15(로그인 CTA #03a94d 정정).
  - Kakao 테스트 핀 6→10.
  - **오늘 KR 심화 누계 31곳**(파일럿 2 + 웨이브 1 11 + 웨이브 2 9 + 웨이브 3 9).
  - 쇼케이스 기준을 채운 곳은 아직 0이다: kakao·naver는 focus가 대부분 브라우저 기본이라 기준 해석이 필요하다(오너 결정).
- **결정 (23:15).** 웨이브 1~3을 main에 반영한다. 쇼케이스 '측정됨'에 브라우저 기본 focus와 확인된 무변화를 포함한다(견본에는 솔직하게 표시).
- **표적 재측정 B (23:10).** banksalad(focus 표시 없음 6/6, CTA ::after 0→0.04), yeogiotte(작성자 focus 1px #243b52 2개, hover #1d8bff→#006ce0), 29cm(더보기 DESIGN.md 정확 일치, focus 두 방식: 브라우저 기본 3 / #375fff 2). 보고서는 `docs/research/2026-09-29-growth/s2-probe-*.md`. 다음: 3곳 저작.
- **완료 — 프로덕션 반영 (23:17, 오너 GO).**
  - main을 origin/main과 병합(`7ee71a49`, 충돌은 llms-full 하나 → 재생성)한 뒤 main을 fast-forward했다.
  - 사전 검증: CLI lint·build, web tsc·1060 테스트, next build 1,717페이지, check-counts, llms가 통과했다. CLI 테스트 2건은 미커밋 `skills/hangul/` 때문이었고, 빼고 돌리면 84/84 통과했다.
  - 라이브 확인: coupang 페이지 #4285f4, karrot #e14d00 반영. /·/builder·배민 글·samsung 200.
  - **후속 확인 필요:** /builder?step=customize&ref=karrot가 Intro(1/10)로 열린다 — 카탈로그 CTA의 딥링크가 customize로 가지 않는 것으로 보인다(오늘 변경과 무관, 기존 동작일 수 있음).
  - **/hangul 통합 시 함께:** doctor 제품 스킬 목록 테스트, install-skills cursor 27개 핀, 스킬 수 가드(28→29)를 같이 갱신해야 한다.
- **완료 — 쇼케이스 웨이브 4 (23:58).**
  - 커밋 `fa7cc640`(feature 브랜치만, main 반영은 오너 GO 필요).
  - banksalad 4→10: 6개 완전 측정, 키보드 focus 표시 없음.
  - yeogiotte 5→12: 작성자 focus 1px #243b52. 7월 results 표면이 Cloudflare 차단 페이지였던 것을 정정했다.
  - 29cm 5→12: 작성자 focus #375fff, 9/17 오독 정정.
  - **쇼케이스 기준 충족(오너 정의)은 banksalad·yeogiotte, 29cm는 경계**(수량 입력의 pressed를 셀 때 5).
  - 오늘 KR 심화 누계는 34곳이다.
  - 주의: 자동 품질 스크립트는 산문으로 적은 '측정된 무변화'를 세지 않아 banksalad를 2로 읽는다. 쇼케이스 배지를 자동화하려면 셈 규칙을 추가해야 한다.
- **완료 — /hangul 평가 (00:10, 9/30).**
  - 보고서: `docs/research/2026-09-29-growth/hangul-eval-results.md`, 원자료는 `raw/hangul-eval/`.
  - **스킬 없이 18회 중 17회가 한글 타이포 규칙을 어겼다(BLOCK 또는 WARN). /hangul 적용 시 18회 모두 BLOCK·WARN 0.**
  - Codex(gpt-6-astra medium): A는 9/9 BLOCK(HG-7 제목 자간 −0.06em ×16), B는 0/9.
  - Claude(Sonnet): A는 BLOCK 3/9·WARN 8/9(HG-6 본문 음수 자간 ×14, break-all ×2), B는 0/9.
  - 주의: 체커는 스킬 규칙을 검사하고, B는 스킬을 명시 지시했다.
- **다음 큐 (9/30~).**
  1. README용 전후 스크린샷: 서로 다른 생성물 비교(Codex p1-A-r3 vs p1-B-r1, `raw/hangul-eval/screens/`)는 카피가 달라 약하다. 같은 페이지(p1-A-r3)에 /hangul APPLY로 고친 전후를 만든다. 전 h1: −3.3px@60px(−0.055em)·Arial 우선 / 후 기대치: −0.03em·Pretendard·keep-all.
  2. /hangul 통합: package files, D3 internal 플래그, doctor·install-skills 테스트, 스킬 수 28→29, README 색인. 공개(main)와 W1 런칭 게시는 오너 몫.
  3. 웨이브 4(banksalad·yeogiotte·29cm) main 반영 — 오너 GO.
  4. 상위 20 남은 12곳(socar, wanted, tossbank, kakaobank, hyundaicard, likelion, ohouse, channeltalk, zigzag, ably, upstage, remember): 프로브 → 저작.
  5. 번들 심화 남은 19곳(sktelecom, nhn, class101, dabang, brandi, inflearn, kmong, jandi, makinarocks, 11st, classum, kb-kookmin, wooribank, lotteon, cgv, kakaogames, megabox, soop, onestore).
  6. 후속: ~~builder 딥링크~~·~~동의 배너~~(9/30 오탐 종료), staged Core v2 baemin 재이관, check-claims 상태값 grounding, 쇼케이스 배지 셈 규칙(도구 재측정 뒤).
  7. 9/30 09:17 KST Quality 스케줄 결과 확인(01:13 기준 main 최근 4회 전부 성공).
- **결정 (9/30 00:35).** 웨이브 4를 사이트에 반영한다. /hangul 공개는 바이럴 수준의 시각 콘텐츠(모션그래픽·스크린샷)가 준비된 뒤다 → 콘텐츠 레인을 새로 둔다: 같은 페이지 전후, omd-showcase 비교 영상, 실측 67곳 데이터 카드.
- **완료 — 웨이브 4 사이트 반영 (00:40).** main `79281e16`. 라이브 확인: yeogiotte #243b52, 29cm #375fff 반영, banksalad·/·/builder 200.
- **완료 — /hangul 통합 (브랜치 보관).**
  - 커밋 `4b14743d`(origin `feat/hangul-skill`). 공개 스킬 4개(hangul, omd-feel, omd-apply, omd-init)이고 나머지는 metadata.internal로 숨겼다. 스킬 수 28→29, 커서 27→28. 모든 검사 통과.
  - 오너 결정(바이럴급 시각 콘텐츠 준비 후 공개)에 따라 codex/track-foundation에는 아직 합치지 않는다.
  - 남은 질문: omd-apply 중복 행, 기존 40행 삭제 요청(오너), ego-browser·google-analytics 외부 스킬 처리(오너).
- **완료 — 웨이브 5 (01:06).**
  - 커밋 `4dba6b39`(브랜치). sktelecom 4→11, nhn 1→10, class101 1→11, dabang 4→16, brandi 1→12, inflearn 5→20.
  - 헤드라인 6건 대조. 알파 단계 상태(0.1→0.12 등, 형제 전원 일치)는 flex·coinone 선례로 채택했다.
  - **오늘 KR 심화 누계 40곳**(사이트 반영 34곳, 브랜치 6곳).
- **완료 — 프로브 D (01:10).** kakaobank 6·hyundaicard 6·likelion 5 컨트롤. kakaobank 7월 pressed #141414·focus #131313은 전환 중간 프레임이었다(안착 #444444). 포커스는 전원 `2px solid #007bff`. hyundaicard 카드 hover가 부모 li를 −12px 올린다. likelion은 선언된 검색 입력창이 사라졌고 포커스 링이 없다. → 저작 레인 시작.
- **완료 — 프로브 C (01:14).** socar hover 5·pressed 5·focus 4/6(search-action 비활성). wanted 6/6/6(버튼 hover·pressed가 빈 자식 레이어 opacity로 칠해짐 0.0375/0.09). tossbank 6/6/6. → 저작 레인 시작.
- **⚠ 발견 — 프로브 도구 사각지대 (01:14).**
  - 증상: `probe-keyboard-states.mjs`가 (a) 빈 자식 요소, (b) 자손의 outline, (c) tabIndex<0 컨트롤을 비교하지 않는다. (d) 비활성 컨트롤의 hover를 측정으로 읽는다. (e) 포커스에 반응하는 페이지에서 Tab 순회가 일찍 끝난다.
  - 영향: 프로브 기반 "변화 없음"·"포커스 링 없음" 주장이 틀렸을 수 있다. 이미 **사이트에 나간 8곳**(29cm, baemin, banksalad, karrot, kakao, naver, samsung, yeogiotte)이 해당한다. 긍정 판독(변화·링 있음)은 영향이 없다.
  - 조치: 도구 수정 + 라이브 회귀(wanted·tossbank·socar·hyundaicard·kakaobank 음성 대조) → 고친 도구로 8곳 + likelion·kakaobank service-tab의 부재 주장 재측정 → 뒤집힌 것은 정정해 사이트에 다시 반영한다. 남은 상위 20(ohouse, channeltalk, zigzag, ably, upstage, remember)은 고친 도구로 잰다.
- **종료 — 후속 2건은 오탐 (01:40).**
  - builder 딥링크: `/builder?step=customize&ref=<id>`는 정상으로 Customize에 도착한다. "Intro 1/10"은 Customize 마법사(`design-wizard.tsx` STEP_LABELS 10단계)의 첫 단계다. 다만 IntroStep은 고른 레퍼런스를 보여주지 않는다 — 카탈로그에서 온 방문자 맥락이 끊기는지는 제품 판단(오너)으로 남긴다.
  - 동의 배너: 로캘을 `/docs/<locale>/` 경로에서만 고르고 그 밖은 영어다(`analytics-consent.tsx:54`). 페이지 자체가 영어(`lang="en"`)이므로 결함이 아니다. 홈 한국어화를 결정할 때 함께 처리한다. GA는 라이브에서 여전히 로드된다(G-5XCHN3NJXC). "죽었다"는 것은 우리 조회 API이고 수집은 살아 있으므로 고지 내용은 정확하다.
- **검토 — /hangul 콘텐츠 1차 이미지 (01:50).**
  - 깨끗하지만 바이럴 수준은 아니다. 보통 크기에서는 −0.055em→−0.03em과 글꼴 교체 차이가 너무 미세하다.
  - **After 이미지가 HG-8을 스스로 어긴다.** 390px 푸터에서 "생/활", "예시입니/다"가 단어 중간에서 끊긴다(캡션 크기를 키워 줄바꿈이 생겼다). check.mjs는 통과했다 → **렌더 기준 줄바꿈 검사가 없는 체커 공백이다. /hangul 공개 전에 막아야 한다.**
  - 번호 마커가 글자를 가린다.
  - 에이전트에 보낸 지시: 수정, 렌더 단어 절단 검사, A/B 깜빡임 모션, 비디자이너도 보이는 오류(390px 단어 절단, 숫자 혼합 글꼴)를 앞에 배치.
- **완료 — 저작 D (02:05, 미커밋).**
  - 컴포넌트 증가: kakaobank 5→10, hyundaicard 1→11(본문엔 3개가 있었다), likelion 3→11(`/catalog` 표면 추가).
  - check-claims 전원 통과, verify 27/27.
  - 헤드라인 직접 대조:
    - kakaobank hover 전환 프레임: 363ms에 rgb(20,20,20), 596ms에 #444444로 안착.
    - hyundaicard 링: home `auto 2px off -3px` ×12, corp `auto 1px off 1px` ×6.
    - likelion 입력창: 두 표면 모두 0개.
  - **세 곳 모두 부재 판독을 셀 때만 기준을 넘는다.** 긍정 판독만 세면 kakaobank 4, hyundaicard 2, likelion 0이다. 부재 의존 줄 목록은 에이전트 보고에 있다. 재측정 결과로 최종 판정한다.
- **완료 — 프로브 도구 수정 (02:15, `b6f7370b`).**
  - 고친 것: 빈 자식 레이어·자손 링·tabIndex<0·비활성 판별·Tab 안착 대기.
  - 모든 판독이 비교 범위(`compared`)와 판정(`verdict`)을 싣는다. 값이 아직 움직이면 "NO SETTLED CHANGE"(=미측정)로 적는다.
  - 라이브 회귀 5건 PASS. kakaobank 음성 대조군은 6상태 모두 이전과 같다.
  - 새로 보인 실제 변화 3건:
    - wanted mini-job-card hover: 북마크가 나타난다.
    - hyundaicard nav-card: 헤더 그림자가 사라진다.
    - socar floating-control: home에서는 inert다.
  - PROBE_BRIEF를 새 도구 기준으로 갱신했다.
  - 한계: 캔버스·SVG `<use>`·형제 요소는 판독 범위 밖이다.
- **진행 중 — 부재 재측정.**
  - R1: banksalad·29cm·yeogiotte. 기존 cfg로 재실행 → `reverify-r1.md`.
  - R2: baemin·karrot·kakao·naver·samsung. cfg를 새로 만들어 재실행 → `reverify-r2.md`.
  - R3: 저작 C·D 6곳, 02:35 시작 → `reverify-r3.md`. 이미 있는 도구 수정 실행분(tool-fix-*.json)을 재사용한다.
- **완료 — 저작 C (02:30, 미커밋).**
  - 컴포넌트: socar 4→11, wanted 6→12, tossbank 2→12(서로 다른 유형은 11).
  - 쇼케이스 기준: wanted·tossbank 충족(6), socar 미달(4 — 비활성 1, 포커스 미측정 2).
  - 헤드라인 원자료 대조:
    - socar pressed `matrix(0.92…)`와 `rgba(242,243,248,0.66)` 베일 — 두 번 로드해 각 3회.
    - tossbank 틴트 `rgba(217,217,255,0.11)` — 두 번 로드해 각 11회.
    - wanted 레이어 0.0375/0.09/0.075/0.18 — tool-fix 실행분.
  - 7월 정정:
    - socar CTA: 12px → 14px, 패딩 16px 22px, `#0078ff`.
    - wanted: "border inset" → inset shadow. "채운 CTA 없음"은 반증됐다.
    - tossbank: pill 배경 알파 누락(`#fdfdfe` → `rgba(253,253,254,0.89)`).
  - 부재 의존 줄 목록은 `reverify-absence-lines.md`에 있다.
  - 도구 공백: `append-components.mjs`가 focus 필드에서 멈춘다(에이전트는 사본 append2로 우회했다) → 헬퍼에 반영할 후속 작업이다.
- **완료 — 웨이브 6 a·b·c (02:40, 미커밋, 번들만 사용).**
  - 컴포넌트 증가:
    - a: 11st 4→13, classum 5→14, lotteon 4→15, kmong 6→16
    - b: jandi 2→13, makinarocks 1→14, kb-kookmin 3→16
    - c: cgv 4→16, wooribank 1→13, megabox 1→13
  - 확인: 전원 check-claims·27/27 통과. 헤드라인 12건을 번들과 직접 대조해 모두 일치했다(cgv 선택 탭·예매 버튼, jandi CTA, megabox 선택 탭·예매 링크, wooribank current 링크, kb 선택 탭, makinarocks 탭, 11st hover #ff0038 ×3, lotteon #000000 ×21).
  - 11st 후속 처리(메인):
    - 번들 포커스로 적힌 search focus `#111111`을 철회했다. 번들 포커스 금지 규칙에 따른 것이다. pressed는 두 경로가 일치하고 기본 잉크와 같아 유지한다.
    - 카테고리 URL은 캡처가 오류 페이지였으므로, Tier 1 목록과 레이아웃 문구에서 "제품 카테고리"라는 표현을 정정했다.
  - makinarocks 키 개명(disabled-home-control → carousel-arrow-button)은 파이프라인에서 반영한다.
  - 도구 공백: `apply-edits.mjs`에서 빈 `@@@NEW` 블록이 다음 블록을 삼킨다. 6d가 끝난 뒤 헬퍼 2건(이것과 append focus)을 고친다.
- **완료 — 웨이브 6d + 19곳 브랜치 커밋 (03:05, `cf59d446`).**
  - 6d 결과: kakaogames 2→10, soop 1→16, onestore 2→10.
  - onestore 개발자 포털 버튼·입력은 스타일시트 없이 렌더된 페이지의 브라우저 기본값(body Times, #efefef, Arial 13.33px)이었다. 그래서 메인 세션이 토큰과 컴포넌트에서 철회했다(→8).
  - 파이프라인 통과: 웹 테스트 1060건, check-counts, tsc.
- **완료 — 부재 재측정 (03:10).** 표기: 확인 / 뒤집힘.
  - **사이트 8곳: 확인 198 / 뒤집힘 22.**
    - banksalad 36/0, 29cm 30/0, baemin 27/0, kakao 32/0, samsung 16/0.
    - yeogiotte 16/3: 도구 문제가 아니라 문구가 자기 데이터와 모순됐다("모든 컨트롤 hover=pressed"인데 검색 필드는 다르다).
    - karrot 23/5: 가구 카테고리 링크의 라벨 오버레이 `#eeeff1`이 hover 0.32, pressed 0.48.
    - naver 18/14: AI 검색 버튼의 빈 레이어 7개(글로우·그라데이션·라벨 이미지 교체), 뉴스 바로가기의 스프라이트 위치 이동.
  - **브랜치 6곳: 128/0.**
  - 쇼케이스 기준: 전원 유지. socar는 여전히 미달이다.
  - 새 긍정 판독:
    - samsung 제품 타일: hover·focus에 구매하기 줄이 나타난다.
    - samsung GNB: hover에 메가메뉴가 열린다.
    - 29cm BEST 이미지 링크: 안의 44px 버튼에 `#375fff` 링.
    - hyundaicard: 헤더 그림자가 사라진다.
  - **남은 도구 공백:**
    - 스프라이트 위치(background-position/size), `<img>` src, SVG `<use>`·path는 비교하지 않는다(naver 뉴스는 임시 스크립트로 찾았다).
    - Tab 순회 중 inert를 다시 확인하지 않는다(socar floating-control).
  - 정정 반영 상태: yeogiotte·hyundaicard·wanted는 메인이 작업 트리에서 고쳤다(미커밋). karrot·naver·samsung은 정정 레인에서 고친다.
  - 보고서: `reverify-r1/r2/r3.md`.
- **완료 — /hangul 시각 콘텐츠 v1 (03:00, `docs/research/2026-09-29-growth/hangul-content/`, 12MB 로컬).**
  - 결과물:
    - 같은 페이지 전후(390/1440)
    - 4컷 "AI가 한국어를 영어처럼 조판한다" — HG-10 단어 중간 절단 "있어/요.", HG-1 숫자 Arial+한글 혼합, HG-7 자간, HG-3 8px 캡션
    - 스크롤 비교 영상
    - 헤드라인 깜빡임 영상
    - 67곳 실측 데이터 카드
  - 1차 결함 2건은 고쳤다. 렌더 단어 절단 검사도 추가해 모든 After가 통과한다.
  - **메인 판단:** 4컷(특히 HG-10)과 데이터 카드는 공유할 만하다. 전후 비교와 깜빡임은 차이가 미세해 보조 자료다. 표지는 깜빡임보다 HG-10 단어 절단이 낫다.
  - 약점:
    - 예시 4개가 전부 Codex이고, 그중 3개가 한 페이지에서 나왔다.
    - macOS 렌더만 있다.
    - 실제 break-all·가짜 이탤릭 사례가 없다.
  - **평가 수치 점검:** eval의 가짜 양성(HG-11 이탤릭 3, HG-8 URL 박스 2)을 빼도 A팔 "18번 중 17번 경고 이상"은 유지된다. 다만 BLOCK은 10/18이다. HG-7은 OmD가 실측에서 도출한 규칙이므로, 문구는 "어겼다"보다 "한국 서비스 67곳 실측 기준을 벗어났다"가 정확하다.
  - **공개 전 스킬 보완 (진행 중, feat/hangul-skill 워크트리):**
    - check.mjs 정밀도 — HG-11·HG-8·HG-7이 한글 요소에만 적용되게 한다.
    - 선택형 렌더 검사 `render-check.mjs` 추가.
    - 저장된 eval 산출물 재채점.
    - 이어서 콘텐츠 v2: Claude 예시 추가, 훅 문구, 표지 교체.
- **완료 — 라이브 정정 + 재측정 근거 (03:35, `7a3a703a`).**
  - karrot: 가구 링크 오버레이 0.32/0.48. 원자료와 대조했고, 0.24/0.36은 About us 버튼 값으로 이미 기재돼 있다.
  - naver: AI 검색 레이어 7개, 뉴스 스프라이트 이동.
  - samsung: 구매하기 줄 나타남, 메가메뉴.
  - yeogiotte: 문구 3건 정정.
  - hyundaicard: 헤더 그림자. wanted: 근거 문구 갱신.
  - 14곳 `.verification.md`에 "고친 도구로 부재 N건 확인, M건 정정" 한 줄을 넣었다.
  - naver AI 라벨 이미지명 `…highlight.png`는 원자료가 `.pn`에서 잘렸다. `.verification.md`에 명시했다.
  - 파이프라인 통과: 웹 테스트 1060건.
  - 기록하지 않은 새 판독 3건(후속): baemin Google Play 무변화, 29cm 내부 버튼 `#375fff` 링, yeogiotte 사진 박스 `rgba(0,0,0,0.16)`.
- **사이트 반영 패키지 준비됨 (브랜치 `codex/track-foundation`, 오너 GO 대기).**
  - 웨이브 5: `4dba6b39`, 6곳
  - 오늘 19곳: `cf59d446`
  - 라이브 정정 4곳 + 근거 14곳: `7a3a703a`
  - 프리뷰 배포 확인 중.
- **반영 전 확인 (03:50).**
  - Vercel 프리뷰는 인증 보호(302)라 외부에서 확인할 수 없다. 대신 로컬 `next dev`로 확인했다.
  - 카탈로그: tossbank 신규 컴포넌트·틴트, onestore 개발자 컴포넌트 0건, naver 정정분이 모두 렌더된다.
  - builder: Home→/builder→검색→토스뱅크 카드→preview 이동이 정상이다.
  - 발견해서 고친 것(`2b16cf7d`): Evidence 요약 줄이 레지스트리 `verified`(07-13)를 쓰고 펼친 칸은 `checkedAt`(09-29)을 썼다. 둘 다 `checkedAt` 우선으로 맞췄다. tsc와 컴포넌트 테스트 통과.
- **완료 — 프로브 도구 2차 (`662f5653`).**
  - 스프라이트(background-position/size/repeat, 전체 background-image), img src/srcset, SVG(fill/stroke 속성, path d, use href, 그라데이션 stop), Tab 도착 시 inert 재확인.
  - 회귀 5건 PASS: naver 뉴스 스프라이트 검출, socar 맨 위로 포커스 측정. 음성 대조군 30상태는 이전과 같다.
- **완료 — /hangul 체커 정밀도 (`feat/hangul-skill` `4c82f86c`).**
  - HG-11·HG-8·HG-7은 한글을 담은 요소에만 적용한다(추적 불가면 기존 심각도 유지).
  - `render-check.mjs`(선택형 렌더 단어 절단 검사)를 추가했다. install-skills·doctor 테스트 84건 통과.
  - 재채점(36회 전부 재현):
    - Codex A: 9/9 유지.
    - Claude A: BLOCK 3→1/9, 경고 이상 8/9 유지.
    - B 두 팔: 0.
  - "17/18 → 0/18"은 유지된다. Claude는 WARN 수준 근거다.
  - 남은 가짜 양성 HG-1·HG-6(라틴 요소)을 수정하는 레인이 진행 중이다. 재채점 결과가 공개 문구를 좌우한다.
- **완료 — 프로브 E1·E2 (05:00~07:00).** 상태 3종 측정 수:
  - ohouse 6/6: 포커스를 box-shadow로 그린다. #ddf3ff 3px, #69c3fd 4px.
  - channeltalk 5/7: 선언된 hover `#3a3a3f`는 히어로가 아니라 헤더 링크 값이다. 히어로는 opacity 0.85.
  - zigzag 6/10: 포커스 표시가 없다.
  - ably 9/9, upstage 6/7, remember 8/8.
- **완료 — 저작 E2 (`119895be`).**
  - ably 6→11: 서피스별 hover 핑크 #db3b57 / #bf3c47. 포커스는 브라우저 기본 또는 없음.
  - upstage 1→12: 요금 카드 hover 테두리 #525866과 그림자.
  - remember 2→11: 레이어 opacity 0.1/0.2가 버튼과 같은 색이라 산술상 보이지 않는다. 검정 2px 포커스 링.
  - 세 곳 모두 쇼케이스 기준을 충족한다. 헤드라인을 원자료와 대조했다(×6, ×22, ×9). 파이프라인 통과.
- **완료 — 도구 (`43a2fc33`).**
  - 프로브 동의 거부 목록에 `#reject-all`·"Decline"을 넣었다(upstage 배너).
  - apply-edits 빈 블록 버그를 고치고 개수 검사를 추가했다.
  - append-components가 focus를 받는다.
- **완료 — /hangul (`feat/hangul-skill`).**
  - `50bee2e4`: HG-1·HG-6도 한글 요소에만 적용한다. 2차 재채점 결과, 경고 이상은 17/18→0/18로 유지된다. **BLOCK만 세면 10/18→0/18.** Claude 8/9는 전부 WARN이고, 그중 3회는 −0.01em 하나뿐이다. 공개 문구에는 "BLOCK 또는 WARN"을 명시한다.
  - `c6cd774b`: `.claude/skills/hangul` 미러를 재동기화했다. prepublishOnly의 mirror 검사를 통과한다.
- **완료 — /hangul 콘텐츠 v2 (07:55, `hangul-content/v2-*`).**
  - `v2-cover.png`: "'있어요'가 두 줄로 갈렸습니다". Codex p1-A-r3를 360px에서 3× 배율로 캡처했다. After는 CSS 한 줄이고 render-check를 통과한다.
  - `v2-eval-card.png`: 경고 이상 17→0, BLOCK 10→0, 채널별 수치, 한계를 카드에 인쇄했다.
  - `v2-4up.png`: "Codex 예시"로 표기했다.
  - **Claude 예시는 없다.** Claude 무스킬 9회는 모두 keep-all을 스스로 넣었고 렌더 단어 절단이 0이다. 경고도 전부 −0.01/−0.02em이라 눈으로 구별되지 않는다. → 이야기는 사실상 "Codex는 한국어를 영어처럼 조판한다"다.
  - 훅 3안(`v2-NOTES.md`). 권장 H2는 숫자 없이 표지와 짝을 이룬다. 첫 댓글에 한계 4개(456자)를 단다.
  - **메인 판단:** 표지와 평가 카드 2장은 공개할 만하다. 4컷·깜빡임은 폰에서 약하다. "사람들이모아와" 띄어쓰기 누락은 원본 마크업 그대로다(지적받을 수 있다).
  - 부족한 것: Windows·Android 렌더, 한국 타이포그래퍼 검토, 스킬 쪽 렌더 검사, 독립 재현.
- **완료 — 저작 E1 (`814d11eb`).**
  - ohouse 1→10: 포커스를 box-shadow로 그린다. 링 #ddf3ff ×7, #69c3fd ×3.
  - channeltalk 5→12: `#3a3a3f`(×6)를 헤더 링크로 이관했다. 히어로는 opacity 0.85(×2).
  - zigzag 4→12: 범위 명시 포커스 무변화.
  - 세 곳 모두 쇼케이스 기준을 충족한다. channeltalk 탭은 선택 탭의 포커스로만 센 것이다(롤링 tabindex 패턴이라 채택). 파이프라인 통과.
- **상위 20 재측정·저작 완료 (08:10).** 20곳 중 19곳이 쇼케이스 기준을 충족하고 socar만 미달(4)이다.
- **사이트 반영 패키지 (브랜치 `codex/track-foundation`, 오너 GO 대기).**
  - 웨이브 5: 6곳, `4dba6b39`
  - 오늘 심화: 19곳 `cf59d446`, E2 3곳 `119895be`, E1 3곳 `814d11eb`
  - 라이브 정정: 4곳(yeogiotte·karrot·naver·samsung) + 근거 14곳, `7a3a703a`
  - Evidence 날짜 표시 수정: `2b16cf7d`
  - 도구·상태 커밋: 사이트 영향 없음
- **/hangul 공개 판단 자료:** `feat/hangul-skill` `c6cd774b`(체커 정밀도·렌더 검사·미러 동기화), 콘텐츠 v2의 표지와 평가 카드.
- **결정 (08:15, 오너).**
  - 사이트 반영 GO(31곳 + 라이브 정정 4곳).
  - /hangul은 보강 후 공개: Windows·Android 렌더, 최종 점검, 타이포그래퍼 검토는 오너 주선.
  - 다음 레인은 KR partial 100 측정.
- **완료 — 사이트 반영 (08:35).**
  - main `694b0d74`. 결정 기록 커밋을 main에 먼저 푸시해서, 프리뷰로 빌드된 적 없는 SHA가 프로덕션 배포를 타게 했다. Vercel 프로덕션 배포 6747559933 성공.
  - 라이브 확인:
    - 8개 경로 200.
    - tossbank 새 컴포넌트, ohouse `#ddf3ff` 링, naver 스프라이트 정정, karrot 오버레이 0.32, yeogiotte 문구 정정 모두 보인다.
    - onestore 개발자 컴포넌트는 0건이다.
- **KR partial 100 착수 준비.**
  - 대상 100곳 모두 `verification_v2_missing`이다. 빌더 선택 수 합계 9,587. 상위 10곳: naverpay 468, nexon 317, lemonbase 271, hana 244, hwahae 243, goorm 240, kia 238, wrtn 221, furiosaai 207, imweb 196.
  - 도구: 7월 파이프라인 `npm --prefix web run capture:reference -- <id> [--routes a,b]`로 번들을 캡처한다. `--max-routes`나 `config/reference-capture-routes.json`로 경로를 정할 수 있다. 7월 사전 조건: 표면 2곳 이상, coverage 60 이상, 컴포넌트 1개 이상.
  - 파일럿 발견: naverpay 홈(`new.pay.naver.com`)은 비로그인 방문자를 로그인으로 보낸다. 캡처 정책이 로그인 표면을 거부해 표면이 0개였다(빈 번들은 삭제했다). → 레퍼런스마다 로그인 없는 공개 표면을 먼저 찾아야 한다.
- **진행 중 (08:45).**
  - KR partial 파일럿 P1(에이전트 3개): naverpay·nexon / lemonbase·hana / hwahae·goorm. 공개 표면 찾기 → 캡처(사전 조건 표면 2·coverage 60·컴포넌트 1) → 공식 근거·국내 출처 2개 이상 → verification_v2 + Proof 저작. 사전 조건에 못 미치면 보류한다.
  - /hangul 보강: GitHub Actions 임시 브랜치 `ci/hangul-render-check`에서 Windows(맑은 고딕)와 Ubuntu+Noto CJK(Android 대용) 렌더로 표지의 "있어/요." 절단을 확인한다. 이 맥에는 맑은 고딕이 없다. 임시 브랜치는 끝나면 지운다.
- **장애 (08:50~15:00).** 새로 띄운 에이전트 4개(파일럿 3개 + CI 렌더)가 거의 동시에 "진행 없음 600초"로 멈췄고, 인프라 스트림 장애로 판단한다. 디스크에 남은 것은 없다(번들·편집·`ci/*` 브랜치 없음). 15:00에 네 개를 모두 이어서 재개했다. 그사이 9/30 정기 Quality 실행(05:28Z)은 성공했다.
- **완료 — 파일럿 P1b (15:30, 미커밋).** lemonbase·hana → Verified v2(27/27).
  - lemonbase: 6월 이후 개편됐다. 캔버스 `#111111`, 주요 버튼은 전부 흰색 + `#1a2128` 라벨. 그래서 `primary_color`를 `#328af6`→`#ffffff`로 바꿨다. 파랑은 작은 문단 5곳 글자색으로만 남았다(번들 5회). **흰색 primary는 카탈로그 최초라 커밋 전에 builder·카드 표시를 확인한다.** 첫 캡처는 coverage 58이라 표면을 바꿔 87로 재캡처했다.
  - hana(하나은행 kebhana.com): 브랜드 틸 `#008485`(111회). 옛 `#00a39f`는 0회라 교체했다. 하나금융그룹 사이트 값은 다른 도메인이라 제거했다. 연혁 날짜가 빠져 있다(후속).
- **완료 — 파일럿 P1a (15:40, 미커밋).** naverpay·nexon → Verified v2(27/27).
  - naverpay:
    - 홈과 소개·혜택 페이지가 전부 로그인으로 리다이렉트된다. 그래서 개발자센터(`developers.pay.naver.com` 홈과 `/design/bridge` 가이드) + 네이버파이낸셜 회사 사이트(별도 도메인, `corporate-` 토큰)로 캡처했다(coverage 95).
    - 현재 페이지 초록 `#09aa5c`는 가이드가 "Green 500"이라 표기한 값과 같다.
    - 6월 컴포넌트 11개는 가맹점센터·스펙에서 유래한 것이라 실측 10개로 교체했다.
  - **nexon: 6월 대표색 초록 `#00de5a`는 포털의 `a.naver-login-btn`("네이버 로그인")이었다.**
    - 실측 포털 강조색 `#0077ff`로 바꿨다. 형제 nav 아이콘 4개의 hover·press가 근거다.
    - 서체: `NEXON Gothic`(로드됨), identity `KlavikaNX`(가이드 명시, 유료 전용).
    - 근거 없는 창업자·상장 문구는 뺐다.
    - 국가: © NEXON Korea. 상장 모회사는 도쿄, 최종 지주 NXC는 한국이라 KR을 유지한다.
  - 커밋 때 할 일:
    - evidence-integrity 모션 고정값 261을 실제 감소분으로 내린다. 테스트 주석이 "재작성으로만 내려간다"고 한 의도대로다.
    - local-store 매니페스트를 갱신하고 iCloud 백업을 한다.
    - `config/reference-capture-routes.json`에 파일럿 경로를 등록한다(naverpay 로그인 우회 경로).
- **완료 — KR partial 파일럿 6/6 (15:50, `24eb1a17`).**
  - 대상: naverpay·nexon·lemonbase·hana·hwahae·goorm → Verified v2. 합계 227→233.
  - 모션 고정값 261→255(허위 모션 표 제거분).
  - 캡처 도구의 동의 수락 클릭을 거부로 바꿨다(`4e5edf62`). 파일럿 경로는 routes config에 등록했다.
  - 번들 6개: 매니페스트와 iCloud 백업(`a7ea3da4`).
  - builder 확인: 레몬베이스 카드→preview 정상. H1을 "— Design Reference"로 바꾼 탓에 렌더러가 "Reference Reference"를 만들던 문제는 규칙("# Design System Inspiration of X")으로 되돌렸다.
- **완료 — /hangul 교차 플랫폼 렌더 (15:45, CI run 36678418179).**
  - Windows(맑은 고딕): 390·412px에서 끊긴다. Android 대용(Noto CJK): 360px에서 "있/어요."로 끊긴다. macOS: 360px에서만 끊긴다.
  - CSS 한 줄로 전 플랫폼 해소된다. `v2-cover-android.png`(실기기 아님 표기)를 만들었고 임시 브랜치는 삭제했다.
  - 새 발견: HG-1 After(Pretendard)를 360px로 보면 "+"가 혼자 줄바꿈된다 → 스킬 후속.
- **결정 (16:00, 오너):** primary_color는 제품 화면 실측으로 정하고, 흰·검 카드는 UI에서 보완한다(GROWTH_DECISIONS).
- **완료 — primary_color 규칙 적용 (16:30).**
  - 카드 UI(`05f6b2af`, `card-fill.ts` + 테스트): 흰 primary는 라이트에서, 검정 primary는 다크에서 레퍼런스 캔버스로 보이고, 배지에 primary 스와치를 단다. 라이트·다크 스크린샷으로 확인했다. 레몬베이스는 #111111 타일 + 흰 스와치이고 토스뱅크는 변화가 없다.
  - **hwahae primary `#00d5ce`→`#3d3d3d`** (홈 전폭 다크 버튼, capture 108). 민트는 §2에 로고 자산으로 둔다. 27/27 통과. **작업 트리에 있고, P2 파이프라인과 함께 커밋한다.** P2가 레퍼런스를 고치는 동안에는 전역 파이프라인을 금지한다.
- **진행 중 — KR partial 웨이브 P2 (16:05~, 워크플로 에이전트 6개):** kia·wrtn / furiosaai·imweb / tmap·stayfolio / kakaopage·elice / hyperconnect·ncsoft / modusign·scatterlab.
- **완료 — KR partial 웨이브 P2 (16:50, `988e86a0`).**
  - 11곳 → Verified v2: kia·wrtn·furiosaai·imweb·tmap·stayfolio·kakaopage·hyperconnect·ncsoft·modusign·scatterlab. 합계 233→244.
  - primary 조정(오너 규칙 적용):
    - imweb `#00b9ff`→`#15181e`(잉크가 모든 주 액션을 채움)
    - ncsoft→`#ffffff`, stayfolio→`#000000`(모노톤)
    - hwahae→`#3d3d3d`
    - kakaopage: 노랑 `#ffd618` 복원. CTA 조부모 div가 칠하는데 수집기는 이를 기록하지 못한다. 고친 프로브의 3단계 조상 비교로 입증했다(`raw/kakaopage-states-content.json`).
    - wrtn `#f54211` 유지: 제품의 유일한 채도 액션이고, 브랜드 에이전시가 부르는 "Inspire Red"와 같다.
  - hyperconnect의 알파 색 토큰 2개는 산문으로 옮겼다(레지스트리 빌드가 6자리 hex만 받는다).
  - 모션 고정값 255→245. 경로·매니페스트·iCloud 백업 완료. 대표색 11개가 번들에 있음을 대조했다(kakaopage만 프로브 근거).
  - **elice 보류 원인:** `/ko/ax/lxp` 경로가 수집기를 멈춘다. 홈 + `/ko/cloud/pricing`은 12초에 끝났다(coverage 97) → 단독 에이전트로 재시도 중.
- **실수 — 16:52 P3를 띄우며 스크립트를 고치기 전 P2 스크립트를 재실행.** 즉시 중지했다. 작업 트리 변경 0, 번들 SHA 검증 OK로 피해 없음. 이후 새 스크립트로 P3를 띄웠다.
- **진행 중 — 웨이브 P3 (16:58~, 에이전트 6개):** iicombined·weverse / teamblind·zepeto / 3o3·greeting / liner·heydealer / moreh·payhere / ssg·finda. 그리고 elice 단독.
- **후속(도구):** 수집기에 경로별 타임아웃과 래퍼 채움 기록 추가. P3가 수집기를 쓰는 동안에는 수정하지 않는다.
- **완료 — elice (17:25, 미커밋).**
  - Verified v2(27/27, 206/206). 경로는 홈 + `/ko/cloud/pricing`(→`/ai-cloud`)이고 coverage 97이다.
  - primary `#7353ea`→`#212121`로 판단했다: 모든 페이지의 채움 주 액션이다. 보라는 제품 아이콘 타일 4색 중 하나이자 엘리스클라우드 요금 페이지의 선택 탭·링크일 뿐이라, 브랜드 전체 크롬이 아니다. tmap·hyperconnect처럼 모든 페이지의 nav 선택 상태에 쓰인 유채색과 구분된다.
  - 브랜드 페이지의 Elice Violet은 HEX `#6700e6`인데 RGB 줄은 `#8200e6`이다. 둘이 불일치해서 §2 브랜드 자산으로만 둔다.
  - P3 파이프라인 때 함께 커밋한다.
- **완료 — KR partial 웨이브 P3 + elice (17:30, `6ab81ac0`).**
  - 11곳 → Verified v2: 3o3·elice·finda·heydealer·iicombined·liner·moreh·payhere·teamblind·weverse·zepeto. 합계 244→255.
  - 보류 2곳: ssg(403 봇 차단 — 차단 페이지 번들은 증거 저장소에서 스크래치로 옮김), greeting(Framer 사이트에서 수집기가 두 번 멈춤).
  - 대표색 11개 모두 번들에서 확인했다. 교체한 것:
    - 3o3 `#0c64e6`→`#fbbd41`(홈 CTA 3/5, CSS 일치)
    - teamblind→`#fb5957`(로그인 채움, `--tb-red-red1000`)
    - liner→`#2c783c`
    - payhere→`#0077fe`
    - elice→`#212121`
    - iicombined→`#111111`
    - weverse `#00cbd5`는 로그인 테두리 하나뿐인 가장 얇은 판단이다.
  - **teamblind 국가 KR→US**: 채용 페이지 "미국 실리콘밸리에 본사를 둔 블라인드"(sendbird 선례). **moreh는 오너 확인 대기**: 2021 "미국 본사 법인 설립"이지만 운영은 서울일 수 있어 규칙상 모호하다.
  - 모션 고정값 245→234. 경로·매니페스트·iCloud 완료.
- **오늘 KR partial 누계: 28곳 승격(227→255), 보류 2곳(ssg·greeting).** 남은 KR partial 약 72곳.
- **사이트 반영 대기(브랜치):** 파일럿 6 + P2 11 + P3·elice 11 = 28곳, 흰·검 카드 UI(`05f6b2af`), 수집기 동의 거부(`4e5edf62`). 오너 GO가 필요하다.
- **후속(도구):** 수집기 경로별 타임아웃(elice·greeting 멈춤), 래퍼 채움 기록(kakaopage), 봇 차단 사이트(ssg·gentlemonster 403) 정책.
- **결정 (17:40, 오너).** 사이트 반영 GO(28곳 + 카드 UI + 수집기 동의 거부). moreh는 KR 유지 — 모회사 본사 규칙은 본사가 실제로 해외에서 운영될 때 적용한다(메모리·GROWTH_DECISIONS 기록).
- **반영 진행 (17:45).** main `124ff911`. 커밋을 main에 먼저 푸시해 프로덕션 배포를 걸었고, 배포를 확인하는 중이다.
- **완료 — 사이트 반영 (17:55, main `124ff911`).** Vercel 프로덕션 배포 6755093844 성공. 라이브 확인: 10개 경로 200, kakaopage `#ffd618`·first-episode-cta, nexon 정정, 3o3 `#fbbd41`, teamblind US, moreh KR.
- **⚠ 발견·수정 — builder 그리드 대표색 (`74c98aa1`, 브랜치).**
  - `/api/references`(목록)가 대표색을 토큰 primary → §2 정규식 순으로 읽었다. 정규식은 처음 만나는 hex를 돌려준다. 상세 경로가 쓰는 토큰 brand와 프런트매터 primary_color는 건너뛰었다.
  - 결과: **45곳의 그리드 카드·색상 필터가 상세와 다른 색이었다.** kakao #111111(실제 #fee500), naver #1C1C1C(#03c75a), stripe #414552(#635bff), 11st #FFFFFF(#ff0038). 오래된 결함이다.
  - 수정: 상세의 selectPrimaryColor 순서(primary → brand → primary_color)를 그대로 따른다. 로컬에서 대표색이 있는 432곳 전부 목록=상세를 확인했고(불일치 0), 카드 스크린샷과 웹 테스트 1065건도 통과했다. **사이트 반영은 오너 GO가 필요하다.**
- **완료 — 수집기 시간 제한 (`2d823a78`).** 단계(90초)·경로(300초)·전체(900초) 제한을 둔다. 멈춘 상태 수집 단계만 미측정으로 기록하고 기본 스타일은 살린다. greeting은 100초 만에 표면 3곳을 캡처했지만 coverage 28이라 보류를 유지한다(사유가 정확해졌다). goorm 회귀 테스트는 동일하다.
- **실수 재발·차단 (18:10).** P4를 띄우며 P3 스크립트(쌍 목록이 코드에 고정)에 args를 넘겨 재실행했다. 즉시 중지했고 피해는 0이다. 재발 방지로, args가 없으면 실행을 거부하는 인자 전용 스크립트 `kr-partial-wave`로 교체했다.
- **완료 — 그리드 대표색 수정 사이트 반영 (18:20, main `18ae2f62`).** 오너 GO. 프로덕션 배포 6755494055 성공. 라이브 `/api/references`에서 kakao #fee500, naver #03c75a, stripe #635bff, 11st #ff0038, hwahae #3d3d3d 확인.
- **진행 중 — 웨이브 P4 (18:12~):** 42dot·stibee / kbpay·mildang / kyobobook·tabling / airbridge·protopie / shiftup·dealicious / drdiary·codeit.
- **다음.**
  1. ~~저작 E1~~ (완료).
  2. 오너 GO 대기: 사이트 반영(웨이브 5 + 19곳 + 라이브 정정 4곳 + E2 3곳, 이어서 E1 3곳), /hangul 공개 판단(v2 뒤).
  2. 도구 공백 수정(스프라이트·img·svg·inert) → 남은 상위 20(ohouse, channeltalk, zigzag, ably, upstage, remember) 프로브.
  3. 파이프라인 → 커밋 → 오너 GO 한 번에 요청: 웨이브 5 + 오늘 19곳 + 라이브 정정 4곳(yeogiotte, karrot, naver, samsung). 번들 심화 a(11st·classum·lotteon·kmong)·b(jandi·makinarocks·kb-kookmin)·c(wooribank·cgv·megabox). 대기: 웨이브 6d(kakaogames·soop·onestore).
  - 커밋 규칙: 저작 레인이 동시에 레퍼런스를 고치는 동안 전역 파이프라인을 돌리면 반쯤 쓴 파일이 생성물에 섞인다. 그래서 C·D·웨이브 6이 모두 끝난 뒤 한 번에 파이프라인 → 커밋한다. 재측정·프로브 E 레인은 레퍼런스를 고치지 않는다.
- **다음 (웨이브 2).** 분석 스냅샷 + `/api/active` 확인, 원고 2편 사실 재확인, README·홈 첫 화면, `/hangul` 측정·작성, skills.sh 정리 적용, KR 경로 본작업.
- **오너 몫.** 2.0.2 태그 GO, 블로그 발행 확인, Threads·X 게시, Aphrodite 0.2.x 설치 앱 확인과 stash 폐기 여부.

---

## ⏸ 2026-09-27 · 레퍼런스 확충 중단 → 프로덕션 반영 준비 (521 · 227)

- 오너 지시로 루프 중단. EU5는 deepl·komoot·blinkist·n8n·dailymotion·spendesk·zara 7/16에서 멈춤(mango 측정 중단, withings·idealista·zooplus 보류 — 메모는 scratchpad).
- 릴리스 준비 커밋 `dbde9965`: README 4개 언어·package·CLI quickstart·MCP README·llms 수치를 "500+"로, 번역 README의 스킬 수(27→28, Cursor 26→27) 보정, llms-full 재생성, capture 스킬 미러 동기화, CHANGELOG 2.0.2, 버전 2.0.2.
- GitHub description "500+"로 갱신 완료.
- 검증: CLI build·tsc OK, CLI 테스트는 전체 병렬 실행에서 부하성 타임아웃 2~4건(단독 실행 시 전부 통과), web vitest 1,060 통과, `next build` 성공(521 페이지). web lint 52 errors(배포 경로 아님, main 대비 비교 못 함).
- **오너 결정 2026-09-27**: main fast-forward 병합(15ff0139→3d5e0d0e) 승인·완료, npm은 보류(strict 게이트 유지, 2.0.0 그대로). 같은 SHA가 이미 Preview로 빌드돼 Production 배포가 생성되지 않아, 새 커밋으로 Production 재트리거.
- (이전 기록) **막힘(오너 결정)**: ① main 병합(269커밋, fast-forward 가능, Vercel 자동 배포) ② npm publish — prepublishOnly의 `gate:quality:strict`가 landing 픽스처 3개(generation receipt 없음)로 BLOCKED. *(정정 2026-09-29: 영수증 문제가 아니라 CI에서 픽스처 6개가 모두 MISSING이고, landing 3개는 통합성 FAIL이다 — 위 9/29 절 참고)* 이 브랜치의 4dae1aa0에서 strict로 바뀜. npm 로그인도 오너 필요.

---

## ✅ 2026-09-27 · 루프 회차 58–63 — **EU 웨이브 4 마감 14/16, EU 웨이브 5 4/16** (518 · 224)

- EU4: avanza · trivago 추가(idealista·zooplus 보류). EU5 스카우팅 16/32: deepl · komoot · blinkist · n8n 등재.
- 국가 CZ·RO·BE·CH 추가. 다음: withings → dailymotion → spendesk → zara → mango → bbva → kiwi → emag → odoo → sbb → finnair → sixt.

---

## ✅ 2026-09-27 · 루프 회차 46–57 — **EU 웨이브 4: 12/16** (512 · 218)

- 스카우팅 16/32(50%). 등재: vinted(LT, 오버레이 상태) · vipps(NO, 보라/주황 두 버튼 체계) · lego(DK, --ds 2,178, 사이트 선택창은 응답 안 함).
- 이어서 toogoodtogo(DK) · fever(US, 델라웨어 모회사) · bitpanda(AT). idealista 보류(측정 뒤 403).
- 이어서 ns · epidemicsound · bolt · wetransfer · celonis · ecosia. **교훈: 대조군·회사 사실을 프로브 전에 읽는다**(PROBE_BRIEF) — idealista·wetransfer·zooplus가 프로브 연타 뒤 403.
- 국가 코드 LT·NO·DK·AT·EE 추가. 남음: idealista(차단)·zooplus(재시도)·avanza·trivago(soft 404 확인).

---

## ✅ 2026-09-26 · 루프 회차 43–45 — **ing·booth·coconala, JP6 마감, 가상 요소 스윕 마감** (500 · 206)

- 등재: ing(NL, 도구가 open shadow root 관통) · booth(JP6, pixiv Charcoal) · coconala(JP6, 헤더 중첩 shadow — 오버레이 제거 결함 수정).
- 가상 요소 스윕: 12개 재측정 → 정정 2건(base CTA 흰 ::before 8%, otto Mein Konto ::after 3%/9%), 나머지 일치.
- 다음: EU 웨이브 4 스카우팅 → 보류분(contentful·deezer·glovo·leboncoin) 재시도.
- 쿠키 Accept-all 전환은 오너 확인 대기(현재 거부 유지). `web/scripts/.tmp-survey.mjs`는 임시 파일, 미커밋.
- 오늘 누적 +28 (472→500), verified +28 (178→206). **500건 도달.**

---

## ✅ 2026-09-26 · 루프 회차 39–42 — **EU 웨이브 3: 9/12** (497 · 203)

- 등재: oura(FI — 미국 이전 공지, 재분류 조건 기록) · satispay(IT) · pennylane(FR) · klm(NL).
- 보류: ing(shadow DOM) · contentful(Vercel 429, US 가능성) · deezer(동의층 의심). glovo·leboncoin은 차단.
- 다음 할 일: 도구에 open shadow root 관통 추가(ing·check24 류), 가상 요소 스윕을 본 세션이 직접, JP6 booth·coconala 직접.
- 오늘 누적 +25 (472→497), verified +25 (178→203).

---

## ✅ 2026-09-26 · 루프 회차 34–38 — **EU 웨이브 3, 본 세션 직접 측정** (493 · 199)

- 등재: deutschebahn(DE, DB UX 공개) · storytel(SE) · cabify(ES) · malt(FR, Joy) · payfit(FR, oklch→hex).
- **위임 에이전트 7개(스윕·malt·payfit·storytel·cabify·booth2·coconala2) 1.5~5시간 무응답** → 전부 종료.
  원인 미상(패인이 권한 프롬프트에 걸렸을 가능성). EU 웨이브 3은 본 세션이 범용 survey 스크립트
  (`scratchpad/survey.mjs`) + probe-component-states로 직접 측정 — 건당 ~5분, 안정적.
- leboncoin: DataDome이 헤드리스·Aside 모두 차단 → 보류. glovo 보류(WAF).
- 가상 요소 스윕 미완(에이전트 종료) — 본 세션이 나중에 직접 실행.
- 오늘 누적 +21 (472→493), verified +21 (178→199).

---

## ✅ 2026-09-26 · 루프 회차 31–33 — **EU 웨이브 2 거의 마감** (488 · 194)

- 등재: coolblue(NL, 본 세션 Aside — 동의창 수락 안 함) · typeform(ES, Paper·Ink) · ikea(NL, Skapa `data-skapa` 속성).
- EU 웨이브 2 = 10/12. glovo 보류(WAF 403·색 토큰 0), leboncoin 재프로브 대기.
- **EU 웨이브 3 스카우팅 12/20(60%)**, 1차 프로브 4건 진행. 가상 요소 스윕·booth·coconala 대기.
- 오늘 누적 +16 (472→488), verified +16 (178→194).

---

## ✅ 2026-09-26 · 루프 회차 27–30 — **EU 웨이브 2 계속** (485 · 191)

- 등재: getyourguide(DE, 채용 사이트 'Established Berlin HQ') · alan(FR, Alan Sans OFL) · adyen(NL).
- **소급 스윕 1차(bg-image·밑줄) 정정 5개**: crowdworks 버튼 4(10%/5% 그라디언트 레이어)·bloomandwild Log in(밑줄).
  위임 스윕 '발견' 3건은 다른 요소 → 기각. 교훈: 대상 동일성(기하·rest값)을 본 세션이 재확인.
- **세 번째 사각지대(adyen)**: `::before` 오버레이 hover → 도구에 가상 요소 비교 추가, 2차 스윕 위임 중(34개).
- coolblue: 헤드리스 403(지문 차단) → Aside 후보로 보류. leboncoin 재프로브 대기.
- 진행 중: sweep-pseudo, leboncoin2, booth·coconala(JP6), glovo·typeform·ikea.

---

## ✅ 2026-09-26 · 루프 회차 23–26 — **EU 웨이브 2 진행** (482 · 188)

- 등재: hm(SE, Fabric Design System, 다크 루트) · flixbus(DE, Honeycomb) · klarna(SE) · otto(DE, OTTO Components).
- **프로브 도구 사각지대 2건 수정**: ① hover를 `background-image` 반투명 그라디언트로 그리는 경우(flixbus)와
  밑줄 hover를 "변화 없음"으로 읽음 → bg-image·text-decoration 비교 추가 ② `:focus-visible` 미매칭 focus를
  "변화 없음"으로 찍음 → 못 쟀음. 그 외: shadow root 안 동의 배너 거부, 거부 후 재로드 대기, hover 타임아웃 시 포인터 이동.
- **소급 스윕 위임 중**: 커밋된 verified의 'hover 변화 없음' 39개(23건). 결과 검토 후 정정 예정.
- **위임 프로브가 프라이버시 규칙 없이 Aside를 씀(hm)** → PROBE_BRIEF에 위임 Aside 금지·차단 시 3회 제한. hm은
  본 세션이 Aside로 재측정(openTab, looksAuthenticated=false).
- 진행 중: leboncoin 재프로브, booth·coconala(JP6), adyen·coolblue·getyourguide·alan(EU2), 스윕.

---

## ✅ 2026-09-26 · 루프 회차 21–22 — **EU 웨이브 1 마감** (478 · 184)

- 등재: zalando(DE, 리브랜드 토큰 레이어가 기본 테마를 `@scope`로 덮음) · doctolib(FR, Oxygen 3,650).
  EU 웨이브 1 = **6/7 verified**. check24 탈락(자체 변수 7개·브랜드색 토큰 0·CTA는 닫힌 shadow root).
- **전환(transition) 함정 2건**: check24 위임 프로브의 필별 hover 14종은 전환 도중 값(정착값은 전부
  `rgba(255,255,255,0.15)`), doctolib 포커스 링은 Tab 직후 첫 프레임에 투명. PROBE_BRIEF에 대기 규칙 추가.
- **EU 웨이브 2 스카우팅 12/18(67%)**. 1차 프로브 5건(klarna·hm·otto·flixbus·leboncoin) 진행 중,
  JP6 booth·coconala 프로브도 진행 중.
- 쿠키 배너: 여전히 거부 방식(오너 확인 대기 — Accept all 전환 여부).

---

## ✅ 2026-09-26 · 루프 회차 17–20 — **EU 웨이브 1 시작** (476 · 182)

- 등재: n26(DE) · sumup(UK, Circuit UI) · wolt(FI, Alchemy) · qonto(FR). EU 스카우팅 7/12(58%) — 다음 주력 시장.
- 국가 허용 목록에 FI·NL·SE·ES 추가(빌드·검증·테스트·API 라벨·국기).
- **09-22부터 있던 tsc 오류 발견·수정**: base·smartbank의 `tokens.motion`이 생성 타입에 없어 `next build`가
  깨지는 상태였다(피처 브랜치만, 배포 영향 없음). 체크리스트에 tsc 추가.
- 서브에이전트 스폰 실패 원인 = 끝난 에이전트 패인 누적 → 종료 요청으로 해결, 체크리스트화.
- 프로브 도구: 자체 제작 동의 배너를 거부 문구로 찾기, 투명 outline을 그려지지 않은 것으로 처리.
- 진행 중: booth·coconala(JP6), zalando·doctolib·check24(EU).

---

## ✅ 2026-09-26 · 루프 회차 11–16 — **JP 웨이브 5·UK 웨이브 2 마감** (472 · 178)

- 등재: pairs · hatena (JP) · sainsburys · bloomandwild · gousto · nhs (UK) — 6/6 verified.
- **위임 프로브 헤드라인이 3건 틀렸다**: pairs(흰-on-흰 CTA는 PNG 그라디언트 토큰), hatena('서비스 색
  미사용'은 숨은 링크를 읽은 것), sainsburys('hover 변화 없음'은 동의 배너가 가린 것). 독립 재측정이
  계속 필요하다는 근거.
- **도구**: 동의 배너를 대상 탐색 전에 거부(재로드 대응), `:hover` 미매칭 = 미측정, 저작 도구에 근거
  사전 점검. 스크래치패드 소실(재부팅) 대비로 저작 도구·프로브 지시문을 레포로 이동.
- **모델 시험 4회차**(오너 요청): sonnet 저작 초안 2건 — 사실 오류 6·4건 → **채택 안 함**, 저작은 opus 유지.
- 쿠키 배너: 거부 방식 유지(오너에게 Accept all 전환 여부 열어둠).

---

## ✅ 2026-09-23 · 루프 회차 4–10 — **JP 웨이브 4·UK 웨이브 1 마감** (466 · 172) · 오늘 신규 10건

- 오늘 등재: crowdworks · studysapuri · folio · loglass (JP) · ft · citymapper · ocado · theguardian (UK)
  — **스카우트 통과분 7/7 전부 verified**. 스카우트 수율 JP 3/12, UK 4/12.
- **ft는 Aside로 측정**(로컬 Cloudflare 챌린지). 이 세션에선 Aside 포인터가 `:hover`를 못 만들어
  hover는 미측정으로 기록(JAL 땐 됐음). Origami 문서가 로그인 뒤로 가서 웨이백 스냅샷과 대조.
- **국가 판정**: 인수된 운영회사는 자기 본사로(skyscanner·farfetch 선례) → ft·citymapper = UK.
- 프로브 도구 개선 5건: opacity 출력·7값 비교, `--text` 단독 검색, `--vars` @layer 재귀(`.length`),
  `--text`가 aria-label·placeholder도 매칭, 그려지지 않는 outline(style none) 변화 무시.
- "변화 없음" 소급 스윕 7/7 유지 — 옛 도구 결함은 커밋된 데이터에 영향 없음.
- 대기: spacemarket·tesco(Aside), jal·kakaopay 스윕, zopa(daisyUI 경계).

---

## ✅ 2026-09-23 · 루프 회차 2–3 — **studysapuri 등재** (460 · 166) · 위생 3건 · 프로브 도구 결함 2건

- **studysapuri** 89/89 · 4/4 stated · reason·advisory 0. hover가 전부 **opacity 페이드**(0.9/0.8/0.7/0.5).
- **위임 프로브(sonnet)의 헤드라인 "hover 변화 없음"이 틀렸다** — 원인은 모델이 아니라 도구:
  `probe-component-states.mjs`가 opacity를 읽고도 출력 안 했고 요약이 배경색만 비교. 수정
  (7개 값 비교) + `--text` 단독 검색 버그 수정 + 평가기가 `opacity N`을 렌더 상태로 인식.
  측정법 §2.7. crowdworks는 새 도구로 재측정해 유지. **옛 도구로 "변화 없음"을 적은 다른
  레퍼런스 재검증 스윕을 큐 4b에 넣었다.**
- 위생: velog·banksalad `ds:` 제거(디자인 시스템 없음), adobe 설명에 링크=Spectrum 1 명시.
- JP 웨이브 4 스카우팅 3/12(folio·studysapuri·loglass), spacemarket은 429 → Aside 대기.
- 진행 중: folio·loglass 심층 프로브, UK 12 스카우팅(scout-uk1).

---

## ✅ 2026-09-23 · 루프 회차 1 — **crowdworks 등재** (459 · 165)

claims 141/141 · 6/6 · reason·advisory 0. JP 웨이브 3 마감(newspicks·zenn·qiita·crowdworks).

- **32개 타이포 토큰이 `font` 단축 속성 통째**: `--paragraph-m-w3` =
  `400 18px / 1.8 "Hiragino Kaku Gothic Pro", sans-serif`. 카탈로그 최초.
- **z-index 91개가 쌓는 요소 이름으로**: `--z-jobs-sidebar-category-list-right-arrow`, 값은
  `calc(calc(1799 + 1) + 50)` 같은 산술.
- **AI CrowdWorks가 자기 네임스페이스**(`--aicw-*` 56): 보라·틸·민트, 그라디언트 5종.
- 최다 렌더 색 `#004980`은 **본문 잉크가 아니라 링크색** — 본문은 `#353d48`. 역할명을 이 기준으로 붙였다.
- `--purple-*`이 Material 팔레트 그대로인데 `-600`만 `#8d24aa`(Material은 `#8e24aa`).
- 컨트롤 6개 중 5개가 hover에 **아무것도 안 바뀐다**. focus는 전부 브라우저 `auto` 링인데 **너비만
  1/2/3px로 다르다**. **이메일 입력은 focus 표시가 아예 없다.**

**§4 체크리스트가 작동했다** — 근거·포맷 게이트가 첫 시도에 통과(어제는 zenn·qiita가 3~4번씩
걸렸다). 커밋 전 **증거 날짜를 캡처일(09-22)로 정정**했다 — 오늘 저작이지만 관측은 어제다.

---

## 🔁 2026-09-23 — **자율 운영 루프로 전환.** 판단 경계와 큐 → `docs/AUTONOMY_LOOP.md`

오너 지시: 단계마다 검수를 요청하지 말고, 판단이 필요한 수준이 아니면 goal/loop로 알아서.

**루프의 매 회차는 `docs/AUTONOMY_LOOP.md`를 먼저 읽는다.** 거기에 §1 묻는 것(게이트 의미
변경·레퍼런스 삭제·main 머지·출시 GO·규칙으로 안 갈리는 라이브러리 판정·유료/로그인·3회 미수렴)
만 적혀 있고, 나머지는 전부 하고 보고한다.

### 상태 파악에서 나온 것

- **브랜치를 origin에 올렸다**(`511e9edb`, main 대비 172 커밋, 분기 2026-09-07). 올리기 전
  확인: 로컬 전용 증거물(`artifacts/reference-evidence/`·`reverify/`) 0 · 비밀값 형태 0 ·
  피처 브랜치 푸시가 트리거하는 CI 0(quality는 PR·main, release는 태그).
- **브랜치 푸시는 2026-08-20부터 상시 위임이었다.** 며칠째 "origin에 없다"고 물어본 건 이미
  허락된 일이었고, 원인은 MEMORY.md 인덱스 한 줄이 자기 파일 본문(위임 조항)과 어긋나
  있었던 것이다 — 인덱스를 고쳤다.
- JOURNAL "다음" 줄의 잔여 항목 중 **zhihu proof gate는 이미 해결**(verified), **티어 카운트
  자동화도 완료** → 큐에서 뺐다. **velog·banksalad의 `ds:`가 GitHub 저장소/조직을 가리키는
  것**은 진짜 위생 항목이라 큐 5번에 남겼다.

### 큐 (AUTONOMY_LOOP.md §3)

```
1. 브랜치 백업          ✅
2. crowdworks 저작      실측 완료 — 새 측정 0회로 verified 1건
3. JP 웨이브 4          수율 25% 두 번 연속
4. US/UK 수율 측정      UK 1/12 verified
5. 위생                velog·banksalad ds · adobe S1/S2
```

---

## ✅ 2026-09-22 — 실험 회차 3 + **qiita 등재**(458 · 164). crowdworks는 실측 완료·저작 대기

**②에서 haiku와 sonnet의 격차가 ①보다 더 벌어진다.** 같은 프롬프트 형식으로
haiku=crowdworks · sonnet=qiita를 주고 둘 다 독립 재측정으로 대조했다.

**haiku**는 핵심 판별점(`--fa`=Font Awesome)은 맞혔는데 나머지가 무너졌다:
`--aicw-*`(자사 AI 제품)를 **"서드파티일 수 있다"**고 했고, 웹폰트를 CSSOM으로만 보고
**"CORS 차단 추정"으로 종료**했으며(zenn에서 sonnet이 전환했던 지점), **비가시 노드까지 세서
`Times`를 서체로 보고**했고, CTA를 **"4상태 NO CHANGE (CSS-in-JS 추정)"**이라 적었다 —
실제로는 focus에 `outline: rgb(0,95,204) auto 2px`가 뜬다.
**①과 같은 실패다: 규칙 하나는 적용하는데 데이터가 어긋날 때 멈추지 못하고 추정으로 메운다.**

**sonnet**은 이번 회차 최고 보고였고 **내 정답지보다 세밀한 게 셋** 있었다:
`--color-*` 110개 중 **5개가 남의 브랜드색**(`twitter`·`github`·`hatena-blog`·`findy`)임을
구분했고, census의 **`Times ×236`이 비가시 노드**임을, **`Arial ×156`이 스타일 안 먹은
폼 컨트롤**임을 짚었다 — **내가 §2.6을 쓰게 만든 것과 같은 결함을 독립적으로 찾았다.**
그리고 **primary 버튼이 헤더와 하단에서 뒤집히는 것**을 찾아 "팔레트에 primary가 둘이라고
오독되지 않도록" 표시했다 — 측정이 아니라 판단이다.

### 최종 권고 (3회차)

```
① 스카우팅    sonnet
② 심층 프로브  sonnet + 헤드라인 1건 독립 검증 필수
③ 분리 판정    opus   위임 안 함
④ 저작        opus   위임 안 함
haiku는 3회 모두 탈락 — 검증 없이 못 쓰면 위임 이득이 사라진다
```

**검증의 성격이 3회에 걸쳐 분명해졌다: 검증은 값을 안 바꾸고 결론의 등급을 바꾼다.**
zenn에서 "링이 없다"→"버튼이 껐다", crowdworks에서 "변화 없음"→"focus에 브라우저 링".

### qiita — claims 106/106 · 6/6 · reason·advisory 0

**Material Design 어휘를 빌리고 자기 명사를 얹었다.** `highEmphasis`·`divider`·`surface`·
`container`/`on-container`·`elevation` 위에, **markdown 렌더링 토큰 3개**와
**Advent Calendar 토큰 2개**가 있다. 12월 행사를 토큰으로 두는 시스템.

- **색상군 5개 × 0~110단**에, 각 색상군이 **`Text`·`Container`·`Border`·`Dim` 변형**도 발행
- **초록이 둘**: 로고 `#55c500`(qiitaGreen)과 인터페이스 `#357a00` — 채워진 버튼은 후자다
- **hover 규칙이 "시작한 자리에서 회색 램프 한 칸 아래"**: 흰→gray10, gray20→gray30, 투명→gray20
- 잉크가 회색이 아니라 **검정 87%/60%**, 링크 `#2c6897`이 2위 잉크(166개)
- **컨트롤 6개 전부 크롬 기본 focus** — 독립 컴포넌트 6종에 authored 링 0
- **`family` 없음**: `YakuHanJPs`가 스택 1위지만 로드 안 된다(§2.6 사례)

### crowdworks — 실측 끝, 저작만 남았다
→ 전체 측정값은 `docs/COLLECTOR_MODEL_TRIAL_2026-09-22.md` §7에 기록했다

**`--paragraph-*` 16 + `--single-*` 16 = `font` 단축 속성을 통째로 담은 토큰**
(`400 18px / 1.8 "Hiragino Kaku Gothic Pro"`) — 이 카탈로그에 없던 형태.
`--z-*` 91개 초세밀 z-index, `--aicw-*` 56개 AI CrowdWorks 서브브랜드,
**`--space-outline-offset-focus: 3px`**. focus는 전부 크롬 기본인데 **너비만 1/2/3px로
다르다** — 작성자가 `outline-width`만 손댔다.

---

## 🔍 2026-09-22 — **census의 서체는 렌더된 서체가 아니다**(§2.6) → deepseek 정정

qiita 정답지를 만들다 걸렸다. 내 census는 전부 `fontFamily.split(",")[0]`으로 세는데,
그건 **스택의 첫 이름**이지 실제로 쓰인 서체가 아니다.

```
qiita census family:  YakuHanJPs ×458          ← 1위
qiita @font-face:     Material Symbols(loaded) · FontAwesome(unloaded)   ← 2개뿐
```

**`YakuHanJPs`는 로드되지 않는다.** 그냥 썼으면 "458개 요소에 렌더된다"고 적었을 것이다.
caddi의 `Zalando Sans Expanded`와 같은 부류인데, **그건 토큰 이름으로 드러났고 이건 census
1위라 오히려 더 그럴듯하다.** `document.fonts.check()`로도 안 갈린다(폴백으로 그릴 수 있으면
`true`를 준다 — qiita에서 실제로 `true`가 나왔다). **loaded 목록에 이름이 있는지**를 봐야 한다.

### 그래서 오늘 쓴 것을 전부 감사했고, **deepseek이 걸렸다**

`DM Sans`는 **진짜 로드된다**(400·500) — 그건 맞았다. 그런데
**`Fragment Mono`는 `@font-face`에 없다.** `--ds-font-mono`에 이름만 있고 떨어진다.
토큰 이름만 보고 브랜드 서체로 기록한 것이다. → `family.mono` **삭제**, 산문으로 이동.
claims 58 → 57, 여전히 verified.

덤으로: `Montserrat`은 **로드되는데 어떤 `--ds-font-*` 토큰에도 없다.**
**토큰 없는 로드된 서체는, 로드 안 된 토큰만큼이나 기록할 수 없다.** 둘 다 안 적었다.

나머지 일곱 건(base·chatwork·caddi·nulab·smartbank·jal·zenn)은 전부 loaded 목록과
대조돼 있었다 — **우연이 아니라 그때마다 webfonts를 같이 읽었기 때문**이고, qiita가 처음으로
그 습관이 없으면 틀리는 모양이었다.

---

## ✅ 2026-09-22 — 실험 회차 2(심층 프로브 위임) + **zenn 등재**(457 · 163)

**②도 위임할 수 있다 — 단 헤드라인 주장은 검증하고 쓴다.** zenn 심층 프로브를 sonnet에
맡기고(newspicks는 내가 직접 재서 실제 작업은 위험에 두지 않았다) 독립 재측정으로 대조했다.

**보고가 정확했고 산술까지 맞았다.** 함정도 스스로 처리했다:
`styleSheets[].cssRules`가 CDN CORS로 0을 반환하자 `getComputedStyle`로 전환했고
(**스타일시트 텍스트로 갔으면 "토큰 없음"이라 보고했을 사이트에서 129개를 찾았다**),
`--text "#fff"`가 `<body>`를 잡는 **내가 오늘 만든 도구의 함정**을 `--height`로 우회했고,
`outline: none`이 `auto`가 아님을 rest와 대조해 §2.5 규칙을 정확히 적용했다.
zenn 자신의 오타 `--c-button-danger-forcus-border`(sic)까지 짚었다.

> **그런데 검증이 결론의 등급을 바꿨다.** 보고는 "primary에 authored 링이 없다"였고 맞다.
> 하지만 "링이 없다"는 **브라우저 기본이 원래 없었다**와 **작성자가 껐다**로 갈리고
> 보고만으로는 안 갈린다. **진짜 Tab 키**를 눌러보니 Zenn 로고에
> `outline: rgb(0,95,204) auto 1px`가 뜬다 — **기본 링이 이 페이지에 살아 있다.**
> 버튼 컴포넌트가 그걸 끄고 secondary만 box-shadow로 대체하며 primary는 대체물이 없다.
> **위임된 실행은 이 확인을 못 했다 — 지시에 없던 검사였다.**

### 현재 권고

```
① 스카우팅   sonnet (체크리스트 유지, haiku 금지)
② 심층 프로브 sonnet + 헤드라인 주장 1건 독립 검증 필수
③ 분리 판정   opus  (위임 안 함)
④ 저작       opus  (위임 안 함)
```

**토큰 효율의 정체**: 위임의 이득은 내부 토큰이 내 컨텍스트에 안 들어온다는 것이고 **모델과
무관하다.** 모델이 정하는 건 **보고서를 믿을 수 있는가**다. haiku의 950자 보고서는 쌌지만
그걸 믿었으면 crowdworks를 잃었다.

### zenn — claims 106/106 · 3/3 · reason·advisory 0

**129개 전부 자기 것.** 특이점은 **토큰 층에서 컴포넌트를 조립한다**는 것이다 —
`--c-*` 109개 중 절반가량이 역할이 아니라 컴포넌트다:
**버튼 8변형**(primary·secondary·grayed·tertiary·quaternary·follow·following·share·danger)과
**라벨 4변형**(각각 `bg`/`fg`와 `painted-bg`/`painted-fg`), **메시지박스 3종**이 각자
색 세트를 통째로 발행한다. 대부분의 시스템은 surface/text/border에서 멈추고 컴포넌트가 조립한다.

- 모든 컨트롤이 **99rem = 1584px 완전 알약**. 그 아래 스케일에 **`sm: 7px`**(아무도 안 쓰는 값)
- **`--c-rounded-publication: 25%`** — 퍼블리케이션 아바타용, **제품 개념으로 이름 붙은 radius**
- **잉크가 검정의 알파**(`#000000d1` = 82%)로 2,227개 중 1,471개. 회색이 아니다
- **Inter 600/700만 자체 호스팅**(Google Fonts 아님)되고 `--font-latin-hero`에만 묶여 16개 요소.
  일본어는 OS 스택
- `--c-selection-highlight #ffdc0059` — 선택 영역 노랑을 토큰화한 드문 사례

**포맷 게이트 3개에 걸렸다**(전부 정당): 8자리 알파는 `tokens.colors`에 못 들어가고,
`25%`는 `rounded`가 숫자만 받고, 컴포넌트 `fg`도 6자리 hex여야 한다.
→ **알파는 산문으로, 퍼센트는 산문으로** 옮겼다. 이 카탈로그의 기존 관례와 같다.

---

## 🧪 2026-09-22 — 수집 모델 실험 회차 1 + **newspicks 등재**(456 · 162)
→ `docs/COLLECTOR_MODEL_TRIAL_2026-09-22.md`

오너 요청(계속하는 작업에 하나씩 적용하며 수집에 적합한 모델 찾기)을 JP 웨이브 3
스카우팅에 얹었다. **세 팔이 바이트 동일한 입력에 동일한 스크립트**를 돌렸다.

**위임 대상을 먼저 갈랐다**: ① 스카우팅(오판=후보 하나 놓침) **위임 가능** ·
② 심층 프로브 조건부 · ③ 분리 판정 **불가** · ④ 저작 불가. ③을 빼는 근거는 오늘 기록이다 —
카탈로그를 구한 여섯 건이 전부 원값을 직접 본 결과였다.

### 회차 1 결과 — **sonnet ≫ haiku, 체크리스트는 품질을 지탱하지 못한다**

셋 다 핵심 VIABLE 3건(newspicks·zenn·qiita)은 맞혔다. 갈린 건 **도구가 놓친 걸 잡느냐**다.

| | haiku+체크 | sonnet+체크 | sonnet+간결 |
|---|---|---|---|
| crowdworks `--fa-*`=Font Awesome | ❌ | ✅ | ✅ |
| crowdworks 결론 | ❌ 기각 | ⚠️ **flag** | ❌ 기각 |
| lycorp 자체 서체 | ❌ | ✅ | ✅ +다음 수 |
| hatena ctrl=0 | ❌(locale로 오인) | ✅ | ✅ |

**haiku는 체크리스트를 받고도 셋 다 놓쳤고**, `lang`이 비면 substantive 이유 대신 locale
규칙을 집는 버릇이 있다(m3·hatena 둘 다). **규칙을 패턴으로 소비하고 데이터로 검증하지 않는다.**

**sonnet은 체크리스트 없이도 같은 함정을 잡았다** — 이 작업에서 좋은 지시가 약한 모델을
구제하지 못한다. 체크리스트는 남긴다(공짜고, crowdworks에서 기각 대신 flag를 내게 했다).

> **sonnet-terse의 잘못된 단서를 반증했다.** "ana는 JAL처럼 차단일 수 있다"는 추론을
> Aside로 확인하니 **토큰 4개로 동일**, 컨트롤 29개 정상. JAL은 **아예 안 열렸고** ana는
> 로컬에서도 `200·ctrl=32`였다 — **차단된 페이지는 컨트롤 32개를 주지 않는다.** 자기
> 데이터에 반증이 있었는데 최근 사례에 끌려갔다. 다만 **flag였고 한 번의 호출로 반증됐다**
> — 싸게 틀리는 건 flag의 올바른 성질이다.

도구도 고쳤다: 스크립트의 프레임워크 목록에 `fa`가 없었다. 다만 **도구가 완벽해지면 이 실험이
재던 판단력도 안 보이게 되므로**, 위임 판정 기준은 "숫자를 읽었나"가 아니라 **"이름을 봤나"**로 남긴다.

### newspicks — claims 108/108 · 4/4 · reason·advisory 0

**220개 전부가 자기 것이다.** 프레임워크가 하나도 안 섞였다 — jal(63 tw + 31 oklch),
nulab(60 WP), chatwork(Marketo)와 정반대라 분리할 게 없었다.

JAL과 같은 4가족(surface 53 · text 22 · object 19 · border 19) 위에 palette 84,
그리고 **제품의 명사로 만든 층**이 따로 있다:

- **Premium `#00b357`**(유료 티어 전용 초록 — 성공 초록 `#018a26`과 **다른 값**)
- **AI `#9b2cc1`**(기계 생성 콘텐츠 전용 보라) · **BookPicks `#f7f3eb`** ·
  **highlight `#ffe86b`** · **unread `#ebf3ff`/`#d6e6ff`**(읽음 상태가 토큰이다)
- **`--third-party-color-{facebook,linked-in,bizd,apple,twitter}`** — 소셜 로그인 브랜드색.
  twitter가 `#000`이다(리브랜드 후).
- **`--brand-category-color-*-investment-gold` `#886c0f`** — 편집 카테고리 하나에 역할 세트 전체

**토큰↔렌더 3회 일치**: accent rest·hover, 그리고 **잉크 5% 워시가 서로 다른 두 컨트롤
모양에서** (`--surface-color-base-primary-hover` = `rgb(34 34 34/5%)`).

> **선택된 탭의 글자색을 잘못 읽을 뻔했다.** 버튼 자신의 `color`는 `#222222`인데 배경이
> `#146af5`라 그냥 읽으면 **대비 실패 주장**이 된다. 자식을 걸어보니 **span이 `#ffffff`**다.
> 버튼의 `color`는 상속돼 있을 뿐 안 쓰인다.

서체 토큰도 타입 스케일도 **없다**(웹폰트 0, `-apple-system` 286개). 12px이 138개.
**표면에 아무것도 안 쓰고 전부 구분에 쓴 시스템.**

---

## 🔌 2026-09-22 — **Aside Browser를 Tier 2로 채택. jal 등재**(455 · 161)
→ `docs/ASIDE_PIPELINE_2026-09-22.md`

오너 제안을 테스트했고 **뚫렸다.** 로컬 헤드리스가 7가지 조합으로 전부 실패한
`www.jal.co.jp`가 **Aside Browser에서 첫 시도에 열렸다.** 봇 방어가 IP가 아니라
**헤드리스 지문** 기준이었다.

**계층**: Tier 1 로컬 Playwright(기본) → Tier 2 `mcp__aside__repl`(막혔을 때, **같은 프로브
코드 다른 브라우저**) → Tier 3 `exec`는 **증거원으로 안 쓴다.**

> **`exec`(에이전트)에 측정을 위임하지 않는 이유가 오늘 하루치 기록에 다 있다.** 카탈로그를
> 구한 다섯 건이 전부 원값을 직접 본 결과였다(크롬 기본 링 · Marketo 버튼 · modality 오염 ·
> 자동 포커스 · `#645b4a` 3회 확인). **그리고 JAL에서 곧바로 또 나왔다** — 가장 많이
> 렌더되는 본문색 `oklch(0.145 0 0)` ×150이 JAL 게 아니라 **shadcn 기본값**이다.
> 에이전트 요약이었으면 그대로 브랜드 잉크가 됐다.

**known-answer 검증 통과**: 본문 2810자 동일, **자체 토큰 416개 정확히 일치**
(총계는 445 vs 479로 다르다 — Tailwind 레이어 차이. **총계가 아니라 자체 토큰으로
비교해야 한다**는 것도 같이 배웠다).

**토큰 실측**: 로컬 실패 ~4,000 토큰 → **0**. Aside ~5,600 토큰 → **verified 1건**.
단가는 같고 **헛돈을 안 쓰는 것**이 실제 이득이다.

**프라이버시**: `openTab()`만(오너의 다른 탭 안 봄, 끝나면 닫음) · computed style과 기하만 ·
**측정 전 `looksAuthenticated` 확인**(전부 false) · 로그인 안 함 · `memory_search` 안 씀.
`.verification.md`에 **수집기와 재현 조건**을 명시했다.

### jal — claims 95/95 · 컴포넌트 2/2 · reason·advisory 0

479개 중 **416개가 JAL 것**. 구조가 **칠하는 대상별 4가족**이다:
`--surfaceColor-` / `--textColor-` / `--iconColor-` / `--strokeColor-` × 역할 × 상태.

- **언어별 서체 토큰 7종** — japanese·english·korean·thai·chineseSimplified·
  chineseTraditional·chineseHongKong. 폴백 체인이 아니라 **각각 토큰**이다.
- **마일리지 등급 색 11개** — `--jmbStatus-{crystalRed #ba1334, sapphireBlue #066fbf,
  emblemGold #edc900, …}` · `--lspStatus-{jgcThreeStar #960a20 … jmbElite #652d73}`.
  **로열티 티어를 디자인 토큰으로** 발행한다. 이 카탈로그에 없던 것.
- hover가 별도 색이 아니라 **같은 빨강의 알파**(`rgba(204,0,0,0.8)` / `0.6`).
- 토큰↔렌더 일치: `--strokeColor-focus-primary #cc0000` = 실측 `solid 2px` 링.

> **87개 색이 두 번 발행돼 있다.** camelCase 105개 중 69개가 `--color-<kebab>`와
> **바이트 동일**, 18개가 **표기만 다른 같은 색**(`rgba(255,255,255,0.6)` vs `#fff9` —
> `0x99`=153=0.6×255). 기계적으로 쌍을 만들어 비교해서 확인했다. 간격(`--space-16` vs
> `--spacing-space-16`)과 타입(시맨틱 vs 숫자 스케일)도 같은 이중화다.
> **`conflicts`에는 안 넣었다** — 존재하는 쌍은 전부 일치한다. 불일치가 아니라
> **이름 바꾸는 중인 한 시스템**이다.

---

## ✅ 2026-09-22 — **caddi 등재** (454 · 160). **jal은 봇 방어로 차단 — 재시도 중단**

caddi claims 90/90 · 컴포넌트 3/3 · reason·advisory **0**.

**완전히 사각이다.** 2,500개 census에서 0 이외의 radius는 아바타 `50%` **하나뿐**인데,
`--radius-s/m/l/full` 4단이 **발행돼 있고 쓰이지 않는다.** 스케일이 있는데 디자인이
안 쓴다 — 그대로 기록했다.

**시스템의 중심은 간격이다.** 158개 중 **54개가 `--space-*`**이고, 하나의 스케일이 아니라
**방향별 4가족**이다:

| 가족 | 뜻 | 범위 |
|---|---|---|
| `--space-inline-*` | 가로 간격 | 2·4·8·12·16·24·32·40·56 |
| `--space-stack-*` | 형제 간 세로 간격 | **2·4·8·12·16·24·32·40·56 (숫자가 같다)** |
| `--space-inset-*` | 안쪽 패딩 | 4·8·12·16·24·32·40·48 |
| `--space-block-*` | 페이지 블록 리듬 | 40·56·80·96·120·160 |

`inline`과 `stack`이 **같은 숫자**다. 구분이 값이 아니라 **의도**에 있다 —
`--space-stack-md`를 읽으면 찾아보기 전에 방향을 안다.

- **색 25개 이름에 값은 9개.** `#1f2533` 하나가 `--color-text-primary` ·
  `--color-neutral-800` · `--color-bg-dark` · `--color-state-default` 넷을 겸한다.
  이름은 **작은 팔레트 위의 어휘**지 독립된 결정이 아니다.
- **인터랙션 언어가 한 동작이다: 뒤집기.** primary는 어두운 데서 옅은 데로
  (`#1f2533`→`#f4f5f8`), 언어 셀렉트는 **반대 방향으로** 같은 동작을 한다.
- focus `outline: #224bd2 solid 2px` = `--color-primary-500`. 단 **CMS(Builder.io)로
  작성된 문의 버튼만 크롬 기본 링**이라 그 컴포넌트에는 focus를 안 적었다.
- 서체 4종 중 3종이 상용: 실제로 칠하는 건 **모리사와 Pi Shii Gothic 3웨이트**(145개),
  선언된 `--font-family-body`는 NB International Pro, **`--font-family-display`
  "Zalando Sans Expanded"는 선언만 되고 로드되지 않는다** → 토큰에 안 넣고 산문에만 적었다.

> **`--label-*` 46개가 스타일이 아니라 UI 문구를 담고 있다.** `--label-login` "Log in",
> `--label-copyright` "© CADDi, Inc." — `ja-jp` 페이지인데 전부 영어다. 결함 2건을
> 있는 그대로 기록했다: **`--label-mission`이 `"文字列値"`**(문자열 값 — 플레이스홀더가
> 프로덕션에 남았다)이고, `--label---` `--label-----` 같은 **슬러그가 망가진 이름 6개**가
> "Previous"·"Announcements"를 담고 있다. 토큰으로 올리지 않았다 —
> **생성된 레이어는 실수를 커스텀 프로퍼티 네임스페이스로 들여오고 아무도 검사하지 않는다.**

### jal — 중단한다

`www.jal.co.jp`가 자동화를 막는다. **7가지 조합을 시도했다**: HTTP2 on/off × 4개 URL
(`/`, `/ja-jp/`, `/jp/ja/`), 재시도 3회, 셀렉터 대기, 레포 프로브. 결과는 일관되게
`ERR_HTTP2_PROTOCOL_ERROR` 또는 70초 타임아웃이고, **404 경로는 정상으로 뜬다.**

초기에 한 번 성공한 판독(445 vars · `ds-button__trigger` · `#cc0000` 알약의 focus
`solid 2px` · JMB/JGC 등급 색)은 **진짜지만 재현이 안 된다.** 재현 못 하는 증거로 레퍼런스를
쓰지 않는다 — 다음 사람이 확인할 수 없다. 그리고 여기서 더 밀면 **우회**가 되는데,
공개 페이지를 사람과 같은 조건으로 받는 것과는 다른 일이다. **보류.**

### JP 웨이브 2 결산

```
프로브 12 → 유효 3 (25%) → 등재 2 (smartbank · caddi) · jal 1건 차단
```

---

## ✅ 2026-09-22 — JP 웨이브 2 착수: **smartbank 등재** (453 · 159). 토큰 371개, 컴포넌트 0

claims 67/67 · reason **0** · advisory는 `component_absent` 하나 — **정직한 결과다.**

**이 카탈로그에서 가장 완전한 토큰 시스템이다.** 371개 중 370개가 자기 이름(나머지 1개는
swiper). 프레임워크 접두사가 하나도 없다.

- **색 스케일 110개 = 이름 붙은 색상군 9개 × 12단**: marine · mint · coral · sky · **wood** ·
  grape · peach · carrot · **stone**. 회색도 *색상군*으로 취급한다.
- **시맨틱 76개가 Material 3 모양**: 모든 역할이 `base` / `container` / `on-container` 3종.
  text·border·state는 전부 **검정·흰색의 알파**(`#000000de` `#0006` `#ffffff3d`)라 실측
  본문색 `rgba(0,0,0,0.6)` ×74 · `rgba(0,0,0,0.87)` ×63과 그대로 맞는다.
- **이 카탈로그에 없던 두 가족**: `--color-emoji-<hue>-*`(**이모지 색을 토큰화**)와
  `--color-prepaid-card-{my,pair,junior}-*`(**발행 카드마다 색 가족 + 3스톱 그라디언트 3종** =
  그라디언트 18개).
- **서체를 플랫폼으로 쪼갰다**: `--font-family-{web,ios,android}-{japanese,latin}`.
  **웹이 아니라 앱의 토큰 시트고, 웹은 그 한 열이다.**
- **line-height가 행렬**: `{dense,normal,comfort}` × 12단 = 36개. 밀도가 1급 축이다.
- 크기 12단이 16px에서 **비율 1.14로 계산된 그대로**(10.6672 · 14.2224 · 42.6672) —
  반올림 안 한 소수가 생성된 스케일이라는 증거다.
- duration 17단 + **easing 4개가 종류로 이름**(enter/exit/move/**feedback**은 linear).

> **두 표면이 한 시트를 쓴다.** `b43.jp`는 `onebank.jp`(ワンバンク로 개명)로 리다이렉트되는데,
> 그 제품면이 칠하는 **색 8개가 전부** 회사 사이트의 이름 붙은 토큰으로 해소된다.
> 마케팅 페이지의 스타일이 아니라 **제품의 시트**라는 증거다.

> **컴포넌트를 0개로 선언했다.** 양쪽 표면의 컨트롤이 전부 CSS-module 래퍼
> (`_rounded-button_gtcz6_1`)이고 **배경 투명 + 테두리 0**이다. 칠은 자식이 한다.
> 4개 상태 전부 **아무 속성도 안 바뀌고** focus는 크롬 기본. `--color-state-*-hover`를
> 발행하는 시스템에 컴포넌트가 없을 리 없지만 **이 캡처는 못 봤다.** huawei·douyin과 같은 길.

> **`primary_color`는 인용이 아니라 판독이다.** 브랜드 토큰이 없다. mint `#1dd0b0`을
> 쓴 근거(selected 상태의 원값 · positive impression · Pair Card 그라디언트 시작 · 제품면
> 실제 렌더)를 §2에 적어놨다.

### JP 웨이브 2 중간 집계

프로브 12 → 유효 3 (25%, 웨이브 1과 동일) → **1건 등재**

- **jal** — `ds-*` 컴포넌트 클래스에 `--surfaceColor-*`/`--strokeColor-*` 시맨틱,
  `#cc0000` 알약의 focus가 **`solid 2px`(작성자)**, JMB/JGC **회원 등급 색 토큰**까지.
  다만 **`www.jal.co.jp`가 자동화에 불안정**(HTTP2 오류 → 타임아웃 → 요소 못 찾음).
  재시도 필요. **다음 1순위.**
- **caddi** — `--space-{inset,inline,stack,block}-*` **방향성 간격 시스템**, 자체 웹폰트
  Pi Shii Gothic 3웨이트 + JetBrains Mono, focus `solid 2px`가 `--color-primary-500`과 일치.
  컨트롤 1개뿐이라 얇다.
- 기각 9: bizreach(`--mantine*349`) · hennge/atamaplus(`--wp`) · kaonavi(`--wp` 우세) ·
  eureka(단문자 네임스페이스) · dena(`--tw`, 컨트롤 1) · medley·shiseido·squareenix(토큰 0)

---

## ✅ 2026-09-22 — **chatwork 등재.** JP 웨이브 1 완료: 후보 3건 → **3건 전부 등재** (452 · 158)

claims 59/59 · 컴포넌트 3/3 · reason·advisory **0**.

**RISE는 이 카탈로그에서 가장 타이포그래피 중심적인 시스템이다** — 토큰 20개 중 **16개가
타입**이다. 색은 2개(`--rise--color-cw-black #13202f` / `-cw-white`)뿐이고 **간격·radius·
그림자·모션 토큰이 아예 없다.**

- **자체 서체를 4개 웨이트, 4개 토큰으로** 선언한다:
  `--rise--fontFamily-chatworkSans` **L / R / B / EB**. 웨이트 축이 아니라 **각각 별개의
  패밀리 이름**이고, 폴백이 전부 Hiragino Sans라 **OS로 떨어지지 Latin으로 안 떨어진다.**
  실측: **텍스트 요소 319개 중 318개가 Chatwork Sans**(R 185 · B 133), 나머지 1개가 Helvetica.
- rem 스케일 10단에 역할 이름(`headline1..3` `subtitle` `body1/2` `caption` `other-*`),
  **버튼 3단은 body·subtitle의 별칭**이다 — 버튼은 기존 크기의 본문 텍스트다.
- 빨강 2개가 역할로 갈린다: `#f03748`은 **채우기**(50px 알약, 5가지 크기), `#df1c13`은
  **텍스트**. 둘 다 hover에서 **같은 올리브 `#645b4a`**가 된다.

> **`#645b4a`가 진짜인지 세 번 확인했다.** 빨강 브랜드에 올리브 hover는 전이 중간값이나
> 상속 기본값의 모양이다. ① 상태마다 새 페이지로 재현 ② `transition: all`은 duration이
> 없어 **0s**라 중간값일 수 없음 ③ **스타일시트에서 9번 발견**
> (`.btn--secondary`의 배경·테두리). 작성자 값이다.

> **Marketo 폼을 분리해냈다.** 첫 패스에서 `.mktoButton`(230×45, r26, hover에 90%로 축소)을
> Chatwork CTA로 쟀다 — **전부 Marketo 것이다.** `#bf0000`(필수 표시)·`rgb(60,72,14)`·
> 페이지 유일의 box-shadow도 전부. 조상에 `mkto` 클래스가 있는지 걸어 올라가 분리했고,
> Chatwork 자신의 primary는 **앵커 안의 `<span>`**이라 포커스를 못 받는다.

**kubell.com은 다른 시스템이다.** `--rise--*`가 0개고 Noto Sans JP + Poppins에 주황
`#f04600`, ink `#121212`. 사명 변경(2024-07-01) 후 **제품은 정체성을 유지하고 모회사는
새로 만들었다.** 소유 확인과 서술 사실(430,000사, 2023-12 기준)에만 인용했다.

### JP 웨이브 1 결산

```
프로브 12 → 생존 3 (25%) → 등재 3 (100%)
nulab    제품당 패밀리 1개, 브랜드 넘는 포커스 링 하나
base     모션이 실측된 첫 레퍼런스 (advisory 1순위 261건을 토큰으로 해결)
chatwork 자체 서체 4웨이트 4토큰, 타이포 16/20
```

셋 다 **reason·advisory 0**. CN 웨이브 3(30→1)과 비교하면 **시장 이동이 옳았다.**

---

## ✅ 2026-09-22 — **base 등재** (451 · 157). 이 카탈로그에서 **모션이 실측된 첫 레퍼런스**

claims 88/88 · 컴포넌트 3/3 · reason **0** · **advisory도 0** — `motion_value_unsourced`가
안 뜬다. 카탈로그 1순위 advisory(261건)를 **토큰으로 해결한 첫 건**이다.

**모션 토큰 11개**: `--duration-hover .2s` + **이징 10개가 각각 무엇을 움직이는지로 이름**이
붙어 있다(`--ease-drawer` · `--ease-progressbar` · `--ease-sticky-section` ·
`--ease-chart-pie1/2` · `--ease-button-hover` …).

> **그중 하나가 렌더에서 잡힌다.** 분홍 CTA 두 개가 `transition: color 0.2s
> cubic-bezier(0.3, 0.7, 0.7, 0.3)`을 계산한다 — `--duration-hover` + `--ease-link` **정확히**.
> 스타일시트가 아니라 **컨트롤에서 읽은 모션 값**이다.
> 그리고 이게 분홍 버튼이 안 움직이는 이유도 설명한다: 선언된 transition이 **`color`**를
> 움직이는데, 단색 분홍 위 흰 글자는 둘 다 안 변한다.

- 램프 2개(teal `--color-prime-50..900`, 회색 `--color-gray-50..900`)가 팔레트 전부고
  **악센트 분홍 `#fc6589`에는 램프가 없다**.
- 서체 2개 다 로드됨: `--font-family-base`가 선언한 **TazuganeGothicStdN**(모리사와)와
  랜딩이 실제로 칠하는 **Gilroy**(153/153). 회사 사이트 binc.jp는 Tazugane를 칠한다 →
  둘 다 기록(sans / display).
- `--spacing-*`는 **단위 없는 숫자**. `--leading-trim: calc((1em - 1lh) / 2)`.
- focus는 **전부 크롬 기본**(`auto 1px`) → **focus 토큰 없음**.

> **`thebase.com`은 캐치올이다.** `/zz-…`가 홈을 준다. 그래서 **이 호스트의 다른 경로는
> 아무것도 인용하지 않는다.** 제2 출처는 다른 호스트(binc.jp)다 — hisense를 보류한 것과
> 갈리는 지점이 정확히 이것이다.

### 만료 테스트가 **자기 의도와 반대로** 실패했다

`expect(count("2027-01-10")).toBeLessThanOrEqual(11)` — **생존자 수**를 센다. 그런데 바로 위
주석이 의도를 이렇게 적어놨다: *"7월 배치는 01-10에 사라져야 하고, 남아 있는 건 새 증거이며
그게 목표다."* 생존자 수는 **새로 verified할 때마다 올라간다.** 오늘 여덟 번째에서 터졌다 —
**이 테스트가 장려하려던 바로 그 일 때문에.**

의도를 직접 재도록 바꿨다: **캡처 트랙 이전 증거(2026-08-01 이전)로 그날까지 verified인
레퍼런스는 0건이어야 한다.** 실측 확인 — 생존자 12건 전부 09-21 이후 캡처, 7월 배치는 0건.
**웨이브가 들어올 때마다 숫자를 올릴 필요가 없다.** (컷오프를 09-22로 올리면 smarthr이
잡히는 것으로 필터가 실제로 판별한다는 것까지 확인했다.)

---

## ✅ 2026-09-22 — B단계: JP 수율 **25%**, **nulab 등재** (450 refs · **156 verified** · 1000 sources)

**JP 후보 12건 프로브 → 3건 생존(25%).** CN 웨이브 3의 **3.3%**와 비교하면 시장을 옮긴
판단이 맞았다. 사전에 정한 임계치 20%를 넘었으므로 **JP 웨이브 진행.**

| 생존 | 근거 |
|---|---|
| **nulab** | own 146개 · 컨트롤 4개 전부 상태 있음 → **등재 완료** |
| **base** | own 64개(`--color*36 --ease*10 --spacing*10 --z*8`) · 웹폰트 **TazuganeGothicStdN**(모리사와) + Gilroy · 컨트롤 4 |
| **chatwork** | **자체 서체 `Chatwork Sans`** · `--rise*20` · 컨트롤 16 |

기각 9건: yahoo·plaid·yappli·visional·tabelog 토큰 0 · raksul `--tw` · andpad `--wp` +
컨트롤 0 · kyash Webflow · dena URL 오류.

### nulab — **제품 하나당 패밀리 하나**, 이 카탈로그에서 가장 선명한 다중 제품 시트

claims 116/116 · 컴포넌트 6/6 · reason·advisory 0. 206개 중 **60개가 WordPress**라 제외,
남은 **146개가 누라보 것**이다.

```
--backlog-*  --cacoo-*  --typetalk-*  --nulab-*  --nulabpass-*  --flowbase-*  --ad-*
--button-<제품> / -hover / -pressed / -disabled     ← 7개 제품 전부 4단
--banner-<제품> / -secondary                        ← 배너 쌍도 제품마다
```

- **포커스 링이 하나고 브랜드를 넘는다**: `--outline-primary #cbc2e8`가 `nulab.com`과
  `backlog.com` 양쪽에서 `solid 4px`로 렌더된다. 채워진 버튼에는 `outline`, 조용한
  컨트롤에는 **같은 색·같은 4px를 `box-shadow`로**.
- 토큰↔렌더 일치: `--button-default #74758b`/`-hover #696a7d` = 실측 rest/hover,
  `--button-nulab #7a6abf`/`-hover #6e5fac` = 실측.
- **dp 간격 스케일은 40px에서 시작한다** — 섹션 리듬이지 컴포넌트 리듬이 아니고,
  컴포넌트는 별도 `--button-horizontal-padding-sm/md/lg`(rem)를 쓴다.
- 서체는 **Noto Sans JP 하나**(텍스트 요소 119/119).

> **`conflicts`에 넣었다가 뺐다.** 회사 시트는 Backlog를 초록(`#319b77`)이라 하는데
> `backlog.com` 버튼은 **주황 `#f27100`**이다. 스키마의 conflict는 **한 주장에 대해 두
> 출처가 엇갈리는 것**인데, 이건 **서로 다른 두 가지에 대한 각각 맞는 측정**이다 —
> 회사 시트가 이름 붙인 토큰과 제품 사이트가 칠하는 값. 넣어두면 **존재하지 않는 불일치로
> 등급이 막힌다.** 초록은 팔레트에, 주황은 Backlog 컴포넌트에 두고 산문으로 경고했다.

> **패밀리가 제품보다 오래 산다.** `--typetalk-*` 10개가 전부 살아 있는데 Typetalk은
> 누라보 About 페이지의 현재 제품 목록(Backlog·Cacoo·Nulab Pass·Flowbase)에 없다.
> 측정된 대로 기록하고 제품 상태에 대해서는 아무 주장도 하지 않았다.

---

## ✅ 2026-09-22 — A단계 완료: **asana·cybozu·sendbird 셋 다 verified** (449 / **155**)

**카탈로그에서 verification_v2를 갖고도 verified가 아니던 레퍼런스 3건이 0건이 됐다.**
`interactive_state_missing`은 이제 카탈로그에 없다.

셋이 전부 다른 결말이었고, **그게 핵심이다 — 재측정은 상태를 채우는 작업이 아니라
무엇이 아직 거기 있는지 확인하는 작업이다.**

| | 결과 |
|---|---|
| **cybozu** (4개) | 전부 **실재했고 상태가 있었다** → 추가. 126 claims, 5/5 |
| **asana** (2개) | 입력은 살아 있어 3상태 측정, **마젠타 히어로 버튼은 사라졌다** → 삭제. 154 claims, 7/7 |
| **sendbird** (3개) | 2개는 **다시 디자인됐고**, 1개는 **애초에 잘못 이름 붙은 것**이었다 → 1개로 대체. 121 claims, 8/8 |

### cybozu — hover는 거의 아무것도 안 하고 **focus가 모든 어포던스를 진다**

- 기업 텍스트 링크: hover·press 변화 없음, **focus에서 글자색이 `#2693ff`로**
- 기업 아이콘 버튼: hover/press에서 그림자가 `0 0 6px`@10% → `0 0 2px`@20%로 **조여지고
  2px 내려간다** — 뜨는 게 아니라 **눌리는** 그림자
- kintone 버튼 2종: hover 변화 없음, press·focus에서 **outline 색이 `#ffbf00`**
  (이미 팔레트에 `kintone-yellow`로 있던 값)

> **`#2693ff`는 브라우저 것이 아니라 cybozu 것이다.** 같은 판독에 크롬 기본
> `outline: rgb(0,95,204) auto 1px`가 함께 오지만, **작성자 스타일시트가 없는 대조군
> 페이지에서 UA는 `color`·`border-color`를 건드리지 않는다**(실측). cybozu는 글자를
> 다시 칠하고 링은 브라우저에 맡긴다. 이전 세션 메모의 "cybozu `#2693ff`는 브라우저
> 기본"은 **틀렸고 지금 정정한다.**
> kintone은 반대다 — **색은 작성자(`#ffbf00`), 모양은 UA(`auto`)**.

### asana — 토큰은 살아 있는데 컨트롤이 없다

`#fd3ffd`를 칠하는 요소가 **2,734개 중 0개**. 그런데 `--fuchsia-700: #fd3ffd`는
:root에 그대로 있다(357개 중 하나). **색은 팔레트에 남고 컴포넌트는 삭제**했다.
오늘 히어로의 악센트는 `#ffc9ff` 56px로 **다른 값, 다른 컨트롤**이라 슬롯에 몰래 넣지 않았다.

로그인 입력은 3상태를 다 잡았다(rest `#e1e1e1` → hover `#c6c6c6` → focus `#888888` +
`#4075cf` 2px 링). 덤으로 **claim이 가리키던 표면이 틀렸던 것**(pricing → login)과
선언 테두리값(`#757677` → 실측 `#e1e1e1`)을 고쳤다.

> **자동 포커스된 컨트롤에는 rest가 없다.** 이 입력은 로드되자마자 포커스를 받아서
> rest·hover·press가 전부 `:focus-visible` + `#4075cf` 링을 단 채로 읽혔다 —
> **상태 없는 컨트롤처럼 보이는데 실은 전부 focus였다.** 프로브가 이제 focus 판독을
> 뺀 모든 판독 전에 활성 요소를 푼다.

### sendbird — 값은 맞고 **이름이 틀렸던** 경우

`input-newsletter`(`#FFFFFF`·`1px solid #D1D1D1`·radius 50·12.8px/400)는 값이 **전부 맞다.**
placeholder가 **"Search…"**인 **사이트 검색창**이고, 펼쳐지기 전이라 **0×0**이다.
이메일을 받지 않는다. **값이 맞고 설명이 틀린 쪽이 알아채기 더 어렵다.**

24px 알약 2종은 오늘 **8px radius에 배경이 요소가 아니라 자식에** 있다. 대신 실측되는
것 하나(`button-pill-marketing`)로 대체했다 — focus `outline: #0d0d0d solid 2px`는
**`solid 2px`이므로 작성자 것**이고, 본문의 다른 인스턴스도 같은 링을 쓴다.

### probe-component-states.mjs를 다섯 군데 고쳤다 (전부 쓰다가 나온 결함)

`--locale`(하드코딩 ko-KR — 로케일 리다이렉트 사이트에서는 **다른 시장을 재게 된다**) ·
`--text`(셀렉터가 페이지 안 `querySelectorAll`이라 Playwright `:has-text()`가 **조용히 0개**를
준다) · `--wait`(2.5초는 sendbird에 부족 — 117개 컨트롤에 본문 664자는 **얇은 게 아니라 덜
지어진** 것) · **rest에서도 border·outline을 항상 출력**(변화만 찍으면 무엇에서 바뀌는지
모르고, focus 판정은 색이 아니라 **스타일**로 갈린다) · **비-focus 판독 전 blur**.

---

## 🔧 2026-09-22 — 카운트 게이트가 **놓친 어구가 하나 더 있었다**(11곳, 5개 로케일)

앞 커밋에 "987 tests pass"라고 적었는데 **987/988이었다.** 하나가 실패하고 있었다.

`check-counts`의 references 규칙은 **숫자 바로 뒤에 명사**가 와야 매칭된다. 그런데 카피가
`"448 quality-graded DESIGN.md references"`라고 쓴다 — 숫자와 명사 사이에 `quality-graded`가
끼어 있다. CJK는 더 멀다: `DESIGN.md 레퍼런스 448개` · `DESIGN.md 448件` ·
`448 份带质量等级` · `448 份有品質分級`.

**11곳이 448에 멈춰 있는데 게이트는 ✓를 냈다.** 잡은 건 `src/data/cli-docs.test.ts`인데
**husky 커밋 게이트는 테스트 파일 3개만 돌린다**(catalog-integrity·reference-quality·
evidence-integrity). 그래서 커밋을 막지 못했다.

다섯 어구를 `check-counts`와 `sync-catalog` 양쪽에 **열거해서** 넣었다(느슨한
"DESIGN.md 근처의 아무 숫자" 패턴은 버전 문자열을 잡기 시작한다). 재실행하니 11곳 자동 수정.
**988/988 pass.**

> 오늘만 카운트 게이트를 세 번 고쳤다: 티어 카운트 누락 → `reference-quality.json` staleness →
> 어구 누락. 매번 "이제 됐다"고 생각했다. **표면을 열거하는 게이트는 어구도 열거해야 한다.**

---

## ✅ 2026-09-22 — CN 웨이브 3: **wps 등재**(449 / 152). 후보 30개 중 살아남은 건 하나

**wps claims 85/85 · 컴포넌트 4/4 stated · reason·advisory 0.** 첫 CN 생산성 레퍼런스.

**토큰 층이 두 개고, 그게 핵심이다.** 439개 중 `--kd-*` 293개는 **킹소프트의 이식 가능한
시스템**(브랜드 10단 램프를 생 `r,g,b`로 발행 · error/success/warning/**ai** 4가족 각각
normal·hover·pressed·light · radius 7단 · type 8단 · line-height를 `calc(size+8px|12px)`
**규칙으로** · z-index 9단), `--wps-*` 146개는 **이 페이지**(`--wps-hero-wps-cover-crop-height:
458px`). 앞엣것만 시스템으로 기록했다.

- **`ai` 색 가족이 1급이다**(`#8350f2`→`#682aef`, 전용 text·line·background·gradient).
  상태가 아니라 **기능**을 위한 색 가족은 이 카탈로그에 없던 것이다.
- **헤드라인 CTA가 브랜드 블루가 아니라 에러 레드**(`#dd3332`)다. 토큰↔렌더가
  **3단 전부 일치**(`#dd3332`/`#c42e2d`/`#b02928` = 실측 rest/hover/press).
- 중성색은 전부 `#0d0d0d` 하나를 텍스트 4단(.9/.66/.46/.27)·선 4단(.06/.12/.24/.48)으로 쓴다.
- `#1e5fc7`는 **브랜드의 rest가 아니라 pressed 단계**인데 페이지가 그걸 쓴다.

**`--kd-`가 남의 라이브러리인지 확인했다.** "KDesign"을 찾으면 **금蝶(Kingdee)**의
`kingdee.design`이 나온다 — 金山이 아니다. ① 두 사이트(kingdee.design · design.ksyun.com)에
wps의 `--kd-*` 293개 중 **0개**가 있다(단, 둘 다 마케팅 셸이라 보강 증거일 뿐) ②
`--kd-color-line-public`이 `#1e5fc7` = `--wps-color-primary` — **값이 이 제품 브랜드에 배선돼
있다.** 스톡 라이브러리라면 라이브러리 기본색이 있을 자리다. 렌더 클래스도 `kdv-button`.

**넌센스 경로**: `wps.cn/zz-…`는 **진짜 404**(vars 0, 26자). 대조군 통과.

**선언 안 한 컨트롤 1개**: 파란 히어로 버튼은 캐러셀 안에 덮여 있어 hover를 **두 번 다**
못 쟀다(생포인터 / 레포 프로브 둘 다 타임아웃). rest·focus는 진짜지만 **hover를 아무도 못 본
컨트롤은 컴포넌트가 아니다.** 산문에만 적었다. ← 오늘 오후 프로브에 넣은 "못 쟀음" 출력이
바로 이 판단을 가능하게 했다.

### 후보 30개 스캔 — 살아남은 게 하나뿐인 이유

| 기각 사유 | 건수 | 예 |
|---|---|---|
| 토큰 0~10 | 12 | wechat·netease·mihoyo·csdn·douban·anta·qunar |
| **로케일 함정** | 4 | **xiaomi(`lang=ko-KR`)·popmart(`lang=ko`)·insta360(`lang=ko-kr`)·feishu(→larksuite.com)** |
| 프레임워크 | 4 | tencent(`--bs`·`--wp`)·byd(`--el`)·autohome(`--tw`)·**gitee(`--gitee-*`가 Ant Design 이름)** |
| **브랜드 접두사인데 라이브러리** | 1 | **nio — `--nio-*` 3206개가 전부 `--nio-web-register-login_lego-*`** |
| 캐치올(경로 대조군 실패) | 1 | **hisense — 아무 경로나 홈을 준다** |
| 타임아웃 | 3 | lenovo·midea·xpeng |

**nio가 새로운 모양의 함정이다.** 접두사가 브랜드 이름이어도 라이브러리일 수 있다 —
**이름의 나머지를 읽어야 한다.** `_lego`는 키트고 `web-register-login`은 페이지 모듈이다.
(`--nio-…-font-size-14 = 52px` 같은 이름/값 불일치가 결정적.) **hisense는 토큰 541개가
진짜 손으로 쓴 것처럼 보이지만**(`min(3.19444444vw, 46px)` = 1440 기준 손계산)
**넌센스 경로가 홈을 돌려줘서 보류**했다.

### 카운트 게이트가 **자기 자신의 함정을 잡았다**

티어 동기화를 돌렸더니 `verified=151`이 나왔다 — `data/reference-quality.json`이 아직
448건짜리였기 때문이다. `check-counts`와 `sync-catalog`가 **같은 파일을 읽으므로 둘이 같이
틀리고 ✓를 낸다.** → `check-counts`에 **그 파일의 `count`가 실제 디렉터리 수와 다르면 실패**
하는 staleness 가드를 넣었다. 재실행하니 3개 파일에서 **21곳**을 자동으로 고쳤다(5개 로케일).

---

## ❗ 2026-09-22 — **오늘 커밋한 deepseek 포커스 링은 크롬 것이었다.** 정정 + 게이트 추가

**`#005fcc`는 DeepSeek의 값이 아니라 크롬의 기본 `:focus-visible` 링이다.** 오늘 아침
"카탈로그 최초의 확인된 포커스 링"이라고 적어 커밋한 그 값이다. 관측(`fv=true`, outline
렌더)은 정확했고 **결론이 틀렸다 — 컨트롤을 안 돌렸다.**

`setContent`로 **작성자 스타일시트가 전혀 없는** 페이지를 만들어 맨 `<button>`·`<a>`·
`<input>`에 focus를 주면 크롬은 라이트·다크 둘 다에서 `outline: rgb(0, 95, 204) auto 1px`을
칠한다 — deepseek이 돌려준 값과 바이트 동일.

**값 안에 답이 있었다**: `auto`는 작성자가 쓰지 않는다.

| 읽은 값 | 판정 |
|---|---|
| `outline: … **auto** 1px` | 브라우저 기본 — 토큰 금지 |
| `outline: … **solid** 2px` | 작성자 (asana 토글 `#24a651`, 재확인함) |
| `box-shadow: … 0 0 0 4px` | 작성자 — **UA 링은 절대 box-shadow가 아니다** |
| focus에서도 `outline-style: none` | 작성자가 UA 링을 **껐다** (taobao·weibo) |

**왜 빠졌나**: negative 주장을 고치는 데 세션을 다 쓴 직후라 **positive 관측이 "수정이
먹혔다"로 읽혔다.** 부재에는 컨트롤을 요구하고 존재에는 안 했다. 카탈로그가 이미 손으로 두
번 걸러낸 것과 같은 부류다(cybozu `#2693ff`, ctrip `#0000ee`). → **기억에 안 맡기려고
`catalog-integrity`에 "컴포넌트 상태 슬롯에 알려진 UA 기본값이 오면 실패" 검사를 넣었다.**
전 카탈로그 스캔 결과 해당 건은 deepseek 하나뿐이었다.

### 남은 negative focus 주장 3건도 같이 끝냈다 — 그리고 **또 레포 도구를 안 썼다**

재측정은 새 하니스가 아니라 **`web/scripts/probe-component-states.mjs`(2026-09-17)**로 했다.
**상태마다 페이지를 새로 여는 구조**라 modality 오염이 구조적으로 불가능하고, focus 전에
Tab까지 넣는다. 오늘 오후에 내가 손으로 재발명한 2패스는 이 스크립트가 처음부터 갖고 있던
것의 열화판이다. 측정법 문서 §3이 말하는 실수를 그대로 반복했다.

- **pixiv** — `rgba(0,150,250,.32) 0 0 0 4px`. **Primary·Default·Icon 세 버튼이 같은 값** →
  Charcoal의 `FocusRing`이 추론에서 관측으로 바뀌었다. claims 120 → **123**.
  (겸사겸사 `button-default` claim이 가리키던 소스를 `react-button--primary` 스토리에서
  실제로 그 값들이 나오는 `react-button--default` 스토리로 바로잡았다.)
- **zhihu** — `rgb(255,255,255) 0 0 0 2px, oklch(0.581758 0.21381 259.318 / .3) 0 0 0 4px`.
  hue·chroma가 hover와 정확히 같고 lightness만 한 단계 위다. **36px 사각 버튼과 60px 둥근
  코너 위젯이 같은 링**을 쓴다. claims 54 → **56**.
- **asana** — 버튼은 UA 링이라 **토큰 없음**. 토글의 `#24a651`은 `solid 2px`로 재확인 → 진짜.

**스크립트도 세 군데 고쳤다**: box-shadow 54자 절단(포커스 링이 잘려 "흰 테두리"로 읽혔다) ·
상태 하나의 실패가 프로세스를 죽여 **focus까지 같이 잃던 것**(zhihu 코너 버튼은 덮여 있어
hover가 타임아웃한다) · 요소를 못 찾은 상태가 조용히 사라지던 것. 못 잰 상태는 이제
**"못 쟀음"으로 출력에 남는다 — 부재와 같은 칸에 적지 않는다.**

---

## 🔧 2026-09-22 — weibo focus 재측정, 그리고 **인덱스는 엘리먼트가 아니다**(3차 결함)

**weibo는 틀린 주장을 한 게 아니라 유보하고 있었다** — "focus 신뢰할 수 없음". 그 유보를
실측으로 바꿨다. 두 선언 컴포넌트 모두 `:focus-visible`=true인데 **속성이 하나도 안 바뀐다**
(`outline-style: none` 유지). claims 54 → **56**, 여전히 verified_v2 · reason/advisory 0.

**3차 결함 — 셀렉터를 패스마다 다시 평가하면 다른 노드가 온다.** weibo 재측정 1차에서
컨트롤 [4]가 클래스(`woo-button-flat`→`woo-button-line`)·크기(160×34→64×28)·배경까지
바뀌어 돌아왔다. **weibo 홈은 리렌더링된다.** element handle로 고정하고 매 판독마다
(class, width, height) 동일성을 찍게 하니 다섯 컨트롤 전부 안정. taobao에서 인덱스로도
맞았던 건 정적 페이지였기 때문이고, 모든 속성이 일치한 것이 그 증거였다.

**이번 실행에서는 hover가 안 잡혔다**(`:hover`=false, 컨트롤 5개 중 4개). 그래서
hover·pressed(`#ff5900`)는 **건드리지 않았다** — 원래 판독이 유효하다. 재현 실패는 반증이 아니다.

**남은 negative focus 주장**: pixiv 1 · asana 1 · zhihu 2.

### 티어 카운트가 이제 게이트에 들어갔다 (수동 동기화 7회로 끝)

`check-counts`는 `N references`만 봤고 `verified_v2 N`은 안 봤다. 규칙을 추가했다:

- **EN은 숫자가 앞**(`151 verified_v2`), **CJK는 뒤**(`verified_v2 151개` · `151 份` ·
  `legacy snapshot 113件`) → 티어마다 양방향 규칙.
- 후위형에 `(?![\d/-])` — README의 `legacy 13/15/16-section`(포맷 버전 나열)을 걸러낸다.
  **클래스에 `\d`가 꼭 들어가야 한다**: 없으면 엔진이 "13"에서 "1"로 백트래킹해서
  `legacy 1`이라고 보고한다(실제로 그렇게 나왔다).
- `web/src/data/cli-docs.ts`를 감시 대상에 추가(5개 로케일 카피가 여기 있다) → 11개 표면.
- `sync-catalog.mjs`에도 같은 규칙을 넣었다. 에러 메시지가 그 스크립트를 가리키므로
  **탐지만 하고 고치지 못하면 안내가 거짓말이 된다.**

세 곳(KO 후위·EN 전위·ZH 후위)에 드리프트를 심어 탐지·치유 양쪽을 확인했다. 986 tests pass.

---

## ✅ 2026-09-22 — taobao 등재(**첫 CN 커머스**), 그리고 focus 측정법이 한 번 더 틀렸다

**448 refs · 151 verified.** taobao claims 43/43 · 컴포넌트 2/2 stated ·
**reasonCodes·advisoryCodes 둘 다 0**. CN 레퍼런스 12개 중 커머스는 처음이다.

**측정법 결함 2차.** 1차 수정(컨트롤 안에서 마우스보다 focus 먼저)은 **충분하지 않았다.**
컨트롤 [0]에서 mousedown이 한 번 일어나면 Chrome의 modality가 페이지 전체에서 포인터로
바뀌고, 그 뒤 컨트롤 [1]에 건 프로그램적 `.focus()`는 `:focus-visible=false`를 돌려준다.
**오염이 컨트롤 경계를 넘는다.** rest·focus를 **모든** 컨트롤에 대해 먼저 읽고(마우스 이동
0회) 그다음에 hover·press를 도는 2-패스로 바꾸니 **두 컨트롤 다 `fv=true`**.
→ 앞 항목의 "weibo·taobao 일부는 여전히 false"는 **taobao에 관해서는 프로브 아티팩트였다.**
   **weibo도 같은 순서로 쟀으므로 focus 주장을 재확인해야 한다**(미처리).

**taobao는 상태가 진짜로 없다.** 두 주황 버튼 모두 rest/hover/press/focus가 17개 속성
전부 바이트 동일하다(bg·bgImage·fg·border·radius·shadow·filter·transform·opacity·
outline·text-decoration…). `:hover`가 true인 상태에서 읽었으므로 놓친 게 아니라 **없는**
것이다. `:focus-visible`은 true인데 `outline-style: none` — 포커스는 인식되고 아무것도
그리지 않는다. 관측으로 기록했다.

**nonsense-path 컨트롤이 네임스페이스를 알려줬다.** `/zz-this-does-not-exist`는 홈이 아니라
`error.taobao.com/**tbpc**/error.html`로 간다 — 경로 이름이 곧 `--tbpc-*`(TaoBao PC)이고,
에러 페이지에도 같은 토큰 3개가 살아 있다. `world.taobao.com`은 **28개 키·값이 바이트 동일** →
페이지 지역 override가 아니라 브랜드 전역 세트.

**버린 것**: `s.taobao.com/search`는 200이지만 본문 160자·제목 없음(zhipu와 같은 모양).
거기에만 있는 `--tbpc-layout-page-margin-*`는 6단계가 값 2개로 뭉치고
`--tbpc-split-main-width`가 **뷰포트 폭과 정확히 같아서** 실행시점 값이다 → `spacing` 없음.
서체 토큰 없음·webfont 없음(system-ui / PingFang SC) → `family` 없음.

**부수 작업**: 티어 카운트를 5개 로케일 전부에서 448/151로 맞췄다(EN·KO·JA·ZH-CN·ZH-TW).
`check-counts`는 `N references`만 보고 `verified_v2 N`은 보지 않는다 — **이번이 7번째 수동
동기화**다. 다음 커밋에서 게이트에 넣는다.

---

## ✅ 2026-09-22 — CN 웨이브 2 착수: deepseek 등재, **후보 3건이 검증에서 탈락**
→ `docs/CN_WAVE1_CANDIDATES_2026-09-22.md`(웨이브1) · 웨이브2 프로브는 scratchpad

**447 refs · 150 verified.** deepseek claims 59/59 · 컴포넌트 2/2 stated · reasonCodes 없음.

**deepseek은 지금까지 잰 CN 브랜드 중 시스템이 가장 완전하다** — `--ds-*` 82개:
색 37(bg/border/text/brand) · **버튼 21(4개 변형 각각 bg·border·text·hover)** ·
radius 6 · spacing 13(4→240px) · **font-sans/body/mono**. CN 레퍼런스 중 **유일하게 서체
토큰을 선언**한다(DM Sans · Fragment Mono) — 나머지는 전부 시스템 스택이라 family를 비웠다.

**토큰과 렌더가 또 일치했다.** `--ds-btn-secondary-bg hsla(0,0%,100%,.4)`와
`-secondary-border rgba(9,45,78,.18)`가 실측 rest와 정확히 같고, `-secondary-hover-border`
`rgba(9,45,78,.36)`이 실측 hover `#092d4e`로 합성된다.

> **포커스 링을 처음으로 잡았다.** 순서 수정(마우스 전에 focus) 후 deepseek 보조 알약에서
> `:focus-visible=true`와 `#005fcc` outline이 관측됐다. 수정이 실제로 동작한다 —
> 다만 모든 사이트에서는 아니다(weibo·taobao 일부는 여전히 false).

**후보 검증에서 3건이 떨어졌다**(자문 지적 전부 적중):
- **shein** — `shein.com`이 **`kr.shein.com`으로 리다이렉트**("SHEIN KOREA"). 앞서 잰 51개
  토큰은 **한국 사이트** 것이다. xiaomi와 같은 함정. 게다가 **본사가 싱가포르**라
  국가 규칙상 CN이 아니다. **CN 웨이브에서 제외.**
- **zhipu** — 45초 타임아웃. 앞서 본 160 vars는 느린 부분 로드였다. 신뢰 불가.
- **iqiyi** — 토큰 107개는 진짜 자기 것(`--vipForegroundColor`·`--blockBackColor` 등 손으로
  이름 붙인 것)인데 **측정 가능한 컨트롤이 0개**이고 서체는 HarmonyOS Sans(플랫폼).
- kuaishou·pinduoduo·didi·toutiao·neteasemusic·moonshot·oppo — 토큰 0~10.
  (oppo는 **자체 서체 `OPPOSans-Ver2`**를 쓰는데 토큰이 없다.)

**웨이브 2는 웨이브 1보다 얇다.** 남은 실착수 후보는 taobao(`--tbpc-*` 28, 컨트롤 2개)뿐이다.

---

## 🧪 2026-09-22 — ego lite 검증 통과, **로그인 월 계획은 무산**, focus 주장 6건 정정

**known-answer 테스트가 제값을 했다.** 첫 실행이 커밋된 weibo와 어긋났다(`#ea8011` vs `#ff8200`) —
컬러 매니지먼트 버그의 모양이었는데 **아니었다.** macOS가 다크 모드이고 ego lite가 OS의
`prefers-color-scheme`을 상속한다. **Playwright를 dark로 돌리니 바이트 단위로 재현** →
두 엔진은 동등하다. 내가 잰 건 weibo의 다크 테마였다.

`page.cdp("Emulation.setEmulatedMedia")`로 스킴을 강제하게 했고 재실행 결과
**토큰 4/4 · own-namespace 309=309 · body 동일**. ego lite는 검증됐다.

**그런데 로그인 월 계획은 무산이다.** 다섯 표적 전부 **로그아웃 상태**다 —
pixiv·weibo·douyin·zhihu·asana. 오너가 이 CN 사이트들 계정이 없다(당연하다). **계정 생성·로그인은
내가 하지 않는다.** ego lite의 간판 이점은 **오너가 실제로 쓰는 사이트에서만** 유효하다.

**focus 주장 6건을 정정했다**(pixiv·asana·weibo·zhihu, 10곳). "focus 변화 없음"을 전부
**"신뢰성 있게 측정되지 않음, 어느 쪽도 주장하지 않음"**으로 바꿨다.

> **사후 확인이 진단을 양방향으로 확정했다.** 내가 실제로 잡은 focus 값은 **전부 폼 컨트롤**
> (switch·checkbox·toggle·input)이거나 `:focus-visible`이 아닌 평범한 `:focus`를 쓰는 곳
> (ctrip 로그인 알약)이다. 명세상 폼 컨트롤은 입력 양식과 무관하게 매칭되고 버튼은 아니다 —
> **관측한 것은 휴리스틱이 양식을 안 따지는 종류, 놓친 것은 따지는 종류.** 정확히 들어맞는다.

ego lite는 **순서 수정 후에도** `:focus-visible`을 못 띄웠다. 하네스가 `focused`·`focusVisible`을
별도로 기록하고, **"자동화에서 링이 안 떴다"≠"포커스 스타일이 없다"**를 주석에 박아뒀다.

---

## 🔧 2026-09-22 — ego lite 도입(오너 승인) + **내 측정 방법의 결함 실측**
→ `docs/MEASUREMENT_METHOD_2026-09-22.md` · `docs/EGO_LITE_SETUP_2026-09-22.md`

**먼저: 내 포커스 측정이 틀렸다.** 레포의 `probe-component-states.mjs`가 9월 17일부터
경고하던 것을 실측으로 확인했다 — **마우스로 누른 뒤 `.focus()`를 부르면 `:focus`는 true인데
`:focus-visible`이 false**라 링이 안 뜬다. 내 순서가 정확히 그거였다(park→hover→**press**→focus).
→ **긍정 관측은 유효**(pixiv 4·sendbird 8·ctrip 2 등), **"focus 변화 없음" 6건은 무효**
(pixiv·asana·weibo·zhihu). 팔레트·등급엔 영향 없다.

**실측으로 기각한 것들**(만들 뻔했다): Shadow DOM(4개 사이트 전부 0) · 컴포넌트 스코프
토큰(1개, 빌드 해시) · CSS Typed OM(getComputedStyle과 출력 동일) · iframe(0).

**ego lite 설치 완료, 온보딩만 오너 대기.** `/Applications/ego lite.app` v0.5.1.11 ·
`~/.local/bin/ego-browser` · 스킬 설치됨. `install.sh` 234줄 읽고 실행했다 —
**Gatekeeper 격리 속성을 벗긴다는 점**은 명시해 둔다. 온보딩에서 Chrome 로그인 데이터
가져오기를 묻는데 **그건 오너가 정할 일**이라 멈췄다.

**하네스**(`web/scripts/probe-surface-ego.js`)에 세 수정을 코드로 박았다 — 포커스는 **실제
Tab**으로, 선언값·렌더값 **둘 다** 덤프(krds 채널당 1 차이 때문), 네임스페이스 **미병합**.
개인정보 규칙도 코드에 있다: **토큰·기하만, 텍스트는 안 읽음**, `OMD_ALLOW_TEXT`는
인증돼 보이는 페이지에서 자동 거부, 출력에 `looksAuthenticated` 기록.

---

## ✅ 2026-09-22 — **CN 웨이브 1 완료: 5/5 전원 verified, 결함 0**

**441 → 446 · verified 144 → 149 · CN 5 → 10.** 다섯 건 모두 `reasonCodes` 비어 있다.

```
weibo   54/54  comps 2/2/2      ctrip  63/63  comps 3/3/3
huawei  50/50  comps 0/0/0      douyin 29/29  comps 0/0/0
zhihu   54/54  comps 2/2/2
```

**컴포넌트 0 선언이 실제로 동작한다.** huawei·douyin은 토큰이 풍부한데(339 `--hwp-*` / 424)
어느 컨트롤도 hover·press·focus에 반응하지 않았다. **선언하지 않았고 verified로 갔다** —
"측정한 만큼만 선언한다"가 게이트 우회가 아니라 정상 경로임을 확인.

**브랜드별 발견**
- **weibo** — 선언 토큰 `--w-b-flat-primary-bg-hover #ff5900`과 실측 hover가 **독립 일치**.
  473개 중 309개만 weibo 것이고 나머지에 **GitHub prettylights 테마**가 섞여 있었다.
- **ctrip** — **3계층 토큰 시스템**(core 286 / smtc 86 / comp 30), 카탈로그 최고 성숙도.
  그런데 **자기 홈페이지가 시스템 밖**(`#0086f6`·`#f2f8fe`·`#2953d6` 미선언).
- **huawei** — **13단 헤드라인 스케일**을 발행하는데 홈은 `15.64px`·`15.3px` 같은
  **root-relative 분수 크기**를 렌더한다. 시스템과 앞면이 서로 다른 기반 위에 있다.
  미사용 원시 램프 7계열(yellow·rose·pink·mint·cyan…)은 "존재 증거"로만 기록.
- **douyin** — **`gift-*` 19 · `pk-*` 18** 토큰 계열. 가상 선물과 PK 배틀이 자체 토큰 패밀리를
  가질 만큼 디자인 비중이 있다 — **회사가 무엇으로 돈을 버는지가 토큰에 적혀 있다.**
  텍스트를 회색 값이 아니라 **흰색 알파(.9/.75/.34)**로 표현해 영상 위에서 읽히게 한다.
- **zhihu** — `Map*` 시맨틱을 **`_light`/`_dark` 쌍으로** 발행하고, **VIP 금색 `#ce994f` ·
  SVIP 남색 `#142457`**이 별도 브랜드 색이다. 유료 등급이 시각적 1급 개념이다.
  hover가 **`oklch()`·`color(srgb …)`** — 카탈로그 유일. **hex로 변환하지 않고 원문 기록**
  (oklch는 sRGB로 무손실 왕복이 안 되고, hex를 쓰면 없는 정밀도를 주장하게 된다).

**게이트를 하나 고쳤다 — 라이브 버그였다.** `zhihu.com`이 `PLATFORM_HOSTS`에 있어
**zhihu 자신의 홈페이지가 zhihu의 proof gate에서 탈락**했다. 규칙의 취지는 "남의 플랫폼에 올린
글을 브랜드 증거로 쓰지 말라"인데 **주체가 그 플랫폼일 때는 뒤집힌다.** `isBrandOperatedAccount`가
레퍼런스 자신의 homepage 호스트를 받아 같은 호스트면 통과시키도록 좁게 수정했다.
`note`(note.com) · `velog`(velog.io, **proof gate 컷오프에 정확히 걸쳐 있다**)가 이미 같은 모양이라
가설이 아니라 실재하던 버그다.

**후보 선정에서 걸러낸 것**: xiaomi(`mi.com`이 **한국 사이트** 서빙, CN 표면은 vars 0) ·
tencent(WordPress+Bootstrap) · byd(Element UI) · jd·netease·lenovo·haier(vars 0~4).

---

## 🎉 2026-09-22 — CN 웨이브 1 #2: **ctrip — 카탈로그에서 가장 성숙한 토큰 구조**

**443 refs · 146 verified.** claims 63/63 · 컴포넌트 3/3 stated · **reasonCodes·advisory 모두 0**
(weibo에 이어 2연속 무결함).

**3계층 토큰 시스템을 발견했다** — 이 카탈로그에서 본 것 중 가장 성숙하다:
```
core*  286  원시값     coreColorBlue1-5 · Gray1-9 · Orange1-5 · Green1-4 · Bluegray3-9
smtc*   86  의미역할   smtcColorTextBrand · smtcColorBgFavorite · smtcColorBgStarRating …
comp*   30  컴포넌트   compHotelMapActiveLine · compSearchBoxCalendarHighlight …
```
파랑 램프 5단 중 **1·3·4·5단이 각각 명명된 의미 역할을 갖는다** — 원시값과 의미가 배선돼 있다.
색을 **범주로** 쓴다: 파랑=인터랙티브 · 주황=긴급(notice와 discount가 **같은 토큰**) ·
금색=별점 · 빨강=즐겨찾기.

**그런데 자기 홈페이지가 시스템 밖이다.** `hotels.ctrip.com` 검색 버튼은 `#006ff6`으로
`coreColorBlue1`과 정확히 일치하는데, `ctrip.com`은 `#0086f6`·`#f2f8fe`·`#2953d6`을 렌더하고
**셋 다 같은 페이지가 로드한 404개 프로퍼티 어디에도 없다.** 평균 내지 않고 양쪽 다 기록했다 —
팔레트는 선언된 시스템, off-system 값은 실측 컴포넌트에만.

**브라우저 기본값을 또 만났다**: 앵커 하나가 rest `#0000ee` / press `#ff0000`을 냈는데
**크롬의 기본 링크·활성링크 색**이다. 기록하지 않았다. cybozu의 `#2693ff` 포커스 링과 같은 계통.

---

## 🎉 2026-09-22 — CN 웨이브 1 #1: **weibo 신규 등재, 결함 0으로 verified**

15개 브랜드를 실측해 고른 5건 중 첫 번째. **카탈로그 441 → 442 · verified 144 → 145.**

```
claims 54/54 (coverage 1.00) · components 2/2 interactive **2 stated**
reasonCodes []  ·  advisoryCodes []      ← 이번 세션에서 유일하게 자문까지 0
```

**토큰과 렌더가 서로를 확인했다.** `--w-b-flat-primary-bg-hover`가 `#ff5900`이고 두 컨트롤의
실측 hover가 정확히 `rgb(255,89,0)`이다 — 선언된 토큰과 렌더된 상태가 독립적으로 일치.

**473개 중 309개만 weibo 것이다**(`--w-*` 190 · `--feed-*` 50 · `--weibo-*` 44 · `--chaohua-*` 15).
나머지에 **GitHub의 `--color-prettylights-syntax-*`**(임베드된 서드파티 스타일시트)가 섞여 있다 —
네임스페이스를 안 봤으면 GitHub 테마를 weibo 토큰으로 기록했을 것이다.

**`open.weibo.com`은 토큰 출처로 쓰지 않았다.** CTA가 `#fa8c16`→`#e67e15`인데 `#fa8c16`은
**Ant Design orange-6**이다. weibo 도메인 위의 범용 개발자 포털은 여전히 범용 포털이다.
proof gate용 두 번째 지역 Tier-1로만 인용했다(CN은 브랜드 소유 지역 출처 2개 필수).

서체는 **비웠다** — 본문 스택 첫 항목 `QuoteFallback`은 pixiv의 `win-bug-omega`와 같은
**존재하지 않는 sentinel**이고 실제로는 OS 서체로 떨어진다. 시스템 폰트 승격 금지.

**게이트가 가르친 CREATE 절차 2건**: ① `data/reference-fingerprints.json`에 항목 추가 +
**삼중 미러**(`data/` · `.claude/data/` · `.codex/data/`) ② `sync-catalog`이 끝에 테스트를 돌려
티어 카운트 불일치로 실패한다. **`signature_motion`은 비웠다** — 모션 토큰이 0개였고,
44개 기존 항목이 이미 비어 있어 선례가 있다.

> **다음 브랜드 주의**: `zhihu.com`은 `PLATFORM_HOSTS`에 있다. zhihu 레퍼런스를 만들 때
> **자기 홈페이지가 `isBrandOperatedAccount`에서 탈락**한다 — 계정 경로가 없는 bare host라서.
> 게이트가 "남의 브랜드가 계정을 갖는 플랫폼"으로 취급하기 때문이고, 주체가 zhihu 자신일 때는
> 맞지 않는다. 착수 전에 처리 방법을 정해야 한다.

---

## 🧱 2026-09-21 — sendbird: **완전한 컴포넌트 라이브러리로도 verified에 못 간다**

스윕이 찾은 `sendbird.github.io/sendbird-uikit-react`(38스토리·18컴포넌트·**90개 `--sendbird-*`**)로
sendbird를 처리했다. **`legacy_snapshot` → `partial`**, evidenceCoverage **0 → 1.00**(137/137),
stated 7/10.

**6월 값이 정확히 맞았다.** 선언 16색 중 **10개가 published `--sendbird-*` 토큰**이고 위치 이름까지
대응한다: `primary`=`light-primary-300` · `primary-hover`=`light-primary-400` ·
`primary-active`=`light-primary-500` · `error`=`light-error-300`.

**`prose-derived` 라벨도 틀린 게 아니었다.** 6월 패스는 UIKit **소스**(Android `colors.xml`,
컴포넌트 SCSS)에서 값을 읽었고 그건 전사(transcription)다. 오늘 같은 값을 **렌더된 DOM에서** 읽었기
때문에 비로소 `live-extract`가 참이 됐다 — 라벨이 틀렸던 게 아니라 **방법이 바뀐 것**이다.

> **구조적 발견**: 그런데도 **verified가 아니다.** 상태가 없는 3개(`cta-dark-pill`·
> `cta-outline-pill`·`input-newsletter`)가 전부 **마케팅 사이트 컴포넌트**이고 UIKit 스토리북이
> 다루지 않는다. **완전한 컴포넌트 라이브러리도 충분하지 않다** — 레퍼런스가 제품 시스템과
> 마케팅 표면 **두 도메인을 섞어 문서화**하면, verified_v2는 양쪽 모두의 상태를 요구한다.
> asana가 반대 방향에서 같은 벽에 부딪혔다(마케팅은 다 쟀는데 사라진 컴포넌트 1개가 막았다).

계측기 규율 한 건 더: 마케팅 사이트에서 잡힌 컨트롤이 **쿠키 동의 배너**였다(`#0d0d0d` 24px 알약 —
공교롭게 선언된 `cta-dark-pill`과 일치). **수락하지 않고 CSS로 숨겼고** 값도 기록하지 않았다.
동의 위젯은 브랜드 컴포넌트가 아니다.

---

## 🔭 2026-09-21 — ①b GitHub 스윕: **깊이 가설이 틀렸다는 것을 측정했다**
→ `docs/SURFACE_SWEEP_2026-09-21.md` §5

297개 홈페이지 → GitHub org 69개/77 → design 계열 repo 40개 → **스토리북 2개**(실질 신규 1건,
`sendbird` 56 스토리). homepage 정규식이 틀린 것도 알려진 정답으로 검증해 고쳤지만 **결과는 같았다.**

**핵심 수치:**
```
공식 디자인 시스템(ds.url) 선언 비율
   verified_v2  65/141 = 46%
   미검증       21/297 =  7%      ← 6.5배
```

**pixiv·smarthr·cybozu가 숨은 스토리북을 가진 건 대표성이 없었다.** 카탈로그는 디자인 시스템을
운영하는 기술 회사를 **이미 다 걷어갔고**, 남은 297건은 consumer-tech 88·fintech 43·ecommerce 30
등 애초에 발행하지 않는 브랜드가 대부분이다.

→ **계획 수정**: 도달 가능한 것은 297이 아니라 **약 9건**(①a 8 + ①b 1). 기존 카탈로그의 깊이
상한은 낮고, **표면 없는 브랜드의 `partial`은 틀린 상태가 아니다**(cybozu·paypay). 남은 예산은
**③ 확충**으로 간다 — 확충은 디자인 시스템을 발행하는 브랜드를 **고를 수 있다**.

`web/dbg.tmp.mjs` 삭제(09-17 디버그 잔재, 참조처 없음 — 오너 확인 완료).

---

## ⚖️ 2026-09-21 — asana: 스윕이 찾은 표면으로 **증거 1.00**, 그래도 `partial`

스윕 ①이 찾아낸 `storybook.asana.com`(**526 스토리 / 215 컴포넌트**)으로 asana를 처리했다.
**evidenceCoverage 0 → 1.00**(160/160) · stated 6/8 · Tier-1 5. 그런데 **verified가 아니다.**

**6월 값이 정확했다.** 선언 20색 중 **18개가 published swatch이거나 라이브 커스텀 프로퍼티**다.
다만 이름이 달랐다 — asana는 위치로 이름 붙인다: `sky`=**blue 0** · `violet`=**blue 1000**
(하나의 램프 양끝이지 다른 색이 아니다) · `hairline`=**black 100** · `border-muted`=**black 600**.

**중요**: `asana.com` 자체가 **스토리북과 같은 353개 커스텀 프로퍼티**를 resolve한다
(`--lightmode-*` 62 · `--darkmode-*` 62 — **다크 테마를 발행하지만 이번에 측정 안 했고 주장도 안 한다**).

**버튼 hover가 전부 published black 램프의 한 칸**이다(`black 600`·`100`·`50`·`20`).
호버 계약이 "중립 램프를 몇 칸 이동"이지 버튼마다 다른 색이 아니다. press·focus는 변화 없음.

**스토리북이 라이브와 어긋나는 경우를 만났다** — 스토리북 버튼 스토리는 `radius 3px·h48`,
라이브는 `100px·h64`. **제품 표면이 이긴다.** 스토리북 값은 반입하지 않고 모순으로 기록했다.

**막힌 이유가 정직하다**: 인터랙티브 8개 중 2개에 관측된 상태가 없다 —
`button-hero-accent`(오늘 표면에 없음) · `input-default`(인증 로그인 화면). 형식 문제가 아니라
**관측하지 못한 것**이라 `partial`이 맞다.

> **교훈**: 풍부한 표면을 찾아도 verified_v2는 **모든** 인터랙티브 컴포넌트의 상태를 요구한다.
> 사이트가 바뀌어 선언된 컴포넌트가 사라지면 그 하나가 전체를 막는다.

---

## ✅ 2026-09-21 — 셀렉터 depth UI: **뱃지를 개수가 아니라 증거에 걸었다**

`/api/references`가 컴포넌트 깊이를 데이터로만 들고 있던 것("how the selector shows it is a
separate choice")을 UI로 마감했다. **Depth 정렬 모드 + STATES 뱃지 + `statedComponents`·
`qualityTier` 노출.**

**설계에서 한 번 틀릴 뻔했다.** 처음엔 `statedComponents >= 4`(17건)로 뱃지를 걸려 했는데,
재보니 **17건 중 verified_v2는 3건뿐**이고 가장 깊어 보이는 **github(37/15/14)이
`legacy_snapshot`**이다 — 산문이 `hover:`를 쓴 것일 뿐 관측이 아니다. 그대로 갔으면
**"상태 키를 가장 많이 적은 레퍼런스"에 뱃지를 달 뻔했다.** 오늘 cybozu가 가르친
"선언 ≠ 관측"이 그대로 재현됐다.

→ 게이트를 **`verified_v2` AND `stated >= 2`**로 바꿨다(**441 중 20건**). verified_v2는 모든
토큰 경로가 실제 관측 method(`live-inspect`/`computed-style`)를 가진 클레임을 요구하므로
산문이 통과할 수 없다. 정렬도 같은 원칙 — **측정된 6컴포넌트가 산문 37컴포넌트를 앞선다.**

**부수로 접근성 결함 3건을 고쳤다(기존 결함).** 뱃지 유리가 타일 색 위에 합성돼 밝은 타일에서
흰 글씨가 사라진다: **HOT 2.22:1**(배민 청록) · **HOT 2.47:1**(당근 주황) · **NEW 2.93:1**(Serendie).
세 종류 전부 **불투명 베이스**를 깔아 타일과 무관하게 **HOT 4.60 · NEW 4.58 · STATES 6.27**로
올렸다(9px 소문자 대문자 텍스트라 AA 4.5 필요).

`/builder` 워크 완주: Home → `/builder` → Depth → 뱃지 카드 → preview(32KB), 콘솔 에러 0.

---

## ⚖️ 2026-09-21 — cybozu: 증거는 붙였지만 **verified로 올리지 않았다** → §9

6월 세션이 실측은 했으나 구조로 남기지 않아 `verification_v2_missing` 하나만 걸려 있었다.
오늘 두 표면을 재측정해 **선언 20색이 전부 유효함을 확인**하고 `verification_v2`를 붙였다 —
**evidenceCoverage 0 → 1.00**(114/114). 색·타이포는 `captured 2026-09-21`, 컴포넌트는
`2026-06-17`(6월 캡쳐 근거)로 **날짜가 무엇에 기대는지 말하게** 했다.

**상태는 일부러 안 적었다.** 라이브 마케팅 페이지에서 hover/press/focus를 재보니 셀렉터가
528px 컨테이너를 잡고, CTA는 래퍼라 `#231200 on #333333`이 나오고, focus에서 페이지가 이동했다.
그리고 돌아온 focus 색은 **크롬 기본 포커스 링 `#2693ff`**였다. 적으면 브라우저 기본값이
브랜드 사실이 된다 → `interactive_state_missing`을 남기고 **`partial` 유지.**

**경계 하나 발견**: `kintone-ui-component` 스토리북(106 스토리)은 상태가 깨끗이 측정되지만
값이 **파랑 `#3498db`** 계열로 이 레퍼런스의 kintone 노랑과 겹치지 않는다. 모순이 아니라
**앱 커스터마이즈용 라이브러리 = 세 번째 증거 도메인**이라 가져오지 않았다.

> **선언값이 가장 정확했던 cybozu(20/20)가 등급은 가장 낮다.** 뱃지는 값의 정확도가 아니라
> **증거의 재확인 가능성**을 재기 때문이고, 그게 의도된 동작이다.

---

## ✅ 2026-09-21 — smarthr도 `verified_v2`: **선언된 primary가 버튼색이 아니었다**
→ `docs/JP_DEPTH_2026-09-21.md` §7–§8

pixiv와 같은 파이프라인으로 smarthr 완료. **카탈로그 144 verified / 183 partial / 114 legacy.**

```
claims 124/124 · components 8 · interactive 7 · stated 6 · Tier-1 4 · reasonCodes []
```

**핵심**: 선언된 `button-primary #00C4CC`는 **브랜드 아쿠아이지 버튼 색이 아니다** — 실제
primary는 `#0077c7`(`--color-bg-blue`). 그리고 **시맨틱 4색이 계열째 틀렸다**:
`success`는 초록(`#3DCC65`)으로 선언됐지만 실제로는 **틸 `#0f7f85`**이고, 그 값은 레퍼런스가
`aqua-dark`로 이미 따로 갖고 있던 색이다. `error #e01e5a` · `warning #ffcc17` · `info #0077c7`.
`button-text`의 fg로 적혀 있던 `#0F7F85`는 **success 색**이었고 링크는 `#0071c1`이다.

**구조가 pixiv와 다르다**: smarthr-ui는 커스텀 프로퍼티를 발행하지 않고 Tailwind `shr-`
유틸리티로 컴파일한다 → `:root` 한 번이 아니라 **스토리별 실측**. `components-button--variant`
하나가 변형 6개를, `components-statuslabel--type`이 시맨틱 전부를 렌더한다.

**서체는 비웠다** — family 토큰이 없고 세 표면(컴포넌트 `system-ui` · 문서 `SDSYuGothic` ·
마케팅 `AdjustedYuGothic`)이 서로 다르다. 시스템 폰트 승격 금지 규칙대로 `uiFont`는 null.

**§7의 교차확인을 1단위 정정**: `--color-light-grey-1 #d6d3d0`은 컴포넌트와 정확히 일치하지만
`--color-text-black`은 문서 `#23221f` vs 컴포넌트 `#23221e`로 **파랑 채널이 1 다르다.**
평균 내지 않고 컴포넌트 값 채택 + 문서 값은 Conflict Matrix에 보존.

---

## ✅ 2026-09-21 — pixiv: 선언 팔레트가 **머티리얼이었다**, `legacy_snapshot` → `verified_v2`
→ `docs/JP_DEPTH_2026-09-21.md`

JP 깊이 목록을 재개하며 smarthr를 1순위로 잡았다가 **네임스페이스를 측정하고 순위를 뒤집었다.**
`smarthr.design`은 398 props 중 **355개가 `--tw-*`**(문서 사이트 = Tailwind, PayPay와 같은 계통)인데
**pixiv는 제품 도메인 `pixiv.net`이 `--charcoal-*` 토큰을 328개 발행한다.**

> 기준 변경: JP 깊이 순위는 **"자기 네임스페이스 토큰이 제품 표면에 실재하는가"**로 정렬한다.

**그리고 깊이가 아니라 정확성 문제였다.** 선언된 24색 중 역할까지 맞는 것은 9개이고,
`success #4caf50`·`warning #ff9800`·`premium-gold #ffb300`은 **머티리얼 디자인 기본값**
(Green 500 · Orange 500 · Amber 600)이다. 실제 charcoal은 `#b1cc29`·`#ffaf0f`·(없음)이다.
버튼도 `radius: 6`으로 선언돼 있는데 **charcoal 버튼은 알약(`999999px`)**이다.

```
claims 120/120 evidence (coverage 1.00) · sources 8 · surfaces 3 · Tier-1 3
components 6 · interactive 5 · stated 5 · reasonCodes []
카탈로그 142 → 143 verified_v2 / 183 partial / 115 legacy
```

내린 것: 머티리얼 3색 · 일반 그레이 램프 10단 · `primary-tint` · `dark-raised` · `SF Mono` ·
secondary/follow/premium 버튼 변형 · 그림자 5단(§6은 산문 유지 + **미측정 명시**) · spacing 48px.
`family.sans`는 charcoal 선언값 `Noto Sans CJK JP`로 두고, 제품 본문이 `win-bug-omega, system-ui, …`
로 **OS 서체에 떨어진다는 사실은 §3 산문으로만** 적었다(시스템 폰트 승격 금지 규칙).

**계측기 오류 3건을 스스로 잡았다**: ① 스타일시트 열거가 라이트/다크를 섞어 `brand-hover`를
`#1fa3fb`(다크)로 읽음 → `getComputedStyle(:root)`는 `#0090f0`. 394개 중 **223개가 테마별로 다르다.**
② 값 인덱스가 만든 이름 `--charcoal---pixiv-brand-color-highlight`로 조회해 `(unset)`을 얻고
**"날조"로 분류** → 실제 토큰은 `--pixiv-brand-color-highlight = #0086e0`으로 **선언값이 옳았다.**
**조회 실패는 부재의 증거가 아니다.** ③ 스토리북의 **0×0 "Set string" 버튼**을 컴포넌트로 잡아
hover가 30초 타임아웃 — serendie의 탭-크롬 오인과 같은 계통.

부수로 **카운트 드리프트**도 정리: `cli-docs.ts` 5개 로케일(개/件/份/个 계수사 포함)과
`layout.tsx`·`llms.txt`가 **440/141/159/140**으로 멈춰 있었다 → 441/143/183/115.

---

## 🛑 2026-09-21 — paypay 깊이 보정: **재보니 손대지 않는 것이 맞다** (`3d9d7c37`)

JP 깊이 3순위. 자체 표면을 실측한 뒤 **아무것도 바꾸지 않기로** 했다.

```
선언 팔레트 19개 중 관측 5개  (primary #ff0033·canvas·gray-400/500/700)
미관측 14개: pressed/deep/tint/disabled · ink #222222 · success/error/warning/info
             · point-gold · gray-50/100/200/300
선언 안 됐는데 많이 칠해짐: #242323×2770 · #696969×288 · #3895ff×198
선언 서체 Noto Sans JP는 두 표면 어디에도 없다 (Hiragino Kaku Gothic ProN / -apple-system)
```

**그런데 이걸 "틀렸다"고 하면 그게 오류다.** PayPay는 주로 **모바일 앱**이고 pressed·disabled·
success·point-gold·그레이 램프는 **앱 값**이지 마케팅 웹에 나올 것이 아니다. 앱 스타일가이드가
문서화하는데 **그건 이미지다**. 즉 **"웹에서 미관측"은 "값이 틀렸다"가 아니라 "웹은 앱 디자인
시스템을 검증할 표면이 아니다"**이다. 제품 웹 표면은 없다(`/app/` 404 · `card.` 에러 ·
`paypay-bank.co.jp`는 **다른 법인**).

**그리고 건드리면 더 나빠진다.** paypay는 `verified: 2026-06-06`으로 measured-tokens
컷오프(2026-08-01) **이전**이라 `prose-derived`가 grandfathered다. 재검증한다고 날짜를 올리면
**컷오프 안으로 들어가 `prose-derived`가 차단 사유가 된다** — 측정 가능한 건 5개뿐인데.
→ **부분 재검증은 개선이 아니라 강등이다.**

JP 깊이 3순위는 **캡쳐로 고칠 항목이 아니다.** 앱을 직접 재거나 스타일가이드 이미지를 사람이
읽어 `official-doc` 근거로 전사해야 하고, 후자는 "관측"이 아니라 "문서가 말한 것"이다.

---

## ✅ 2026-09-21 — Core 상세의 "UI font basis" 수정, 그리고 **내 진단이 틀렸던 것**
→ `docs/CORE_TYPOGRAPHY_ASSETS_GAP_2026-09-21.md`

**앞 항목에서 "Core v2 그래프에 브랜드 서체가 없다"고 적었다. 틀렸다. 그래프는 담고 있다.**

`coreTransport.fontRoles`의 **첫 원소만** 보고(그건 family 없는 `display` 롤이다) 없다고
결론지었다. 전부 보면 마이그레이터가 선언된 family를 **body 모양 롤에** 붙여둔다 —
serendie `body=Roboto` · krds `body-large=Pretendard GOV` · toss `body=Toss Product Sans`,
`sourceClass: repository-fact`와 evidence까지 달고. **앞선 세션이 toss의 빈 폰트를 고치려고
일부러 만든 동작**이고 코드에 긴 주석까지 있다.

부수로 틀린 것 둘: `typography_assets.assets`가 빈 건 결함이 아니다(폰트 *파일*·라이선스용이고
`assets_fonts_licenses`는 `UNMEASURED_CHECKS`에 **의도적으로** 있다 — "a text migration cannot
speak to, and therefore does not claim"). 그리고 "폴백은 근거를 지어내야 한다"도 틀렸다 —
Core 롤이 `sourceClass`를 들고 있다.

**실제 원인은 작았다**: `detail-view.tsx`가 `referenceAst?.foundations.uiFont` 하나만 읽는데
Core canonical은 `ast: null`이다. **서체가 아니라 basis 한 칸만** 비어 있었다 — Fonts 섹션은
내내 `Roboto · Open · Apache 2.0`, `Pretendard GOV · Brand-only`를 맞게 그리고 있었다.

**수정 완료**: Core면 패키지의 font role에서 basis를 읽는다.
`serendie/krds: unresolved → repository fact` · `apple: frontmatter · high`(레거시 불변).
confidence는 **지어내지 않는다** — Core 계약은 출처는 말하지만 confidence는 말하지 않는다.

---

## ✅ 2026-09-21 — 죽은 인용 재검증 완료: **6건은 복구 불가이고 그게 맞다** (`6a1934e0`)

남은 15개 레퍼런스의 **출처 115개 전부**를 patternfly와 같은 기준(실제 브라우저)으로 열었다.
93 정상 · 22 비200.

**계측기를 잘못 쓰면 살아있는 것을 죽었다고 한다** — 22개 중 5개는 안 죽었다:
`rise-webfont`는 브라우저에선 ERR("Download is starting")인데 **curl로 200 `font/woff2`
58,996바이트**다. Thumbprint 2페이지는 curl에 **202/0바이트**(봇 챌린지)인데 브라우저에선
4,123자·3,536자 렌더된다. **페이지는 브라우저로, 자산은 curl로.** 아침에 "curl로는 부족하다"를
배웠는데 **반대도 참이다.**

**날짜를 실제로 움직이는 건 6건뿐**(11st·banksalad·brandi·kream·kurly·onestore). 나머지 8개는
살아있는 다른 출처가 날짜를 지배한다. 내가 앞서 추정으로 6건을 댔는데 그중 thumbtack이
틀렸다 — 이번엔 각 레퍼런스의 최조 만료를 직접 계산했다.

**그 6건 전부 복구 불가다** — 추측이 아니라 사이트 내비게이션을 읽어 확인했다. 11st `/category`는
인덱스지 그 카테고리가 아니고, banksalad 허브는 사라져 **filter-chip 클레임 9개**를 가져갔고,
brandi 상품은 내려갔고, kream `/shop`·kurly 목록·onestore 게임 카탈로그는 동등물이 없다.
**옮겨간 게 아니라 끝났다.** → **1월 강등이 옳다.** 뱃지를 지키려 다른 페이지를 끼워넣는 것이
이 카탈로그가 막으려는 바로 그 행동이다.

**오늘 고친 것**: patternfly·hyundai(1월→**2027-03-19**) · thumbtack(`/components/`→
`/components/overview`, 같은 도메인, nav에서 발견, advisory 해소).
`source_url_dead` **17 → 14 레퍼런스**.

---

## 🔬 2026-09-21 — 웨이브 1 잔여(PayPay·AntUI)는 **신규가 아니라 깊이 보정**, 그리고 캡쳐 함정
→ `docs/PAYPAY_STYLEGUIDE_TRAP_2026-09-21.md`

**둘 다 이미 카탈로그에 있다.** 후보 문서가 가리킨 표면은 기존 레퍼런스의 깊이 보정
대상이지 새 레퍼런스가 아니다(C7 중복 원칙).

**alipay — 의심했는데 아니었다.** 출처 9개 중 5개가 `ant.design`/`github.com/ant-design`이라
라이브러리를 브랜드 근거로 쓰는 범주 오류로 보였다. **세어보니 라이브러리가 근거하는 클레임은
29개 중 0개.** 전부 알리페이 자체 표면에서 온다. **단정 대신 센 것이 잡았다.**

**paypay — 진짜 문제이고 고치는 법이 직관과 반대다.** 현재 `legacy_snapshot`·**클레임 202·증거
0·출처 0**(JP 깊이 3순위, "JP 핀테크 검색수요 최고"). 후보 문서의 "Element UI" 경고가 옳았고
**생각보다 나쁘다**:

```
커스텀 프로퍼티 577개 중 547개가 --el-* (Element UI), 나머지 30개는 Bootstrap 4 기본값
페인트된 색:  1315× #2C3E50 (Element UI 텍스트)   vs   10× #FE2734 (PayPay 레드)
실제 내용은 이미지 33장 안에 있고 본문 텍스트는 1,234자
```

**PayPay 토큰은 0개다.** 빈도 기반 추출을 돌리면 `#2C3E50`을 PayPay 전경색으로 **확신 있게**
뽑는다. → **스타일가이드는 `official-doc`으로만 인용하고 `product-surface`로 캡쳐하지 않는다.**

오늘 **세 번째 같은 계통**이다 — cookpad(영국 사이트에서 측정) · Serendie(문서 탭 크롬을
컴포넌트로 오인, 내가 내고 스스로 잡음) · paypay(문서 프레임워크를 브랜드 토큰으로).
셋 다 **"200이고 값도 그럴듯하다"**가 공통점이다. **도달성은 정합성이 아니다.**

202개 클레임 재검증은 웨이브 규모라 **시작하지 않았다** — 제약을 모르고 시작하면 틀린 값을
확신 있게 기록하게 된다.

---

## ✅ 2026-09-21 — **웨이브 1 완료: serendie**, 카탈로그 첫 네이티브 Core v2 레퍼런스 (`81e048a9`)

**441개 · verified 142.** 레거시 frontmatter를 한 번도 발행한 적 없는 첫 레퍼런스 —
카탈로그 평면이 패키지의 `dev.oh-my-design.catalog` 확장에 있다.

**reason code 0 · advisory 0**으로 `verified_v2`: 클레임 54/54 근거(100%), 출처 8,
그리고 **컴포넌트 1 · 인터랙티브 1 · 상태 1** — verified 141건 중 36건이 인터랙티브 0인
카탈로그에서 이게 핵심이다.

**범주 문제는 규칙으로 해결**(`c40bfb0e`): "이름이 시스템과 별개의 제품·플랫폼을 가리키면
브랜드, 툴킷만 가리키면 라이브러리". **넌센스 경로 대조군**으로 검증했고
(bytedance는 `/arco`·`/semi`·`/zz-없는경로`에 전부 동일한 6,667자) CN 기각 10건이 유지된다.
규칙은 AGENTS.md 하드 룰에도 넣었다.

**게이트 4개가 순서대로 진짜 문제를 잡았다**: ①`ds.type: public` 무효 — **내 생성기가 잡겠다고
해놓고 `ds`를 아예 검사 안 했다**(이제 검사한다) ②Primary tasks를 `###` 산문으로 써서
`primary_task` 실패 → 고치니 `structural-core`→`portable-core` ③`tokens.spacing`은 1개가
아니라 **인덱스마다 12개** + `.use` 5개 + `pressed` → 37→54 ④`**Tier 1 sources:**` 산문 줄이
투영에서 사라진다(스펙 §11은 Core 문서에서 레거시 관행을 거부하라고 한다) → **증거 그래프의
`sources`로 폴백**(더 나은 데이터, 폴백이라 기존 0건 영향).

**write gate가 설계대로 발화**했다 — "네이티브가 들어오면 이 테스트가 *의도적으로* 바뀌어야
한다"고 주석에 적어뒀고, 그대로 됐다.

**낡은 하드코딩 카운트 3곳**을 발견해 **재고정이 아니라 count-agnostic으로** 바꿨다
(`doctor.test` ×2, `omd-reference-query`, CLI 문서 5개 로케일 — **ja·zh는 이미 틀려** legacy를
141이라 쓰고 있었다, 실제 116).

부수: `sync-catalog`가 design-md 미러의 **기존 드리프트 41건**도 정리했다(canonical은 serendie만 변경).

**기록만 하고 안 고침**: Core v2 레퍼런스는 상세 페이지에서 **"UI font basis unresolved"**로
보인다 — AST는 `Roboto`를 high confidence로 해석하는데, Core canonical은
`repository.server.ts`가 패키지를 서빙하며 `referenceAst`를 null로 둔다. krds도 같다.
**리더 갭 클래스가 이번엔 표현 계층에서** 나왔다.

---

## 🛑 2026-09-21 — 웨이브 1 보류: **Serendie의 범주가 의심스럽다**
→ `docs/WAVE1_SERENDIE_2026-09-21.md`

본문을 쓰기 전에 실측했다. **시스템 자체는 훌륭하다** — 표면 6개 전부 200, 커스텀 프로퍼티
**373개**(reference 184 + system 158 + web-system 31, 3계층), `impression-primary #0A69CF` ·
`impression-secondary #0650A0`, 치수·타이포 토큰 발행, 버튼 상태 실측
(rest #0650A0 → hover #024288, radius 9999px, h40) — 09-17 세션 측정과 일치.

**그런데 About 페이지를 읽고 나니 범주가 걸린다.** Serendie 자기 말로:
「**汎用性と普遍性を重視したベーシックなアセット**を提供し、これを下敷きとして
**事業領域ごとにプロダクトの独自性やアイデンティティを柔軟に表現**します」 ·
「**社内・社外を問わず、誰もが許可や承認なしに自由に利用できる**」.

즉 **의도적으로 범용인 기반**이고 **정체성은 도메인마다 따로 올리며** **사외 누구나 쓸 수
있다** — 루브릭이 배제하는 "남의 브랜드를 담도록 설계된 중립 도구"의 정의에 가깝다.
**반대 근거도 있다**: 기본 테마 KONJO(紺青)와 다섯 일본 전통색은 중립 도구가 안 하는 선택이고,
토큰이 추상 스케일이 아니라 구체 값이다. **하이브리드**다.

**혼자 정하지 않는다** — 넣기/제외/별도 트랙(§B가 이미 제안)의 선택이고, 넣으면 "라이브러리
제외" 기준이 다음 판정에서 약해진다. **측정은 버려지지 않는다**(evidence.json 보존).

**측정 중 내 오류 2건**: ① hover→press→focus를 **마우스 안 치우고** 연속으로 읽어 hover가
눌러붙은 값을 focus로 적을 뻔했다. ② 처음 고른 Filled/Outlined/Ghost는 **문서 탭 크롬**이지
컴포넌트가 아니었다(h48·14px는 docs UI). 둘 다 다시 쟀다.

---

## ✅ 2026-09-21 — patternfly·hyundai **정식 재검증** 완료 (`148b0f23`)

첫 시도를 `evidence-integrity`가 거절했었다(`captured > checked`). 그래서 **이번엔 리뷰를
실제로 했다** — 두 레퍼런스의 출처 **14개 전부**를 오늘 실브라우저로 열어 서빙을 확인했다.
새 `checked`가 기록하는 건 그것이다: **출처 계층의 재확인**이지 토큰 값 재추출이 아니고,
안 움직인 출처의 `captured`는 그대로 둔다(그 관측이 실제로 이뤄진 날이니까).

**5개 URL이 옮겨갔을 뿐 사라진 건 없었다.** 전부 사이트 자신의 내비게이션에서 찾았고,
기록 전에 열어서 관측했다:

```
patternfly  color-live        /design-foundations/colors/     → /foundations-and-styles/colors
            about-official    /get-started/about-patternfly/  → /about-us
            releases-official /get-started/release-highlights → /releases/release-highlights
hyundai     vehicles-live     /kr/ko/e/vehicles               → /kr/ko/vehicles
            ioniq6-live       …/the-new-ioniq-6/intro         → …/the-new-ioniq6/intro
```

PatternFly는 IA를 개편했고(`design-foundations`→`foundations-and-styles`, `get-started` 제거),
그걸 알아챌 수 있었던 건 **`typography-official`이 이미 새 경로를 쓰고 있었기** 때문이다.
관측: `Red Hat Text 14px` `rgb(21,21,21)` · `HyundaiSansTextKR 16px` · 더 뉴 아이오닉 6.

**둘 다 `verified_v2` 유지, 2027-01-09 → 2027-03-19.** advisory **17 → 15 레퍼런스**,
1월 벽 **43 → 41**.

**나중에 거짓말하지 않기 위한 장부 처리**: 재지정된 출처의 드리프트 행은 **갱신이 아니라 제거**
했다 — 드리프트 행은 7월 베이스라인과의 비교인데 새 URL엔 베이스라인이 없다. 판정이 **바뀐 게
아니라 적용을 멈춘 것**이다. 반면 도달성 행은 `repointedFrom`을 달아 제자리 갱신했다 —
그 파일의 질문("이 URL이 서빙하나")에는 새 URL이 진짜로 답하니까. 각 `.verification.md`에
**무엇을 재확인했고 무엇은 안 했는지** 적었다.

---

## 🔬 2026-09-21 — 죽은 인용 **22건**(12건이 아니었다) + 재검증 큐 (`19618127`)
→ `docs/DEAD_CITATIONS_2026-09-21.md`

**전수 조사에서 22건**이 나왔다. patternfly 재검증하려고 출처 8개를 전부 열다가 드리프트가
모르던 죽은 출처 2개를 발견했고, 이유가 구조적이었다 — **드리프트는 7월 베이스라인이 있는
출처만 프로브한다(930 중 400).** 나머지 530개는 아무도 안 봤다. 그래서 930개 전부에
베이스라인이 필요 없는 질문을 던졌다: "이 URL이 아직 뭔가를 서빙하나".

**2단계로 한 게 핵심이다.** curl+UA 1단계는 **127건 실패**라고 했는데 실제 브라우저로 다시
여니 **95건(75%)이 멀쩡**했다. 1단계 숫자를 발행했으면 22건짜리 문제를 127건이라고 할 뻔했다.
429 24건은 **내 동시성 10이 만든 실패**다.

```
reachable 898 · dead 22 · blocked 6 · unreachable 4
dead: product-surface 12 · official-doc 7 · brand-asset 3   (드리프트가 알던 것 12 · 신규 10)
```

`data/source-reachability-2026-09-21.json` 커밋, 품질 빌더가 여기서 읽는다(드리프트와 **합집합**
이라 파일을 지우면 구멍이 아니라 예전 동작으로 degrade). **`source_url_dead` 11 → 17 레퍼런스.**

**구조적 발견 하나**: resend의 `brand-asset` 3건이 전부 Next.js 해시 자산
(`_next/static/media/inter_variable.p.0r27k….woff2`)이다. **배포마다 바뀐다** — 죽은 게 아니라
**인용 불가능한 종류**다. 개별 수리가 아니라 규칙 문제.

**12건 전부 실제 브라우저로 404 재확인.** 봇 차단도 JS 셸도 아니고 대부분 **사이트 자신의
브랜드 404 페이지**를 돌려준다(그래서 body 비교엔 "도달함"으로 보였다).

**12건 중 10건은 어떤 클레임도 근거하지 않는다**(banksalad 9, kream 1만 무겁다). 클레임
형태를 직접 확인하고 셌고 합계도 맞다. **그러나 "인용 안 됨"≠"쓸모없음"** — 인용 없는 출처는
흔하고(patternfly만 7개, 그중 component-index는 §4 로스터를 받친다) **출처 목록은 무엇을
들여다봤는지의 기록**이다. 그래서 **지우지 않고, 게이트도 약화시키지 않는다**(인용만 떼면
영원히 안 만료되는 우회로가 생긴다).

**사이트 내비게이션을 읽어 대체 URL을 찾았다**(추측 금지): patternfly는 섹션 개명
(`design-foundations`→`foundations-and-styles`), hyundai vehicles는 `/e/` 제거,
hyundai ioniq6는 **하이픈 하나**(`the-new-ioniq-6`→`the-new-ioniq6`). 나머지는 대체 아님 —
11st·kurly·kream은 다른 페이지, brandi는 상품 자체가 내려갔다. **banksalad가 제일 무겁다**:
9개 클레임이 전부 사라진 허브의 **filter-chip** `live-inspect` 관측이다.

**고쳤다가 되돌렸다 — 게이트가 옳았다.** 3건을 복구하고 실제로 관측까지 했더니
(`Red Hat Text 14px` · `HyundaiSansTextKR 16px`) 만료가 **1월→3월**로 가고 advisory도
사라졌다. 그런데 `evidence-integrity`가 잡았다: **"An observation cannot have been made
after the review that accepted it"** (`captured > checked`). 맞다 — `captured`를 오늘로
두려면 `checked`도 오늘이어야 하고 **그건 내가 안 한 전면 재검토를 주장하는 것**이다.
**URL 수정은 공짜 연산이 아니라 레퍼런스 재검토를 요구한다.** 3건 전부 revert.

→ **1월 강등은 막을 것이 아니라 옳은 동작이다.** 답은 뱃지 방어가 아니라 **제대로 재검증**
(그때 `checked`를 올리는 게 정직해진다). 대체 URL 3건은 조사·검증 끝나 **바로 쓸 수 있다.**
`bmw`·`onestore`·`thsr`·`wanted` 4건은 고쳐도 날짜가 안 움직여 **이 항목이 아니다**(평범한 1월 벽).

---

## ✅ 2026-09-21 — 오너 결정 C: **깊이를 노출한다** (`114fe953`)

"아이덴티티 전용을 넣을 것인가"에 **C(넣되 구분한다)**. 숫자는 이미 매니페스트에 있었고
아무도 읽지 않았다.

**재보니 무엇을 인쇄할지가 바뀌었다.** 카탈로그 전체로는 440 중 404가 인터랙티브 컴포넌트를
갖는다 — 안심되는 숫자이고 **틀린 숫자**다. 독자가 오해하는 지점을 묻어버린다. 문제는
**verified 티어 안에만** 있다:

```
verified_v2  141 →  105 인터랙티브 있음 ·  38 per-state 값 있음 ·  36 없음
```

**인터랙티브 0인 36건이 전부 verified_v2다.** `partial`·`legacy_snapshot`엔 **한 건도 없다.**
우연이 아니라 티어 정의 그대로다 — `verified_v2`는 증거 그래프 완전성을 묻고, **주장을 적게
하는 문서는 근거 댈 것도 적다.** 36건 평균 클레임 35, 나머지 62, 둘 다 커버리지 100%.
**적게 주장하는 게 뱃지로 가는 싼 길**이므로 뱃지를 깊이로 읽으면 안 된다.

세 표면, 새 어휘 없이:
- **상세 페이지**: "12 documented" → **"12 documented · 5 interactive, 5 with states"**.
  toyota와 krds 둘 다 `verified v2`인데 이제 한눈에 다르다(`1 documented · none interactive`).
  카운트 출처도 `referenceAst`(AST 없으면 null)에서 **매니페스트**(440 전부)로 옮겼다 —
  두 값이 440건 전부 일치함을 확인하고 옮겼으므로 정보 손실 0, 드리프트 경로만 제거.
- **`/api/references`**: `components`·`interactiveComponents` 추가. `qualityScore`는 깊이를
  표현 못 한다 — 실행 중인 라우트에서 확인: **krds(12/5)와 baemin(7/7)이 똑같이 0.85**.
- **목록 헤드라인**: 티어 줄 밑에 **"of the verified: 105 carry interactive components ·
  38 record per-state values"**.

퍼널 확인(AGENTS.md): `/` `/builder` `/design-systems` `/design-systems/toyota` 전부 200,
두 페이지는 소스가 아니라 **렌더된 텍스트**로 검증.

---

## ✅ 2026-09-21 — 4단계 어휘 재조사 완료: **세 시장이 서로 다른 답**
→ `docs/VOCABULARY_RESURVEY_2026-09-21.md`

| | verified | 어디에 | 민간 대기업 |
|---|---:|---|---|
| JP | 7 | 대학·지자체·중앙정부·행사 | **없음**(히타치 매뉴얼은 社外秘) |
| TW | 13 | 정부·대학 **전부** | **없음**(TSMC·MediaTek·ASUS·은행·병원·교통 직접 확인) |
| CN | 12 | 대학 5 + **민간 대기업 다수** | **있음** — 텐센트 ISUX 브랜드북 **14권** 공개 |

어휘 전환은 세 시장 다 통했다. **그 층이 어디 있는지가 시장마다 다르다.**

**에이전트 인용을 믿지 않고 13건을 다시 받아 grep**: 10 확인 · 2 내 환경 도달 불가 ·
**0 반증**. 미확인 2건(NTHU DNS·小爱 403)은 반증이 아니다.

**방법론 — 가장 이식성 높은 산출물**: **UA 갖춘 curl로도 부족하다.** TW에서 자동 페치를
막은 3개 호스트가 실제 브라우저에선 정상이었고 **그중 2개가 find**였다. 내가 재현했다 —
국가양청원은 curl 200인데 본문이 JS 셸이라 값이 없고 브라우저에서만 나온다. 텐센트 CDN은
`Referer: isux.tencent.com/brands/`가 필요하다(이것도 재현). → **이전 패스들이 curl만으로
`blocked`를 적었다면 다시 열어야 한다.**

**상한**: 700은 **지금 바뀌지 않는다.** JP 제품 여력은 그대로(+7은 아이덴티티 도메인),
TW 제품 신규 0 권장도 유지, **CN만 과소평가로 보인다**(텐센트 14권 중 4권만 열람,
하이얼·화웨이·샤오미는 기존 추정의 "11개 회사" 밖).

**새 오너 결정**: **아이덴티티 전용 레퍼런스를 넣을 것인가.** 카탈로그는 이미 넣고 있다 —
`toyota`·`sony`가 `verified_v2`이면서 컴포넌트 1·인터랙티브 0이다. 다만 그게 **의도된
선례인지는 확인된 바 없다**(둘 다 `added`가 없어 기록이 없다). 제품/아이덴티티를 **나눠
셀지가 700의 의미를 정한다.** 내가 조용히 정하지 않는다.

---

## ✅ 2026-09-21 — 2·3단계 완료: CN 게이트 + 분류 단일 enum (`942c5067`, `59678351`)

**2단계 — CN을 키우기 전에 게이트에 넣었다.** `REGIONAL_PROOF_COUNTRIES`가 {KR,TW,JP}였고
**CN만 무검사 통과** 중이었다. 게이트 밖에서 들어온 레퍼런스는 소급 검사되지 않으므로 순서가
전부다. 오늘은 **비용 0** — alipay(8)·bilibili(5)는 이미 통과하고 dji·meituan·xiaohongshu는
2026-05-19라 컷오프 이전(grandfathered).

**다만 CN만 추가했으면 금지하는 걸 허용하는 규칙이 됐다.** `PLATFORM_HOSTS`에 중국 플랫폼이
하나도 없어서 `zhuanlan.zhihu.com/p/<id>`(남이 쓴 글)가 매칭 실패 → 기본 true → **브랜드 자체
증거로 집계**됐다. 중국 플랫폼을 넣고, 계정이 아닌 경로 세그먼트(`p`·`s`·`post`·`article`…)를
거부하게 했다. **WeChat `/s/<hash>`는 공식 계정을 식별하지 못하므로 거부** — 모르면 없는 것이다.
`xiaohongshu.com`·`toutiao.com`은 **일부러 제외**(우리 카탈로그의 브랜드라, 넣으면 자기 홈페이지가
자기 증거로 안 잡힌다). 기존 게이트 대상 중 **regional 수가 변하는 레퍼런스 0건**.

**3단계 — enum 하나로, CI가 강제.** 23개 값 / 14개 enum, enum은 손으로 돌리는 툴에만 있었고
CI는 `typeof === "string"`만 봤다. **13개가 밖으로 흘렀고 UI는 raw 슬러그를 렌더링**하고
있었다(`CATEGORY_LABELS`에 없으니). **내 취향이 아니라 카탈로그 자신의 선례**로 접었다 —
스포티파이·넷플릭스·아베마·bilibili=consumer-tech, 닌텐도·크래프톤·넥슨=consumer-tech,
마이리얼트립·에어비앤비=consumer-tech. `entertainment` 4건과 싱글턴 7개는 그 옆에서 **미아**였다.
enum은 `web/src/lib/reference-categories.ts`, dji를 되돌려 **게이트가 무는지 확인**.
→ `consumer-tech`가 **135/440**이다. 거친 버킷이고 사실상 분류의 진짜 문제지만, 쪼개는 건
카탈로그를 어떻게 탐색하게 할지의 제품 결정이라 정리 커밋에 섞지 않는다.

**추정으로 깨뜨릴 뻔한 것.** `reference-fingerprints.json`의 `category`가 **201/440 불일치**라
낡은 사본처럼 읽혔다. **아니다** — `omd-init` 스킬이 그 필드로 작업 텍스트를 매칭하고, 어휘가
일부러 더 세밀하다. 맞추면 잃는 것을 **실측**했다: entertainment·travel·content **매칭 소멸**.
그래서 손대지 않았다. 진짜 결함은 반대다 — `sync-catalog`가 **신규만** `fm.category`(거친
슬러그)로 채워서 **확충할수록 세밀한 어휘가 침식**된다. 260건이면 그만큼 더.

---

## ✅ 2026-09-21 — **오너 결정: 목표 700** + 생성기 완성 (`e5087982`)

| | 결정 |
|---|---|
| **목표** | **700** — 증거 기준 유지(선택지 b). §C.3의 정직한 상한 630~710 안 |
| **CN** | **키운다 — proof gate를 CN까지 넓힌 다음에** (권장 순서 그대로) |

1000을 포기한 게 아니라 **증거 기준을 내주지 않기로** 한 것. 근거는 볼륨이 복제 가능해졌다는
것(getdesign.md 566·CJK 0 · refero 1,290 · getdesign.kr 신규). 700도 §C.3 숫자에 기대고 있고
그 숫자는 **어휘 재조사(4단계) 전까지 잠정**이라 이후 재검토 가능.

**`scripts/author-native-core-reference.mjs`** — 조사 산출물과 봉인 패키지 사이의 마지막 구멍.
**직접 매핑하지 않는다**(`migrate-design-md-core.cjs`가 검증된 매퍼고, 두 번째 구현이
드리프트 프로브·MCP 번들을 눈멀게 한 그 실수다). 매퍼 실행 → provenance/coverage를 컴파일러
모양으로 번역 → 마이그레이션 확장을 **카탈로그 확장으로 교체** → `projection.sha256` 제거.

**돌려보고서야 안 것 2건**: ① 매퍼와 컴파일러의 `provenance.json`은 **서로 다른 문서**다
(매퍼는 원본에 한 일, 컴파일러는 `decisions[]`) → `prepare`에서 죽는다.
`build-core-compiler-provenance.cjs`가 이미 그걸 위해 있다(toss 채택이 손으로 세 번 시도했던
것). CLI가 `web/references/<id>/`를 읽어서 신규엔 못 쓰므로 함수를 직접 호출한다.
② 매퍼는 이미 있는 디렉터리에 발행을 거부하는데 내 `mkdirSync`가 먼저 만들고 있었다.

**거부**: dropped 있음 · 매핑 안 된 **섹션** · 재구성/라운드트립 실패 · 레지스트리가 거부할
frontmatter · **`added` 없음**(레지스트리는 선택, 여기선 필수 — 244/440이 없어 절반 이상이
언제 왜 들어왔는지 모른다). 실제 입력에 처음 돌렸을 때 **krds를 바로 그 이유로 거부**했다.

테스트 3건: 생성기→prepare→승인→compile→리더까지 한 번에. 확장을 병기하도록 바꿔서
**실제로 물어뜯는지 확인**했다.

**안 한 것**: `authored.md`는 여전히 조사의 산출물이다. Serendie 본문은 **없고, 지어내지 않는다.**

---

## ✅ 2026-09-21 — **Stage 5 열림.** 네이티브 writer는 없는 게 아니라 이미 있었다 (`39c94ea3`)
→ 절차: `docs/NATIVE_CORE_AUTHORING_2026-09-21.md`

**정정**: 어제 "네이티브 writer가 없다, 5개 아티팩트를 손으로 만들어야 한다"고 썼다(`778907ea`).
**코드를 읽고 쓴 것이고 돌려보지 않았다.** 기존 5단계 체인이 그대로 네이티브 writer다 —
`--migration-report`가 **선택 인자**라 마이그레이션할 게 없으면 안 주면 된다.

카탈로그 확장을 실은 draft graph로 끝까지 돌린 결과:

```
compile --adopt      → DESIGN.md + .omd/system/{graph,provenance,coverage,manifest,receipt}
컴파일된 graph        → dev.oh-my-design.catalog 그대로 보존 (스펙 §6)
canonical frontmatter → 없음
readReferenceSource  → core-v2 · projected · 12키 · 출처 12건
웹 봉인 검증기        → verified
```

**즉 Stage 5를 막고 있던 건 읽기 쪽 하나뿐이었고, 그건 어제 고쳤다.** 확충의 기술적 전제는
이제 없다. 남은 건 오너 결정 2건과 draft graph를 조사 결과에서 만드는 도구뿐이다.

테스트 3건 추가. 메우는 구멍이 실재한다 — 기존 `validGraph()`가 `extensions`를 지워서
**컴파일러가 스펙 §6(확장 보존)을 지키는지 아무도 검사하지 않고 있었다.** 세 번째는 거부를
고정한다: 마이그레이션도 카탈로그 확장도 없는 패키지는 여전히 던진다(카탈로그 정체성이
없는 레퍼런스를 추측으로 만들면 안 된다).

**어제의 번들 churn을 진단 완료.** `tsup.config.ts:101`이 `capture-reference-evidence.ts`를
`skills/`로 번들하고, `prepare: npm run build`가 `npm pack`에서 돌고, `packaged-*-smoke`
테스트 3개가 pack한다 → **추적되는 7MB 파일을 스위트 중간에 비결정적으로 다시 쓴다**
(7143941 vs 7252465바이트). 이번 전체 실행에서 `activation-reuse`의 byte-stable 단언이
해시 불일치로 실패했다(격리 실행은 통과). **단순한 지저분함이 아니라 플레이크의 원인**이다.
수정은 릴리스 패키징(pack 시 생성·추적 중단) 또는 번들 결정화 — 둘 중 추측하지 않고 보고만.

---

## ✅ 2026-09-21 — Stage 5 읽기 경로 해제 (`778907ea`)

어제 막혀 있던 것을 열었다. 리더 12개가 전부 `original_segments`(마이그레이션 산물)에서
카탈로그 메타데이터를 복원하고 있었고, 네이티브 레퍼런스엔 그게 없어 전부 던졌다.

**해법은 스펙이 이미 골라놨다.** §6 "extensions는 유일한 이식 가능 확장점", §11 "린터는 새
frontmatter를 거부해야 한다" → 네이티브 패키지는 `extensions["dev.oh-my-design.catalog"]`에
country·category·added·logo·`verification_v2`·`tokens`를 **선언**한다. Core 필드가 되지 않는다.

`readReferenceSource`가 둘을 구분해 보장을 유지한다: 마이그레이션 패키지는 **reconstruct**
(원본 바이트 + 해시 검증)이고 **둘 다 있으면 이긴다**(더 강한 주장이니까). 네이티브는
**project**(패키지가 명시한 데이터의 렌더링, 해시 없음 — 충실할 이전 버전이 없다).
우선순위 규칙을 지금 써뒀다 — 세 번째 채택에서 급히 발명하지 않도록.

**웹 쪽은 이미 열려 있었고, 만들기 전에 확인한 게 중요했다.** 빌드 파이프라인과
`repository.server.ts`는 **한 패키지의 두 소비자**다. 봉인 검증기가 네이티브 패키지를
`verified`로 받는다 — 영수증 스키마가 `migration` 블록을 이미 optional로 두고 있고
`status:"adopted"`도 참이다(마이그레이션 여부와 무관하게 graph가 채택된 canonical이다).

픽스처는 krds 실제 패키지에서 **파생**(`web/scripts/build-native-core-fixture.mjs`) — 아티팩트가
해시로 연쇄(graph→provenance/coverage→manifest→receipt)라 손으로 쓰면 검증기를 속일 수
있다는 것만 증명한다. 라운드트립이 핵심: `yaml.dump`를 `JSON_SCHEMA`로 돌린다(기본 스키마는
`2026-07-11`을 Date로 되읽고 이 파이프라인의 모든 날짜는 문자열 비교다). krds 재구성본과
**deep-equal**, 출처 12건 온전.

**아직 아닌 것**: **네이티브 writer가 없다.** 새 레퍼런스를 만들려면 graph·provenance·
coverage·manifest·receipt를 손으로 만들어야 한다. 포맷과 두 소비자 경로는 증명됐고,
**writer가 다음 조각**이며 웨이브 1이 필요로 하는 것이다.

**내가 깨고 잡은 것 2건**: ① 픽스처가 `.gitignore`의 `.omd/`에 걸려 **테스트가 내 기계에서만
통과**했다(`2ae9a471`). ② 깨끗한 worktree로 검증하니 테스트가 gitignore된 빌드 산출물
(`reference-ast.generated.json`)을 읽고 있었다(`e7021cfb`). **둘 다 게이트가 아니라
`git status`와 clean worktree 실행이 잡았다.**

부수 확인: `omd install-skills`가 추적되는 7MB 캡쳐 번들을 **비결정적으로** 다시 만든다
(같은 입력에 7143941 / 7252465 바이트, 난독화 변수명이 다름). 커밋된 번들의 동작은 맞다.

---

## 🛑 2026-09-20 — 확충 계획: 오너 결정 2건 대기
→ `docs/EXPANSION_PLAN_2026-09-20.md`

**확충은 지금 시작할 수 없다.** 로드맵은 "신규는 Core v2로 직접 작성"(5단계)에서 확충이
열린다고 했는데, 오늘 스크래치패드에 **네이티브 Core v2 레퍼런스**를 만들어 돌려보니
`readReferenceSource`가 **던진다** — legacy 복원은 `original_segments`(마이그레이션 산물)에
의존하고 처음부터 Core로 쓴 문서엔 그게 없다. **오늘 게이트 통과시킨 리더 12개 전부**가
여기서 죽는다. 원인: Core v2는 카탈로그 필드(country·category·added·`verification_v2`)를
모델링하지 않고, 지금까지 legacy 복원이 그 구멍을 메워왔다.
**오늘 만든 write gate는 *마이그레이션된* 패키지를 받는다. *네이티브*는 아무도 안 받는다.**

**오너 결정 2건**: ① 목표 숫자 — 내 이전 분석(§C.3)이 **CJK 단독 상한 630~710**이라 적어뒀고
서 있는 목표는 1000이다. 추천은 **증거 기준 유지(630~710)** 또는 **커버리지로 재정의**
(getdesign.md 566·CJK 0건, refero 1,290, getdesign.kr 신규 — **볼륨은 복제 가능**해졌다).
② **CN 확대 여부** — `REGIONAL_PROOF_COUNTRIES={KR,TW,JP}`로 **CN만 게이트 밖**이다.

**선정 기준(질문에 대한 답)**: 기존 440의 **55%(244건)는 `added`가 null** — 기록된 선정
근거가 없다. 구성(KR203/US109/TW63/JP43)은 규칙이 아니라 만든 사람의 시장이다.
앞으로의 루브릭은 이미 결정돼 있다(`CJK_EXPANSION_CANDIDATES`): **브랜드 제품 디자인 언어만,
컴포넌트 라이브러리 제외**(1차 조사가 12개 중 10개를 OSS 라이브러리로 가져와 범주가 틀렸다),
Tier 1 필수, 제품·마케팅·기업은 별개 증거 도메인.

**순서(결정과 무관하게 1~4는 동일)**: ①Stage 5 해제 ②proof gate를 CN까지 ③분류 정리
(`ecommerce`43/`e-commerce`2, `fintech`61/`finance`1, 1~2개 카테고리 8개) ④JP·TW·CN 탐색
어휘 재조사(KR이 "identity/CI"로 0→4) ⑤1차 웨이브 3건(Serendie·PayPay·AntUI)로 네이티브
경로 종단 증명 ⑥JP 깊이 → CN ~30 → KR 편중.

---

## ✅ 2026-09-20 — **write gate**: 모든 리더가 패키지에 대해 입장을 정해야 한다 (`126e50b5`)

채택된 레퍼런스는 frontmatter가 **없다**. 원본 파일을 열어 frontmatter를 파싱하는 리더는
**실패하지 않는다 — 성공하고 빈 값을 돌려준다.** 이게 두 번 출시됐고 둘 다 몇 달 간격으로
손으로 발견했다(드리프트 스윕 `60c7d506`, MCP 번들 `eaceab89`).

**먼저 찾은 실제 버그 — MCP 번들** (`eaceab89`). `sync-data.mjs`가 바이트를 그대로 복사해서
**toss가 frontmatter 키 0개**로 서빙됐다(정상 피어는 12개). 국가·카테고리·티어·토큰 전부 소실,
displayName만 살아남았는데 그건 portable AST가 따로 들고 있어서다. krds는 로컬 번들이
채택 이전 파일이라 우연히 멀쩡했고, **다음 sync면 같이 죽었다.** 이 패키지는 archived라
사용자에게 나간 적은 없다 — 그래도 게이트가 필요로 하는 가장 명료한 사례다.

**정적 — `scripts/check-reader-blindness.mjs`** (husky 빠른 게이트). 범위는 **파생**한다:
package.json 스크립트/husky가 호출하거나 `web/src`·`packages/mcp/src` 제품 코드. DESIGN.md를
만지는 18개 중 12개는 raw로 안 읽고, 6개는 **이유와 함께** 등재(Core 경로, 원문 트윈 라우트,
registry-first API, dev 진단 페이지, in-place 라이터, 디렉터리만 세는 check-counts).
정말 눈먼 7개를 잡았다 — 6개는 `readReferenceSource`로 전환, `retire-template-motion`은
**라이터**라 재구성본을 덮어쓰면 채택이 풀리므로 `isCoreV2Markdown`에서 거부하게 했다.

**행위 — `catalog-integrity.test.ts`**. 채택 집합을 `.omd/system/graph.json` 존재로 **파생**
(하드코딩 금지 — 세 번째가 생기는 순간 테스트가 멈춘다). 채택 레퍼런스가 모든 생성 산출물에서
**다른 것과 같은 모양**으로 나오는지: 재구성 frontmatter 핵심 키, registry·quality 키 누락 0,
`sourceCount > 0`(드리프트 버그를 반대편에서 고정), portable AST·원장 등재.

**게이트를 만들며 내가 틀린 것 2건 — 게이트를 *시험해서* 잡았다.**
① 1차는 **파일 단위**로 "helper를 import하는가"를 물었다. `build-reference-quality.mjs`에
버그를 다시 넣어봤더니 **통과했다** — 다른 곳에서 helper를 쓰고 있으니까. 지금은 **호출
지점 단위**로 해석한다(인라인 경로거나, 같은 파일에서 DESIGN.md join이 할당된 식별자).
② 그랬더니 **자기 문서를 신고**했다 — 헤더 주석이 금지 패턴을 인용하니까. 설명을 쓴 파일이
벌을 받는 셈이라, 스캔 전에 주석을 공백 처리(줄 번호 보존)한다.

대표 회귀로 종단 검증: `build-registry`가 raw로 읽고 파싱 실패를 건너뛰면 카탈로그가 438로
줄고 **양쪽 다 발화**한다 — 정적은 줄 번호를, 행위는 "krds·toss가 registry에 없음"을 댄다.

**게이트 자신의 사각 3건**(`9c32a3ed`) — 게이트의 주장을 검증해서 잡음.
① `gen-llms-full.cjs`가 게이트 시야에서 **사라졌는데 확인 없이 등재를 지웠다.** 실제로는
`join(dir, id, 'DESIGN.md')`로 읽는다(트리 이름이 join 밖에 있음) → **발행 surface에 대한
false negative.** 게다가 **살아있는 잠복 버그**였다: 다음 재생성이면 `llms-full.txt`에
`- **toss** — <!-- design-md:section experience --> ## 1. Experience`를 발행했다. 지금 파일이
멀쩡한 건 채택 4일 전에 생성됐기 때문. → 선행 주석 줄만 제거(440개 중 그 2개만 변함).
② **배포되는 스킬 사본이 여전히 눈먼 번들**이었다(`.claude/`·`.agents/`가 수정 전 7141961바이트).
git은 아무것도 안 보여준다 — **안 바뀐 게 문제**니까. 동기화함.
③ `sourceCount > 0`은 **픽스처를 테스트**하고 있었다 — `legacy_snapshot`을 채택하는 날 깨진다.
재구성본의 출처 수와 **일치**를 보게 바꿈.

**알려진 한계(문서화, 미수정)**: 정적 층은 진입점만 본다. 새 helper를 통해 raw로 읽는
스크립트는 통과한다 — 행위 층이 백스톱. 그리고 **root 스위트 중 무언가가 캡쳐 번들을
부수 효과로 다시 쓴다**(install-skills 테스트는 아님). 확충 중 테스트를 계속 돌리면 문제.

게이트: root 1492 · web 965 · mcp 8 · tsc clean · 카탈로그 440/0 · 원장 930.

---

## ✅ 2026-09-20 — 프로브가 자기 레퍼런스 2개를 못 보고 있었다 + 죽은 인용 12건 (`60c7d506`)

전환 후 1월에 남은 46건을 "가장 먼저 만료되는 출처의 판정"으로 갈랐다 —
**(프로브 안 됨) 23 · changed 14 · 404 8 · not-comparable 1**. **46건 전부 병목이
`product-surface`(TTL 180)**다. 벽은 정책이 아니라 이 TTL 하나가 만든다.

**고침 1 — 채택 레퍼런스가 프로브에 안 보였다.** `baseline()`이 raw `DESIGN.md`를
`readFileSync`하고 키 순서를 박은 정규식으로 출처를 읽었다. 채택 레퍼런스는 DESIGN.md에
frontmatter가 **없다**(`.omd/` 패키지에 있고 `readReferenceSource`만 복원). 그래서
`krds`·`toss`가 번들이 있는데도 출처 0건 → "베이스라인 없음"으로 보고됐다. 같은 정규식이
블록 스타일(`bilibili`,`spotify`)과 다른 키 순서(`sanity`) 13건도 잃었다.
→ `readReferenceSource` + `parseReferenceFrontmatter` 하나로 통일.
새로 보인 22건 프로브: **20 unchanged / 2 changed** → krds·spotify·sanity 3월로 이동,
toss·bilibili는 실제 변화라 **정당하게 잔류**.

**고침 2 — 죽은 인용을 계측 실패로 분류했다.** `unreachable` 15건 중 **12건이 HTTP 404**(403 2건·네트워크 1건).
UA를 바꿔도 없어진 페이지는 안 돌아온다. `dead`(404/410, **레퍼런스의 결함**) /
`blocked`(403/429, 모름) / `unreachable`(네트워크, 모름)로 분리하고 모든 행에
`httpStatus`·`userAgent`를 기록. 죽은 인용 **12건/11개 레퍼런스**를 `source_url_dead`
**advisory**로 발행(강등 아님 — 7월엔 있었고 캡쳐는 보관돼 있다. 잃은 건 관측의 타당성이
아니라 독자가 따라가 확인할 능력이고, 그건 살아있는 URL로 옮겨 고칠 일이다).

    unchanged 359 → 379 · rows 400 → 422 · 1월 45 → 42 · 3월 95 → 98

**내가 틀렸던 말**: "베이스라인 없는 출처까지 넓히면 벽이 더 준다" → **아니다.** 베이스라인이
없으면 오늘 프로브는 변경 감지가 아니라 새 베이스라인이고, 오늘 갱신되는 건 0건이다.

**이 계측기는 여기까지다.** 남은 43건 중 **23건은 병목 URL이 7월 번들에 표면으로 잡힌 적이
없다** — body 비교로는 영원히 못 움직인다. 다음 계측기는 베이스라인을 번들이 아니라
**레퍼런스 자신의 `tokens.*` 주장**으로 삼아야 한다("이 출처가 근거로 댄 값이 지금도 그
표면에 있는가"). 설계만 문서화, 구현 안 함.

---

## ✅ 2026-09-20 — 만료를 **날짜에서 변경 감지로 전환** (`3aa53f28`)

오너 결정. 만료 시계가 **캡쳐일**이 아니라 **해당 출처 URL이 마지막으로 "캡쳐 때와 같은 것을
서빙 중"이라고 확인된 날**부터 간다.

**출처 단위 스윕**(69일 경과): unchanged **359** · changed 25 · unreachable 15 ·
not-comparable 1 → **비교 가능 384건 중 359건(93%) 동일**, 128개 레퍼런스.

프로브를 레퍼런스 단위에서 **출처 단위로 옮겨야** 의미가 있었다. 1차는 레퍼런스당 `home`
하나만 봤는데 **출처의 16%만 home URL에 있다** — 다른 페이지 프로브로 출처를 갱신하는 건
이 카탈로그가 막으려는 바로 그 미획득 승격이다. 출처 URL을 번들의 surface URL과 맞추니
정직한 커버리지가 895건 중 400건이 됐다. **7월 베이스라인이 없는 출처는 프로브하지 않는다** —
"이전"이 없으면 오늘 읽은 값은 변경 감지가 아니라 새 베이스라인이다.

**벽이 쪼개졌다**: 2027-01-07~09 **45건**(가장 먼저 만료되는 출처가 미확인) ·
**2027-03-19 95건**(확인됨) · 2026-11-11 1건(figma). **아무것도 그냥 통과시키지 않았다** —
가장 먼저 만료될 출처가 직접 재확인된 레퍼런스만 움직였고, 그래서 45건은 그대로다.

증거 세탁이 되지 않도록 세 성질을 테스트로 고정했다: ① 한 출처의 확인은 **그 출처만** 갱신 ·
② 확인은 캡쳐와 똑같이 늙는다(영구가 아니라 TTL 한 번 더) · ③ 확인이 없으면 **이전과 완전히 동일**.
`nextReverifyAt`도 게이트와 같은 날짜에서 센다(게이트와 모순되는 만료일은 없느니만 못하다).
`renewedSourceCount`를 매니페스트에 넣어 드리프트 리포트를 안 열어도 감사 가능하다.

**내가 오늘 먼저 깨고 못 잡은 것 1건**: API 계약 테스트가 apple의 `checkedAt`과 출처 수를
고정하고 있었는데 SPA 로스터 커밋(`cd11a528`)이 둘 다 정당하게 바꿨다. `__tests__/`와
`src/lib`만 돌리고 **`src/app`을 안 돌려** 두 커밋을 통과했다. 고치면서 "이건 픽스처를 따라가는
값이니 회귀로 단정하기 전에 픽스처를 읽어라"는 주석을 달았다.

---

## 🔬 2026-09-20 — 만료 벽: 드리프트 **전수 실측 완료** (`6cf1502f`, `59d0a9f0`)

`scripts/measure-surface-drift.mjs` · 베이스라인 `data/surface-drift-2026-09-20.json`
playwright-core 헤드리스 · **라이트 모드 강제** · 번들 기록 viewport · 경과 **69일**

| 판정 | 수 |
|---|---|
| **unchanged** | **154** |
| changed | 10 |
| unreachable | 4 |
| not-comparable(테마 반응형) | 1 (tesla) |

**비교 가능 164건 중 154건 = 94%가 네 값(color·background·font·size) 전부 동일.**
변한 10건 중 **musinsa·myrealtrip(빌드 해시)·lovable(oklch 표기)·ably(헤드리스 폰트 미로드
의심)는 드리프트가 아니다** → 실제 변화는 **6~7건, 약 4%**.
진짜로 변한 것: intuit(폰트명+색4) · recruit(Tazugane Gothic→Noto Sans JP) · toss(전면 개편) ·
kakao-login · wanted · mistral.ai.

**만료 정책에 대한 답**: 2027-01-07~09에 **141건이 한꺼번에 만료**되는데 실제로 변한 건 약 4%다.
날짜는 **135건가량의 올바른 관측을 무효화**하고, 동시에 다음 주 개편될 표면을 180일간
통과시킨다. **양쪽에서 잘못된 도구다.** 변경 감지가 더 싸다 — 이 전수가 헤드리스 1회 수 분.

**부수 발견 2건**: `inline`·`kakaopay`·`kktix`가 헤드리스에 **403**(재검증이 이 경로로는 못 봄) ·
`fixture` 번들이 `127.0.0.1:50625`를 가리킨다(`reference-capture-fixture` — 카탈로그
레퍼런스가 아니라 캡쳐 하네스 테스트 픽스처가 증거 디렉터리에 남은 것).

**남은 한계**: `body` 프로브만이라 "개편 안 됨"이지 "모든 값 동일"이 아니다 · 69일이지 180일이
아니다 · 번들에 `colorScheme` 기록이 필요하다(tesla 비교 불가 원인).

`SOURCE_TTLS` 주석이 남긴 숙제("7월 번들과 diff해서 90일에 실제로 얼마나 변하는지 알아내라")를
실행했다. 177개 번들 중 **169개**가 `home` 표면 `body`의 computed style을 갖고 있다 —
모든 번들에 있고 모호하지 않은 유일한 프로브.

**경과 69~71일, 비교 가능한 5건 중 4건이 값 하나도 안 바뀌었다.**

| | 종류 | |
|---|---|---|
| uswds · zendesk | official-doc | **완전 동일** |
| wise · coupang | product-surface | **완전 동일** |
| **toss** | product-surface | **전면 개편** — 52,000px 스크롤 애니메이션, 본문 텍스트 **144자**(7월엔 폰트 사용 1,150회) |
| patternfly | official-doc | 비교 불가(아래) |

**표면은 조금씩 낡지 않는다. 안 바뀌거나, 갈린다.** TTL은 드리프트를 시계로 모델링하는데
(product 180일 · doc 365일) 관측된 행동은 시계가 아니다. 안 변한 4건에게 만료는 아무 것도
보호하지 않고 멀쩡한 관측을 날짜에 무효화한다. 개편된 1건은 **개편 다음 날 이미 틀렸고**
180일을 기다리는 게 의미가 없다. **날짜는 양쪽 다에서 잘못된 도구다.**

TTL의 *순서 가정*(문서 > 제품 표면)은 확인도 반박도 안 됐다 — 제품 표면 3건 중 2건이
변화 없음. n=5로는 순서를 못 본다.

**버린 판독 1건 — 이게 기록할 가치의 절반이다.** patternfly가 처음엔 라이트→다크 전면
개편으로 측정됐다. **내 브라우저였다** — Chrome이 다크 모드고 patternfly가
`prefers-color-scheme`에 반응해 `pf-v6-theme-dark`를 붙인다. 나머지 4건은 테마 비반응이라
비교가 성립하고, 프로브가 그걸 확인한 뒤에 색을 믿는다.

**다음**: 169건 전수(라이트 모드 헤드리스 1회면 됨) → 만료 정책을 날짜가 아니라 변경 감지로.
번들 스키마에 `colorScheme`·`userAgent` 기록 추가.

---

## ✅ 2026-09-20 — 채택 절단 결함 해소. 서빙 **18% → 85%**, 두 정본 재채택

오너 결정(옵션 1): 섹션 예산을 들어냈다(`08cd0a4f`, `4d63413a`).

| | 이전 | 이후 |
|---|---|---|
| 440건 투영 합계 | — | 레거시 11.80MB 중 **10.01MB (85%)** |
| 채택된 정본 서빙 | **~18%** | 전체 본문 |
| 로스터 생존 | 23/42 | **42/42** |
| toss | 12,088B 로스터 없음 | **17,787B + 43개 로스터** |
| krds | 13,267B 로스터 없음 | **50,415B + 34개 로스터** |

**스펙 이탈은 셀 수 있게 만들었다.** 리포트에 `projection_word_count` ·
`exceeds_spec_word_guidance`를 넣었고 **440건 중 415건이 스펙 §3의 1,800단어 가이드를 넘는다.**
그게 이 결정의 비용이고 숨기지 않았다.

### 예산이 가리고 있던 것 20건

예산을 들어내자 `portable_core`가 440 → 419로 떨어졌다. 잘려나가던 `[FILL IN]`이 투영에
도달한 것. **"플레이스홀더 0건"은 투영에 대해 참이고 문서에 대해 거짓이었다** — 내 재작성이
한 줄 알았던 일을 예산이 하고 있었다. 20건 모두 앞의 36줄과 같이 고쳤다(kurly·google은 또
"페르소나 지어내지 말라" 산문 밑에 지어낼 빈칸).

형제 함수 `containsUnresolvedSemanticClaim`에서 2건 더 — figma는 **"productivity" 안의
"product"**, kurly는 캡쳐 경계 문장. 같은 구조 규칙을 **`scope`에만** 적용했다. 처음 셋 다에
적용했다가 테스트를 깼다(foundations의 "Foundation rules are unknown"은 진짜 자기부정).
**측정한 것만 고치고 멈췄다.**

`portable_core` **440/440 사유 0건** · 유닛 1492 · web 488 · 카탈로그 440/0 · 원장 930.
예산 하에 컴파일된 패키지 3건은 `SUPERSEDED.md`로 표시(삭제 아님 — 절단 비용의 증거).

---

## ✅ 2026-09-20 — 로스터 작업 **전면 완료**. 누적 **40건 / 1,829개 이름**

인덱스 없던 16개(브라우저 필요)까지 끝냈다(`cd11a528`). **프로브로 도달 불가능한 호스트가
실재한다는 게 이 묶음의 발견이다** — 전부 렌더된 페이지에서 읽었다.

pinterest 86 · freee 69 · apple 64 · mongodb 61 · palantir 58 · clickhouse 57 ·
digital-agency-jp 49 · thumbtack 45 · karrot 34 · line 34 · remember 32 · ubie 28 ·
miro 14 · nhncloud 14 · **socar 0** · **toss 보류**

**셋은 기계 판독 인덱스를 발행하고 있었다 — 크롤러가 안 보는 곳에.** freee·remember는
Storybook이라 앵커 0개에 로스터가 `/index.json`에 있고(오늘 likelion과 같은 모양),
apple은 렌더가 비어도 **자기 문서 JSON API**가 답해 8개 범주 파일로 64개가 나온다.

**socar는 컴포넌트 시스템을 발행하지 않는다.** `ds.type: system`인데 `design.socar.kr`은
**쏘카 브랜드 센터**다 — 브랜드 로고·에셋·표기 규정뿐이고 `/socar.design/`은 루트로 리다이렉트.
열거할 게 없어서 로스터를 안 적고 그 사실을 §4에 적었다. zigzag에 이은 **네 번째 `ds.type` 오표기**.

**toss는 보류했다.** 43개를 읽었지만 오늘 Core v2로 채택돼 정본이 패키지에 해시 결속돼 있다.
산문을 덧붙이면 결속이 깨진다. 재마이그레이션 + 두 번째 채택이 필요한 별도 트랜잭션이다.
**이 리뷰가 "11개 중 2개"로 시작한 그 레퍼런스의 실제 숫자가 43이다.**

작은 수가 맞는 경우: nhncloud 14(TOAST UI는 Grid·Chart·Editor를 독립 라이브러리로 발행) ·
miro 14(29개 중 파운데이션 7 + 템플릿 8 제외) · ubie 28.

게이트: 카탈로그 440/0 · `portable_core` 440/440 · 티어 141/183/116 · web 488 · 원장 917→**930**.

---

## ✅ 2026-09-20 — C 완료. **krds 채택. 카탈로그 두 번째 Core v2 정본**

5단계 체인 완주(`115cd802`): 오너 영수증 → 컴파일 → 채택 체크포인트 → 채택 → 리더 확인.
`coreStatus: verified` · `model: core-v2`.

| 필드 | legacy | 채택 후 |
|---|---|---|
| primary / background / foreground | #256ef4 / #ffffff / #1e2124 | 동일 |
| fontFamily | Pretendard GOV | 동일 |
| headingWeight | 700 | 동일 |
| radius | 6px | 동일 |
| **accent** | #D63D4A | **없음 — 오너가 수용** |

### 파리티 게이트가 값을 했다 — 조용한 0을 잡았다

**첫 컴파일 패키지는 깨끗하게 검증됐다** — `status: verified`, 6산출물 트랜잭션 무결성 통과,
선언 적합성 통과 — **그리고 토큰을 0개 서빙했다.** 모든 색과 radius가 `""`인데 **아무 데서도
에러가 안 났다.** 파리티 검사만 봤다.

원인은 한 시간 전 내가 쓴 provenance 변환기였다. 토큰은 **자기 경로**
(`foundations.tokens.color.body`)에 결정이 필요하다 — `core-consumer-contract.ts`가 정확히
그 키로 찾고 **못 찾으면 조용히 건너뛴다**("omit that token at its own boundary"). 나는
`.$type`/`.$value` 잎만 냈다. toss는 둘 다 갖고 있다(19 bare + 24 잎 = 19토큰에 43결정).
변환기가 DTCG 객체를 한 단위로 보게 고쳤고 krds는 0 → 24 토큰이 됐다.

**게이트 셋이 좋다 하고 하나가 비었다고 했다.** 셋은 트랜잭션(해시·산출물 수·선언 형태)을
재고, **아무도 리더가 무엇을 받는지 묻지 않는다.** toss 이후 파리티 검사를 만든 이유가 그것이고,
출하될 뻔한 패키지에서 처음으로 발화했다.

### accent는 사고가 아니라 결정

302건이 accent를 산문 정규식에서 얻고 프론트매터에 `accent` 키가 있는 건 32건뿐이다.
302건이 쓰는 대체 이름이 **18가지**라 일반 규칙이 성립하지 않는다.

toss 채택이 예고한 테스트 9건은 재발하지 않았다 — toss 자신의 채택이 계약 갭 3건을 닫고
레거시 픽스처 6건을 옮겨서 krds가 그 뒤를 그대로 지나갔다.

게이트: 유닛 1492 · web 894(파리티가 krds를 커버해 +1) · 카탈로그 440/0 ·
`portable_core` 440/440 · 티어 141/183/116 · 원장 917. **Core v2 정본 2건: toss · krds.**

---

## ✅ 2026-09-19 — B 완료. **`portable_core` 383 → 440/440, 미적합 사유 0건**

| | 커밋 | 효과 |
|---|---|---|
| 플레이스홀더 **판정 버그** | `6dd29a4b` | 383 → 402 |
| `[FILL IN]` 36줄 제거 (17건) | `17d6f7c3` | 402 → 418 |
| scope 부정 **판정 버그** | `bae760bc` | 418 → **440** |

**61건 중 2/3은 레퍼런스가 아니라 체커가 틀린 것이었다.** 이게 이 작업의 핵심 발견이다.

**① `unresolved`가 두 어휘에 동시에 속한다.** 채워넣지 않은 값이기도 하고, 스펙이 정의한
3개 폐쇄 사유 클래스 중 하나이기도 하다. 체커가 둘을 구분 못 해서 **AGENTS.md가 §3에
요구하는 다섯 줄 표**(official product-use / live surface-use / distributed asset /
declared-only / **unresolved**)를 가진 22건이 규칙을 지켰다는 이유로 탈락했다.
**스펙 자신의 정규 예시도 자기 게이트를 통과 못 했다.** 위치로 구분한다 — 사유 클래스는
행을 라벨링하니 첫 칸, 플레이스홀더는 값 자리. `| Motion | UNRESOLVED |`는 여전히 실패.

**② scope 부정 판정은 디자인 산문을 자기부정으로 읽었다.** "The green is a signal,
not a surface"(nvidia), "not a typical tech product page"(runwayml). 체커는 부정어
근처 단어를 보고 **허용 단어 목록**으로 예외 처리하는데, 그 목록이 세 번 넓혀졌고
주석에 *"워커들이 올바른 산문을 체커에 맞춰 고쳐 썼다 — 문서가 체커를 만족시키려 자신을
왜곡한 것"* 이라 적혀 있다. 어휘가 아니라 **구조**가 신호다: 본문이 scope를 긍정적으로
말하는 문장을 하나라도 가지면 다른 곳의 부정은 산문이다. 기존 테스트가 이미 그 선을
긋고 있었다(통과 케이스는 전부 긍정문+부정 꼬리, 실패 케이스는 부정만 있는 본문).

**③ 진짜 결함 36줄**은 전부 "no X was captured"를 금지된 문법으로 쓴 것이었다. 괄호가
답을 감싸고 있었거나(`| Empty | [FILL IN: no observed state] |`), 문장이 이미 말한 것을
중복했거나, **tving·coupang·kream은 "페르소나를 지어내지 말라"는 산문 바로 밑에
지어낼 빈칸을 두고 있었다.** 17개 파일 순증 -8줄. 값은 하나도 안 생겼고 부재 진술은
하나도 안 약해졌다.

게이트: scripts 281 · web 487 · 카탈로그 440 pass/0 dropped · 티어 141/183/116 불변 ·
원장 917 · tsc clean. bench 5건은 프로세스/시계 타이밍 플레이크 — 이 변경을 stash해도
HEAD에서 똑같이 실패한다.

**C(krds 채택)의 선행조건이 해제됐다.** write gate까지 남은 것은 "모든 리더가 자기 패키지를
받아들인다" 하나.

---

## ✅ 2026-09-19 — 후보 A 로스터 작업 **완료**. 25건 / **1,141개 컴포넌트 이름**

`ds.type: system` 50건 중 **인덱스를 가진 것은 전부 기록했다.**

| 회차 | 건 | 이름 | 커밋 |
|---|---|---|---|
| 1차 (에이전트 5 + 직접 1) | 6 | 386 | `7c2496c6` `0d0040d4` |
| 2차 (직접) | 5 | 275 + 유틸 10 | `ac211f6b` |
| fetch 가능 (직접) | 5 | 183 | `5bedd33e` |
| 브라우저 필요 (직접) | 8 | 287 | `d5d1e246` |

최대 **cloudscape 108** · skyscanner 91+10 · uber 89 · alipay 72 · patternfly 72 · vercel 72 ·
channeltalk 60 · smarthr 61 · wise 55 · zendesk 55 · wanted 53 · microsoft 47 · uswds 47 ·
ibm 39 · govuk 37 · hashicorp 37 · google 36 · sanity 36 · money-forward 25 · likelion 18 ·
kdan 9 · samsung 8 · hahow 4. 별도: **adobe 114개 페이지**(로스터 아님) · **servicenow 기록만**.

**신원 근거 — 25건 중 발행 컴포넌트를 실제로 측정하는 건 3건뿐이다**: patternfly 2
(`pf-v6-c-button pf-m-primary`) · ibm 1 (`cds--accordion__heading`). 나머지는 전부 제품·마케팅
표면 캡쳐이거나 선택자 위치 기반이다. govuk은 제3의 범주(캡쳐 없음 + 시스템 자신의 토큰
함수 인용).

**fetch로 못 가는 호스트가 실재한다**: skyscanner(2KB 셸·불투명 id) · likelion(Storybook
쿼리스트링 — 경로 크롤로는 구조상 불가, 답은 `/index.json`) · uber(레포 트리는 3개도 94개도
나오고 **둘 다 로스터가 아니다**, 문서 사이트가 89) · google·microsoft·sanity·wanted·samsung.
**servicenow는 자기 인덱스가 "Failed to load components"** (브라우저 2회) ·
**adobe는 Spectrum 1만 열거 가능**(S2 사이트맵 403, 사이드바 렌더 안 됨).

게이트 전부 통과 · 474/474 · 티어 **141/183/116 불변** · `portable_core` **383 불변** ·
원장 899 → **917**.

**남은 것**: 인덱스 없는 16개 SPA(apple·line·mongodb·pinterest·zendesk 외) — 렌더된 내비
읽기 필요 · B(`contains-prescriptive-placeholder` 39 · `missing-product-surface-scope` 22) ·
만료 벽(141건 전부 2027-01-10).

---

## ✅ 2026-09-19 — 후보 A 보수 2차. 누적 **11건 / 671개 이름**

2차(`ac211f6b`): skyscanner 91+유틸 10 · smarthr 61 · uswds 47 · ibm 39 · govuk 37 = **285개**.
**에이전트가 아니라 내가 직접 했다** — 5명이 55분간 파일을 못 썼고 원인의 상당 부분이 내
브리프였다("인덱스가 이긴다"면서 셋에게 틀렸거나 도달 불가능한 인덱스를 줬다).

**skyscanner는 fetch로는 불가능한 유일한 호스트다.** 2KB 셸 · `/components`는 환영 페이지로
리다이렉트 · 서빙 HTML에 컴포넌트 링크 0개 · 모든 URL이 불투명 접미사(`accordion/web-sEshz9Z5`)라
사이트맵은 이름이 아니라 id를 준다. 브라우저로 렌더한 내비게이션에서 읽었다.

**내 브리프 오류 3건**(직접 fetch해서 발견): uswds `/components/`는 556바이트 스텁이고 진짜는
`/components/overview/`(76KB) · ibm overview는 2.9MB인데 아무것도 안 나열하고 한 단계 아래
`/components/overview/components/`가 진짜 갤러리 · govuk·smarthr는 예상대로 서버 렌더.

**신원 근거 — 96 대 2를 가르는 지점**:
- **ibm은 39개 중 1개를 진짜로 측정한다** — accordion 캡쳐가 `class cds--accordion__heading`을
  들고 있다. `cds--`는 Carbon 자신의 접두사다.
- **uswds는 0개** — `usa-` 접두사가 파일에 하나도 없다. 게다가 `/components/overview/`를
  `components-live`로 **2026-07-13부터 인용**하면서 거기 적힌 47개를 안 읽었다.
- **govuk은 제3의 범주**였다 — 캡쳐 provenance는 전혀 없는데(surfaces·selector·class 없음)
  산문에서 시스템 자신의 토큰 함수(`govuk-functional-colour("brand")`)를 인용한다. 값은
  1차 출처인데 컴포넌트는 관측 기록이 없다. 9개 중 7개가 발행 컴포넌트와 이름이 겹치지만
  §4는 그 일치가 증거가 아니라고 적었다.
- **smarthr 0개** · **skyscanner는 분리** — 색상은 Backpack 자신의 `--bpk-*` 변수명(강함),
  지오메트리는 `skyscanner.co.kr` 라이브 제품(Backpack 문서 아님).

게이트 전부 통과 · 474/474 · 티어 **141/183/116 불변** · `portable_core` **383 불변** ·
원장 905 → **907**(ibm·uswds만. govuk·smarthr·skyscanner는 `verification_v2` 블록이 없어
**만들어내지 않았다** — 만들었으면 티어가 움직였다).

**남은 로스터 12건**: aws-cloudscape · uber · sanity · hashicorp · google · samsung ·
money-forward · servicenow · kdan · wanted · microsoft · hahow.
**브라우저 필요**: adobe(Spectrum 1/2 세대 구분 + 내비 클라이언트 렌더) · likelion(Storybook) ·
인덱스 없는 16개 SPA. 이건 fetch 에이전트로 또 보내면 이미 실패한 걸 반복하는 것이다.

---

## ✅ 2026-09-19 — 후보 A 보수 1차. 레퍼런스 6건에 **386개 컴포넌트 이름** 기록

| 레퍼런스 | 발행 | 기록 | 비고 |
|---|---|---|---|
| wise | 55 | 55 | 인용하던 `docs.wise.design`가 **죽어 있었다**(302 → `/404`) |
| alipay | 72 | 72 | 시스템은 **Ant Design**(Ant Group), Alipay 전용이 아님. 호스트 7개 범주 |
| channeltalk | 60 | 60 | export 인덱스 66 − 프로바이더 6. 44 정식 / 13 Alpha / 3 Legacy |
| patternfly | 72 | 70 미측정 | 인덱스가 스스로 "72 items". 패턴 9건 제외, 중복 2건은 호스트 것이라 유지 |
| vercel | 72 | 72 | 71 페이지 + `pill`(`/geist/badge#pill` 앵커, 사이트맵엔 없음) |
| zendesk | 55 | 55 | 호스트가 붙인 소제목 5개 + 소제목 없는 26개는 **범주 없이** 기록 |

커밋 `7c2496c6`(wise) · `0d0040d4`(5건). 게이트 전부 통과 · 474/474 ·
티어 **141/183/116 불변** · `portable_core` **383/440 불변** · 카탈로그 440 pass / dropped 0 ·
원장 899 → **905**(인덱스 출처 6건). `tokens.components`는 어느 것도 안 건드렸다.

**가장 중요한 건 기록한 이름이 아니라 거절한 주장이다.** zendesk의 측정 3건은
`/components/button` 문서 페이지 **위에서** 캡쳐됐는데도 Garden의 `button`이라고 부르지
않는다 — 위치는 정체성이 아니고, 캡쳐 어디에도 그것이 발행된 컴포넌트의 렌더 인스턴스라는
표시가 없다. vercel도 같은 선을 긋는다(6건 중 5건이 Geist 소개 페이지 자체의 랜딩 그리드).

**보고를 그대로 믿지 않고 직접 확인한 것**: ant.design 서빙 HTML에 7개 범주와 74개 슬러그
(→ `overview`·`changelog` 빼면 72) · bezier `src/index.ts`가 정확히 66개 모듈 re-export하고
로스터가 "미export"라 한 5개는 실제로 없음 · `badge#pill`이 Geist 서빙 HTML에 존재.
(첫 ant.design 확인은 `-L`을 빼먹어 301 본문을 읽었다.)

남은 로스터 대상 **21개 호스트**. 다음 파도 후보: skyscanner·smarthr·govuk·uswds·hashicorp·ibm·sanity.

---

## 🔎 2026-09-19 — 후보 A 전수 프로브 완료. **대상은 429가 아니라 50이었다**

스크립트 `web/scripts/probe-design-system-index.mjs`(신규, 미커밋) · 원본 `/tmp/probe-system.json`
정본 서술: `docs/SOURCE_INDEX_BLINDNESS_2026-09-17.md`

A를 계획할 때 쓴 "429개 호스트"는 틀린 모집단이었다. 이 결함("올바른 호스트를 인용하고
인덱스를 안 열었다")을 가지려면 컴포넌트 인덱스가 존재해야 하는데, 353개는 `homepage`만
있고, `ds:` 블록 86개 중 **37개는 `type: brand`**(트레이드마크 정책·폰트·보도자료·브랜드
에셋)다. 인덱스가 없는 게 정상인 것들이다. **`type: system` 50개가 실제 대상.**
`type`은 프론트매터에 처음부터 있었다 — 안 읽고 계획을 세웠다.

| `type: system` 50개 | 수 | 다음 |
|---|---|---|
| 컴포넌트 로스터 확인 | **27** | 이름 대조 완료 |
| 인덱스 있으나 경로 모양 다름 | 7 | adobe `/page/` 114개·likelion Storybook = 진짜 로스터 |
| 인덱스 없음 (SPA/정적) | 16 | 스크립트 불가 — 렌더된 내비 읽기(에이전트) |

**이름 단위 결론: 발행 1,206개 중 321개 = 26.6% — 그러나 이건 상한이고, 손으로 센 6건에서는 386개 중 2개였다(스크립트는 같은 6건을 96개로 셌다).**
추출 방식을 두 가지로 바꿔 재계산해도 27.7% → 26.6%로 1pp 안에서 움직인다 — 결론이 추출에 안 흔들린다.
`web/scripts/compare-component-names.mjs`. 부분 문자열 매칭이라 **상한**이다 — 갭을
만들어낼 수는 없고 실제는 최소한 이만큼. 불투명 슬러그(skyscanner `web-sEshz9Z5`,
krds `component_04_07`)는 제외했다.

검증: 손으로 "완전"이라 본 **yeogiotte가 3/3(100%)**, 9-18에 42개를 적은 **pega가 73%**(3단 경로라 추출이 범주를 잡음). 최악(스크립트 기준): velog 7%(단 velog는 발행 로스터가 아니라 앱 내부 컴포넌트다 — 이 행은 무효) · wise 9% · google 11% · alipay 15% ·
channeltalk 18% · uber 21% · patternfly 25% · vercel 26%.

**→ 오너 판단 기준("갭 크면 A 우선")에 따라 A가 B보다 위.**

**내 스크립트가 1차에서 틀린 것 3건**(전부 문서에 기록): 원점이 잘못된 단위라 `ds.url`
7개가 `github.com`으로 붕괴해 **GitHub 자신의 llms.txt를 일곱 번** 읽었다 · `cited`가 URL
인용 수라 krds를 `45 발행 · 7 인용`으로 판정했다(같은 날 이름 34개를 §4에 적었는데도) ·
`components` 이름표가 상한을 로스터처럼 보이게 했다. `uber/baseweb`은 `components/` 규약을
안 써서 3개로 보고됐다 — 그리고 레포 트리는 애초에 로스터가 아니었다(문서 사이트가 89개를 낸다).

**`ds:` 플래그는 처리 완료 — 그리고 내 첫 진술은 철회했다**(`636e95d3`, `399d5196`).
설명문을 열어보기 전에 "URL이 주지 않는 걸 주장한다"고 썼는데, 열어보니 셋 다 자기 URL이
뭔지 정직하게 적고 있었다. velog "컴포넌트 93개"도 `apps/web/src/components/*`로, 레퍼런스가
발행 로스터라 주장한 적 없는 것 — 내 스크립트 결함이다. 실제로 고친 것은 **설명문의 낡은
사실 2건**: velog는 토큰 위치가 `src/lib/styles/themes.ts`가 아니라 `apps/web/src/styles/
global.css`의 CSS 커스텀 프로퍼티 157개다(값은 실제로 Open Color 일치 — 그래서 삭제가 아니라
위치 정정) · banksalad는 org에 BPL이 없고 `styleguide`가 코드 스타일 가이드다.
`zigzag`는 설명문이 정확해 건드리지 않았다 — 남는 건 `type: system`의 배지 표시 문제뿐.

---

## 🔎 2026-09-18~19 — 인덱스 우선 리서치. 호스트 4곳, 로스터 2건 기록

정본: `docs/SOURCE_INDEX_BLINDNESS_2026-09-17.md`(2026-09-19 절) · 조사 원본
`.omd/execution/2026-09-18/index-rosters.md`

| 레퍼런스 | 호스트가 발행 | 우리가 인용 | 조치 |
|---|---|---|---|
| **pega** | **42** | **0** | 로스터 기록 · `use:` 명시 (`f8d8e03a`) |
| **krds** | **55** | 21 | 34개 이름 기록 (`08e9d85e`) |
| kakao | 0 (API 포털 사이트맵) | — | 없음 |
| yeogiotte | 3 | 3 | **완전** |

**9-17에 제안한 Step 0만으로는 부족했다.** 두 함정이 실측으로 드러났다:

- **내용 검사를 통과하는 가짜 인덱스** — pega의 `llms.txt`는 200·`text/plain`·1,528바이트로
  내 검사를 전부 통과하는데, 자기 두 번째 줄이 *"Generated by Yoast SEO"*라고 말한다.
  페이지 5개·컴포넌트 0개. 같은 사이트 `page-sitemap.xml`에 컴포넌트 42개가 있고, 정답은
  `llms.txt` 자신의 `## Optional` 포인터를 한 번 더 따라가는 것이었다.
  **크기·내용 검사는 소프트 404가 아님을 증명하지, 인덱스임을 증명하지 않는다.**
- **큰 인덱스가 컴포넌트 인덱스는 아니다** — kakao 사이트맵은 진짜고 316 URL인데 전부 API 문서다.
- krds는 사이트맵이 44개에 닿지만 전부 불투명 id이고, 이름을 주는 로스터 페이지는 **55개**를 낸다.

Step 0을 6단계로 고쳐 문서에 넣었고, 게이트 스텁 스킬에도 포인터를 남겼다.

**pega에 미결 하나를 남겼다.** 세 측정값이 `tokens.components`에 `type: button`으로 있고
**builder는 산문이 아니라 `type`을 읽는다.** 프론트매터에서 빼면 그걸 가리키는 **증거 클레임
24건이 고아**가 되고 `claim_path_unknown`이 즉시 partial로 강등시킨다(평가기가 옳다).
provenance 24건과 렌더링 교정의 맞바꿈은 정리가 아니라 거래라 §4에 오너 결정으로 적었다.

**증거 무결성 테스트가 이틀에 두 번 잡았다** — krds·pega 둘 다 출처를 `2026-09-18`로 캡쳐했는데
`checked`가 더 이전이었다. 레퍼런스는 자기 확인일보다 나중의 관측을 가질 수 없다. 날짜를
맞춰 내리는 대신 `checked`를 올렸다.

**내가 과했던 것 1건** — 조사 보고서의 *"빠진 섹션보다 위험하다"* 표현을 확인 없이 오너에게
전달했다. pega 레퍼런스는 §1·§9에서 자기 범위를 반복해 밝히고 있다. 보고서에 정정을 붙였다.

원장 897 → **899**. 품질 141/183/116 유지. 웹 955/955.

---

## ✅ 2026-09-18 — 오너 승인 02~05 전부 처리 완료

| | 결정 | 상태 |
|---|---|---|
| **02** | `/design-systems` **유지** | AGENTS.md에 결정으로 기록(`df16523f`). 착지→builder 도달률은 05 때문에 여전히 미측정 — 구조 근거만으로 선 결정 |
| **03** | advisory **모션 제외**(390 → **198**) | `detail-view.tsx`(`dc767a69`). 평가기는 그대로 계산하고 **렌더링만** 바꿈 |
| **04** | 보류 스프린트 **커밋 1건** | `aa89ca23` 290파일. 작업 트리가 처음으로 깨끗해짐 |
| **05** | GA4 **GCP 재생성** | 절차 `docs/ANALYTICS_RECOVERY_2026-09-18.md`. **오너 콘솔 작업 대기** |

**03의 핵심** — `motion_value_unsourced` 261건을 레퍼런스별 결함 목록에서 빼되 **숨기지 않는다.**
별도 줄로 전역 사실을 말한다: 공식 DS 발행처 중 모션 스케일을 내는 곳이 없고, 토스는 자체
질의 엔드포인트로 "값은 문서가 아니라 Figma UI Kit 안에 있다"고 답했다. 192개는 오직 모션
때문에 그 블록을 달고 있었고, 이제 안 단다. **목록에서 빼는 것과 숨기는 것은 다르고, 그 별도
줄이 그 차이를 만든다.** 프로덕션 빌드로 확인: 29cm(모션만)는 블록이 사라지고 전역 줄만,
17live(모션+팔레트)는 블록 유지·모션만 빠짐. builder는 advisory를 렌더하지 않아 무관.

**커밋 누락 1건 발견·수정** — `b7299cee`가 `verify-primary-tasks.mjs`·기록 문서·초안 JSON을
빠뜨린 채 나갔다. 그 커밋 메시지는 초안 경로를 명시하는데 트리에 없었다. 원인은 내가
`git add`에 `2>/dev/null`을 붙여 실패를 삼킨 것. `dc767a69`로 보완했다.

**05가 막고 있는 것:** 02의 나머지 절반, 2026-06 활성화 누수 재측정, `scripts/analytics/` 5개 전부.

---

## 🟢 2026-09-18 — **438개 Primary tasks 완료.** `missing-primary-task` 0

커밋 `b7299cee`. 정본: `docs/PRIMARY_TASKS_2026-09-18.md`

| | |
|---|---|
| 과업 | **1,907** · 438 레퍼런스 · 평균 4.4 |
| `missing-primary-task` | 438 → **0** |
| `portable_core` | 1 → **383 / 440** |
| 카탈로그 | 440 pass · dropped 0 · 웹 955/955 |
| 남은 사유 | `contains-prescriptive-placeholder` 39 · `missing-product-surface-scope` 22 |

**문장은 유도하지 않았다.** 에이전트 72배치가 각자 레퍼런스를 읽고 초안을 썼고, 스크립트는
넣기만 했다. 초안 전문은 `docs/primary-tasks-drafts/2026-09-18-drafts.json`에 인용과 함께 남아 있다.

**`web/scripts/verify-primary-tasks.mjs`** — 과거 결함 2종(baemin 표면 혼동, `"Jobseekers."`)을
기계적으로 막는다. 인용은 정확 부분문자열 8단어 이상, 마케팅 섹션 출처 거부, 동사 시작, 5단어 이상.
**통과한 것만 적용 형식으로 나가므로 미검증 문장이 레퍼런스에 닿을 경로가 없다.**

**1,907개 중 실제 결함 거부 0건.** 거부 3건은 전부 내 검증기 오탐이었다 —
`-ance`가 "Refinance"를 죽였고(`-ment`는 Implement, `-ion`은 Question도 죽인다),
마케팅 표면 id가 `home`이라 "the home"이 든 정상 과업을 죽였다. 둘 다 좁히고 이유를 코드에 남겼다.
**가설을 잡으려고 진짜 작업을 버리는 검사는 검사가 없는 것보다 나쁘다.**

**3개 바닥 → 2개.** `hyundaicard`가 2개로 왔고 맞았다(제품 홈 1 + 기업정보 2 라우트).
강제했다면 없는 과업을 만들게 했을 것. 2개인 11건은 전부 **레퍼런스 자신의 거절을 인용한다** —
stripe는 결제 회사인데 "결제" 과업이 없고(캡쳐가 Docs 3라우트), yanolja는 예약 서비스인데
예약 과업이 없다(§5·§7·§14가 금지). `shinhanbank`는 시키지 않았는데도
*"the brand-asset download action … belong to the group marketing site"*라며
**baemin에서 났던 폰트 다운로드 결함을 스스로 배제**했다.

**경합 1건:** 에이전트가 내 읽기 뒤 파일을 갱신 → 멱등 적용이 잡음 → 프롬프트에 "한 번에 저장"
추가 → 마지막에 72배치 전량 재검증(438/438 clean, 적용 0건).

**내 오판 1건:** baemin 롤백 카나리의 staged 파일을 현재 원본에서 다시 만들었는데, 그건 현재
원본의 투영이 아니라 **동결 픽스처**였다(구 파일에 현재 baemin에 없는 섹션이 있다). 되돌렸고
바뀐 건 legacy 바이트 핀 하나뿐.

---

## 🟢 2026-09-18 — **toss 채택 완료.** 카탈로그 최초로 Core 패키지에서 서비스된다

커밋 `482fceca` (채택) · `e307ccbb` (기반). 트랜잭션 `479e241fceb4c384`.

**게이트가 요구한 증명이 나왔다.** `CORE_V2_CATALOG_WRITE_BLOCKED`의 미충족 조건은
*"every catalog reader accepts its package"* 하나였고, 그 거리가 얼마인지 아무도 몰랐다.
이제 답이 있다 — 일어났기 때문이다:

- `/design-systems/toss` · `/builder` · `/toss/design.md` · `/r/toss` **전부 200** (프로덕션 빌드)
- builder 프리뷰가 팔레트 · **Toss Product Sans** · Primary tasks 6건 ·
  `radius.button-medium 10px`를 **패키지에서** 렌더한다
- **"✓ Portable Core"** 배지, Evidence **57 claims · 23 bindings**
- 채택 커밋이 husky 전체 게이트 통과 (파이프라인 5단계 + 474 단언)

**체인은 오너 게이트 4개를 지났고, 기록에 없던 다섯 번째 장애물을 만났다.**
컴파일이 r2를 거부했다 — 마이그레이션 형태 provenance. 9-08 설계가 예고했으나 리허설이
필드 하나만 묶고 멈춰 이론으로 남아 있었다. r3(바이트 동일)로 컴파일, r4는 미리보기가
바뀌어 오너가 다시 봤다.

**막판에 게이트가 두 번 더 잡았다.** `build-registry`·`build-reference-quality`·
`build-reference-ast`·`build-reference-quality-data`가 전부 frontmatter를 읽는데 채택본엔
없다 — Core v2는 디자인 시스템을 기술하지 카탈로그 항목을 기술하지 않으므로 country·
category·logo가 들어갈 자리가 없다. 원장은 더 나빴다: **toss를 조용히 빠뜨려 897→887**.

데이터는 안 잃었다. 마이그레이션이 세그먼트 전부를 보존하고 이어붙이면 채택 전 파일이
**바이트 동일**로 복원된다(`source_reconstruction_equal`이 줄곧 단언하던 것). 리더가
데이터를 못 찾은 게 아니라 **더 이상 없는 곳만 보고 있었다.**
`web/scripts/lib/reference-source.mjs`가 양쪽 다 해결한다 — 해시 검증 포함.

### 다음 레퍼런스를 채택하기 전에 알아야 할 것

레지스트리·품질 데이터·원장을 먹이는 frontmatter가 이제 패키지 안에 있고, 읽는 건 전부
`lib/reference-source.mjs`를 지난다. **`DESIGN.md`를 직접 여는 새 스크립트는 Core 문서를
읽고 throw하거나 레퍼런스를 조용히 건너뛴다.** 조용한 쪽이 더 나쁘고, 이미 한 번 일어났다.

채택 전 바이트는 `.omd/execution/2026-09-18/toss-pre-adoption-backup/`에 있다
(완료된 트랜잭션은 자기 백업을 지운다).

**상태: 440/440 마이그레이션 · portable_core 1/440 · verified 141 · 955/955 · 원장 141/897.**

---

## 🟠 2026-09-18 — 오너 5건 승인. 채택 체인을 돌리다 **폰트 손실**에서 멈췄다

정본: `docs/ADOPTION_CHAIN_2026-09-18.md`

**뚫은 것.** r2 영수증 발급 후 컴파일이 거부됐다 — r1·r2의 `provenance.json`이 마이그레이션
형태라 컴파일러 스키마(`schema_version`/`design_md_sha256`/`graph_sha256`/`decisions` 넷만 허용)를
위반한다. 9-08부터 잠복해 있던 구멍이고, 전체 레퍼런스로 컴파일을 끝까지 돌려본 적이 없어
오늘 처음 드러났다. `decisions` 37건은 그대로 두고 포장만 바꿔 **r3**를 만들었고
(`r2/DESIGN.md`와 **바이트 동일** — 오너가 검토한 내용 불변, 근거는 `WHY_R3.md`),
**카탈로그 최초로 컴파일에 성공**했다. 6산출물 + 채택 영수증.

**증명한 것.** 실물 패키지를 정본 자리에 놓고 재니 `coreStatus: **verified**`,
`model: core-v2`, 색은 전부 정상. **게이트가 요구한 "리더가 패키지를 수용한다"의 답이 나왔다.**
(중간에 마이그레이션 *스테이징* 사이드카로 시험해 "OG가 500난다"고 잘못 판단했다가 즉시 정정.
실물에서는 그 실패가 없다. 남는 사실 — 검증기가 거부하면 토큰이 `""`가 되고 OG 라우트가 터진다.)

**고친 것.** `.gitignore`의 `.omd/`가 채택 사이드카까지 삼켜 **Vercel은 영원히
"패키지 없음" 상태**였을 것. `!web/references/*/.omd/**` 추가, 루트 `.omd/` 무시는 회귀 확인.

**멈춘 이유 — 채택하면 `fontFamily`가 `"Toss Product Sans"` → `""`가 된다.**
마이그레이터가 타이포를 `typography_assets.rules` 산문으로만 옮기고 `roles`/`assets`
타입 슬롯을 비워 둔다(색은 `foundations.tokens`로 승격되는데 타이포는 아니다).
**스키마에는 자리가 있다** — Core v2의 한계가 아니라 마이그레이션 갭이다.
810회 관측으로 검증된 값이 산문에는 있고 타입 필드에는 없다.

`dropped_segments: 0` · `roundtrip_equal` · `reconstruction_equal` 셋 다 **참이고 불충분하다.**
셋 다 마크다운 왕복을 잰다. **투영된 필드의 동등성은 아무도 재지 않았다.**
> 마이그레이션은 텍스트로는 무손실, 데이터로는 유손실이다.

AGENTS.md는 검증된 폰트 패밀리를 지우는 것을 명시적으로 금지한다. 오너 승인은 이 사실이
알려지기 전에 나왔고, 승인 범위는 "5단계를 돌려라"이지 "검증된 값을 지워라"가 아니다.
표본 60개 중 13개가 UI 폰트 패밀리를 갖고 있어 **toss만의 문제가 아니다.**

**채택 전에 필요한 것:** (1) 마이그레이터가 `typography_assets.roles`/`assets` 승격
(2) 손실 게이트에 **투영 동등성 검사** 추가 (3) 그다음 테스트 9건 → 채택 → 미러 → 빌드 확인.

승인 02~05는 아직 미착수(01이 예상보다 깊었다). 951/951 통과, 정본 원상.

---

## 🔴 오너 승인 대기 5건 — 정본: `docs/OWNER_DECISIONS_2026-09-17.md`

각 항목의 근거 수치·선택지·실제 명령은 그 문서에 있다. 요약:

1. **toss r2 승인 → 채택.** 운영 위험은 **직접 시험해 답을 냈다** — Core v2 문서를 정본 자리에
   넣고 전체 스위트 실행 결과 **951건 중 942 통과**. 리더는 견딘다(`repository.server.ts:81`이
   `isCoreV2Document`로 이미 이중 판독). 깨지는 **9건**은 계약 갭 3(catalog-integrity의 `---`
   frontmatter 요구, evidence-integrity 만료 집계, reference-ast-fleet 무손실) + **toss를 legacy
   픽스처로 하드코딩한 6건**(`expected 'core-v2' to be 'legacy'`). 시험 후 정본 바이트 동일 복원.
   → **write gate의 "every catalog reader accepts its package" 거리가 처음으로 측정됐다: 9건/6파일.**
   리더 4개 2,834줄 재작성은 불필요 — `consumer-adapter`가 앞에서 흡수한다.
   명령은 **5단계**(4단계 아님). `--reviewer`는 자유 문자열, `kwakseongjae` 제안.
2. **advisory 노출 범위.** 390/440이 표시됨(verified 106·partial 176·legacy 108 — **검증 141건의 75%**).
   `motion_value_unsourced` 261이 압도적인데 **아무 DS도 그 스케일을 발행하지 않는다**는 게 오늘
   밝혀졌으므로 레퍼런스별 결함이 아니다. 선택지: (가)390 (나)**198**(모션 제외, 권고) (다)티어 게이트.
   192개가 오직 모션 때문에 표시되던 것. ※ 261/162/273은 서로 다른 측정이다.
3. **미커밋 119건**(128 아님). 오늘 8건 스테이징 완료 / 9·7~9·8 보류 스프린트 / 표류(`web/dbg.tmp.mjs`).
4. **애널리틱스 복구(신규).** `scripts/analytics/` 전부 무동작 — GA4 SA의 **GCP 프로젝트가 삭제**됐고
   (`Project #95733920708 has been deleted`) Mixpanel은 플랜이 API를 막는다(402), Vercel Analytics 미설치.
   2026-06 활성화 누수 같은 지표를 **지금 아무도 다시 잴 수 없다.** 메모리 `project_analytics_stack.md` 정정함.
5. **`/design-systems` 유지·대체·제거.** 권고는 유지. 근거의 절반(착지→builder 도달률)은 4번에 걸려 있다.

---

## 🔵 2026-09-17 저녁 — 오너 지적 2건 처리 완료

### 1. 라우트 — 지목이 반대였다. AGENTS.md가 원인이었다

오너: *"design-systems는 사실 그냥 아무것도 아니거든 … 너만 해도 지금 10번은 실수하고 있어."*

실측 결과 `/design-systems/<id>`는 **440개 색인 + JSON-LD + builder 진입 CTA**를 지는
영문 SEO/AEO 랜딩이다. "아무것도 아닌" 쪽은 `/reference/<id>` — 61줄, `noindex`,
사이트맵 부재, canonical을 이미 `/design-systems/<id>`로 넘긴다.

반복 실수의 기계적 원인: **AGENTS.md가 죽은 라우트를 "the catalog/detail"이라고 적고 있었다.**
매 세션 주입되는 문장이라 읽는 에이전트마다 같은 쪽으로 틀렸다. **수정 완료.**
정정 1건: AEO는 깨끗하지 않다 — AI 검색은 `llms.txt`가 아니라 색인된 HTML을 인용하므로
440개 페이지가 곧 AEO 표면이다. 순수 에이전트 채널만 깨끗하다.
근거·권고: `docs/ROUTE_IDENTITY_2026-09-17.md`.

### 2. 토스 — 찾아놓고 목록을 안 읽었다

오너: *"토스는 design system이 공개되어 있는 몇 안되는 기업인데 … 왜 못찾았어?"*

레퍼런스는 **처음부터 올바른 호스트**(`tossmini-docs.toss.im`)를 인용했다. 놓친 건 로스터다.
TDS 공식 **11개 코어 컴포넌트** 중 우리가 측정한 건 **2개**(Button, Badge).
인덱스는 `developers-apps-in-toss.toss.im`(개발자 포털)의 `llms.txt`(32.8KB, 링크 258개)에 있고,
모든 페이지가 `.md`를 준다. 이름 추측(`toss.design`/`design.toss.im`)으로는 영원히 못 닿는다.

절차 결함: `omd:add-reference` Phase 2에 **"그 사이트가 자기 문서 목록을 발행하는가"** 단계가 없다.
DS 호스트 10개 실측 → **5개가 인덱스를 발행 중**(kakao sitemap 316 URL, krds 81·컴포넌트 45,
yeogiotte 40, pega llms.txt, baemin 5). 한 번도 읽지 않았다.

모션 주장은 **철회하지 않는다** — TDS 자체 질의 엔드포인트가 "수치는 문서에 없고
Figma UI Kit 안에 있다"고 1차 확인. §15가 "출처 없는 면책" → **"출처 있는 부재"**로 승격.

반영: `web/references/toss/DESIGN.md` surfaces +3 / sources +4(라이선스 포함),
§4 공식 로스터(측정 2·미측정 9는 이름만, 토큰 0건), §15 재작성. 미러 2곳 동기화, **453/453 통과**.
검토 패키지는 출처 추가 전이라 스테일 → `toss-core-review-r2`로 **재생성 완료**
(`portable_core: true`, dropped 0, 적합성 사유 0). 구 패키지 보존.
근거·절차수정안: `docs/SOURCE_INDEX_BLINDNESS_2026-09-17.md`.

**오너 확인 필요:** Core v2 투영이 §4 산문(로스터)을 불투명 확장으로 흡수해 **채택 후에는
렌더되지 않는다.** 지금은 legacy 리더가 보여준다. 컴파일러 스펙 변경은 검토 직전이라 보류.

---

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

## 🟡 만료 벽은 2027-01-10으로 이동했다 (오너 결정 2026-09-17)

**TTL 상향: `product-surface` 90 → 180, `official-doc` 180 → 365.** 10-10 벽은 사라졌고
새 벽은 **2027-01-10**이다(01-07까지 140, 01-09에 112, 01-10에 0). 부수 효과 2건:
`figma`가 만료 근거 1건 때문에 partial이었다가 verified로 올라 **141/183/116**이 됐고,
`verified_v2`가 아니면 `notFound()`하던 영문 SEO 5개(`evolution/page.tsx:48`)의
404 위험도 2027-01로 밀렸다.

이건 위조 1번과 **글자 그대로 같은 편집**이다. 가르는 것은 편집 내용이 아니라 누가 무슨
근거로 정했고 어디 적혀 있나다 — 근거는 `web/scripts/lib/reference-quality.mjs`의 상수
주석에, 계측은 `web/__tests__/evidence-integrity.test.ts`에 있다. 가드는 이 편집을 막지
않았고, **막으라고 만든 것도 아니다.** 마감 직전에 조용히 일어날 일을 결정으로 만들었다.

**산 것은 시간이지 품질이 아니다.** verified 141개의 컴포넌트 평균은 여전히 2.9(legacy 9.9)다.
연장만 하고 캡쳐를 안 하면 1월에 같은 문제 + 6개월치 드리프트로 다시 만난다.
그리고 **배치 문제는 그대로다** — 여전히 한날 전량 만료다. 복구분은 날짜를 흩어야 한다.

180일이 맞는 숫자인지는 **아직 측정이 아니라 판단이다.** 이제 잴 수 있다 —
7월 번들이 `artifacts/reference-evidence-2026-07/`에 동결돼 있으니 몇 개 재캡쳐해
diff하면 라이브 표면이 90일에 실제로 얼마나 변하는지 나온다.

### 원래 진단 (배경)

140개가 전부 2026-07-11~14 한 배치로, 당시 TTL 90일인 `product-surface` 근거 위에서
검증됐다. 그 티어는 카탈로그에서 가장 쓸모없는 티어다 — 7월 승격은 증거를 더해서가 아니라 **컴포넌트를 지워서**
통과했다 — **실측 2026-09-17**: verified 평균 컴포넌트 **2.9**(<5개가 140 중 106개, 0개가 6개) vs
legacy **9.9**, partial **8.3**. 문서 크기는 verified가 20.6kB로 제일 작지만, 산문을 표로 바꿔서가
아니라 컴포넌트를 잃어서 작다.
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

### ✅ 첫 레퍼런스 end-to-end 완료 — `krds` (2026-09-17)

도구를 세 번 연속 먼저 고치고도 갱신된 레퍼런스가 0이라, 한 건을 **손으로 끝까지**
했다. 결과: 상태 인덱스 **4 → 5**, 클레임 **193 → 199**, verified 유지, 덮어쓴 값 0.
`button-primary +focus`, `button-secondary +hover/pressed/focus`,
`button-tertiary +pressed/focus`.

**그리고 하네스 재설계였다면 숨겼을 것 세 가지가 나왔다.**

1. **내가 커밋한 근본 원인이 틀렸다.** DOM 순서 절단이 아니라 버튼이
   `display: none`인 **"코드" 탭 패널** 안에 있어서 `0x0`으로 측정됐고 가시성 필터가
   정당하게 걸렀다. 내가 만들려던 수정(예제 컨테이너 우선·중복 제거)은 아무것도 못
   고쳤을 것이다. 필요한 건 **탭을 여는 것**이다.
2. **칠해진 색은 authored 토큰이 아니다.** 일곱 중 둘이 채널마다 1씩 다르다
   (`#0b50d0` vs `#0c51d1`). 레퍼런스가 이미 authored 값을 갖고 있었고 맞았다.
   `getComputedStyle` 값을 그대로 썼으면 **맞는 토큰을 틀리게** 만들었다.
3. **기하 불일치가 불일치가 아니었다.** 민 `.krds-btn.primary`는 `large`(56/8/19)로
   렌더되고 문서의 48/6/17은 `medium` 변형이다. 같은 페이지에서 확인했고 손대지 않았다.

증거 원장이 실제 콘텐츠 편집에서 처음 작동했고 변경을 정확히 지목했다.
다음 9개의 템플릿이 생겼다. 상세: `docs/CAPTURE_ATTRIBUTION_2026-09-17.md` 정정 절.

### ✅ 수요 상위 10개 완료 + 천장은 90%다 (2026-09-17)

**10개 결과**: `krds` 4→5 · `toss` 0→1 · `karrot` 0→1 · `apple` 0→1 · `29cm` 7월 값
독립 재확인 · `naver` 색 변화 없음(부재 기록) · `baemin` 문서 값 재현 안 됨(**충돌 보존**) ·
`line`·`kakao`·`yeogiotte` 측정 불가(사유 기록). `component_state_prose_only` 146 → **143**.

도구 2종: `npm`으로 안 감싼 `web/scripts/probe-component-states.mjs`(상태 측정)와
`survey-measurability.mjs`(측정 가능성 분류).

**천장 정정.** 상위 10개에서 5개가 막혀 "발행 방식 때문에 절반이 불가능"이라고 적었는데
**표본으로 재보니 90%가 측정 가능하다.** 분류기를 세 번 고쳤고 두 번 틀렸다 —
33% → 77%(표면 3개 시도 + 흰 배경 테두리 컨트롤 인정) → **90%**(실제 브라우저 신원).
막힌 10개 중 **8개가 헤드리스 탐지**였다. `baemin`을 403으로 기록한 건 내 잘못이었고
정정했다 — 실제로는 열리고 `woowa-more-light`가 문서 값과 전부 일치했다.

**진짜 제약은 발행 방식이 아니라 레퍼런스당 사람 시간(15~25분)이다.**
전말: `docs/MEASURABILITY_SURVEY_2026-09-17.md`.

측정 가능하다고 상태가 있는 건 아니다 — `naver`·`baemin`·`toss`는 재봤더니 **색이 안 변한다**.
그것도 결과이고 부재로 기록한다.

### 🔴 캡쳐 트랙 선행 조건 — 하네스가 문서화된 컴포넌트를 못 잡는다 (2026-09-17)

상태 델타를 가진 66개·측정 요소 264개를 그 레퍼런스가 문서화한 컴포넌트와 대조했다.
배경+높이 둘 다 맞아 **귀속 가능한 것은 19개(7.2%)**. 7월 번들에 델타가 4,748개인데
토큰에 배치된 게 37개뿐이었던 이유다.

`krds`로 추적했다. 라우트에 컴포넌트 페이지가 **이미** 있고 클레임도 그 표면을 가리키는데,
문서화된 `button-primary`(`#256ef4` 48px)가 8개 표면 전체에 **0개**다. 세 가지가 겹쳤다 —
(1) `captureStates()`가 `.slice(0, 24)`, 상호작용 캡쳐가 `.slice(0, 120)`으로 **DOM 순서
절단**인데 문서화된 버튼 3개는 semantic 345개 중 **302·303·304번**이다, (2) 중복 제거가
없어 18번 반복되는 크롬이 1번뿐인 정본을 이긴다, (3) `sample-view` 같은 **정본 예제
컨테이너 개념이 없다**.

**라우팅 문제가 아니다** — 갈 곳은 아는데 도착해서 무엇을 볼지를 모른다. 고치기 전에
재캡쳐하면 귀속 불가능한 증거를 다시 만든다. 수정안·근거: `docs/CAPTURE_ATTRIBUTION_2026-09-17.md`.
**미착수 — 오너 판단 필요.**

별건으로 **만료일 분산이 아직 열려 있다**: 상위 10개가 전부 2027-01-07이고, 오늘 한꺼번에
재캡쳐하면 2027-03-16에 또 한날 전량 만료한다. 날짜를 임의로 적는 건 위조 4번이다.

### 🔴 새 발견 — 모션 값 254건이 템플릿이다 (2026-09-17)

캡쳐 하네스는 모션 속성을 **하나도** 수집하지 않는데, 254개 레퍼런스가
`motion-instant/fast/standard/slow/page` 스케일을 **사실로** 싣고 있다. `motion-fast 120ms`가
147개 브랜드에 동일하게 나온다 — 관측이 아니라 생성이다. 격리 표기된 것은 2개뿐이고,
`banksalad`가 올바른 처리의 본보기다(관측 1건만 남기고 나머지는 synthetic으로 격리).

게이트가 못 잡은 이유: 평가기는 `tokens.*` leaf만 본다. 모션 값은 **토큰 블록 밖 산문**에만
있어 클레임 경로가 없다. 증거 없는 수치가 토큰 층 밖에 있으면 현재 어떤 검사도 통과한다.

**탐지기 완료.** `npm run prose-values`(말뭉치 차원 template 판정, elevation 포함) +
평가기 advisory `motion_value_unsourced`(**286건**, 비차단). 표준 이징 곡선은 공유돼도
증거가 아니므로 제외했고(그래도 비표준 `cubic-bezier(0.2, 0.6, 0.25, 1)`이 167개 브랜드에
동일), `banksalad`처럼 스스로 격리한 것도 제외했다.

**분류**: template **273**(805 KB) · 부재 명시 61 · 값 없음 87 · grounded 8 · 자체 격리 3.
elevation은 건강하다(grounded 163 / unsourced 33) — 모션이 예외다.

template 273건의 두 축: **공식 DS URL 있음 18 / 없음 255**(후자는 대조할 1차 출처 자체가
없다), **단서 달았음 187 / 단서 없이 사실로 제시 86**. `adobe`는 표 아래에
*"illustrative defaults … not publicly documented"*라고 적어 두고 표는 검증 토큰과 같은
형식으로 싣는다.

**A2 Tier-1 대조 완료.** 공식 DS URL 18개 중 6개는 상표·폰트 페이지(모션 있을 수 없음).
남은 12개에서 **5단 스케일을 발행하는 곳을 하나도 찾지 못했다** — Spectrum은 공식
design-data 저장소에서 애니메이션을 정성적으로만 기술하고, GOV.UK·DADS·socar도 값이 없다.
실제 값은 `smarthr` `Switch`의 `duration-150 ease-out`처럼 컴포넌트 일회성이다. 4개
(`hubspot` `money-forward` `sendbird` `ubie`)는 확인 못 했지만 결론은 같다 — 입증 책임은
주장에 있다.

**A1 처리: 30개.** (1차에 130개라고 했다가 **100개를 되돌렸다** — 외부 검토에서 orphan
가드의 정규식이 `` `motion-standard / ease-enter` `` 형태를 놓쳐 막아야 할 것을 통과시킨
게 드러났다. `adobe`는 표를 지우자 *"…curves above are illustrative defaults"* 만 남아
매달렸는데, 내가 작업 중에 보고도 오탐으로 판단하고 넘어갔다.) advisory 286 → **261**,
티어 불변.

**고친 가드로는 0개가 기계 처리 가능하다** — 235개가 고아, 1개가 매달림. 즉 **이건
기계적으로 되는 일이 아니다.** 거의 모든 모션 섹션이 산문에서 그 토큰 이름을 인용하고
있어 표를 자르려면 문장을 다시 써야 한다. 사실 보존 검사는 값 손실은 보지만 **의미 손실은
못 본다.** 전말: `docs/MOTION_TEMPLATE_2026-09-17.md`.

### 위조 경로 차단 완료 (2026-09-17)

10-10에 CI가 빨개지는 순간, 초록으로 되돌리는 가장 싼 방법 네 가지는 전부 텍스트 편집이고
픽셀 하나 다시 보지 않는다. 캡쳐 작업보다 **먼저** 막았다 — 가드 없이 캡쳐하면 15일치
작업이 30초짜리 편집과 같은 값을 산다.

| 위조 | 수확 | 차단 |
|---|---:|---|
| `SOURCE_TTLS["product-surface"]` 90 → 180 | 141 | `web/__tests__/evidence-integrity.test.ts` 상수 고정 |
| `kind: product-surface` → `official-doc` | 141 | `data/evidence-ledger.json` diff |
| 만료 source 삭제 후 claim 재연결 | 134 생존 | 같은 원장 |
| `captured:` 날짜 고쳐쓰기 | 140 | 같은 원장 + `captured > checked` 검사 |

원장(`web/scripts/build-evidence-ledger.mjs`, 141 refs / 887 sources)은 **막는 게 아니라
보이게 하는** 장치다. 실패 시 무엇이 어떻게 바뀌었는지 이름을 대고 출력한다
(`toss/toss-live kind product-surface → official-doc`). 네 위조를 실제로 적용해 전부
잡히는 것을 확인했다. 게이트: CI `check:reference-pipeline`, husky 데이터 평면 훅.

부수 정정 2건. (1) `eslite familymart-tw kb-kookmin lguplus taishinbank` 5개는 07-14에
2차 증거 패스가 있었는데 `checked`가 07-13에 멈춰 있었다 → 07-14로 정정(TTL은 `captured`
기준이라 **티어 변동 0**, 140/184/116 그대로). (2) 백로그 문서의 "188건은 새 측정 없이
가능"은 취소 — 188건 중 증거 번들 보유 **0건**, 산문 기록 최신 관측일 2026-05-08~07-02,
오늘 기준 80/188이 이미 90일 초과.

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

## 2026-09-17 작업 — 차단 사유 대청소

하루 동안 차단 사유가 이렇게 움직였다. **정본 데이터는 거의 고치지 않았고, 대부분
검사기가 이미 있는 증거를 못 알아본 것이었다.**

| 사유 | 전 | 후 | 원인 |
|---|---:|---:|---|
| `tier1_source_missing` | 53 | **3** | 1차 출처를 맨 도메인으로 적어 URL 추출기가 못 봄 |
| `freshness_conflict` | 115 | **4** | 전사(prose-derived)와 관측을 구분 안 해 정상 순서를 위반으로 읽음 |
| `conflict_unresolved` | 62 | **26** | `none — 이유` 형태를 정확 일치로 검사 |
| `proof_incomplete` | 55 | **32** | 옛 프루프 제목(`### Raw observations`) 미인식 |
| `component_state_prose_only` | 164 | **146** | 실측 상태값을 번들에서 토큰으로 이관 |
| `token_value_possibly_derived` | 14 | **5** | 팔레트 이름·Proof 기록분을 오탐으로 잡고 있었음 |

**등급: 140 verified / 184 partial / 116 legacy** — legacy에서 24개가 올라왔다.
verified는 불변(이 검사들이 그 티어로 가는 길목이 아니었다).

**JP proof gate 활성화** — KR·TW에 이어 일본도 brand-owned 출처 2개를 요구한다.
13건이 걸렸고 6건은 스킴 정규화로 해결, 5건은 1차 출처를 실제로 열어 확인 후 추가,
`layerx`는 플랫폼 계정 규칙을 새로 만들어 해결(맨 호스트는 불가, 계정 경로만 인정).

**신규 도구**: `extract-state-values` · `match-state-candidates` · `apply-state-values`
(상태값 3종) · `propose-verification-v2` · `local-store`.

## 남은 진짜 작업

| 사유 | 건수 | 성격 |
|---|---:|---|
| `verification_v2_missing` | 299 | **진짜 작업.** 자동 유도 두 번 시도·기각(`docs/VERIFICATION_V2_BACKLOG_2026-09-17.md`). 사실 추출은 267/269 되지만 클레임 매핑은 14.7%만 자동. 건당 60~80 판단 |
| `token_source_unverified` | 111 | prose-derived 토큰. 라이브 재검증 필요 |
| `proof_incomplete` | 32 | 검증 파일 자체가 없음 |
| `conflict_unresolved` | 26 | 실제 충돌 서술 |
| 상태값 | 146 | 판정 불가 20 + 번들 delta 없음 126 |

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
