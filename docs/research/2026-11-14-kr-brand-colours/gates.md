# 블로그 글 1 — 발행 전 게이트 기록 (2026-11-21)

글: `web/src/content/blog/korean-brand-colors-measured/ko.md` (한국어만, 영어판은 이번 회차 범위 밖)
그림: `web/public/blog-assets/korean-brand-colors-measured/figure-hues.svg` (이 폴더 `figure-hues.svg`를 바이트 그대로 복사)
절차: `docs/BLOG_PUBLISH_PLAYBOOK.md` §1·2·4·5·6. §3(영어판)과 §7(발행)은 하지 않았다.
확인 환경: 워크트리 `blog-colour`, `web/node_modules`는 메인 체크아웃의 것을 심볼릭 링크로 연결, 로컬 `next dev`(포트 3345 — 3335와 겹치지 않게), 헤드리스 Chromium.

이 문서에는 트래픽·검색량·순위 수치를 적지 않는다(`docs/CONTENT_TRACKING.md`).

## 최종 게이트 (§5)

| # | 게이트 | 결과 | 근거 |
|---|---|---|---|
| 1 | `omd:final-qa` 라인 ref 있는 FAIL 0건 | 실행 못 함(독립 검수) · 자가 점검만 | 독립된 검수자가 돌리지 않았다. 글을 고친 작업자가 8개 항목을 직접 대조한 결과는 아래 「final-qa 자가 점검」. 자가 점검이라 이 게이트의 통과로 세지 않는다. |
| 2 | 모든 수치에 측정일 + 레포 경로 | 통과(글 전체에 한 번 붙이는 방식으로 읽을 때) | 첫 문단 「계산일은 2026년 11월 21일입니다」, W1 표 아래 「저장소의 `docs/research/2026-11-14-kr-brand-colours/tables.md`에 있는 W1 … 이 글의 다른 표와 수치도 모두 이 파일에서 가져왔고(계산 2026-11-21), 괄호 안의 W1, W5 같은 이름은 이 파일의 절 이름」. 각 표·수치 옆에 절 이름(W1~W7, S6)이 붙어 있다. 수치마다 날짜를 따로 달지는 않았고, 각 DESIGN.md가 기록된 날짜는 레퍼런스마다 다르다고만 적었다(「어떻게 셌는가」 끝). 수치마다 날짜를 요구하는 것으로 읽으면 미달 — 오너가 정할 해석. |
| 3 | 금지 주장 6개(`docs/NARRATIVE_CONTEXT_DESIGN_HARNESS.md` §7) | 통과 | 1 경쟁 우열: 제품 비교 없음. 대비 표는 「이 수치만으로 접근성 기준에 맞는지 판단할 수는 없습니다」로 판정을 하지 않는다. 2 Google DESIGN.md: `grep -i google` 0건. 3 없는 벤치마크: 모든 수치가 tables.md에 있다(아래 사실 확인). 4 브랜드 사실: 파일과 어긋난 버튼 설명 3곳(잔디·런드리고·에이블리)을 고쳤다(아래 「고친 것」). 5 디자이너 대체·6 자동으로 예뻐짐: `grep -E "디자이너|예뻐|자동으로"` 0건. |
| 4 | ko/en 같은 thesis·수치 | 해당 없음 | 한국어만 있다. 로더는 한쪽만 있는 글을 허용한다(`web/src/lib/blog/posts.ts`). |
| 5 | 실렌더 1440 / 390, 가로 스크롤 0, 발행할 바이트로 | 통과(로컬 dev 서버 기준) | 커밋하는 `ko.md`를 `next dev`로 띄워 헤드리스 Chromium으로 쟀다. 1440: `scrollWidth` 1440 = `innerWidth`, 표 5개 모두 넘침 없음, 그림 720px 그대로. 390: `scrollWidth` 390 = `innerWidth`, 표 5개 모두 356px 안에 들어감, 그림은 358px로 줄어 보임(아래 「사람이 정할 것」). `next build` 산출물이 아니라 dev 서버로 본 것이다. 프로덕션 배포본은 아직 없다. 스크린샷은 저장소 밖 세션 임시 폴더에만 있다. |
| 6 | 제목·설명·첫 문단에 브리프의 검색어 | 실행 못 함 | 플레이북 §0의 브리프 7줄(검색어 포함)이 입력에 없다. 검색어를 고를 근거 자료(`pull-gsc`)는 이번 회차에서 열지 않았다. 참고로 제목에 「한국 서비스」「브랜드 컬러」, 설명에 「브랜드 컬러」「hex 컬러 코드」, 첫 문단에 「한국 서비스」「주 색」이 있다 — 이것이 브리프의 검색어인지는 확인하지 않았다. |
| 7 | OmD가 잰 값의 표·그림 1개 이상, 원본 행이 저장소에 | 통과 | 표 5개와 막대 그림 1장. 원본 행 `rows.json`, 계산 `compute.py`, 그림 `figure_hues.py`가 이 폴더에 있다. 그림 sha256 `25ff3013…10bc`가 이 폴더의 `figure-hues.svg`와 `web/public/blog-assets/korean-brand-colors-measured/figure-hues.svg`에서 같다. |
| 8 | 아이템 페이지 링크 10곳 이상, 전부 200, 한국어 글은 `/ko/design-systems/<id>` | 통과 | 링크 107개, 서로 다른 아이템 페이지 86곳, 전부 `https://oh-my-design.kr/ko/design-systems/<id>` 꼴. 86곳 모두 `web/references/<id>/DESIGN.md`가 있고 `data/reference-quality.json`에서 `verified_v2`, `rows.json`의 KR 행이다. 로컬 dev 서버에서 86곳 모두 200, 프로덕션 `oh-my-design.kr`에서도 86곳 + 목록 `/ko/design-systems?region=KR` 모두 200(2026-11-21). 목록 링크의 `region=KR`은 목록 화면이 읽는 값이다(`web/src/app/(en)/design-systems/catalog-view.tsx`의 `params.get("region")`, 키 `KR`). |

## final-qa 자가 점검 (게이트 1의 대체가 아니다)

`skills/omd-final-qa/SKILL.md`의 8개 항목을 작업자가 직접 대조했다.

| # | 항목 | 결과 | 근거 |
|---|---|---|---|
| 1 | Brand consistency | 실행 못 함 | 기준이 될 oh-my-design 루트 `DESIGN.md`가 워크트리에 없다(gitignore). 글은 스타일을 더하지 않고 블로그 화면의 기존 컴포넌트로 그려진다. 그림 SVG의 색(`#1f2328` `#59636e` `#3b4654` `#d0d7de` `#ffffff`)은 대조하지 못했다. |
| 2 | Typography hierarchy | 통과 | 렌더된 HTML에서 `<h1>` 1개(글 제목). 본문은 `##` 7개, `###` 이하 없음 — 단계 건너뜀 없음. |
| 3 | Voice register | 통과(일관성) · 문체 선택은 오너 몫 | 본문 문장 끝 103개 중 102개가 합쇼체(-니다), 해요체 0개, 나머지 1개는 그림 alt의 명사 끝. `copy-check` HW-11(말투 섞임) 0건. 플레이북 기본 preset(toss-tech-design)의 말투와 같은지는 정하지 않았다 — 대기열의 「문체」 결정. |
| 4 | Image / figure | 통과 | `ko.md`의 그림 1개에 alt(막대별 값 전부)와 캡션(무엇을 세었고 어느 스크립트가 그리는지)이 따로 있고, 경로가 200(본 호스트·블로그 호스트 모두 `image/svg+xml`). |
| 5 | Cross-locale parity | 해당 없음 | 한국어만. |
| 6 | Accessibility | 통과(글 범위) | `<article lang="ko">`, 본문은 기존 블로그 컴포넌트. 그림 글자 `#59636e`·`#1f2328` on `#ffffff`. 사이트 크롬은 바꾸지 않았다. |
| 7 | Performance | 통과 | 그림 SVG 4,149바이트. 펜스 코드 블록 없음. |
| 8 | Links | 통과 | 게이트 8과 같다. 바깥 링크는 렌더러가 `target="_blank" rel="noopener noreferrer"`를 붙인다(`web/src/components/markdown.tsx`). |

## 검수 (§4)

| 검수 | 결과 | 근거 |
|---|---|---|
| `/omd-slop-audit` | 실행 안 함 | 이번 회차에서 돌리지 않았다. 독립 검수자 몫으로 남긴다. |
| `/omd-designer-review` | 실행 못 함 | 기준 문서인 루트 `DESIGN.md`가 워크트리에 없다. |

## 한국어 다듬기 (§2)

- `node skills/hangul/scripts/copy-check.mjs --context=site <ko.md>` → `0 BLOCK · 0 WARN · 10 FYI · exit 0`. `--context=docs`도 같다. FYI 10개 중 9개는 렌더되지 않는 사실 대조 주석(fact map) 안이고, 본문은 33행 하나(HW-6, 한 문장에 수치 셋: 「파랑 60곳 다음은 빨강 18곳(10.7%), 초록 17곳(10.1%), 청록 14곳(8.3%)입니다.」)다. 표를 말로 읽어 주는 문장이라 그대로 두었다.
- `skills/hangul/scripts/check.mjs`는 마크다운을 읽지 않는다(`Hangul not found`). 줄바꿈은 블로그 화면이 `keep-all`로 처리한다(`web/src/components/blog/post-view.tsx`).
- `/omd-humanize`는 돌리지 않았다. 초안을 다시 쓰지 말라는 지시에 따라 사실이 어긋난 곳만 고쳤다.

## 사실 확인

수치와 회사 이름을 `tables.md`, `rows.json`, 그리고 버튼 설명은 각 `web/references/<id>/DESIGN.md`와 대조했다.

- 수치: W1·W2·W3·W5·S6 표, W4 머리 수치(95·74·5.03·34·35.8%·12·12.6%), W4a 23행의 대비·배경색(스크립트로 행마다 대조), W4c(91·53.8%·45·26.6%), W4d(14.40·12.46), W7(64/180, 35.6%), 모집단(185, partial 23, legacy_snapshot 21) — 어긋남 없음.
- 이름 묶음: 노랑 7곳과 그중 핀테크 5곳, 커머스의 검정 4·회색 3·빨강 5곳, 규칙 W로 더한 16곳의 토큰 이름, 뺀 16곳 — `rows.json`의 `ruleW_family`·`category`·`ruleW_step`과 모두 같다. W4a의 파랑 계열 9곳도 같다.
- 토스뱅크의 `#0064ff`/`#3182f6` 설명은 `web/references/tossbank/DESIGN.md` 본문과 같다.

### 고친 것 (글을 고쳤고 표는 건드리지 않았다)

| 자리 | 초안 | 고친 글 | 근거 |
|---|---|---|---|
| 대비 표, 잔디 | 모든 페이지 상단 내비게이션의 주 행동 버튼 | 상단 공통 내비게이션의 주 행동 버튼 | 파일의 use: 「Global navigation primary action … the same values repeat on surface-2 through surface-6」 — 기록한 화면에서 반복된 것이지 모든 페이지라고 하지 않았다. |
| 대비 표, 런드리고 | 모든 페이지에 고정된 「상담 문의하기」 버튼 | 기록한 세 페이지에 고정된 문의 버튼(「상담 문의하기」 등) | 파일의 use: 「Fixed call-to-action at the same spot on all three pages … B2B·대량세탁 문의 on home, 상담 문의하기 on /business/」 |
| 대비 표, 에이블리 | 판매자 사이트의 입점 버튼 | 판매자 사이트(Seller Square)의 주 진입 버튼 | 파일의 use: 「Current Seller Square primary entry action」. 「입점 소개」는 다른 내비게이션 항목이다. |
| 「나머지 11곳」 문장 | 채용 공고 링크, 블로그 머리의 버튼, 슬라이더 화살표, 메뉴를 펼치는 버튼, 글자 없는 아이콘 버튼이거나, 파일만으로는 용도를 알 수 없는 버튼 | 채용 공고나 채용 사이트로 가는 버튼, 메뉴를 펼치는 버튼과 슬라이더 화살표, 글자 없는 아이콘 버튼, 다른 슬라이드에서 색이 바뀌는 배너 버튼, 주요 작업에 없는 글쓰기 버튼, 파일이 용도나 주요 작업을 적지 않은 버튼 | W4b 11행. 뱅크샐러드(배너), 오늘의집(글쓰기), 문피아·굿닥(파일에 주요 작업 목록이 없음)은 초안의 어느 묶음에도 맞지 않았고, 스캐터랩은 한 버튼(블로그 머리의 채용 링크)인데 두 묶음으로 셌다. |
| 같은 컬러 코드 목록 | 정부24 | Government24 | `rows.json`·`tables.md`의 이름은 `Government24`이고 한글 표시 이름이 없다. |
| 대비 표 | 왓챠 | Watcha | `rows.json`·`tables.md`의 이름은 `Watcha`이고 한글 표시 이름이 없다. |
| 그림 자리 | `<!-- figure: … -->` 주석 | 그림, alt, 캡션 | 배민 글과 같은 `![](/blog-assets/…)` 꼴. |

그대로 둔 이름 차이(표시 이름의 한글 부분만 쓴 것): 신상마켓, 에이블리, 토스증권, 아이디어스, 여기어때, 클라썸, 팀스파르타, 올리브영, TVING, 강남언니.

### 렌더되지 않는 주석

글 끝의 사실 대조 주석(`<!-- fact map … -->`)은 원본 파일에 남겼다. 렌더된 HTML(RSC 데이터 포함)에서 `fact map` 0건, RSS(`feed.xml`)는 본문을 싣지 않는다(`web/src/lib/blog/feed.ts`).

## 로컬 확인 (§6)

- `curl /blog/korean-brand-colors-measured` → 200 · 블로그 호스트(`Host: blog.localhost:3345`) `/korean-brand-colors-measured` → 200
- 그림 `/blog-assets/korean-brand-colors-measured/figure-hues.svg` → 200 `image/svg+xml`(두 호스트 모두)
- 블로그 호스트 `feed.xml`에 이 글이 맨 위 항목, `sitemap.xml`에 `<loc>`와 `hreflang="ko"`가 있다
- OG 카드 `/og/blog?slug=korean-brand-colors-measured&locale=ko` → 200 `image/png`
- `npm run typecheck`(tsc --noEmit) exit 0 · `npx vitest run` 88 파일 통과·1 건너뜀, 1409 통과·2 건너뜀

## 글이 이름을 든 아이템 페이지 (역링크 후보, 이번 회차에서는 손대지 않음)

대기열의 「글에 나온 브랜드의 아이템 페이지에는 그 글로 가는 링크를 단다」에 해당하는 86곳. 여러 페이지의 모습이 바뀌는 일이라 따로 프리뷰를 받는 변경으로 남긴다.

`11st` · `29cm` · `3o3` · `ably` · `brandi` · `bunjang` · `buzzvil` · `catchtable` · `cgv` · `class101` · `classum` · `coupang` · `datarize` · `dealicious` · `flex` · `gangnamunni` · `gaudiolab` · `genesis` · `gov24` · `greencar` · `greeting` · `heydealer` · `hmall` · `hwahae` · `hyundaicard` · `idus` · `iicombined` · `jandi` · `kakao` · `kakaobank` · `kakaogames` · `kakaopage` · `kakaopay` · `kakaot` · `karrot` · `kb-kookmin` · `kbinsurance` · `kbpay` · `koexpressway` · `krafton` · `krds` · `kream` · `laundrygo` · `lemonbase` · `lotteon` · `medibloc` · `megastudy` · `melon` · `millie` · `miricanvas` · `modusign` · `moin` · `moreh` · `musinsa` · `naver` · `ncsoft` · `nhis` · `ohouse` · `oliveyoung` · `payhere` · `petfriends` · `pozalabs` · `protopie` · `remember` · `returnzero` · `ridi` · `samsung` · `shinhanbank` · `sktelecom` · `socar` · `ssg` · `stayfolio` · `stibee` · `teamsparta` · `toss` · `toss-securities` · `tossbank` · `tving` · `upbit` · `wanted` · `watcha` · `wavve` · `wooribank` · `yanolja` · `yeogiotte` · `zigzag`

## 사람이 정할 것

- 슬러그 `korean-brand-colors-measured`(발행하면 바꿀 수 없다)
- 프론트매터 `date: 2026-11-21` — 실제 발행일로 바꿀지
- 게이트 6의 검색어(브리프가 없다)와 게이트 2를 어떻게 읽을지
- 문체: 이 글은 합쇼체. 대기열의 「문체」 결정과 맞출지
- Government24·Watcha처럼 레지스트리에 한글 표시 이름이 없는 곳 — 레지스트리에 한글 이름을 넣을지(레지스트리 변경이라 이 회차 밖)
- 그림이 390px 폭에서 절반 크기(글자 약 7px)로 보인다. 모바일용 세로 그림을 따로 둘지
- 독립 검수(final-qa, slop-audit, designer-review)를 누가 돌릴지, 영어판을 낼지
