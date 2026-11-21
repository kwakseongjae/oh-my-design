# CURRENT STATE — 단일 복원 지점

이 파일은 짧게 유지한다. 세션을 복원할 때 `scripts/context_restore.sh`가 이 파일의 앞부분(약 5KB)만 낸다.
새 일이 생기면 「지금」 블록을 고쳐 쓰고, 날짜 절은 최근 것만 아래에 둔다. 오래된 절은 `docs/archive/state/`로 옮긴다.
방향과 트랙은 `docs/ROADMAP.md`, 오너에게 묻는 것과 묻지 않는 것은 `docs/AUTONOMY_LOOP.md` §1–2에 있다.

## 지금 (2026-11-21 오후) — 오너 「추천대로 진행」 · 승인은 아티팩트 한 곳에서 · #131 머지됨 · 상세 페이지 머리 구현(#133 승인 대기) · /kana 페이지와 「화면」 탭 구현 중

**오너 11/21 오후:** 「일단 추천대로 진행하고, 다음부터는 별도의 html로 각각 정리하지말고, 스크린샷이나 화면 사진을 제공해서 before after나 new형태로 보여줘. 그래야 내가 아티팩트에서 벗어나지 않고 추천 승인 이런걸 얘기하지.」
→ 승인된 추천: 상세 페이지 머리 B · 화면 아카이브는 상세 페이지의 「화면」 탭부터 · `/kana`는 A안(한국어 페이지 먼저) · 블로그 슬러그 `korean-brand-colors-measured`와 합니다체 · 재검증은 지시서를 고쳐 4곳 재시험 · #131 머지.
→ 보고 방식: **살아 있는 아티팩트 하나**(https://claude.ai/artifact/KbqQF8nXerNFHVnfGpw884, 원본 `~/.omd-workers/reports/2026-11-21-sprint-report.html`, 그림은 세션 임시 폴더의 `report-img/`에서 같이 올림)에 전·후 또는 새 화면 그림을 넣고 거기서 승인받는다. 별도 HTML 묶음을 만들지 않는다.

**승인 대기(아티팩트 카드 제목의 번호 그대로. 오너가 번호로 답하면 머지 전에 카드 이름으로 되짚는다):**
1. 상세 페이지 첫 화면 → #133 머지.
2. 우리 `DESIGN.md` 다시 쓰기(가지 `feat/site-design-md`, #133 위에 쌓음): `web/public/design.md`를 지금 코드와 11/21 실측으로 다시 씀. 값 40개 대조표 `docs/research/2026-11-21-site-design-system/diff.md`, 견본 생성기 `scripts/site-audit/designmd-specimen.mjs`. 승인되면 #133과 함께 머지하고, **이 Mac의 루트 `DESIGN.md`(gitignore, 미러의 원본으로 취급됨)를 같은 내용으로 바꾼다.** 안 바꾸면 `scripts/check-mirror-drift.mjs --fix`가 공개 파일을 옛 내용으로 되돌린다. #133보다 먼저 나가면 안 된다.
3. 상세 페이지 「화면」 탭(가지 `feat/item-screens-tab`, #133 위에 쌓음, PR 없음): 모양 승인과 **화면 공개 기준**. 공개 결정 전에는 운영에 못 나간다.
4. `/ko/kana` 페이지 → #134 머지(색인 제외, 메뉴 미연결 그대로).
5. 블로그 첫 글 → #132 머지 = 게시. 머지 직후 글 안의 저장소 링크 2개를 다시 연다.
6. 재검증 4곳을 이 상태로 넣을지(넣으면 verified, 확인 못 한 이전 서술이 본문의 28~49%를 「Earlier record」 소제목 아래 차지). 추천은 넣기이지만 게이트의 뜻이라 승인 없이는 넣지 않는다. **스크립트로 문장을 본문에 돌려놓지 않는다**(`sieve-earlier-record.mjs`는 처음에 너무 느슨했고, 엄격히 세면 「오늘 잰 값만 담은」 문장은 5~20%뿐이며 값이 같다고 문장이 맞는 것도 아니다). 워커 폴더 `~/.omd-workers/reverify3/<id>`, 재측정은 네 곳 모두 전부 일치.

**대만 검증 끝(11/21 15:50):** 55개 중 통과 41 · 출처보다 세게 적힘 14(TW-04·06·19·21·26·35·42·46·47·48·49·51·54·55). 통과 41 중 7개(TW-03·25·27·28·29·33·36)는 출처가 갈린다는 기록, 3개(TW-30·38·45)는 규칙 꼴이 아니라 규칙 하나로 쓸 수 있는 것은 31개쯤. **원문 보강(16:10, `feat/zh-skills` `860cf58f`):** 에이전트가 못 연 원문 6건을 셸로 받아 `~/.omd-workers/lang-sources/`에 둠(CLREQ 현행본, 교육부 문장부호 수첩, 행정원 숫자 원칙, 행정원 문서 처리 수첩 2권(안 읽음), 정부 웹사이트 규범). 대조 결과는 `docs/drafts/zhuyin/research/addendum-2026-11-21.md`: TW-45~49·55가 옛 초안에서 인용한 30문장 중 25문장이 현행본에서 고쳐졌거나 없음(TW-46·47은 내용이 달라짐), 교육부 수첩이 TW-26(「」 안 『』)과 TW-27(〈〉)의 근거를 줌. GB/T 15834·15835는 moe.gov.cn이 404라 못 받음. **아티팩트 주소가 바뀜(16:30):** 세션이 다른 조직으로 로그인돼 있어 옛 주소(`Nsib1djJMkU1AtC3au9hpd`)에는 게시가 거부된다. 오너가 「여기에 다시 줘」라고 해서 지금 조직에 새로 올렸다: https://claude.ai/artifact/KbqQF8nXerNFHVnfGpw884 (게시 원본은 세션 임시 폴더의 `sprint-report-1121.html`, 같은 내용을 `~/.omd-workers/reports/2026-11-21-sprint-report.html`에도 씀). 앞으로 승인은 이 주소에서 받는다. 옛 주소는 15:55 기준에서 멈춰 있다. **중국 검증 끝(16:12, `feat/zh-skills` `9c0f294a`):** 79개 중 통과 64 · 출처보다 세게 적힘 13(CN-03·08·12·17·22·29·31·43·50·57·60·61·71) · 인용문 못 찾음 1(CN-74) · 근거 없음 1(CN-79). WordPress China와 Teambition 中西文混排는 한 목소리로 센다(CN-39·47·57·59). 15:59에 한도로 멈춰 1차 판정을 잃고 다시 돌린 것. **인용문 원본 대조(16:25, `feat/zh-skills`):** `scripts/lang/check-quotes-raw.mjs`가 `sources.json`의 주소를 직접 받아 `rules.md`의 「」 인용(4자 이상)을 글자 그대로 찾고 등급을 매긴다. 대만 232개: web 75 · 옛 초안에만 25 · PDF 추출본 99 · 띄어쓰기 불일치 1 · 없음 32. 중국 418개: web 355 · 추출본 29 · 띄어쓰기 불일치 4 · 표 칸만 14 · 없음 16. **폭·띄어쓰기 규칙의 근거는 web 등급 인용만**이다(추출본은 글자만 확인, 공백은 조판 흔적). 실제로 원문과 달랐던 것: WordPress 대만 예문 두 문장의 화살표 U+2192 누락(TW-13·34·35에 네 번 인용). 중국의 띄어쓰기 짝(CN-57·60)은 원본과 공백까지 일치. 영어 인용과 문장부호 한 글자는 검사하지 않는다. 읽은 기록: 대만 `addendum-2026-11-21.md` §E, 중국 `raw-check-notes-2026-11-21.md`. **도는 것(16:24 시작, 빌드 에이전트 2개, 커밋만):** `zhuyin-build`(워크트리 `lang-zh`, 가지 `feat/zh-skills`) → `docs/drafts/zhuyin/references/{writing-rules,coverage}.md`, `scripts/lang/zhuyin-copy-check.mjs`와 fixture·테스트. `pinyin-build`(새 워크트리 `.claude/worktrees/lang-cn`, 가지 `feat/pinyin-skill` = `feat/zh-skills`의 `c4755967`에서 갈라짐) → 같은 꼴의 `pinyin` 산출물. 지시서의 문턱: 검증을 통과한 후보만 규칙, 갈리는 것은 고르지 않고 양쪽을 적음, 폭·띄어쓰기 규칙은 web 등급 인용만, 지어낸 중국어 금지. 끝나면 결과를 읽고 본 세션이 푸시한다. 두 워크트리의 루트 `node_modules`는 메인 체크아웃으로 가는 링크(커밋 금지). 일본어 2차는 검증 끝(후보 13개 중 통과 8·약함 5: UW-58·59·60·63·69, 덧붙인 출처 8건 중 통과 7·약함 1: UW-16). 통과분은 4번 카드가 정해질 때까지 `writing-rules.md`에 넣지 않는다(페이지가 「규칙 43개」와 그 파일의 sha256에 묶여 있음). `research/`라는 폴더 이름은 `.gitignore`에 걸리므로 `git add -f`.

**언어 스킬 조사 현황(11/21):** 일본어 글쓰기 규칙 43개 + 2차 후보 13개 · 대만 후보 55개 · 중국 후보 79개. 대만·중국 모두 검증과 원본 대조가 끝났고 스킬 초안·검사기는 아직 없다. Microsoft 스타일 가이드 본문(일본어·번체·간체)은 `~/.omd-workers/lang-sources/`, `~/.omd-workers/kana/sources/`(저장소에 넣지 않는다).

**이번 오후에 끝난 것:** #131 머지(main `1761fc2d`) · 상세 페이지 머리 구현 · 우리 DESIGN.md 초안 · `/ko/kana` 구현(#134) · 「화면」 탭 구현 · 블로그 대비 표 재측정(18/23, #132) · 재검증 지시서 수정과 재시험 · `diff-walks.mjs` · 일본어 2차 조사 · 대만·중국 1차 조사.

**오너만 할 수 있는 것:** #129·#130 머지 · #133 승인 · 일본어 원어민 검토자 · 폰 세션 · 화면 공개 기준.

**레인별 지금:**
- **화면(T3).** 가지 `feat/screen-archive`(올림). `tools/screen-archive/`: `web-shoot.mjs`(요소의 계산된 색·모서리·글자, `from` 링크 따라가기, 404와 거절 구분, 390은 휴대폰으로 식별), `link-tokens.mjs`(화면의 값 ↔ DESIGN.md, 정확히 같은 값만, 한 방향. 색은 검정·흰색을 빼고 세고, 컴포넌트는 종류가 같고 값 셋 이상이 같을 때만), `suggest-patterns.mjs`(패턴 제안), `make-web-sheet.mjs`, `make-ia-mocks.mjs`, `services.json`, `routes/` 11곳. 원본 `~/.omd-workers/screens/web/<slug>-20261121/`. 거절(403): 무신사 상품 상세, NOL 숙소 상세(창을 열어도). 창이 필요한 곳: 오늘의집·올리브영·NOL·원티드·인프런·잡플래닛. 안 한 것: 손으로 쓴 발견, 패턴 표시, 로그인 뒤 화면, 폰(앱) 화면과의 짝, 다시 찍어 바뀐 것 보이기.
- **사이트 디자인 시스템(T9).** PR **#133**(초안, `feat/site-design-system`, main에서 갈라짐). `scripts/site-audit/`: `controls.mjs`(실측), `item-hero-stills.mjs`(시안), `report.mjs`, `overflow-sweep.mjs`. 실측: 버튼 높이 12가지, 버튼 모서리 5가지, h1 7가지, 소수점 글자 크기 4가지. 고친 것(#133): 본문 속 긴 인라인 코드·URL이 폰에서 페이지를 넓히던 것(622곳 중 11곳, 한국어 6곳 → 규칙을 얹으면 0곳, 표의 열 폭은 그대로). 머리 시안 B는 가장 긴 이름과 900~1440 폭에서 겹침 없음. 머리 구현은 오너가 고른 뒤(구현 전에 `web/AGENTS.md`: 이 Next.js는 바뀐 점이 있으니 `node_modules/next/dist/docs/`를 먼저 읽는다).
- **일본어 UX 라이팅(T2).** 워크트리 `kana`(`feat/kana-skill`, 올림): `docs/drafts/kana/writing/{rules.md(후보 57개),verdicts.md(통과 48),sources.json,gaps.md,fonts.md}`, 시안 생성기 `scripts/lang/kana-page-stills.mjs`. 통과하지 못한 9개(UW-07·15·19·24·28·30·38·42는 「적힌 것보다 약함」, UW-45는 「근거 없음」)는 그대로는 규칙으로 쓰지 않는다. 출처가 없는 영역: 오류의 사과 문구, ください와 お願いします의 구분, 삭제 버튼 문구, 빈 상태, 円과 ¥, 한국어→일본어 번역 오류. Microsoft 일본어 스타일 가이드 본문은 `~/.omd-workers/kana/sources/`에 뽑아 둠(조사 에이전트가 PDF를 못 읽었다. 저장소에 넣지 않는다). **글쓰기 규칙과 검사기(2026-11-21):** `docs/drafts/kana/references/writing-rules.md`(KW 규칙 43개: 통과 37 + 검증이 말한 만큼으로 낮춘 6, 출처가 갈리는 12개는 「프로젝트의 DESIGN.md가 정한다」 절, UW-45·UW-10은 뺌), `scripts/lang/kana-copy-check.mjs`(43개 중 25개를 검사: KW-39 전각 영숫자·전각 공백·반각 가타카나는 `references/rules.md`의 JTF 인용으로 추가. WARN 2 · 나머지 FYI, `--self-test`), 시험 100개 통과(본 세션이 다시 돌림), `writing/coverage.md`. 일본어 문자열은 전부 출처 인용에서 복사했고 시험이 그것을 검사한다. 다음: Microsoft 가이드로 2차 조사, KW-35(한자 30% 초과) 문턱 재검토, 평가. 타이포 쪽 초안 `SKILL.md`에는 우리가 지어 쓴 일본어 예시(`*Composed:*` 2곳)가 남아 있다. 글쓰기 규칙과 달리 출처 인용이 아니므로 원어민 검토 목록에 넣거나 인용으로 바꾼다. 전각·반각 판정(UW-42·43·47)은 추출된 문자열에서 읽은 코드 포인트라 같이 본다. 일본어로 나가는 것은 원어민 검토 뒤.
- **블로그(T5).** PR **#132**(초안, `blog/colour-map`, #131에서 갈라져 #131을 품고 있다). 글 `web/src/content/blog/korean-brand-colors-measured/ko.md`, 게이트 기록 `docs/research/2026-11-14-kr-brand-colours/gates.md`. 표: 169/185곳, 파랑이 일곱 규칙 모두에서 가장 많고 29.5~36.6%. 1440·390에서 넘침 없이 렌더됨을 본 세션이 확인. 독립 final-qa 1회차는 「수정」(그림 색이 토큰 밖, 첫 단락이 처음 온 독자에게 불친절, 한국어 4곳) → 수정 커밋 `f0c40525` → 2회차는 8개 중 7개 통과, 1개 실패로 「BLOCK」 기록: 글의 저장소 링크 2개가 main에 아직 없는 경로라 404다(#131·#132가 머지되면 열린다. 머지 뒤 게시 전에 다시 열어 본다). 기록은 `docs/research/2026-11-14-kr-brand-colours/final-qa.md`. `docs/research/`는 `.gitignore`의 `research/`에 걸리므로 새 파일은 `git add -f`로 넣는다. **게시 전 조건 미충족:** 이름을 든 대비 표 23곳의 재측정(다시 잴 수 있던 3곳 중 가우디오랩·왓챠는 값이 바뀜, 20곳은 고정된 측정 기록이 없어 버튼을 직접 재야 함. PR #132 댓글). 안 돈 것: 검색어 게이트(브리프 없음), 영어판. 워크트리의 `web/node_modules`는 본 체크아웃으로 가는 링크다(추적 안 함).
- **레퍼런스(틈새).** 한국 partial 4곳(spoqa·supertone·queenit·peoplefund)을 시범 방식(`OMD_REVERIFY_COMPILED=1`: 창 없는 캡처, 컴파일, medium)으로 재검증. 워커 폴더 `~/.omd-workers/reverify2/<id>`. **착지하지 않았다:** 본문이 크게 바뀐다(spoqa −43%, supertone −21%, peoplefund −19%, queenit +89%; 소제목 20~23개 탈락, 워커가 「미확인」으로 돌려보낸 항목 96~352개). 본문을 줄여 게이트를 통과시키지 않는다는 규칙상 곳마다 대조가 필요하다. 측정 재현(`remeasure.mjs`)은 spoqa 113/113 일치, 나머지는 `~/.omd-workers/t1-stability/`. 대기열의 남은 4곳(typed·dable·barogo·fitpet)은 돌리지 않았다(`~/.omd-workers/queue-20261121-kr-partial.txt`).

**11/20 밤에 정해진 것(유효):** 막히면 창을 열거나 ego-browser·aside를 써도 된다 · 필요하면 오너가 로그인해서 보여 줄 수 있다 · 폰은 필요하면 써도 된다(이번에도 쓰지 않았다).

**아래는 11/20 저녁 인계 때의 요약이다(폰 대기 문구만 위 내용으로 바뀌었다).**

**새 세션은 `docs/handoff/2026-11-20-code-mode.md` 하나를 읽고 잇는다.** 이 블록은 그 요약이다.

**오너 11/20(말 그대로는 인계 문서 1절):** 화면 아카이브를 **웹까지**(서비스마다 모바일만 / 웹만 / 둘 다, 주 5~10곳 심층, 한국부터, 웹은 해외도) · 「레퍼런스와 업데이트가 핵심」 · 700 확충은 점진적으로 · 일본어 스킬은 **UX 라이팅**(독자: 한국에서 다국어를 다루는 사람, 일본 현지인) · kana 페이지 · 대만·중국 스킬 설계와 작업 시작 · 시각 효과 스킬 · 우리 디자인 시스템 점검.
**말하지 않은 것:** 머지(#129·#130·#131 대기) · 화면 공개(보류 그대로) · partial과 새 레퍼런스의 순서(추천인 partial 먼저로 간다).

**운영:** 622 = verified 453 / partial 88 / legacy 81(main `2073b010`). partial은 대만 33, 한국 23, 미국 14, 일본 12, 영국 6.

**다음 차례(인계 문서 4절):** ① `docs/ROADMAP.md`를 고쳐 쓰고 오너에게 브리핑 ② 웹 화면 수집 설계와 시범 2곳, 사라진 시안 3안 재생성 ③ partial 1차 묶음 8곳(Codex 4개) ④ 일본어 UX 라이팅 출처 조사, 대만·중국 설계, kana 페이지 시안 ⑤ 시각 효과 스킬 후보 ⑥ 우리 `DESIGN.md` 갱신안 ⑦ 블로그 첫 글 마무리, 한국어 기준선 9회.

**11/20에 확인한 것:**

- `oh-my-design.kr/design.md`는 열린다(`web/public/design.md`). 그런데 내용이 옛 것이다(Geist, 보라 `#7c5cfc`, 다크, `/v2` 랜딩). 사이트는 10/16부터 Iris `#6749e2`, Wanted Sans, 라이트 전용이다. 갱신은 오너 승인 몫.
- 토큰은 `--sq-*` 한 벌이고 shadcn 이름은 그 별칭이다. docs·블로그 본문은 별칭으로 물려받고, `/hangul`은 색을 CSS에 따로 적었다. 코드 읽기 결과이고 렌더 비교는 아직이다.
- #131의 `CLI` CI가 11/13 머리에서 실패했다(`activation-reuse.test.ts`의 해시). 로컬에서는 통과. 새 커밋의 CI 결과는 인계 문서 끝 절.
- `~/Downloads/kr-screens/`(시트와 시안 3안)가 없다. 시안의 생성 스크립트도 세션 임시 폴더와 함께 사라졌다. 시트는 `~/.omd-workers/screens/`에서 다시 만들 수 있다.
- Code Mode 사전 점검 통과. push 범위 훅은 `cd '절대경로' && git push …` 모양을 받는다(시험함). Remote Control·Claude in Chrome은 Code Mode에서 못 쓴다.

**지킬 것(폰):** 결제·구매·송금·삭제·동의는 누르지 않는다 · 「나의」 화면과 금융 앱은 `--private` · 남의 것은 `--cover` · 첫 방문 화면은 `go --walk`로 바로 기록하지 않는다 · 집중 모드 · 프레임과 시트는 커밋·업로드하지 않는다 · 로그아웃과 앱 삭제는 오너가.

**정해진 방식:** 새 레퍼런스 = 창 없는 캡처 → 컴파일 → `gpt-6.1-sol` medium, 착지 전 `scripts/t1/remeasure.mjs <id> --runs 1`, 독립 검수 Codex high 2개 · 유효 기간으로 verified를 내리지 않는다 · 재검증 PR에는 「빠진 것 / 늘어난 것」 표 · 수치(클릭·노출)는 저장소에 적지 않는다.

**열린 것:** 워크트리 `t1-trust`·`blog-basics`·`kana`·`screens`(내 것)와 주인 모르는 6개 · 3D 데모 서버 8791(11/09부터) · 조립기 spacing 문구 157곳 · 타입 미리보기의 긴 소수 줄 높이.

## ▶ 2026-11-14 밤 · #127 머지(453 verified) · 폰은 오너 재개 신호 대기 · 블로그 글 작업 시작

**1순위(오너 11/13):** 한국 서비스 화면 아카이브(Mobbin처럼, 주 10개 목표). 공개는 보류. **폰은 건드리지 않는다**(오너 11/14).

**머지:** #125·#126(622곳), #127(재검증 수정, jobplanet verified), #128(문서). main `2073b010`, 운영 **622 = 453 / 88 / 81**. 열린 PR: **#129**(재검증 지시문 생성기, 도구만) · **#130**(블로그 기술 수정: 한국어 페이지 `lang="ko"`, 수정일, RSS. 겉모습은 운영과 같음을 1440·390에서 확인).

**목표 셋과 태스크(오너 11/14 「진행해줘」):**

1. **화면 아카이브.** 폰 없이 한 준비: 앱 10개 목록 `tools/phone-recorder/apps.json`(전부 카탈로그에 DESIGN.md가 있다) · `phone.mjs go`·`pages`·`replay --walk`(시뮬레이터에서만 확인) · 사이트에 싣는 시안 3안 `~/Downloads/kr-screens/mock/`(갤러리 / 아이템 페이지의 Screens 탭 / 화면 유형별 비교) · 공개 기준 초안. 전부 `docs/research/2026-11-13-screen-archive.md` 끝 절. 브랜치 `feat/screen-archive`. **오너 몫:** 폰 재개 신호, 시안 중 무엇을 먼저, 공개 기준, 영상(권고는 `pages` 정지 화면으로 대체).
2. **재검증.** #129가 머지되면 demaecan·sega·megastudy·hktvmall도 지시문이 나온다(partial 88곳 + 사이트가 바뀐 6곳 = 94곳 모두 시작 파일이 있다). **다음:** partial 1차 묶음 8곳(Codex 4개 동시) → PR에 jobplanet 때와 같은 「빠진 것 / 늘어난 것」 표. 재검증하면 확인 안 되는 서사가 빠져 본문이 줄어든다(jobplanet 28,187 → 24,569자).
3. **일본어 스킬.** 기준선 평가(스킬 없이 9회, `gpt-6.1-sol` medium, 격리 실행): **9회 모두 경고 0건** → 계획서의 중단 규칙대로 스킬 적용 쪽은 안 돌렸다. 타이포 절반은 이 모델에서 보여 줄 것이 없다. 남은 길은 글쓰기 규칙(검사기와 원어민이 필요)과 렌더 결과. `feat/kana-skill`의 `docs/research/2026-11-14-kana-eval-arm-a.md`. 한국어 기준선도 지금 모델로 다시 재 볼 만하다(9회).
4. **블로그 글(오너 11/14: 트래픽을 위한 고품질 글).** 점검 결과와 글 순서 `docs/BLOG_ARTICLE_QUEUE.md`, 절차 `docs/BLOG_PUBLISH_PLAYBOOK.md`(검색어·표 먼저·내부 링크·발행 뒤 측정 추가). 첫 글 = 한국 서비스 브랜드 컬러(표 `~/.omd-workers/blog/colour-map/`). 기술 수정은 PR #130(워크트리 `.claude/worktrees/blog-basics`, 그 안의 `web/.next` 506MB는 에이전트의 삭제가 권한에서 거부돼 남아 있다). 수치는 저장소에 적지 않는다(메모 `project_blog_baseline`). **오너 몫:** 글의 주소(서브도메인 / 본 도메인 `/blog`), 문체 하나, 인덱스 이름.

**지킬 것(폰):** 결제·구매·송금·삭제·동의는 누르지 않는다 · 「나의」 화면과 금융 앱은 `--private` · 남의 것은 `--cover` · 첫 방문 화면은 `go --walk`로 바로 기록하지 않는다 · 집중 모드 · 프레임과 시트는 커밋·업로드하지 않는다 · 로그아웃과 앱 삭제는 오너가.

**정해진 방식:** 새 레퍼런스 = 창 없는 캡처 → 컴파일 → `gpt-6.1-sol` medium, 착지 전 `scripts/t1/remeasure.mjs <id> --runs 1`, 독립 검수 Codex high 2개 · 유효 기간으로 verified를 내리지 않는다 · 토큰 이름은 실린 이름 이어받기 · 재 봤는데 변화가 없으면 `no brand change`(근거 표 행이 있어야 인정).

**열린 것:** 조립기 spacing 문구 157곳 보류 · 타입 미리보기의 긴 소수 줄 높이 · 워크트리 `t1-trust`·`kana`·`screens`·`blog-basics` · 3D 데모 서버 8791 켜져 있음 · GA4 Data API가 11/14에 할당량 초과(429)였다.

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