# 스킬 트렌드: 9/29 기준선 대비 변화 + 3D·Blender·three.js 지형 (2026-11-06)

이슈 #103. 기준선은 `docs/research/2026-09-29-growth/`의 `design-skills-landscape.md`·`emil-skills-virality.md`·`skills-sh-indexing.md`와 `docs/research/2026-10-13-trends/TRENDS.md`(셰이더·shadcn)다. 그 문서들의 수치는 9/29(또는 10/13) 스냅숏으로 두고, 이 문서는 **그 뒤 38일 동안 바뀐 것**과 기준선에 없던 3D 지형만 다룬다.

**수치를 읽은 시각 (모두 2026-11-06 UTC)**
- GitHub 별·포크·생성일·푸시일: `gh api repos/<owner>/<repo>`, 02:38~02:50.
- skills.sh 설치 수: 레포 페이지 `skills.sh/<owner>/<repo>`, 전체·24시간·Hot 보드(`/`, `/trending`, `/hot`), 검색 API `skills.sh/api/search?q=`, 02:40~02:55.
- PyPI 다운로드: `pypistats.org/api/packages/blender-mcp/recent`.
- X: 로그인하지 않았다. 공개 미러 `api.fxtwitter.com/2/profile/<계정>/statuses`(10-13 조사와 같은 방식)로 본문과 조회·좋아요·북마크를 읽었다(03:00 전후). **X 수치는 전부 미러를 거친 2차 값이다.** 검색엔진으로는 X 게시물이 거의 잡히지 않았다.
- `[미검증]`은 출처가 자기 주장뿐이거나 교차 확인을 못 한 값이다.

---

## 1. 한 줄 결론

9/29 이후 별이 빨라진 것은 **v2를 다시 짓거나 매주 새 스킬을 낸 "취향(taste)·동사형" 스킬**(impeccable 일평균 837★, taste-skill 519★, hallmark 515★, Emil 321★)이고, **카탈로그는 식었다**(awesome-design-md 652★/일 → 188★/일, Google design.md 164 → 16). 선두 셋(taste 2.5, hallmark v2, uizze)은 같은 모양으로 모였다. 테마를 하나 뽑아 주고, 실사진을 붙이고, 실제 브라우저로 검사하는 모양이다. 셋 다 테마를 지어내고 한국어 처리는 없다. 그래서 OmD가 비어 있는 자리는 세 군데다. ① **실측한 실제 회사 레퍼런스로 테마를 뽑아 주고 검사기까지 붙은 원샷 스킬**, ② **한국어 최악 데이터 스트레스 검사**(break·상태 매트릭스류가 5주 사이 세 곳에서 나왔다), ③ **브랜드 근거로 만드는 3D 히어로**. X에서는 three.js 데모가 가장 잘 퍼지지만, three.js 스킬 설치는 API 레퍼런스 한 팩(cloudai-x)이 쥐고 있고 24시간 순위 600위 안에 3D 스킬은 하나도 없다.

---

## 2. 지금 오르는 스킬

### 2-1. 속도 — 9/29 → 11/06 (38일)

| 레포 | 9/29 ★ | 11/06 ★ | 38일 증가 | 일평균(38일) | 9/29까지 생성 후 일평균 | 판정 |
|---|---|---|---|---|---|---|
| pbakaus/impeccable | 72,214 | 104,007 | +31,793 | **837** | 228 | 가속(최대). skill 4.7.0(10/19)·4.8.0(10/26), "다듬기 서브에이전트"(10/22). 원인 분해는 `[미검증]` |
| Leonxlnx/taste-skill | 91,003 | 110,714 | +19,711 | 519 | 410 | 가속. v2.0.0(10/13) → v2.1(10/18) → v2.5(11/04) |
| Nutlope/hallmark | 29,269 | 48,830 | +19,561 | 515 | 189 | **계단형 가속.** v2 재작성(10/22) 전 23일은 29,269 → 약 30,000(약 32★/일), 뒤 15일은 → 48,830(약 1,255★/일). 10/22 값은 트윗의 "30k stars" `[트윗 기준점, 미검증]` |
| emilkowalski/skills | 41,700 | 53,881 | +12,181 | 321 | 212 | 가속. 새 스킬 4개(break-ui 10/02, animation-performance 10/11, remove-animations 10/28, choreograph 11/04) |
| nextlevelbuilder/ui-ux-pro-max-skill | 131,337 | 145,738 | +14,401 | 379 | 433 | 둔화. 마지막 릴리스 v2.15.0(8/13) |
| anthropics/skills | 178,877 | 187,788 | +8,911 | 234 | 481 | 둔화. `frontend-design` 마지막 수정 9/03 |
| VoltAgent/awesome-design-md | 118,655 | 125,794 | +7,139 | 188 | 652 | **급감**(카탈로그) |
| nexu-io/open-design | 98,543 | 106,139 | +7,596 | 200 | 640 | 급감 |
| google-labs-code/design.md | 28,150 | 28,753 | +603 | 16 | 164 | 정체(포맷 스펙) |
| alchaincyf/huashu-design | 24,519 | 28,808 | +4,289 | 113 | 150 | 소폭 둔화 |
| vercel-labs/agent-skills | 31,691 | 33,602 | +1,911 | 50 | 107 | 둔화 |
| ibelick/ui-skills | 9,220 | 10,689 | +1,469 | 39 | 35 | 유지 |
| jakubkrehel/make-interfaces-feel-better | 3,520 | 3,922 | +402 | 11 | 18 | 둔화. 활동은 새 레포 `jakubkrehel/skills`로 옮겨감(아래) |
| **kwakseongjae/oh-my-design** | 523 | 567 | +44 | **1.2** | 3.1 | 둔화 |

대표 스킬 설치 수(skills.sh 행 기준; 9/29 값은 기준선 문서):

| 스킬 | 9/29 | 11/06 | 38일 증가 | 일평균 | 24시간 보드(11/06) |
|---|---|---|---|---|---|
| taste-skill `design-taste-frontend` | 534.3K | 738,177 | +203.9K | **5.4K** | 5,094 (123위) |
| vercel `web-design-guidelines` | 677.6K | 830,067 | +152.5K | 4.0K | 4,169 |
| anthropics `frontend-design` | 933.1K | 1,081,565 | +148.5K | 3.9K | 5,046 |
| emil `emil-design-eng` | 305.9K | 421,674 | +115.8K | 3.0K | 3,268 |
| impeccable `impeccable` | 300.5K | 388,645 | +88.1K | 2.3K | 2,419 |
| ui-ux-pro-max | 375.1K | 436,806 | +61.7K | 1.6K | 1,912 |
| hallmark | 57.9K | 92,419 | +34.5K | 0.9K | 1,986 |
| make-interfaces-feel-better | 59.4K | 75,402 | +16.0K | 0.4K | — |
| stitch `design-md` | 62.9K | 65,678 | +2.8K | 0.07K | — |
| **OmD 행 합계 / 최다 행** | 401 / 18 | **641 / 21** (59행) | +240 | — | 600위 밖 |

OmD 행별로 보면 `omd-slop-audit` 7 → 19, `omd-humanize` 7 → 17, `omd` 18 → 21이다. 따라서 38일 동안 실제 설치는 **최소 12회 안팎**이고, 하루 1회가 안 된다. 그 사이 출시한 스킬은 `omd-restraint` 9, `omd-shader-hero` 8, `omd-cjk-type-shader` 9, `omd-feel` 9, `hangul` 5(11/05 출시)다. **스킬을 내는 것만으로는 행이 움직이지 않았다.**

### 2-2. 지금 오르는 스킬 표 (9/29 이후 새로 뜨거나 크게 바뀐 것)

| 스킬 | 레포 | 하는 일 | 설치 / 별 (11/06) | 출처 |
|---|---|---|---|---|
| `design-taste-frontend` **v2.5** | Leonxlnx/taste-skill | 회사 사이트를 업종 6종(software·gaming·tech·product·service·place)으로 분류한다. 팔레트·Google Fonts 쌍·히어로 레이아웃 11종을 *뽑아 주고*(`start.mjs`, `deal.mjs`), 실사진(Commons·Unsplash, 출처 표기)과 실제 브랜드 아이콘을 넣는다. 셰이더 바탕·스크롤 장면·"절차적 3D 프린트"는 tech·gaming·software에만, WebGL 컨텍스트 4개 상한과 폰·모션 줄이기 대체를 둔다. headless Chrome으로 1440·1024·768·390을 렌더해 규칙별 PASS/WARN/FAIL을 낸다. 나머지 스킬은 10/18~19에 `taste-skill-classics`·`imagegen-skills`로 옮겼고 `full-output-enforcement`는 삭제했다 | 738,177 · 110,714★ | [README](https://github.com/Leonxlnx/taste-skill), [릴리스](https://github.com/Leonxlnx/taste-skill/releases), [skills.sh](https://skills.sh/Leonxlnx/taste-skill) |
| TasteCode v0.5 | Leonxlnx/tastecode | 창작 작업용 에이전트 데스크톱 앱(Codex·Claude Code·Grok·Cursor). taste-skill 내장 | 488★ | [X 11/04, 16K 조회](https://x.com/LexnLin/status/2118056518096466150) |
| `hallmark` **v2** | Nutlope/hallmark (Together AI) | 50개 재질 테마 중 3개를 뽑는다. 페이지는 방문자가 할 일 중심으로 짜고, 755장의 공개 라이선스 사진을 출처와 함께 쓴다. URL·개발 서버를 주면 스크린샷을 직접 찍고, `redesign`·`audit` 모드가 있다. 실제 브라우저 린트를 Floor(절대 불가)·Reflex(사유 있으면 기각 가능)·Finish(차단 안 함) 세 층으로 나눈다 | 92,419 · 48,830★ | [README](https://github.com/Nutlope/hallmark), [X 10/22, 156K 조회](https://x.com/nutlope/status/2113316017510191578) |
| `impeccable` 4.8 | pbakaus/impeccable | 동사 24개(polish·bolder·quieter·distill…) + 탐지 엔진. 10/22에 프런트 작업을 자동으로 다듬는(hill-climb) 서브에이전트 추가 | 388,645 · 104,007★ | [skills.sh](https://skills.sh/pbakaus/impeccable), [X 10/22](https://x.com/pbakaus/status/2113065895069368804) |
| `break-ui`·`animation-performance`·`remove-animations`·`choreograph` | emilkowalski/skills (총 17개) | 최악 데이터 주입 후 깨진 곳 보고 / 프레임 예산 / 불필요한 모션 *삭제만* / 여러 요소의 동시 모션 순서·겹침 조율 | 레포 3.1M · 53,881★ (행별 수치는 2-3 주의) | [repo](https://github.com/emilkowalski/skills), [X 10/04 break-ui·mobile-native 173K](https://x.com/emilkowalski/status/2106752670405099523), [X 11/04 choreograph 55K](https://x.com/emilkowalski/status/2117996960028450836) |
| aiforui.dev (유료) | Emil | 강의 + 스킬 28개 + 용어 244개. "에이전트에게 구매를 시키면 스킬까지 설치" | 3,000명 이상 `[미검증, 본인 주장]` | [X 10/27, 286K](https://x.com/emilkowalski/status/2115072947576812013), [X 10/28 용어집 124K](https://x.com/emilkowalski/status/2115425807388619022) |
| `jakubkrehel/skills` (14개 폴더, skills.sh 20행) | jakubkrehel/skills | better-ui·better-colors·better-interface·better-typography·better-writing·variant·break·state-machine(모든 상태를 목업 데이터와 함께 버릴 페이지에 렌더)·teardown(사물 기술 일러스트) | better-ui 44.2K · 11,048★ (7/10 생성) | [skills.sh](https://skills.sh/jakubkrehel/skills), [X teardown 245K](https://x.com/jakubkrehel/status/2114379959263502712), [X state-machine 77K](https://x.com/jakubkrehel/status/2108217939556233615) |
| `anatomy` | wheresryan22/anatomy | 실제 기계·시스템의 아이소메트릭 인터랙티브 해설 일러스트(SVG) | 29.7K · **25,277★ (10/08 생성, 872★/일)** | [repo](https://github.com/wheresryan22/anatomy), [MengTo 인용 115K](https://x.com/MengTo/status/2109182449179836579) |
| `uizze-ui`·`ui-design`·`anti-ui-slop`·`image-to-ui`·`ui-radar` | uizze/uizze + uizze.sh | 실제 앱 화면·플로·디자인 시스템·라이선스 폰트를 MCP로 대 주는 상용 서비스의 무료 스킬 | `ui-taste` 1.0M(9/21 첫 등장), 레포 85★ — **이상치**(2-3) | [README](https://github.com/uizze/uizze), [skills.sh](https://skills.sh/site/uizze.sh/ui-taste) |
| `hyperframes-*` (54개) | heygen-com/hyperframes | HTML로 쓰고 영상으로 렌더(애니메이션·GSAP·three·figma·오디오) | 16.6M(54행 합) · 79,613★ | [skills.sh](https://skills.sh/heygen-com/hyperframes) |
| `cinetic` / `earshot` | Leonxlnx | 코드로 만드는 런칭 필름 / 에이전트가 소리를 듣고 만드는 CPU 전용 도구 | 1.5K · 1,030★ / 4,002★(10/15 생성) | [X earshot 270K](https://x.com/LexnLin/status/2111927727318245426) |

1차 출처 확인:
- Anthropic `frontend-design`: 9/03 이후 커밋 없음.
- `@claudeai`의 9/29 이후 디자인 관련 게시물: Opus 5.5 3D 데모 두 편.
- `@vercel`: 기간 내 스킬·디자인 글 없음.
- `@rauchg`: 샌드박스 글 하나뿐.

### 2-3. 설치 수 읽을 때 주의

1. **행 수치는 "그 스킬이 레포에 들어온 뒤 레포 전체가 설치된 횟수"에 가깝다.**
   - Emil의 24시간 보드 17행은 전부 2,309~3,268 사이다.
   - 행 값은 추가일과 비례한다: break-ui 91.4K(35일), animation-performance 63.4K(26일), remove-animations 18.9K(9일), choreograph 3.7K(2일). 모두 하루 약 2~2.6K꼴이다.
   - taste 16행(330~740K), lark 30행(~480K), hyperframes 54행도 같은 묶음 설치다.
   - **개별 스킬 수요의 증거로 쓰지 않는다.**
2. **옮겨 간 스킬의 행은 남는다.** taste-skill에서 나간 11개 행이 여전히 집계된다(기준선 §1, vercel-labs/skills #2326).
3. **이상치 두 건.** 근거로 쓰지 않는다.
   - `uizze.sh/ui-taste`: 1.0M, 24시간 20,619, 레포 85★, 9/21 첫 등장.
   - `designed-by-ai/skills/design-mobile-apps`: Sleek. 1.3M, 24시간 19,694, 레포 26★, 9/04 첫 등장.
   - 별이 거의 없는 레포가 하루 2만 회를 찍는다. 제품 온보딩 자동 설치인지, 부풀린 것인지 구분하지 못했다 `[출처 미검증]`.
   - 새 사실 하나는 남긴다. `/site/<도메인>` 경로로 **GitHub 밖 도메인을 소스로 한 스킬**이 skills.sh에 올라간다.
4. **기존 수치 정리**
   - Emil 레포: 스킬 17개, 53,881★, `emil-design-eng` 421.7K, 레포 합계 3.1M. skillselion의 "~250K 설치, ~35K★"는 9/29 이전 스냅숏으로 보인다. 스킬 수가 "2개 대 10개"로 엇갈리던 것은 둘 다 틀렸다.
   - taste-skill 별: 1.7K / 46K / 79.8K로 엇갈렸는데, 실제는 **110,714★**다.
   - Emil 본인 수치: 10/26 "50,000 stars, 2.7M downloads"([X](https://x.com/emilkowalski/status/2114808624052621391)).

### 2-4. X에서 보이는 흐름 (api.fxtwitter.com 미러, 2차)

- **연쇄 실행(workflow) 게시물이 단일 스킬 출시만큼 퍼진다.**
  - Emil "/find-animation-opportunities → /animate → /review-animations"(10/17, 114K): https://x.com/emilkowalski/status/2111450789566943247
  - Emil "/remove-animations → /improve-animations → /animation-performance"(10/31, 71K): https://x.com/emilkowalski/status/2116583281332503038
- **"모델이 이제 취향이 있다."**
  - shadcn "Opus 5.5 is the first model with taste"(11/04, 188K): https://x.com/shadcn/status/2117856245101019250
  - 해석: 규칙만 나열한 반(反)슬롭 스킬의 몫은 줄고 있다. 스킬의 가치는 **에셋(사진·아이콘·테마), 검사기, 연쇄 실행**으로 옮겨가고 있다. taste 2.5와 hallmark v2가 바로 이 방향으로 다시 지었다.
- **three.js 데모가 가장 잘 퍼진다.** 이 데모들에 스킬은 없다.
  - `@claudeai`가 Opus 5.5 홍보로 "분해되는 인터랙티브 3D 제트 엔진"(10/02, 262K)을 냈다: https://x.com/claudeai/status/2106125478956507480
  - LexnLin "Opus 5.5 built this in threejs"(11/02, 90K): https://x.com/LexnLin/status/2117230395406364857
  - MengTo "opus 5.5 is a beast with three.js"(casa-serra, 11/03, 47K): https://x.com/MengTo/status/2117446870033445104
  - Nutlope Bygga(IKEA 3D 조립 안내, 10/27, 305K): https://x.com/nutlope/status/2115159545307619695
- **해설 일러스트가 새 장르로 떴다.**
  - Jakub `/teardown`(10/25, 245K, 북마크 7K). 이 기간 디자인 스킬 출시 게시물 중 최대다.
  - `anatomy`(MengTo 인용 115K).
- **셰이더**는 MengTo가 shaders.com을 소개한 글(10/10, 91K)이 이어진다. 상세는 10-13 TRENDS §1-7에 있어 반복하지 않는다.

---

## 3. 우리 스킬과의 빈칸

| 트렌드 (근거) | 우리와 가장 가까운 스킬 | 빈칸 | 메모 |
|---|---|---|---|
| 테마 뽑기 + 실사진 + 실제 브라우저 검사기 원샷 (taste 2.5, hallmark v2) | omd-landing, omd-aphrodite, omd-autopilot | **partial** | 우리는 DESIGN.md에서 출발하므로 근거는 더 낫다. 하지만 "명령 하나 → 뽑기 → 4폭 렌더 검사 → 사진 출처" 한 덩어리가 없다. 검사기가 restraint·hangul·shader-hero에 흩어져 있다 |
| 실제 앱·회사 레퍼런스를 MCP로 공급 (uizze) | 웹 `/api/mcp` 커넥터 + 카탈로그 576 | none(자산) / partial(유통) | 논지는 같고 CJK 깊이는 우리가 앞선다. 유통은 상대가 압도적이다(이상치를 빼도) |
| 반(反)슬롭 감사·다듬기 (impeccable, uizze anti-ui-slop) | omd-slop-audit, omd-designer-review, omd-final-qa | partial | impeccable의 자동 hill-climb 서브에이전트에 해당하는 루프가 없다 |
| "taste" 범주 이름 | omd-taste | — | **이름 충돌**: 우리 `omd-taste`(행 `omd:taste` 14)는 선호 뷰어다. "taste"가 738K 설치 범주의 이름이 되어 검색에서 오해를 부른다 |
| 모션 장인 스킬 연작 (Emil 17개, choreograph·remove·performance) | omd-feel(113규칙) | partial | 규칙은 있다. 동사로 쪼갠 연쇄(찾기 → 만들기 → 검토 → 덜기)가 없다 |
| 모션·UI 용어집 (Emil animation-vocabulary, aiforui 244어) | — | missing | 한국어 디자인 용어 대응표는 CJK 쪽에서 아무도 안 한다 `[추정]` |
| 최악 데이터·상태 매트릭스 (Emil break-ui 10/02, Jakub break·state-machine, shadcn state-matrix 10/09) | hangul `render-check.mjs`, omd-designer-review | **missing**(동사) | Emil 설명에 "non-Latin text" 한 줄이 있을 뿐이다. GitHub 코드 검색에서 taste-skill·hallmark의 `keep-all`·`Pretendard`·`Korean`·`Hangul`·`CJK`는 모두 0건(인덱스 누락 가능) |
| 해설·기술 일러스트 (anatomy 25K★/29일, Jakub teardown) | omd-media, omd-asset-curator | missing | 레인 밖에 가깝다. 지켜볼 항목 |
| HTML → 영상 (hyperframes 16.6M, remotion, cinetic, MengTo HTML Reel) | omd-showcase | partial | 스크롤 녹화만 한다. 장면 연출·편집 없음 |
| 사운드 (earshot) | — | missing | 레인 밖 |
| 모바일 네이티브 느낌 (Emil mobile-native) | omd-feel | partial | 44px 타깃 등 일부 |
| 타이포·색 (Jakub better-typography/colors, impeccable typeset/colorize) | hangul(한국어), omd-apply | none(한국어) / partial(라틴) | |
| 셰이더 히어로 (shaders.com, MengTo 이펙트 스킬) | omd-shader-hero, omd-cjk-type-shader | none | 10-13 TRENDS가 다뤘다 |
| 3D 히어로·배경 (taste 2.5 `assets/objects/`·`product-render` + 포스터, MengTo webgl-3d-object) | — (omd-asset-curator 설명의 "3D 서브에이전트 라우팅"은 **대상이 없음**: `omd-3d-blender`는 1.5.0(5/26)에서 삭제) | **missing** | §4 |
| 앱 → DESIGN.md 추출 (stitch design-md 65.7K, extract-design-system 131K, ibelick create-design-md 5.0K) | omd-init, omd-reference-capture | partial | brownfield `omd:absorb` 로드맵 |

---

## 4. 3D·Blender·three.js 스킬 지형

### 4-1. 표

| 이름 | 레포·형태 | 하는 일 | 설치 / 별 · 최근 푸시 | 약점 |
|---|---|---|---|---|
| **threejs-skills** 13개 | CloudAI-X/threejs-skills | fundamentals·geometry·materials·lighting·textures·animation·loaders·shaders·postprocessing·interaction·performance·asset-pipeline·r3f. three.js r186 고정, 스킬마다 18~30KB API 레퍼런스. "구식 API" 실수 목록(RGBELoader → HDRLoader, Clock → Timer, PostProcessing → RenderPipeline) | 레포 190.4K, 최다 `threejs-animation` 23.6K · 4,020★ · 10/19 | **연출이 없다.** 무엇을 왜 그릴지, 브랜드 색과 재질, 성능 예산, 포스터 대체, 모션 줄이기, 실제 GPU 촬영 검증이 없다. three.js가 [threejs.org/llms.txt](https://threejs.org/llms.txt)·[llms-full.txt](https://threejs.org/docs/llms-full.txt)를 직접 내고 "WebGPURenderer + TSL"을 안내하므로 API 레퍼런스의 가치는 1차 문서와 겹친다. 24시간 보드 600위 밖(Hot 5~7) |
| claudedesignskills | freshtechbro/claudedesignskills | threejs-webgl 4.9K, react-three-fiber 4.0K, web3d-integration-patterns 3.3K, blender-web-pipeline 3.7K, spline-interactive 3.0K, babylonjs·aframe·substance 등 23개 | 레포 71.2K · 1,258★ · **2025-11-20**(약 1년 정지) | three.js 릴리스 속도 대비 낡았다. 범위만 넓다 |
| r3f-skills | EnzeD/r3f-skills | r3f-fundamentals·animation·shaders·physics 등 | 1.8~3.4K/행 · 134★ · 8/31 | API 위주 |
| three-agent-skills | emalorenzo | r3f-best-practices | 1.6K · 67★ · 1/28 | 낡음 |
| Three.js-Claude-Skill-Package | Impertio-Studio | "결정론적" 스킬 24개(WebGL·WebGPU·R3F) | threejs-impl-r3f 170 · 28★ · 7/08 | 유통 없음 |
| webgpu-claude-skill | dgreenheck | WebGPU + TSL | 1,270★ · 4/10 | 단일 주제 |
| awesome-gamedev-agent-skills | gamedev-skills | 게임 엔진 77개 중 three.js 3개(gltf·조명·씬) | 7.7~7.8K/행 · 6,935★ · 10/28 | 게임 중심 |
| **MengTo/Skills** (191개) | MengTo/Skills | 이펙트 하나 = 스킬 하나: `webgl-landing-steering` 1.8K, `webgl-3d-object` 1.8K, `atmosphere-background` 1.6K, `background-grid-webgl`, `globe-particles`, `webgl-laser`, `vantajs`, `threejs` 2.2K, `shaders-cursor-ripples` 1.5K | 레포 232.4K(191행 평균 1.2K) · 7,264★ · 11/05 | "3D 히어로·배경"에 가장 가깝다. 하지만 행마다 1.6~1.8K로 상한이 낮다. 브랜드 토큰·대비 측정·대체 경로는 확인 못 함 `[미검증]` |
| hyperframes `three` | heygen-com/hyperframes | 영상 렌더 파이프라인 안의 three.js 장면 | 69.3K(묶음 설치) · 79,613★ | 웹 히어로가 아니라 영상용 |
| taste-skill 2.5 내부 기능 (CHANGELOG 2.5.0, 11/05) | Leonxlnx/taste-skill | `effects.mjs`(셰이더 바탕), `moments.mjs`, `assets/scenes/`(2.1.0부터 스크롤 장면 엔진), **`assets/objects/` WebGL 오브젝트 프린트**. 2.5.0에서 **`assets/objects/product-render`** 추가: 사진이 없는 물리 제품을 부품 JSON 명세로 "실제 스튜디오 재질"에 렌더하고(예: 자전거, 책상 조명, 로봇 팔), `make-posters.mjs`가 명세를 정지 컷으로 만들어 기본으로 보여 준다. 실시간 회전은 페이지가 요청할 때만 켠다. tech·gaming·software에만, WebGL 컨텍스트 4개 상한, 폰·모션 줄이기 정적 상태. `consistency.mjs`가 4폭에서 셰이더 실패 대체·WCAG 대비까지 검사 | (taste 행에 포함) · 110,714★ | **"3D 배경"과 "정지 컷 포스터 + 실시간 3D"는 이미 1위 taste 스킬의 기능이다.** 남은 빈칸: 업종 스위치로만 켜고 브랜드 토큰 근거가 없다. 제품이 아닌 추상·공간 장면(브랜드 무드)이 없다. 한국어 헤드라인 처리 없음(코드 검색 0) |
| (데모·레포) casa-ocaso / procedural-alpine-lake | Leonxlnx | "황금시간 절벽 거실"을 three.js WebGPU로 실시간 재현 / 코드로 렌더한 60초 고산 호수 필름 | 31★ / 65★ | 스킬이 아니라 데모. **오너가 원하는 "Blender풍을 three.js로" 그대로다.** 수요 신호로 본다 |
| three-gpu-pathtracer | gkjohnson | three.js 위의 경로 추적 렌더러 | 2,024★ · 11/06 | 스킬 아님. 브라우저 안에서 "Cycles 같은 정지 컷"을 만들 후보 `[적합성 미검증]` |
| **mcp-for-blender** (구 blender-mcp) | ahujasid/mcp-for-blender | 커뮤니티 MCP. v2.0.0, PyPI 이름 `mcp-for-blender`로 변경. 명령 한 줄 설치기가 Claude Desktop·Claude Code·Codex·Cursor·VS Code·OpenCode 등을 찾아 등록하고 애드온까지 켠다. "Not affiliated with the official Blender Foundation" 명시. 후원자에 rauchg | **33,417★**(생성 후 55★/일) · PyPI `blender-mcp` 지난달 539,997 · 11/04 | 임의 Python 실행(샌드박스 없음). 로컬 Blender 필요. 결과물이 웹 히어로로 이어지는 경로(포스터·루프 영상·glTF 내보내기)를 스킬이 정해 주지 않는다 |
| **Blender Lab 공식 MCP** | projects.blender.org/lab/blender_mcp | Blender Python API 자연어 인터페이스. 예시는 씬 성능 분석, 이름 정리, 머티리얼 관계 질의, 지오메트리 노드 주석 | Blender **5.1 이상**, 애드온 v1.0.3, `.mcpb` 번들 | 페이지에 Anthropic·Claude 언급이 없다. "LLM 생성 코드를 가드 없이 실행", VM 권장. 공식 예시 중 일부는 미검증이라고 스스로 밝힘 |
| Anthropic Blender 커넥터 | "Claude for Creative Work"(2026-04-28) | 크리에이티브 커넥터 9종 중 하나. Anthropic이 Blender 개발 기금 기업 후원자로 합류 | — | 우리 4/27 조사(`research/blender-claude-code/00-overview.md`)가 다뤘다. 이후 변화는 위 두 MCP 쪽에 있다 |
| cc-blender-skill (30행) | RobLe3/cc-blender-skill | Blender 5.x를 "시니어 3D 아티스트처럼": modeling·materials·lighting·rendering·export·text-to-blender·reference-look-calibration·mascot-logo-reconstruction 등 | 레포 38.6K, 최다 2.9K · 144★ · 10/12 | Blender MCP 위의 작업 지식. 웹 결과물·브랜드 근거 없음 |
| blender-mcp 스킬 | vladmdgolam/agent-skills | MCP 사용 안내 | 2.5K · 9★ | 얇다 |
| blender-motion-state-inspection | affaan-m/ECC | 대형 하네스 묶음 중 하나 | 7.8K(묶음) · 297,911★ | 묶음 설치 수치 |
| text-to-cad | earthtojake/text-to-cad | 물리 제품 CAD 설계 | 15.2K · 25,626★ | 인접 분야(제조) |
| EpicGames Unreal 플러그인 | EpicGames/unreal-engine-skills-for-claude-code-plugin | Unreal Engine 스킬(공식) | 1,904★ | 게임 엔진. MengTo "다음 단계"(64K) |

### 4-2. 이 지형에서 읽히는 것

1. **수요와 공급이 어긋난다.**
   - 3D는 X에서 가장 잘 퍼지는 데모 장르다(262K·305K·90K). 하지만 3D 스킬 설치는 24시간 보드 600위 안에 없다.
   - 설치를 끄는 것은 API 레퍼런스 팩 하나(cloudai-x 190K)뿐이다.
   - 해석: 모델(Opus 5.5)이 three.js를 이미 잘 쓴다. 사람들이 스킬로 사는 것은 "API를 아는 것"이 아니라 **연출과 검증**이다. 그 자리를 채운 스킬은 아직 없다.
2. **"3D 배경"을 범주로 처음 차지한 것은 taste 2.5다(11/05).** 정지 컷 포스터와 실시간 3D를 함께 쓰는 패턴, 셰이더 실패 대체, 대비 검사까지 갖췄다. 비어 있는 것은 셋이다. 브랜드 토큰에서 재질·조명을 끌어오는 경로, 제품이 아닌 장면(공간·추상 브랜드 무드), 3D 위 한국어 헤드라인이다.
3. **Blender는 세 갈래로 갈라졌다.**
   - Anthropic 커넥터: 데스크톱.
   - Blender Lab 공식 MCP: 5.1 이상.
   - 커뮤니티 mcp-for-blender: 가장 쉬운 설치, 사실상 표준.
   - 셋 다 "Blender를 조작"하는 데서 끝난다. **웹에 무엇을 내보낼지**(포스터, 루프 영상, 압축 glTF)는 아무도 정하지 않는다.
   - 로컬 Blender가 필요하므로 스킬보다는 **채널**(omd-setup이 감지·기록하고 omd-media가 쓰는 렌더 수단)에 가깝다.
4. **우리 쪽 자산과 부채**
   - 자산: `omd-shader-hero`에 3D 히어로가 그대로 물려받을 수 있는 틀이 있다. DESIGN.md 토큰, 포스터가 첫 페인트, no-WebGL·모션 줄이기·모바일 네 경로 실제 GPU 촬영, 헤드라인 대비 측정이다.
   - 부채: `omd-asset-curator`가 아직 없는 3D 서브에이전트로 라우팅한다고 적혀 있다(`.claude/agents/omd-asset-curator.md` 3행). 5/26 1.5.0 릴리스 노트에 `omd-3d-blender` 삭제 사유는 없다.

---

## 5. 권고 (3개)

### R1. #104는 스킬 하나로: `omd-3d-hero`(가칭) — DESIGN.md → three.js "렌더 룩" 히어로. Blender는 스킬이 아니라 채널로

- **무엇을**
  - `omd-shader-hero`의 형제를 만든다.
  - 입력: DESIGN.md의 색·표면·깊이 토큰과 브리프 한 줄.
  - 출력: 조명이 있는 3D 장면 하나. WebGL2가 기본이고 WebGPU는 선택이다.
  - "Blender로 렌더한 듯한" 마감: 부드러운 그림자, AO, 톤 매핑, 얕은 피사계 심도, 그레인.
  - 같은 장면의 **정지 컷을 포스터로** 쓴다. 첫 페인트, no-WebGL, 모션 줄이기, 폰에서 이 컷이 나온다. 정지 컷은 브라우저 경로 추적(three-gpu-pathtracer, 미검증)으로 굽거나, 사용자가 Blender 채널을 가지고 있으면 mcp-for-blender로 렌더한다.
  - 헤드라인(한글 포함)은 shader-hero의 knockout 방식으로 최악 프레임 대비를 잰다.
  - 함께 고칠 것: `omd-asset-curator`의 3D 라우팅을 이 스킬과 omd-media 채널로 바꾼다.
- **하지 말 것**
  - three.js API 레퍼런스 팩(13개 쪼개기). cloudai-x가 r186 기준으로 190K를 쥐고 있고, threejs.org가 llms.txt를 직접 낸다.
  - Blender 전용 스킬. 로컬 설치·임의 코드 실행 부담이 크고, MCP 셋이 이미 조작층을 덮는다.
- **왜 지금**
  - 3D는 X에서 가장 잘 퍼지는 데모 장르다(위 2-4). Anthropic 자신이 Opus 5.5를 3D로 홍보한다.
  - 연출·검증 스킬은 공백이다(4-2 ①).
  - taste 2.5(CHANGELOG 2.5.0, 11/05)가 제품 렌더(부품 명세 → 스튜디오 재질 → 정지 컷 포스터 + 선택적 실시간 회전)를 막 넣었다. 그러니 "three.js로 Blender풍"만으로는 차별이 안 된다. 우리가 갈 자리는 셋이다. **DESIGN.md 토큰에서 재질·조명을 끌어오는 것**, **제품이 아닌 공간·추상 장면**(오너가 말한 "배경"), **3D 위 한국어 헤드라인과 그 대비 측정**이다. 설계 문서는 taste의 `make-posters.mjs` 흐름을 먼저 읽고 겹치지 않게 범위를 정하기를 권한다.
- **기대치**
  - 3D 스킬의 설치 상한은 낮다. MengTo 3D 이펙트가 행마다 1.6~1.8K다.
  - 그러니 이 스킬은 **설치 엔진이 아니라 쇼케이스·Threads 소재**로 잡는다. 설계 문서에서 성공 기준을 "설치"가 아니라 "게시물 1편 + 레퍼런스 3곳 데모"로 두기를 권한다.
- **근거**: §4-1 cloudai-x·MengTo·taste 2.5·mcp-for-blender·Blender Lab 행, §2-4 @claudeai·LexnLin·MengTo·Nutlope 게시물.

### R2. `hangul`에 "깨뜨리기(break)" 모드: 한국어 최악 데이터 스트레스 페이지

- **무엇을**
  - 컴포넌트에 한국어 최악 데이터를 넣고 "예시 데이터 / 최악" 토글이 달린 버릴 페이지에 렌더한다. 그다음 기존 `render-check.mjs`(360·390·1440)로 어절이 갈렸는지 잰다. HG-9·10·14 위반도 함께 보고한다.
  - 최악 데이터 예: 붙여 쓴 긴 이름("주식회사가나다라마바사"), 조사가 붙은 긴 토큰, `1,234,567원`, 영문이 섞인 긴 합성어, URL·이메일, 0건·1건·999+, 해요체와 합니다체가 섞인 문장.
  - 새 스킬로 낼지 `hangul`의 동사로 둘지는 오너 판단이다.
- **왜 지금**
  - 이 하위 장르는 5주 사이에 서로 다른 세 곳에서 나왔다. Emil break-ui(10/02, 출시 글 173K 조회·북마크 5.1K), Jakub `/break`와 `/state-machine`(77K), shadcn `state-matrix.tsx`(10/09)다.
  - 이들의 다국어 처리는 Emil 설명의 "non-Latin text" 한 줄이 전부다.
  - 우리는 규칙(HG-9·10·14)과 렌더 검사기를 이미 가지고 있다. 새로 만들 것은 데이터 픽스처와 토글 페이지뿐이라 가장 싸다.
  - 출시 문구는 W3 `/apple-ko`에서 계획한 상호성을 그대로 쓴다: "Emil `/break-ui` 다음에 `/hangul break`". 연쇄 실행 게시물이 단일 출시만큼 퍼진다는 것(2-4)도 이 형식을 받쳐 준다.
- **주의**
  - break-ui의 91.4K 설치는 묶음 설치라 수요 근거가 아니다(2-3 ①).
  - 근거는 진입자 수와 X 반응이다.

### R3. W2 `/brand-look`을 승자의 모양으로 다시 짠다: "실측 레퍼런스로 뽑기 + 4폭 브라우저 검사 + 전후"

- **무엇을**
  - 이미 계획된 W2(`docs/GROWTH_PLAN_2026-09-29.md` 315행)의 내용을 바꾼다.
  - taste 2.5·hallmark v2의 꼴을 따른다. 명령 하나로 **검증된 레퍼런스에서 테마를 뽑고**(지어낸 테마 50개가 아니라 실제 회사 576곳, 검증분만), 실제 브라우저로 1440·1024·768·390을 렌더해 규칙별 PASS/FAIL을 낸다.
  - 검사기는 흩어진 것을 묶는다: restraint AUDIT, hangul render-check, slop-audit 규칙, shader-hero 대비 측정.
  - 결과는 같은 화면 × 브랜드 5개 그리드로 낸다.
  - 곁가지로, `omd-taste`라는 이름이 "taste" 범주(738K)와 부딪힌다. 이름을 바꾸면 새 행이 낮은 값에서 시작하지만(기준선 §3) 현재 14회라 잃을 것이 없다. 개명은 오너 판단이다.
- **왜 지금**
  - 38일 속도표(2-1)가 보여 주는 것은 두 가지다. v2를 다시 지은 동사·검사기 스킬은 가속했고(가장 깨끗한 사례는 hallmark다. v2 전 23일 약 32★/일 → v2 뒤 15일 약 1,255★/일. taste 410 → 519, impeccable 228 → 837), 카탈로그만 있는 레포는 꺾였다(awesome-design-md 652 → 188, design.md 164 → 16).
  - OmD도 카탈로그가 앞에 있고 1.2★/일이다.
  - 경쟁자들이 수렴한 곳에서 비어 있는 단 하나가 **"뽑기의 원천이 실제 회사"**라는 점이다. 이 자리로 들어오는 상용 서비스(uizze, "real app references")가 이미 보인다.
- **근거**: §2-1 속도표, §2-2 taste 2.5·hallmark v2·uizze 행, §3 첫 두 줄.

> 권고하지 않은 것(관찰만): 해설 일러스트(anatomy, teardown)는 가장 빠르게 오르지만 레인 밖이다. HTML → 영상(hyperframes)은 HeyGen이 1.6천만 설치로 쥐고 있다. 사운드(earshot)도 레인 밖이다. 셋 다 다음 조사 때 속도만 다시 잰다.

---

## 6. 출처

**기준선(레포 내부)**
- `docs/research/2026-09-29-growth/design-skills-landscape.md`, `emil-skills-virality.md`, `skills-sh-indexing.md`
- `docs/research/2026-10-13-trends/TRENDS.md` (셰이더·shadcn·ui-skills)
- `research/blender-claude-code/00-overview.md` (2026-04-27), `git show 03072b97:agents/omd-3d-blender.md`, 1.5.0 릴리스 커밋 `aa0e90b6`(삭제), `CHANGELOG.md` 1.0.0 항목
- `docs/GROWTH_PLAN_2026-09-29.md` (W1~W6), `docs/GROWTH_DECISIONS_2026-09-29.md` (D2·D3)
- `skills/hangul/SKILL.md` (HG-9·10·14), `skills/hangul/scripts/render-check.mjs`, `skills/omd-shader-hero/SKILL.md`, `.claude/agents/omd-asset-curator.md`

**GitHub (gh api, 2026-11-06 02:38~02:50 UTC)**
- https://github.com/Leonxlnx/taste-skill · /releases · https://github.com/Leonxlnx/tastecode · https://github.com/Leonxlnx/taste-skill-classics · https://github.com/Leonxlnx/imagegen-skills · https://github.com/Leonxlnx/cinetic · https://github.com/Leonxlnx/earshot · https://github.com/Leonxlnx/casa-ocaso · https://github.com/Leonxlnx/procedural-alpine-lake
- https://github.com/emilkowalski/skills (커밋 10/02·10/11·10/28·11/04)
- https://github.com/pbakaus/impeccable (릴리스 skill-v4.7.0 10/19, v4.8.0 10/26)
- https://github.com/Nutlope/hallmark · https://github.com/Nutlope/bygga
- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill · https://github.com/anthropics/skills (frontend-design 커밋 이력) · https://github.com/vercel-labs/agent-skills · https://github.com/jakubkrehel/make-interfaces-feel-better · https://github.com/jakubkrehel/skills
- https://github.com/VoltAgent/awesome-design-md · https://github.com/nexu-io/open-design · https://github.com/google-labs-code/design.md · https://github.com/alchaincyf/huashu-design · https://github.com/ibelick/ui-skills · https://github.com/kwakseongjae/oh-my-design
- https://github.com/uizze/uizze · https://github.com/designed-by-ai/skills · https://github.com/wheresryan22/anatomy · https://github.com/heygen-com/hyperframes · https://github.com/superdesigndev/treg
- 3D: https://github.com/CloudAI-X/threejs-skills · https://github.com/freshtechbro/claudedesignskills · https://github.com/EnzeD/r3f-skills · https://github.com/emalorenzo/three-agent-skills · https://github.com/Impertio-Studio/Three.js-Claude-Skill-Package · https://github.com/dgreenheck/webgpu-claude-skill · https://github.com/gamedev-skills/awesome-gamedev-agent-skills · https://github.com/MengTo/Skills · https://github.com/gkjohnson/three-gpu-pathtracer · https://github.com/ahujasid/mcp-for-blender · https://github.com/RobLe3/cc-blender-skill · https://github.com/vladmdgolam/agent-skills · https://github.com/affaan-m/ECC · https://github.com/earthtojake/text-to-cad · https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin · https://github.com/shader-effects-inc/shaders · https://github.com/paper-design/shaders · https://github.com/vercel-labs/json-render

**skills.sh (2026-11-06 02:40~02:55 UTC)**
- 보드: https://skills.sh/ (전체) · https://skills.sh/trending ("Trending (24h)") · https://skills.sh/hot
- 레포 페이지: https://skills.sh/Leonxlnx/taste-skill · https://skills.sh/emilkowalski/skills · https://skills.sh/pbakaus/impeccable · https://skills.sh/Nutlope/hallmark · https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill · https://skills.sh/jakubkrehel/make-interfaces-feel-better · https://skills.sh/jakubkrehel/skills · https://skills.sh/kwakseongjae/oh-my-design · https://skills.sh/anthropics/skills/frontend-design · https://skills.sh/vercel-labs/agent-skills/web-design-guidelines · https://skills.sh/google-labs-code/stitch-skills · https://skills.sh/ibelick/ui-skills · https://skills.sh/alchaincyf/huashu-design · https://skills.sh/wheresryan22/anatomy · https://skills.sh/heygen-com/hyperframes · https://skills.sh/Leonxlnx/cinetic · https://skills.sh/MengTo/Skills · https://skills.sh/cloudai-x/threejs-skills · https://skills.sh/RobLe3/cc-blender-skill · https://skills.sh/freshtechbro/claudedesignskills · https://skills.sh/AThevon/genjutsu · https://skills.sh/site/uizze.sh/ui-taste · https://skills.sh/designed-by-ai/skills/design-mobile-apps · https://skills.sh/uizze/uizze/uizze-ui
- 검색 API: `https://skills.sh/api/search?q=` threejs, three.js, blender, react-three-fiber, r3f, webgl, shader, 3d, spline

**X (api.fxtwitter.com 미러, 2026-11-06 읽음, 조회수는 그 시점 누적)**
- Emil: https://x.com/emilkowalski/status/2117996960028450836 · https://x.com/emilkowalski/status/2116583281332503038 · https://x.com/emilkowalski/status/2115425807388619022 · https://x.com/emilkowalski/status/2115072947576812013 · https://x.com/emilkowalski/status/2114808624052621391 · https://x.com/emilkowalski/status/2111450789566943247 · https://x.com/emilkowalski/status/2109277388437868623 · https://x.com/emilkowalski/status/2106752670405099523
- LexnLin(taste-skill): https://x.com/LexnLin/status/2112674349132194185 · https://x.com/LexnLin/status/2112985091714765288 · https://x.com/LexnLin/status/2118056518096466150 · https://x.com/LexnLin/status/2117230395406364857 · https://x.com/LexnLin/status/2117760174719107553 · https://x.com/LexnLin/status/2111927727318245426 · https://x.com/LexnLin/status/2113694592142897158 (Perplexity Computer 탑재 `[미검증]`)
- Nutlope: https://x.com/nutlope/status/2113316017510191578 · https://x.com/nutlope/status/2115159545307619695
- pbakaus: https://x.com/pbakaus/status/2113065895069368804
- Jakub: https://x.com/jakubkrehel/status/2114379959263502712 · https://x.com/jakubkrehel/status/2108217939556233615
- MengTo: https://x.com/MengTo/status/2117446870033445104 · https://x.com/MengTo/status/2116404959277433240 · https://x.com/MengTo/status/2108924473265275003 · https://x.com/MengTo/status/2109182449179836579 · https://x.com/MengTo/status/2116694299043840075
- 1차 계정: https://x.com/claudeai/status/2106125478956507480 · https://x.com/claudeai/status/2106125470786105375 · https://x.com/shadcn/status/2117856245101019250 (`@vercel`·`@rauchg`·`@AnthropicAI`는 9/29 이후 디자인 스킬 관련 게시물 없음)

**웹**
- Blender Lab 공식 MCP: https://www.blender.org/lab/mcp-server/
- mcp-for-blender PyPI 통계: https://pypistats.org/api/packages/blender-mcp/recent
- Anthropic 크리에이티브 커넥터(2026-04-28) 보도: https://digitalproduction.com/2026/04/30/anthropic-funds-blender-ships-claude-connector/ · 원문 https://www.anthropic.com/news/claude-for-creative-work (4/27 조사에서 인용, 이번에 재열람 안 함)
- three.js LLM 문서: https://threejs.org/llms.txt · https://threejs.org/docs/llms-full.txt
- Emil 스킬 제3자 정리(2차): https://notes.nicolasdeville.com/github/emil-skills/
- uizze 2차 소개: https://hunted.space/product/uizze
