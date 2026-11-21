# 최종 QA — 블로그 글 1 `korean-brand-colors-measured` (round 1)

**Date:** 2026-11-21 (KST)
**Reviewer:** omd-final-qa (독립 검수, 읽기 전용 — 이 파일 말고는 아무것도 쓰지 않았다)
**Artifacts:** `web/src/content/blog/korean-brand-colors-measured/ko.md` (241줄, 본문 8–190, 191 이후는 렌더되지 않는 fact map), `web/public/blog-assets/korean-brand-colors-measured/figure-hues.svg` (40줄, 4,149 B)
**대조 자료:** `docs/research/2026-11-14-kr-brand-colours/` 의 `tables.md`·`method.md`·`rows.json`·`missing-32.md`·`compute.py`·`figure_hues.py`, `web/references/<id>/DESIGN.md` 25곳, `docs/BLOG_PUBLISH_PLAYBOOK.md` §5, `docs/BLOG_ARTICLE_QUEUE.md`, `skills/hangul/SKILL.md`
**DESIGN.md read at:** 2026-11-20T21:37Z. 루트 `DESIGN.md`는 워크트리에 없다(gitignore). 리드 지시대로 토큰 기준은 `web/src/styles/brand-a.css`(같은 시각에 읽음, hex 32개)다.
**Voice preset:** 리드가 지정한 합니다체(합쇼체). 런 기록에 `preset_id`는 없다. 플레이북 §1 기본값 `toss-tech-design`은 해요체라서 이 글에는 적용하지 않았다(대기열의 「문체」가 오너 결정으로 남아 있다).

## Rubric

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Brand consistency | **FAIL** | 그림 SVG의 화면 색 4개(`#1f2328` `#59636e` `#3b4654` `#d0d7de`)와 글꼴 `Pretendard`가 `brand-a.css`에 없다. 세부 내용은 아래에 있다. 본문의 hex(`#3182f6` 등)는 각 회사의 측정값이라 스타일이 아니므로 대조에서 뺐다. |
| 2 | Typography hierarchy | PASS | h1은 `post-view.tsx:73`이 `post.title`로 한 번만 그린다. 본문은 `##` 7개(31·51·73·90·130·150·180행)이고 `#`·`###`은 0개라 단계를 건너뛰지 않는다. 본문 굵기는 공유 렌더러(`markdown.tsx`)의 것이고, 글이 더한 굵기 지정은 0건이다. |
| 3 | Voice register | PASS | 본문 문장 139개 가운데 서술문 103개가 `-니다`로 끝나고 해요체는 0개다. 나머지는 제목형 의문(「~는가」, 7개), 목록 항목, 표 셀, alt다. 플레이북 §1 기준 평균 길이 49.0자(naver-d2 합쇼체 범위 40–70자 안), 최장 문장 127자(96행)다. 높임과 말투가 섞인 곳은 없다. 문장의 자연스러움은 아래 「한국어」 절에 따로 적었다. |
| 4 | Image / figure | PASS | 그림은 `ko.md:10` 1개다. alt는 막대마다 값을 적었고 「이미지·사진」이라는 말은 없다(HW-14). 캡션은 12행에 따로 있고 alt와 내용이 다르다(alt는 값, 캡션은 규칙과 그리는 스크립트). src 파일이 있고, sha256 `25ff3013…10bc`가 연구 폴더 사본과 같다. |
| 5 | Cross-locale parity | PASS (vacuous, ko only) | 폴더에 `ko.md`만 있다. 로더가 한쪽 로케일만 있는 글을 허용한다(플레이북 §3). `source_revision` 키는 엄격 파서가 받는 4개 키(title/description/date/tags)에 들지 않아 둘 수 없다. |
| 6 | Accessibility | PASS | 본문은 `<article lang={post.locale}>`(`post-view.tsx:46`) 안에 있어 lang="ko"가 붙는다. 그림 글자 대비는 `#1f2328`/흰 바탕 15.80:1, `#59636e`/흰 바탕 6.11:1이고, 막대 `#3b4654`는 9.59:1(비텍스트 기준 3:1 넘음)이다. 포커스는 `globals.css:192` `outline-ring/50`, `--ring: var(--sq-focus)`(`globals.css:99`)로 정해져 있다. 표는 GFM `<table>`로 렌더된다. 390px에서 그림 글자가 약 6–7px로 줄어드는 문제(작성자 WARN)는 같은 값이 alt와 바로 아래 표에 있어 이 항목의 FAIL로 세지 않았다. |
| 7 | Performance | PASS | 이미지는 SVG 하나로 4,149 B다. 펜스 코드 블록 0개(`^\`\`\`` grep 0)다. 글이 더한 웹폰트는 없고, 사이트의 Wanted Sans @font-face는 `font-display: swap`(`wanted-sans-latin.css:6`)이다. |
| 8 | Links | PASS | 서로 다른 URL 87개(아이템 페이지 86곳과 목록 `/ko/design-systems?region=KR`)를 모두 직접 열었다. 리다이렉트를 따라가지 않고 `curl -w "%{http_code} %{num_redirects}"`로 재서 87/87이 `200 0`이다(2026-11-21 06:37 KST, 프로덕션). 한국어 글의 링크는 모두 `/ko/design-systems/<id>` 꼴이다. 바깥 링크에는 `markdown.tsx:91–92`가 `target="_blank" rel="noopener noreferrer"`를 붙인다. 링크는 모두 절대 https, 그림만 루트 상대 `/blog-assets/…`로 같은 방식을 일관되게 쓴다. |

## Failed items detail

### [1] Brand consistency — 그림에 토큰 밖 색 4개와 글꼴 1개
- Location: `web/public/blog-assets/korean-brand-colors-measured/figure-hues.svg` 1행(font-family), 3·4·5·6·7행부터 38행까지(fill), 39행(stroke). 만드는 곳은 `docs/research/2026-11-14-kr-brand-colours/figure_hues.py:26–27`이다.
- Evidence: `INK, MUTED, BARC, RULE = '#1f2328', '#59636e', '#3b4654', '#d0d7de'` / `FONT = "Pretendard, 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif"`. `brand-a.css`의 hex 32개 가운데 `#ffffff`만 겹친다. 브랜드 글꼴은 `--sq-f-ko: "Wanted Sans Variable", "Wanted Sans", "Apple SD Gothic Neo", "Noto Sans KR", …`이다.
- Fix: SVG는 생성물이므로 `figure_hues.py`를 고쳐서 다시 그린다. 예를 들면 INK → `--sq-ink` `#13131a`, MUTED → `--sq-ink-2` `#5a5a63`(흰 바탕 6.82:1), RULE → `--sq-guide` `#d3d3db`, BARC → 중립 `--sq-n700` `#3f3f48`로 바꾼다. 막대에 보라 `--sq-primary`를 쓰지 않는 이유는, brand-a.css가 강조색을 주 버튼과 선택 상태에만 쓰도록 정해 두었기 때문이다. FONT는 `--sq-f-ko` 스택으로 바꾼다(`<img>` 안의 SVG는 웹폰트를 못 불러오므로 실제로는 설치된 글꼴로 내려간다). 다시 그린 뒤 두 사본의 sha256이 같은지 다시 맞춘다.
- 참고: 배민 글의 그림(`baemin-type-decisions.svg`)도 `#5358ee` 등 토큰 밖 색을 쓴다. 선례가 있어도 이 항목의 통과 근거는 되지 않는다.

## 리드가 따로 요청한 다섯 가지

### 1. 수치 10개 이상 대조 (글 ↔ tables.md)

| # | 글 (행) | tables.md | 결과 |
|---|---|---|---|
| 1 | 8행 「169곳 중 60곳, 35.5%」 | W1 `| blue | 60 | 35.5% |`, `**169**` | 같음 |
| 2 | 45행 「176 \| 52(29.5%) \| 검정에 가까운 무채색 22(12.5%)」 | W5 `alt 1: first non-white button | 176 | 52 | 29.5% | achromatic: black-ish | 22 | 12.5%` | 같음 |
| 3 | 47행 「174 \| 55(31.6%) \| … 23(13.2%)」 | W5 `alt 3: no near-white button | 174 | 55 | 31.6% | achromatic: black-ish | 23 | 13.2%` | 같음 |
| 4 | 58행 「핀테크 \| 29 \| 14 \| 노랑 5」 | W2 `| fintech | 31 | 29 | 0 | 3 | 5 | 2 | 2 | 14 |…` | 같음 |
| 5 | 61행 「교육 \| 11 \| 1 \| 빨강 2, 주황 2, 청록 2, 남색·보라 2」 | W2 `| education | 13 | 11 | 2 | 2 | 0 | 1 | 2 | 1 | 2 |…` | 수는 같음. 열 제목 문제는 아래 「한국어」 L55 참고 |
| 6 | 75행 「값은 8개이고 … 26곳」 | W3 `8 hex values shared; 26 references involved.` | 같음 |
| 7 | 94행 「중앙값 5.03:1 … 34곳(35.8%) … 12곳(12.6%)」 | W4 `median 5.03`, `Below 4.5:1: **34** (35.8%); below 3:1: **12** (12.6%)` | 같음 |
| 8 | 119행 「4.09:1 \| 쏘카 \| `#0078ff`」 | W4a `| 4.09 | socar | 쏘카 | blue | #0078ff | #ffffff |` | 같음. 직접 계산해도 4.09 |
| 9 | 140행 「주황 \| 12(7.8%) \| 4(7.1%) \| 4(13.8%)」 | S6 `| orange | 12 | 7.8% | 4 | 7.1% | 4 | 13.8% |` | 같음 |
| 10 | 166행 「180곳 중 64곳(35.6%)」 | W7 `blue would be 64/180 = 35.6%` | 같음. 「토큰인 대표 색」 11곳(169+11=180)과 그중 파랑 4곳을 rows로 다시 셌다 |
| 11 | 184행 「91곳(53.8%), 45곳(26.6%)」 | W4c `below 4.5:1: 91 (53.8%); below 3:1: 45 (26.6%)` | 같음 |
| 12 | 188행 「14.40:1」「12.46:1」 | W4d `14.40 | modusign`, `12.46 | 3o3` | 같음. 직접 계산해도 14.40, 12.46 |
| 13 | 44행 「185 \| 63(34.1%) \| 빨강 19(10.3%)」 | W5 `registry primaryColor | 185 | 63 | 34.1% | red | 19 | 10.3%` | W5와는 같다. 그런데 1b에서는 `| red | 19 | 10.3% |`와 `| achromatic: black-ish | 19 | 10.3% |`가 **동률**이다. 글은 59–61행에서는 동률을 다 적는데 여기서는 빨강만 적는다. 「빨강·검정에 가까운 무채색 각 19(10.3%)」로 고칠 것을 권한다 |

이 밖에 W1 표 11행, S6 표 33칸, W2 표 7행, W3 목록 8행과 이름 26개, W4a 23행의 대비·배경, 더한 16곳의 토큰 이름, 뺀 16곳, 노랑 7곳(핀테크 5 + 카카오·카카오페이지), 커머스 검정 4·회색 3·빨강 5곳의 이름(`rows.json` `ruleW_family`×`category`)을 모두 대조했다. 어긋난 수치는 0개다.

### 2. 대비 절에서 회사 이름이 나오는 문장 ↔ 각 DESIGN.md (25행 전수, 요구는 8행 이상)

| 글 (행) | 글이 하는 말 | 파일 (DESIGN.md 행: 인용) | 판정 |
|---|---|---|---|
| 가우디오랩 (100) | 홈 첫 화면의 문의(Contact us) 버튼 | 61: `Hero Contact us link`. 주요 작업 「…then contact the team」 | 일치 |
| 잔디 (101) | 상단 공통 내비게이션의 주 행동 버튼 | 61: `Global navigation primary action … repeat on surface-2 through surface-6` | 일치 |
| 런드리고 (102) | 기록한 세 페이지에 고정된 문의 버튼 | 127: `Fixed call-to-action at the same spot on all three pages … 상담 문의하기 on /business/` | 일치 |
| 미리캔버스 (103) | 홈 첫 화면의 주 행동 버튼 | 367: `Use: home hero primary action` (110행 use는 「filled action」) | 일치 |
| 당근 (104) | SEED 버튼의 주(primary) 변형 | 263: `**Primary** (\`#ff6f0f\`): --seed-semantic-color-primary`, 69: states `primary, primary-low, …` | 일치 |
| 스티비 (105) | 「무료로 시작하기」 | 91: `무료로 시작하기 in the header of all three captured pages` | 일치 |
| 아이디어스 (106) | 상품 페이지의 「구매하기」 | 86: `구매하기, the product page's purchase action` | 일치 |
| 모레 (107) | 데모 신청(Request Demo) | 124: `Request Demo on moreh.io …`. 주요 작업 첫 줄 「Request a demo」 | 일치 |
| 에이블리 (108) | 판매자 사이트(Seller Square)의 주 진입 버튼 | 144: `Current Seller Square primary entry action` | 일치 |
| 그리팅 (109) | 「도입 문의」 | 141: `도입 문의 at the right end of the header` | 일치 |
| 펫프렌즈 (110) | 가입 쿠폰 안내 창의 「APP 설치하기」 | 126: `APP 설치하기 in the app-install sheet … 5,000원 쿠폰` | 일치 |
| 여기어때 (111) | 홈의 숙소 「검색」 | 114: `Home search submit '검색'` | 일치 |
| 클라썸 (112) | 홈 첫 화면의 주 행동 버튼 | 103: `Home hero primary action (a.primary-button.medium)` | 일치 |
| 버즈빌 (113) | 「문의하기」 | 139: `문의하기 with an arrow icon in the fixed header` | 일치 |
| 토스 (114) | TDS의 주 행동 버튼 | 214: `TDS Mobile xlarge primary action` | 일치 |
| 토스증권 (115) | 공개 WTS 화면의 주 행동 버튼 | 48: `Public WTS compact primary link-action` | 일치 |
| 모인 (116) | 「송금 시작하기」 | 85: `Exchange widget button 송금 시작하기` | 일치 |
| Watcha (117) | 상단의 「로그인」 | 66: `Header 로그인 link to sign-in` | 일치 |
| 프로토파이 (118) | 상단의 데모 예약(Book a Demo) | 130: `Book a Demo at the right end of the header` | 일치 |
| 쏘카 (119) | 「웹에서 예약하기」 | 56: `Prominent guide/product action`, 55: `on the /guide 웹에서 예약하기 link` | 일치 |
| 팀스파르타 (120) | 강의 페이지의 「수강신청하기」 | 119: `수강신청하기, the enrolment action of the course page` | 일치 |
| 페이히어 (121) | 하드웨어 상품 카드의 「구입하기」 | 146: `구입하기 → closing the two hardware cards on the home` | 일치(아래 지적 a) |
| 헤이딜러 (122) | 홈의 차량 검색 버튼 | 98: `The count-and-보기 action under the brand, type and model selects on home` | 일치(「검색」은 바꿔 쓴 말이고, 주요 작업 「Find a certified used car by brand, type and model」과 맞는다) |
| 모두싸인 (188) | 「무료 체험 시작」, `#fed05f`/`#000000` | 124: `무료 체험 시작 in the header`, fill/text 같음 | 일치 |
| 삼쩜삼 (188) | 「내 환급금 조회하기」, `#fbbd41`/`#000000` | 106: `Primary refund action … (내 환급금 조회하기 …)` | 일치 |

그 밖의 회사 문장: 88행 토스뱅크 「`#0064ff`를 브랜드 리소스 센터가 밝힌 브랜드 블루로, `#3182f6`을 공개 화면에서 관찰한 값으로」는 `tossbank/DESIGN.md` 222행(`Toss Blue (\`#0064ff\`): official Toss brand color, specified by the group resource center`)·227행(`Public control blue (\`#3182f6\`)`)과 일치한다.

**지적 (사실과 어긋나지는 않지만 고칠 것):**
- a. **페이히어(121행)는 큰 글자다.** 파일 `typography: 32px / 700`(146행 블록). WCAG 2.x에서 굵은 14pt(약 18.66px) 이상은 큰 글자이므로, 4.14:1은 126행이 직접 인용한 큰 글자 기준 3:1을 넘는다. 126행 「이번 집계에는 글자 크기와 굵기를 넣지 않았습니다」는 사실이지만, 크기 값은 파일에 있다. 이 행을 표에 그대로 두면 이름이 나온 회사가 「잘 읽히는가」 표의 미달 쪽에 있는 것처럼 읽힌다. 23행 중 큰 글자는 페이히어와 런드리고(24px/700, 2.30:1이라 3:1에도 못 미침) 두 곳이다. 고치는 방법: 표에 글자 크기·굵기 열을 넣거나, 이 두 행에 큰 글자라고 적는다.
- b. **대기열이 붙인 전제 조건이 채워지지 않았다.** `BLOG_ARTICLE_QUEUE.md:46` 「이름을 든 줄은 전부 다시 재고, 그 서비스의 주 행동 버튼임이 분명한 것만 남긴다」. 글 96행은 「이 대조는 레퍼런스 파일만 보고 했고, 브라우저로 다시 재지는 않았습니다」라고 밝힌다. 주 행동 버튼인지 가려내는 일은 했고 25행 모두 파일과 맞는다. 하지만 「다시 재기」는 하지 않았다. 루브릭 판정에는 넣지 않았다. 이대로 발행할지는 오너가 정한다.

### 3. 제목의 주장 ↔ W5

제목: 「일곱 가지 방법 모두에서 가장 많은 색은 파랑(29.5~36.6%)」. W5 7행에서 파랑이 늘 1위이고(2위와 가장 작게 벌어진 경우도 52 대 22), 최솟값은 alt 1의 52/176 = 29.5%, 최댓값은 Rule S의 56/153 = 36.6%다. W5 문장 `Claim that holds under all 7 rules: **blue is the largest hue family, at 29.5% to 36.6%**`와 같고, `method.md:37`에 따르면 `compute.py`가 이를 assert한다. **수치는 PASS다.**
표현 지적 두 가지(FAIL로 세지 않음):
- 제목만 읽으면 「한국 서비스」 전체에 대한 말로 읽힌다. 표본이 카탈로그의 검증 레퍼런스 185곳이라는 점과 「한국 서비스 전체에서 뽑은 표본은 아니」라는 점은 152행에 처음 나온다. 설명(3행)에는 185곳이 있다. 제목에 「185곳」을 넣을 것을 권한다.
- 「재 보니」: 이 글이 한 일은 레퍼런스 파일에 기록된 값을 모아 분류하고 계산한 것이다. 96행 「브라우저로 다시 재지는 않았습니다」와 함께 읽으면 제목의 동사가 실제로 한 일보다 넓다.

### 4. 트래픽·검색량·순위·우열로 읽히는 문장

PASS다. 본문에서 `검색|순위|트래픽|방문|인기|낫|우수|1위|최고|최악|뛰어|좋은|나쁜`을 grep하면 111행 「숙소 「검색」」과 122행 「차량 검색 버튼」 두 줄만 나오고, 둘 다 버튼 이름이다. 「가장 많은」은 색 계열의 개수를 말한다. 대비 표(98–122행)는 회사 이름을 대비가 낮은 순서로 늘어놓지만, 126행 「이 수치만으로 접근성 기준에 맞는지 판단할 수는 없습니다」가 판정을 하지 않는다. 다만 2-a의 페이히어는 이 표의 순서 때문에 미달처럼 보이는 행이다. `google` grep도 0건이다.

### 5. oh-my-design을 모르는 독자가 첫 두 단락만 읽고 알 수 있는가 — **FAIL**

첫 두 단락은 8행(본문 첫 단락)과 29행(표 다음 첫 산문 단락)으로 봤다. 그 사이 12행 캡션도 함께 읽었다.
- 무엇을 셌는지는 반만 전해진다. 8행 「oh-my-design에 검증(verified) 레퍼런스로 올라 있는 한국 서비스는 185곳입니다. 이 가운데 각 레퍼런스 파일이 주 색(primary)으로 밝힌 색을…」에는 oh-my-design이 무엇인지, 「레퍼런스 파일」이 무엇인지(공개 화면에서 잰 값을 적은 DESIGN.md)가 없다. 그 설명은 178행 「DESIGN.md는 각 서비스의 공개된 웹 화면과 자료를 기록한 문서이고」에 처음 나온다. 표본이 한국 서비스 전체가 아니라는 말도 152행에 처음 나온다.
- 데이터가 어디 있는지는 외부 독자가 찾아갈 수 없다. 12행 「저장소의 `docs/research/…/figure_hues.py`」와 29행 「저장소의 `docs/research/2026-11-14-kr-brand-colours/tables.md`」는 어느 저장소인지 이름도 링크도 없다. 글의 URL 87개에 저장소 링크는 하나도 없다. 플레이북 §0 「공개 레포에서 확인 가능한 경로에 묶여 있어야 한다」를 독자가 실제로 따라갈 수 없다.
- Fix: 8행에 한 문장을 더한다(예: 「oh-my-design은 실제 서비스의 공개 화면에서 색·글꼴·버튼 값을 재서 서비스마다 DESIGN.md 파일로 모아 둔 아카이브입니다.」). 표본 한정(152행)을 첫 단락으로 올린다. 29행의 「저장소의 `…/tables.md`」를 공개 저장소의 해당 폴더 링크로 바꾼다.

## 한국어 (hangul 스킬 기준)

`copy-check.mjs --context=site` 결과 `0 BLOCK · 0 WARN · 10 FYI`이고, 본문의 FYI는 33행 HW-6 하나다. 나머지는 fact map 주석이다. 말투가 섞인 곳은 0건이다(위 [3]). 아래는 검사기가 잡지 못하는 것을 읽어서 찾은 것이다.

**고칠 것 (독자가 잘못 읽는다):**
- **12행 — 한글 이탤릭 (HG-11).** `*그림: 주 색의 색 계열별 곳 수(…)…*`가 `<em>`이 되고, `markdown.tsx`의 `em: … className="italic"` 때문에 이탤릭으로 그려진다. 사이트에는 `:lang(ko) em { font-style: normal }` 같은 재설정이 없다(`globals.css`의 `:lang(ko)` 규칙은 170–180행뿐이다). Wanted Sans에는 이탤릭이 없으므로 기울임이 합성된다. 글에서 고치려면 `*…*`를 빼고 그냥 단락으로 쓴다.
- **33행 — 순서가 빠진다.** 「…청록 14곳(8.3%)입니다. 검정에 가까운 무채색은 12곳(7.1%)이었습니다.」 5위인 주황 13곳(7.7%)을 건너뛰어서, 검정 쪽이 5위처럼 읽힌다. 주황을 넣거나 검정 쪽을 따로 말하는 이유를 적는다.
- **35행 — 예가 앞 문장과 맞지 않는다.** 「반대로 어두운 색도 밝기가 8% 이상이고 채도가 10% 이상이면 파랑으로 셉니다. 토스 `#3182f6`, 원티드 `#0066ff`, 신한은행 `#0046ff`, 우리은행 `#0067ac`가 모두 이 계열입니다.」 예로 든 네 색의 HSL 밝기는 57.8%, 50.0%, 50.0%, 33.7%이고 어두운 색이 아니다. 독자가 알아야 할 경우는 검정처럼 보이는데 파랑으로 센 색이다. `rows.json`에서 `ruleW_family = blue`이면서 밝기가 낮은 곳은 아임웹 `#15181e`(10.0%), 빗썸 `#1c2028`(13.3%), 현대자동차 `#002c5f`(18.6%), 마키나락스 `#2b2b3b`(20.0%), 한국도로공사 `#063a74`(23.9%)다. 예를 이런 색으로 바꾸거나, 두 문장을 나눠 「이 계열에 드는 곳」의 예라고 밝힌다.
- **55행(59·61행) — 열 제목 「파랑 다음으로 많은 계열」이 두 행에서 틀린다.** 교육(61행)은 파랑이 1곳인데 그 칸의 빨강·주황·청록·남색·보라는 각 2곳으로 파랑보다 많다. 커머스(59행)는 빨강 5가 파랑 5와 동률인데 검정 쪽 4까지 넣었다. 열 제목을 「파랑을 뺀 가장 많은 계열」로 바꾸고 커머스 칸은 「빨강 5」로 맞춘다.

**다듬을 것 (번역투·어색한 문장):**
- 29행 「각 범위는 아래 끝을 포함합니다」: "lower bound inclusive"를 그대로 옮긴 말이다. 「각 범위는 앞 값 이상, 뒤 값 미만입니다(예: 200° 이상 250° 미만)」로 쓴다.
- 42·43·161·168행 「첫 초안의 규칙 S」「처음 쓴 버튼 규칙」: 글을 쓴 과정이 본문에 새어 나왔다. 독자는 어떤 초안인지 모른다. 「좁은 규칙 S」「버튼 우선 규칙」처럼 규칙이 하는 일로 이름을 붙인다.
- 71행 「이 표는 분야와 색이 함께 나온 횟수입니다」: 주어와 서술어가 맞지 않는다("co-occurrence"를 옮긴 말이다). 「이 표는 분야별로 색 계열을 센 것일 뿐입니다」로 쓴다.
- 75행 「여기에 걸린 서비스는 26곳입니다」 → 「이 값을 쓰는 서비스는 모두 26곳입니다」.
- 86행: 둘째 문장 「같은 어두운 색이라도 `#111111`은 검정 쪽, `#222222`는 회색 쪽에 들어갑니다」가 첫 문장을 되풀이한다. 하나로 합친다.
- 96행: 「채용 공고나 … 적지 않은 버튼입니다」는 주어가 없고 여섯 항목을 한 문장에 넣었다(127자, HW-6). 목록으로 바꾸고 주어(「뺀 11곳의 버튼은」)를 넣는다. 같은 단락의 「주요 작업(Primary tasks)을 그 버튼으로 하는 경우」는 「그 버튼이 파일이 꼽은 주요 작업에 쓰이는 경우」로, 「이름을 들지 않습니다」는 「이름을 밝히지 않습니다」로 쓴다.
- 132행 「한국 레퍼런스만 파일을 읽어 넓혔기 때문에」: 목적어가 두 번 겹친다. 「한국 레퍼런스의 파일만 읽어서 넓힌 규칙이라」로 쓴다.
- 186행 「토스 `#3182f6`, 쏘카 `#0078ff`, 헤이딜러 `#396eff`도 그렇고, 주 행동 버튼의 흰 글자와 대비가 모두 …」: 「도 그렇고」가 무엇을 받는지, 「모두」가 세 곳인지 아홉 곳인지가 모호하다(두 해석 모두 사실이다). 「파랑 계열 9곳은 모두 3:1 이상 4.5:1 미만이고, 토스·쏘카·헤이딜러도 여기에 듭니다」로 쓴다.
- 12·14행과 SVG 3행 「곳 수」, 표 열 제목 「곳」: 「서비스 수」가 자연스럽다.
- 글 전체의 「주 색」(띄어 씀): 처음 읽는 사람에게 낯선 말이다. 디자이너는 보통 「메인 컬러」「프라이머리 컬러」라고 한다. 제목·설명이 「브랜드 컬러」「컬러 코드」를 쓰니, 본문 용어를 한 번 정의하거나 맞출 것을 권한다(FYI).

## 작성자 게이트 기록(gates.md)과 다른 점

- 자가 점검 [1] 「실행 못 함」 → 이번 검수는 `brand-a.css` 기준으로 **FAIL**이다(위).
- 게이트 3: 작성자는 「4 브랜드 사실: … 고쳤다」로 통과시켰다. 버튼 설명 25행은 모두 파일과 맞는 것을 확인했다. 다만 2-a(페이히어 큰 글자)와 2-b(대기열의 「다시 재고」 미충족)는 기록에 없다.
- 게이트 8: 작성자 기록(86곳 + 목록, 200)을 리다이렉트를 따라가지 않는 방식으로 다시 재서 확인했다(87/87 `200 0`).
- 「한국어 다듬기」: 작성자는 번역투 grep 0건을 근거로 들었다. 이번 검수에서는 grep에 걸리지 않는 문장을 위와 같이 찾았다.

## Verdict

**REVISION** (round 1). 루브릭 8개 중 1개 FAIL([1] Brand consistency, `figure-hues.svg` / `figure_hues.py:26–27`).
루브릭 밖에서 고칠 것: 리드 점검 5(8·12·29행), 한국어 「고칠 것」 네 곳(12·33·35·55행), 지적 2-a(121행), 3의 동률 표기(44행).
오너가 정할 것: 대기열 46행의 「다시 재기」 조건(96행), 제목 범위 표현(2행), 문체 preset 지정.
round 2에서 [1]이 다시 FAIL이면 BLOCK이다.

§8(취향 캡처): 같은 항목의 FAIL이 2회 이상인 경우가 없다. `.omd/preferences.md`는 워크트리에 없고, 메인 체크아웃의 pending 항목 scope에도 color 축이 없어 발동하지 않았다.


---

# Final QA — round 2 (마지막)

**Date:** 2026-11-21 (KST)
**Artifacts:** `ko.md`(커밋 `f0c40525`, `blog/colour-map`), `figure-hues.svg` 두 사본(41줄, 4,193 B, sha256 `3de48d36…b956` 일치), `figure_hues.py`
**DESIGN.md read at:** 2026-11-20T22:00Z. 루트 `DESIGN.md`는 워크트리에 없어 기준은 `web/src/styles/brand-a.css`이고, 이번 라운드에 다시 읽었다.
**대조 방법:** `gates.md`의 「Revision round 1」 표는 무엇을 고쳤는지 찾는 데만 썼다. 판정은 모두 파일·diff·curl을 직접 보고 내렸다. `git diff --word-diff 1621dc62 f0c40525 -- ko.md`에서 바뀐 곳은 8·12·29·33·35·44·55·59·102·121·126·152행과 fact map 두 줄뿐이다.

## Rubric (round 2)

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Brand consistency | PASS | SVG의 hex는 `#ffffff` `#13131a` `#5a5a63` `#3f3f48` `#d3d3db`이고, `brand-a.css`에 `--sq-n900: #13131a`(= `--sq-ink`), `--sq-n600: #5a5a63`(= `--sq-ink-2`), `--sq-n700: #3f3f48`, `--sq-n300: #d3d3db`(= `--sq-guide`)로 모두 있다. 토큰 밖 hex는 0개다. 글꼴(SVG 1행)은 `'Wanted Sans Variable', 'Wanted Sans', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`이고 `--sq-f-ko`와 같다. 생성기 `figure_hues.py`의 `INK, MUTED, BARC, RULE`와 `FONT`도 같은 값이다. 막대 11개의 `<title>`과 너비(파랑 430.0 … 흰색 쪽 14.3)는 round 1과 같다. |
| 2 | Typography hierarchy | PASS | `##` 7개(31·51·73·90·130·150·180행)이고 `#`·`###`은 0개다. 제목 줄은 이번 diff에서 바뀌지 않았다. |
| 3 | Voice register | PASS | 본문 문장 144개 중 해요체(`-요/-죠`) 0개다. 새로 들어간 문장(8·33·35·126행)은 모두 `-니다`로 끝난다. `copy-check --context=site` 결과는 `0 BLOCK · 0 WARN · 10 FYI`이다. |
| 4 | Image / figure | PASS | alt(10행)는 그대로이고 값은 막대와 같다. 캡션(12행)은 이제 이탤릭이 아닌 그냥 단락이다. 본문 전체에서 `*…*` 패턴은 0건이다. 두 SVG 사본의 sha256이 `3de48d36a845…b956`으로 같다. |
| 5 | Cross-locale parity | PASS (vacuous, ko only) | 폴더에는 여전히 `ko.md`만 있다. |
| 6 | Accessibility | PASS | 그림 글자 `#13131a`는 흰 바탕에서 18.49:1, `#5a5a63`은 6.82:1이다. 막대 `#3f3f48`은 10.42:1이다. 축선 `#d3d3db`(1.49:1)은 정보를 담지 않는 장식이다. lang·포커스·표 구조는 round 1 근거 그대로이고 바뀐 것이 없다. |
| 7 | Performance | PASS | SVG 4,193 B(`wc -c`)이고 펜스 코드 블록은 0개다. |
| 8 | Links | **FAIL** | URL 92개(아이템 페이지 89곳, 목록 1개, GitHub 2개)를 리다이렉트 없이 열었다. 90개는 `200 0`이고 GitHub 링크 두 개는 `404 0`이다(2026-11-21 07:00 KST). 자세한 내용은 아래에 있다. |

### [8] Links — 저장소 링크 2개가 지금 404
- Location: `ko.md:12`, `ko.md:29`
- Evidence:
  - 12행 `[\`docs/research/2026-11-14-kr-brand-colours/figure_hues.py\`](https://github.com/kwakseongjae/oh-my-design/blob/main/docs/research/2026-11-14-kr-brand-colours/figure_hues.py)` → `404 0`.
  - 29행 `…/blob/main/docs/research/2026-11-14-kr-brand-colours/tables.md` → `404 0`.
  - 저장소 첫 화면은 200이다. main에는 이 폴더가 아직 없다(`git ls-tree main`이 비어 있음).
- 머지 전제를 직접 확인했다:
  - `git ls-tree -r f0c40525 -- docs/research/2026-11-14-kr-brand-colours/`에 `figure_hues.py`와 `tables.md`가 추적 파일로 들어 있다(`.gitignore:19` `research/`에 걸려 있지만 강제로 추적된다).
  - `git ls-remote --symref origin HEAD` → `ref: refs/heads/main`.
  - 따라서 이 브랜치가 main에 머지되면 두 주소는 열린다. 그 전까지는 열리지 않는다. 오너가 머지 전에 프리뷰에서 이 링크를 누르면 404를 본다.
- 원인의 일부는 이 검수에 있다. round 1의 점검 5 수정 지시가 「공개 저장소의 해당 폴더 링크로」라고만 쓰고, 머지 전에도 열리는 ref를 정하지 않았다.
- Fix (둘 중 하나):
  - (a) 링크를 커밋 고정 주소로 바꾼다. `https://github.com/kwakseongjae/oh-my-design/blob/f0c40525a8f53b2ccc0645cfe235e8517cb1506c/docs/research/2026-11-14-kr-brand-colours/tables.md`와 같은 경로의 `figure_hues.py`는 지금 둘 다 `200`이다. 브랜치 주소(`blob/blog/colour-map/…`)는 지금 200이지만 브랜치를 지우면 깨지므로 권하지 않는다.
  - (b) 오너가 이 두 링크를 known-issue로 받아들이고, 머지 직후 두 주소를 다시 curl해 200을 확인한다.

## round 1 지적별 확인 (파일에서 직접)

| round 1 지적 | 지금 글 | 결과 |
|---|---|---|
| [1] 그림 색 4개·글꼴 | 위 [1] | 고쳐짐 |
| 점검 5: oh-my-design·레퍼런스 파일 설명 | 8행 「oh-my-design은 실제 서비스의 공개된 웹 화면과 자료에서 색·글꼴·버튼 값을 기록해, 서비스마다 레퍼런스 파일(DESIGN.md) 하나로 모아 둔 아카이브입니다.」 | 고쳐짐 |
| 점검 5: 표본 한정을 앞으로 | 8행 「한국 서비스 전체에서 뽑은 표본이 아니라 이 아카이브에 올라 있는 곳들입니다.」. 152행의 같은 말은 지워졌다(diff) | 고쳐짐 |
| 점검 5: 데이터 위치에 갈 수 있는가 | 12·29행에 링크가 생겼지만 지금 404다 | **아직 아님** — [8]과 같은 원인 |
| 한국어 12행 이탤릭(HG-11) | 12행이 그냥 단락이다. 본문 `*…*` 0건 | 고쳐짐 |
| 한국어 33행 주황 누락 | 「… 청록 14곳(8.3%), 주황 13곳(7.7%) 순입니다. 무채색 가운데서는 검정에 가까운 색이 12곳(7.1%)으로 가장 많았습니다.」. W1 무채색은 검정 12·회색 10·흰색 2 | 고쳐짐 |
| 한국어 35행 어두운 예 | 아임웹 `#15181e`, Bithumb `#1c2028`, 현대자동차 `#002c5f`. `rows.json` 기준 셋 다 `verified_v2`, `ruleW_family` blue, 밝기 10.0/13.3/18.6%, 이름은 `display_name` 그대로. 링크 3개 모두 `200 0`. 토스 등 네 곳은 「도 파랑 계열입니다」로 따로 뒀다 | 고쳐짐 |
| 한국어 55행 열 제목, 59행 커머스 칸 | 「파랑을 뺀 가장 많은 계열」, 커머스 「빨강 5」. 일곱 행을 W2와 다시 맞춰 봤고 모두 맞다(교육 칸의 2곳짜리 넷은 새 제목으로 보면 맞다) | 고쳐짐 |
| 점검 1-13 / 44행 동률 | 「빨강·검정에 가까운 무채색 각 19(10.3%)」. tables.md 1b `| red | 19 | 10.3% |`, `| achromatic: black-ish | 19 | 10.3% |` | 고쳐짐 |
| 지적 2-a 페이히어 큰 글자 | 102·121행 끝 「, 큰 글자」, 126행 단락 추가. round 1에서 23곳의 typography를 직접 읽은 값과 같다: 런드리고 `24px / 700`, 페이히어 `32px / 700`은 큰 글자이고, 아이디어스 `18px / 700`은 18.66px 미만이라 아니며, 당근은 크기가 적혀 있지 않다. 「페이히어(4.14:1)는 이 기준을 넘고 런드리고(2.30:1)는 못 미칩니다」도 맞다 | 고쳐짐 |
| 지적 2-b 대기열 「다시 재기」 | 96행 그대로(「브라우저로 다시 재지는 않았습니다」) | 오너 결정으로 남음 (루브릭 밖) |
| 점검 3 제목 범위·「재 보니」 | 2행 그대로 | 오너 결정으로 남음 (루브릭 밖) |
| 「다듬을 것」(29·42·43·71·75·86·96·132·161·168·186행, 「곳 수」, 「주 색」) | 그대로 | 고치지 않음(작성자 기록: 리드 지시 범위 밖). 루브릭 밖 |

## 수치 재대조 — round 1과 다른 표본

diff를 보면 표와 수치가 있는 행 가운데 바뀐 것은 44행 runner-up 칸(동률 표기)뿐이다. 아래는 round 1에서 고르지 않은 값들이다.

| # | 글 (행) | tables.md | 결과 |
|---|---|---|---|
| 1 | 19행 「청록 \| H 165~200° \| 14 \| 8.3%」 | W1 `| teal/cyan | 14 | 8.3% |` | 같음 |
| 2 | 22행 「남색·보라 … 10 \| 5.9%」 | W1 `| indigo/violet | 10 | 5.9% |` | 같음 |
| 3 | 24행 「노랑 … 7 \| 4.1%」 | W1 `| yellow | 7 | 4.1% |` | 같음 |
| 4 | 42행 「153 \| 56(36.6%) \| 빨강 15(9.8%)」 | W5 `Rule S (first draft) | 153 | 56 | 36.6% | red | 15 | 9.8%` | 같음 |
| 5 | 43행 「176 \| 54(30.7%) \| 검정 … 22(12.5%)」 | W5 `original measured rule | 176 | 54 | 30.7% | achromatic: black-ish | 22 | 12.5%` | 같음 |
| 6 | 46행 「149 \| 52(34.9%) \| 빨강 15(10.1%)」 | W5 `alt 2: primary token only | 149 | 52 | 34.9% | red | 15 | 10.1%` | 같음 |
| 7 | 57행 「컨슈머 테크 \| 53 \| 14 \| 초록 9」 | W2 `| consumer-tech | 61 | 53 | 5 | 3 | 2 | 9 | 5 | 14 |…` | 같음 |
| 8 | 63행 「헬스케어 \| 8 \| 4 \| 청록 2」 | W2 `| healthcare | 8 | 8 | 1 | 1 | 0 | 0 | 2 | 4 |…` | 같음 |
| 9 | 92행 「95곳 … 74곳」 | W4 `with at least one qualifying button: **95**; without: 74` | 같음 |
| 10 | 106행 「3.00:1 \| 아이디어스 \| `#ef7014`」 | W4a `| 3.00 | idus | … | #ef7014 | #ffffff |` | 같음 |
| 11 | 111행 「3.39:1 \| 여기어때 \| `#1d8bff`」 | W4a `| 3.39 | yeogiotte | … | #1d8bff |` | 같음 |
| 12 | 137행 「빨강 \| 15(9.8%) \| 13(23.2%) \| 5(17.2%)」 | S6 `| red | 15 | 9.8% | 13 | 23.2% | 5 | 17.2% |` | 같음 |
| 13 | 143행 「회색 \| 8(5.2%) \| 2(3.6%) \| 0(0.0%)」 | S6 `| achromatic: grey | 8 | 5.2% | 2 | 3.6% | 0 | 0.0% |` | 같음 |
| 14 | 124행 「23곳 중 6곳은 3:1에도 못 미칩니다」 | W4a `Kept rows below 3:1: 6` | 같음 |

어긋난 수치는 0개다.

**루브릭 밖 메모(판정에 넣지 않음):**
- 29행 「이 글의 다른 표와 수치도 모두 이 파일(tables.md)에서 가져왔고」는 이제 정확하지 않다. 35행의 hex 세 개는 `rows.json`에서, 126행의 큰 글자 판정은 각 DESIGN.md의 typography에서 왔다(값은 둘 다 맞음). 「표와 수치는 이 폴더의 파일에서」처럼 넓혀 쓰는 편이 정확하다.
- 126행은 크기를 근거로 두 행을 판정하는데, 186행은 「버튼 글자의 크기와 굵기까지 정해야 어느 기준에 맞는지 말할 수 있습니다」라고 그대로 남아 있다. 서로 모순은 아니지만, 독자가 「크기를 봤는가, 안 봤는가」를 헷갈릴 수 있다.

## Verdict — round 2

**BLOCK** (round 2, 2-round cap 도달). 루브릭 8개 중 7개 PASS, 1개 FAIL([8] Links, `ko.md:12`·`ko.md:29`의 GitHub `blob/main` 링크 2개가 404).
막는 원인은 이 두 링크 하나뿐이다. round 1에서 FAIL이던 [1]과 점검 5의 글 부분, 한국어 「고칠 것」 네 곳, 지적 2-a, 44행 동률은 모두 파일에서 고쳐진 것을 확인했다.
풀리는 길은 둘이다. 링크를 커밋 고정 주소로 바꾸면(지금 200 확인함) 다음 검수 없이 이 항목은 PASS 조건을 채운다. 아니면 오너가 known-issue로 받아들이고 머지 직후에 다시 확인한다. 어느 쪽으로 할지는 orchestrator가 오너에게 묻는다.
오너가 정할 것으로 남은 것: 대기열 46행의 「다시 재기」(96행), 제목의 범위 표현(2행), 문체 preset.

§8(취향 캡처): [1]은 이번에 PASS이고 [8]은 hard rule이라 대상이 아니므로 발동하지 않았다.
