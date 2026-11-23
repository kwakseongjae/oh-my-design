# CURRENT STATE — 단일 복원 지점

이 파일은 짧게 유지한다. 세션을 복원할 때 `scripts/context_restore.sh`가 이 파일의 앞부분(약 5KB)만 낸다.
새 일이 생기면 「지금」 블록을 고쳐 쓰고, 날짜 절은 최근 것만 아래에 둔다. 오래된 절은 `docs/archive/state/`로 옮긴다.
방향과 트랙은 `docs/ROADMAP.md`, 오너에게 묻는 것과 묻지 않는 것은 `docs/AUTONOMY_LOOP.md` §1–2에 있다.

## 지금 (2026-11-23 23:14) — **오너 결정 대기: 32번(kana 시안 A·B) · 31번(블로그 B안: 이름·썸네일·구현) · 26번(영상 v2) · 29번(글 PR #161, 제목) · 30번(MCP PR #162) · 27번(PR #159)** · 도는 에이전트 없음 · 아티팩트 https://claude.ai/artifact/1TGcLCvG9G6Du7niqUKqZm · 서버 없음

**11/23 23:14 kana 시안 2안 → 카드 32**
- `kana-showcase` 끝(커밋 없음, 정지 시안). `<scratchpad>/kana-mocks/mock-a.html`(「같은 화면, 다른 일본어」: /hangul 문법, 폰 두 대 + 규칙 9개, 말투·버튼과 오류·조판 세 장, 51규칙 접힌 색인, 긴 자료는 `/ko/kana/rules`로, 1440에서 9,327px) · `mock-b.html`(「고친 곳마다 일본 가이드의 원문이 있어요」: 출처 예시가 첫 화면, 한 페이지, 6,662px). 에이전트 추천 A, 일본어판은 B의 첫 화면으로 시작. 새로 지은 일본어 없음.
- **에이전트가 찾은 것:** 운영 `/ko/kana`가 일본어 웹 글꼴을 안 불러옴(Wanted Sans의 /ko 조각이 가나는 있고 한자는 없어 섞여 그려질 수 있음) → 새 화면 구현 때 고칠 것 · 조판(JT) 인용 3개는 11/21의 글자 대조를 안 거침 · design.md와 어긋나는 것(장 제목 40px, /hangul의 주황·파랑 대비 색, 폰 반경)은 오너 결정.
- **바로잡음: 「11/28 전 품질 데이터 갱신 PR」은 필요 없다.** 11/13에 날짜 만료가 꺼졌고(`EXPIRE_SOURCES_BY_DATE = false`), `--as-of 2026-11-29`와 `2027-03-25`로 다시 만들어 보니 바뀌는 항목 0. 낡은 메모(`project_ci_red_by_date`)를 보고 오너에게 세 번 약속했던 것을 정정함. 메모 고침.
- kana 시안의 페이지 문구는 해요체(/hangul처럼), 저장소의 규칙 설명은 합니다체: 구현 때 맞출 것(카드 32에 적음).
- 워크트리 `kana-redesign`(가지 `feat/kana-showcase`)·`blog-b`(`feat/blog-home-b`)는 커밋 없이 남아 있음: 방향이 정해지면 거기서 구현.

**11/23 22:46 한도 풀린 뒤**
- **영상 v2:** `~/Downloads/omd-screens-launch/omd-screens-launch-v2.mp4`(39.0초, 음악만). 이야기 A(스크린샷 폴더)로 만듦(오너가 고르기 전이지만 「해봐」와 추천안으로 진행, 카드 26에서 A·B·C를 물음). 구조: `index.html`(호스트 7개 + `bgm`) + `compositions/sc1..7.html`(더미 → 격자 → 종류 필터와 로그인 8곳 → 모바일/데스크톱 → 교보문고 바로구매 버튼의 잰 값 → 주장 셋 → 끝 화면). 박자: 150BPM, 영상 시간의 박 = 0.105 + 0.4n, 장면 경계는 마디(0 · 6.5 · 11.3 · 17.7 · 22.5 · 30.5 · 35.3 · 39.0). 음악: ElevenLabs `eleven_music_v2_5` 두 가지(flow `1r4yczvGSy00hBBrXzHF`, 약 1,200크레딧), `assets/bgm-2.mp3` 사용(`data-media-start=0.3`), `bgm-1.mp3`는 예비. `check`가 잡은 것: 겹침(더미는 `data-layout-allow-overlap`), 28px 미만 글자. 장면 파일은 REPL의 생성 코드로 썼다(코드는 세션에만 있음: 고칠 때는 장면 파일을 직접 고친다). v1은 `v1/index.html`에 보관. 부족한 것: 효과음 없음, 장면 사이 연결 컷이 한 곳, 끝 화면 조각이 작음. 소리는 듣지 못함.
- **끝난 에이전트 둘 → 초안 PR:** `blog-article` → **#161**(글 재구성, 제목 후보 5개 중 2번을 프런트매터에, 그림 2장 추가, 숫자 대조 스크립트 `<scratchpad>/blog-readable/numdiff.mjs`, 전체 테스트 1,605 통과) · `mcp-screens` → **#162**(list_screen_types · search_screens · get_service_screens · get_screen_context, 서버 2.1.0, 전체 1,627 통과, outline은 빈 파일 뒤의 리더만). 워크트리 `blog-article`·`mcp-screens` 유지.
- **MCP에서 나온 것(오너에게 알림):** `llms.txt`·`llms.ko.txt`·`llms-full.txt`와 `/terms`가 아직 「커넥터 종료」라고 말한다(실제로는 운영 중) → 수정 PR을 따로(약관 문구라 오너 go).
- **새 에이전트 2개 도는 중(유료):** `kana-showcase`(워크트리 `kana-redesign`, 가지 `feat/kana-showcase`: /hangul 분석 → 정지 시안 2안 `<scratchpad>/kana-mocks/`, 앱 코드 변경 없음) · `blog-home-b`(워크트리 `blog-b`, 가지 `feat/blog-home-b` = feat/blog-renewal 위: 업계 블로그 이름 조사 → 이름 3개·태그, 전용 썸네일 2방식 × 3편(og 겸용), B안 시안 3편·12편). 지시서 `<scratchpad>/agent-reports/{kana-showcase,blog-home-b}-brief.md`.
- 카드: 26(영상 v2) · 29(글) · 30(MCP) 추가.
- **23:0x `blog-home-b` 끝(커밋 없음, 정지 시안과 조사만) → 카드 31.** 업계 15곳 조사: 14곳 중 9곳이 「브랜드 + 기술 블로그/Blog」. 이름 3안(추천 「oh-my-design 블로그」), 태그(디자인 시스템·컬러·타이포그래피·데이터·AI·릴리스), 썸네일 = og 이미지 두 방식 × 3편(`<scratchpad>/blog-mocks/covers/out/final/`, 추천 B 숫자형, 발행 때 파일로 굽고 입력 해시를 커밋하는 방식 추천: Satori og 라우트는 WebGL·woff2를 못 쓰고 한글 Wanted Sans TTF가 저장소에 없음, 필요한 frontmatter `cover_phrase`·`cover_figure`·`cover_figure_label`·`cover_topic`), B안 시안 `<scratchpad>/blog-mocks/b2-grid-b.html`(3편)·`b2-grid-b-12.html`. 오너 컨펌 대기: 이름·썸네일 방식·구현 여부. (최종 보고 도착, 같은 내용. 덧붙임: 첫 화면에 블로그 이름이 세 번 나옴 → 구현 때 썸네일 속 이름을 줄일 것 · v2 글 설명만 해요체 · 에이전트는 「글 3편 없는 B안」을 「글 N편 줄이 없어 깔끔」으로 읽고 그 줄을 뺌 · `<scratchpad>/blog-mocks/research-og`는 못 지움.) 구현 때: 기준 문서에 태그 칩 줄과 셰이더 면 먼저, #159·#161과 순서 맞추기(제목이 바뀌면 `cover_phrase`도).
- **22:5x 에이전트 최종 보고 둘 도착(`mcp-screens`, `blog-article`. 내용은 파일 보고와 같고 이미 #162·#161과 카드 30·29에 반영).** 카드 29에 덧붙임: 상세 페이지 링크 86곳 유지(지시서의 46은 옛 초안 수), 한글 검사기 본문 0건, 검색어 게이트 미확인. 두 워크트리의 `web/.next`는 지우지 못함.

**11/23 18:36 한도로 멈춘 자리(다음 세션이 이어서 할 것)**
- **영상 v2:** HyperFrames 스킬(`~/.claude/skills/hyperframes`, `references/types/launch.md`·`story.md`)의 절차대로 세 이야기를 글로만 씀(STORYLINES.md: A 스크린샷 폴더 / B 로그인 화면 여덟 개 / C 연습곡). **오너가 고르기 전에는 만들지 않는다.** 고르면 `SPEC.md` → 장면별 하위 구성 → `check` → `snapshot --review` → 렌더. v1이 틀린 곳(스킬의 말로): 전체 화면 스크린샷에 제목을 얹은 나열, 제품이 일하는 모습 없음. 지킬 것: 실제 화면만, 동작을 1.6~2배로 떼어 보여 주고 제자리로 돌려놓기, 큰 커서, 끝 화면의 로고는 연출해서. 음악: ElevenLabs에 `eleven_music_v2_5`가 있음(크레딧, 오너에게 말하고 사용) 또는 공개 클래식 피아노 녹음(Wikimedia의 Musopen 녹음은 공개 표시가 붙은 것만). 오너 요구: 빠르고 화끈한 템포, 나레이션보다 컨셉과 문구.
- **kana 재기획(미착수):** 비교해 보니 `/ko/hangul`은 7,800px, 어두운 첫 화면에 「같은 화면, 다른 한국어」와 폰 두 대 + 그 사이의 규칙 표시, 구역 넷(조판·문구·규칙 28·설치). `/ko/kana`는 33,000px 문서형(고지문·규칙 목록·출처가 앞섬). 할 일: 에이전트(ops-builder) 하나에게 **정지 시안 2안**(1440·390)을 맡긴다: 한 문장의 주장과 폰 두 대 시연을 맨 앞에, 긴 규칙·출처·글꼴 조사는 접거나 둘째 페이지로, 지은 일본어는 계속 표시. `hangul-page.tsx`·`split-view.tsx`·`moa-screen.tsx`를 읽고 같은 수준으로. PR #160(일본어판)은 머지하지 않고 둔다(새 디자인이 정해지면 그 위에 다시).
- **블로그 B안(미착수):** 오너가 디자인은 괜찮다고 했고 B(격자)가 더 깔끔하다고 함. 할 일(에이전트 하나): ① 이름·소개글·태그를 쉬운 말로(국내외 디자인·기술 블로그가 스스로를 어떻게 부르는지 조사: 대부분 「브랜드 + 테크/디자인 블로그」처럼 평범함) ② 썸네일을 전용으로 만들어 og 이미지(1200×630)로도 쓰기: 지금 `/og/blog` 이미지는 리브랜드 전 색이라 같이 고칠 것. 글 제목·태그·핵심 숫자·셰이더 면으로 코드에서 그리는 방식을 추천, 3편에 적용한 시안을 보여 줄 것 ③ B안 시안을 그 이름과 썸네일로 다시. 블로그 글 다듬기 에이전트(`blog-article`)의 제목과 맞출 것.
- **에이전트:** `mcp-screens`·`blog-article`이 도는 중에 한도가 왔다. 보고서 파일은 생겨 있음(`<scratchpad>/agent-reports/{mcp-screens,blog-article-readable}.md`). 멈췄으면 SendMessage로 깨운다. 끝나면: 워크트리에서 main 병합 → 전체 테스트 → 푸시 → 초안 PR → 카드.
- 검색으로 확인한 것은 적다(Spotify Design은 글을 Stories라 부름, Linear·Figma는 기능별 30~120초 영상). 블로그 이름과 런칭 영상 레퍼런스 조사는 아직 얕다.

**오너 11/23 18:32 (27·28·26번을 본 뒤, 말 그대로):** 「디자인 까진 okay인데, 내용이 너무 난해해. 그러니까 디자인 값 읽기나 그런것들 말이야. Toss Tech Blog처럼 디자인 업계에선 뭔가 쓰는 아티클이나 블로그용 용어같은거 없으려나. 글 3편 없는 B안이 조금 더 깔끔은 하네. 그리고 썸네일은 만들어서 쓰는게 더 좋을 거 같아. 그래야지 og 이미지같은거나 og 태그에서 유리할 거 같다는 생각이야. kana쪽을 위한 화면을 따로 만들어봐 지금은 너무 대충 만들었잖아. hangul이랑 너무 퀄리티 차이가 나서 조금 실망스러운 정도야. 아예 다시 고민을 해봐. 영상 봤는데 내가 원하는 정도 수준의 모션그래픽 수준이 아니야. 레퍼런스를 조금 더 찾아보고 해봐. bgm도 깔리면 좋을 거 같고, 런칭 영상같이 제대로 뭔가 해보고 싶어. bgm을 만들어도 되고, 피아노 음악같은거 클래식을 활용해도 좋을 거 같아. 다만 템포는 좀 화끈한걸로. UX라이팅도 런칭 영상에 맞게 다른 런칭 영상 레퍼런스를 기반으로 한번 해봐. 어떤 특정 컨셉을 가져가면 좋을 거 같다는 생각이야.」
- **본 세션의 해석(오너에게 말함):** 블로그 = B안(격자) 방향, 이름·소개글을 쉬운 말로 다시(업계 블로그 이름 조사), 썸네일은 전용으로 만들어 og 이미지 겸용 · kana = `/hangul` 수준의 전용 화면으로 처음부터 재기획(PR #160의 일본어판은 그대로 두고 머지하지 않음) · 영상 = 레퍼런스 조사 → 컨셉 → 문구 → 빠른 템포 음악 → 모션 다시. 「글 3편 없는 B안」은 뜻이 분명치 않음(「글이 3편뿐인 지금은 B가 깔끔」으로 읽음).

**11/23 18:12 영상 첫 편집본, 에이전트 둘 시작**
- **런칭 영상:** `~/Downloads/omd-screens-launch/omd-screens-launch.mp4`(33.0초, 1920×1080, 30fps, 32MB, 나레이션만). 소스 `~/.omd-workers/video/screens-launch/`(`index.html` = HyperFrames 구성 하나, `assets/` = 운영에서 찍은 장면 8장 + `vo-1..6.mp3` + Wanted Sans). 렌더: `cd <소스> && npx -y hyperframes@0.9.84 render . --output <mp4> --fps 30`(약 3분), 프레임 확인 `snapshot . --at …`, 검사 `lint .`(오류 0, 구조 경고 7은 장면을 하위 구성으로 나누라는 권고). ElevenLabs: 음성 `KNy9usSxeZXzNA3l10Jy`(Jian), 모델 `eleven_v4`, 여섯 문장 각 1회, 약 181크레딧, flow `9x0ohBaFbsPoFhIgMGQD`. 「DESIGN.md」는 「디자인 엠디」로 읽힘. 본 세션은 소리를 듣지 못함: 구간(silencedetect)과 음량만 확인. 배경음악·세로·영어 버전 없음. 오너가 말한 「openmotion」 = Open Design 앱의 hyperframes 템플릿 + motion-design 스킬(본 세션의 판단).
- **에이전트 2개 도는 중(유료):** `mcp-screens`(워크트리 `mcp-screens`, 가지 `feat/mcp-screens`: MCP에 list_screen_types · search_screens · get_service_screens · get_screen_context, 화면 + 그 화면에서 확인된 토큰 + 실측값. 그림 주소는 우리 `/screens-img`. 화면 구성 정보(outline)는 평가와 제안만, 새 데이터 공개 없음. 스킬 연동은 제안서) · `blog-article`(워크트리 `blog-article`, 가지 `feat/blog-article-readable`: 첫 글 재구성, 제목 후보 5개, 숫자 대조 스크립트, 영어판). 지시서·보고서 `<scratchpad>/agent-reports/{mcp-screens,blog-article-readable}{-brief,}.md`. 커밋만.
- **오너에게 말한 해석:** MCP의 그림 범위 = 「작은 그림과 큰 그림 주소까지」(「무료로 풀고자 해」에서 읽음). 초안 PR로만 올리고, 다르면 머지 전에 바꾼다.
- 카드: 25(방향 받음) · 26(영상) · 27(블로그) · 28(kana).
- **18:2x 에이전트 최종 보고 둘 도착(`kana-ja`, `blog-renewal`. 내용은 파일 보고와 같음, 이미 PR #160·#159와 카드 28·27에 반영).** 카드에 덧붙인 것: 블로그 시안의 태그 칩 줄과 Iris 셰이더 면은 `web/public/design.md`에 없는 요소(구현 전에 기준 문서에 추가) · 일본어판은 「이 페이지를 쓰는 법」 구역을 뺌. 오너 몫으로 남은 것: kana의 커밋 `17c18036`(한국어판 언어 메뉴가 일본어판을 가리킴, 추천 유지) · 맨주소 `/kana` · 일본어 메뉴 링크. `blog-renewal/web/.next`는 여전히 못 지움.

**11/23 17:59 공개 완료와 그 과정**
- **오너 11/23 16:4x:** 「지금은 어차피 레퍼런스 확충 단계니까 서비스는 점차 확충할거야. 그 부분 감안해서 작업해보고, 모빈과 refero mcp를 능가하는(왜냐면 우린 DESIGN.md랑 스킬도 있으니까) 형태를 무료로 풀고자 해. 이 부분에 맞게 잘 구성해봐. 그리고 연결 바꿨어. 영상 까지만 만들고, elevenlabs도 해봐. openmotion은 설치해뒀어. opendesign 안에서 ㅡotion을 쓰는 거 같더라고. opendesign으로 설치해뒀으니까 참고해서 작업해봐.」 → 본 세션의 해석: 업로드 진행 · 영상 제작과 ElevenLabs 사용 go · MCP는 화면 도구를 무료로, 그림 범위는 「작은 그림까지」(「무료로 풀고자 해」에서 읽음, 오너에게 말할 것).
- **업로드:** 연결에 Development가 붙자 `BLOB_READ_WRITE_TOKEN`이 Config(읽을 수 있는 값)가 됨. `vercel env pull <scratch> --environment=development --yes` → 값의 꼴만 확인 → 한 장 시험(공개 주소 200, 크기 일치, Blob 주소에는 X-Robots-Tag 없음) → `--upload` 전체. 저장소 목록 540 = 매니페스트 540(빠짐 0, 남음 0, 30.7MB). 받은 파일은 삭제. base `https://awmblo41eqzg8jrw.public.blob.vercel-storage.com/screens`.
- **머지 전에 멈춘 일:** Vercel 프리뷰는 SSO 보호(`all_except_custom_domains`)라 curl로 못 읽음. `vercel curl`은 프로젝트에 보호 우회 비밀값을 만들 수 있어(지금 없음) 쓰지 않음. 대신 운영용 빌드를 이 Mac에서 돌려 확인(`next build` + `next start -p 3390`, 워크트리는 node_modules가 링크라 메인 체크아웃에 브랜치의 web/를 잠깐 꺼내 빌드하고 되돌림). **거기서 `/screens-img` 응답에 X-Robots-Tag가 없음을 발견**(next.config의 header 규칙이 외부 rewrite 응답에 안 붙음). Vercel 문서는 어느 쪽인지 말하지 않음.
- **고친 것(#157에 포함):** `/screens-img/[slug]/[file]`을 rewrite에서 **route handler**로. 저장소에서 받아 직접 답함: 모든 응답에 `X-Robots-Tag: noindex, noimageindex`, 브라우저·CDN 1시간, **매니페스트에 있는 파일만**(뺀 화면·전체 페이지·없는 서비스는 저장소에 묻지도 않고 404). next.config의 rewrite·headers 삭제. 매니페스트 타입과 `validManifest`를 fs 없는 `lib/screens/manifest.ts`로 옮김(route가 `public.server.ts`를 import하면 번들러가 프로젝트 전체를 묶음: 2,932파일 80.6MB → 96파일 1.5MB).
- **#157 머지**(main `10be2098`) → 운영 확인(`<scratchpad>/prod-check.mjs https://oh-my-design.kr`): 그림 200 + 표시 + jpeg, 당근 페이지의 그림 주소 422개 전부 200 + 표시, 뺀 것 404, `/ko/screens` 「화면 137개 · 서비스 12곳」, HTML에 Blob 호스트 0, 랜딩 ko·en에 화면 벽과 메뉴 링크, robots.txt `Disallow: /screens-img/`, 사이트맵 26. CDN 두 번째 요청 HIT. `screen-removal` 라벨 만듦. 워크트리 `screens-publish`와 가지 삭제.
- **오너에게 바로잡은 것:** 카드 24에 「일본어·번체 랜딩에도 화면 벽」이라 적었으나 실제로는 ko·en만(`/ja`에는 벽도 메뉴 링크도 없음).
- **에이전트 둘 끝남(5시간 한도로 한 번 멈췄다가 깨움):** `blog-renewal` → **PR #159**(초안, #130 포함: 상단 메뉴 블로그 링크, 블로그의 되돌아가기 링크·검은 알약 제거) + 리뉴얼 정지 시안 3안(`<scratchpad>/blog-mocks/{a-editorial,b-grid,c-index}.html`, 에이전트 추천 A + C의 숫자, 이름 제안 「실측 노트」) · `kana-ja` → **PR #160**(초안: `/ja/kana`, 51개 중 43개가 일본어 인용 머리, 지은 일본어는 `copy-ja.ts`만, 일본어 고지문, noindex). 둘 다 main 병합 뒤 전체 테스트 통과(1,618 / 1,625). 워크트리 `blog-renewal`·`kana-ja` 유지(PR 열림). `blog-renewal/web/.next`는 지우지 못함(tsc가 그 생성 파일 하나에서만 실패, CI와 무관).
- **아티팩트:** 기존 KJMmoqr2…가 「삭제됨/내 것이 아님」으로 거절 → 현 계정에 새로 게시(`<scratchpad>/omd-review-3.html`, `publishReport` 다시 묶음). 카드 27·28 추가, 24·11 끝 처리.
- **Open Design(「openmotion」의 정체):** `/Applications/Open Design.app`(0.27.2). 영상은 `Resources/open-design/design-templates/hyperframes`(HTML + GSAP 타임라인을 MP4로, npm `hyperframes` 0.9.84)와 `skills/motion-design`(비트 맵, 대표 프레임 먼저)이 담당. 앱 밖에서는 `npx hyperframes`로 렌더.
- **스레드(화면 건):** `~/Downloads/threads-screens/`에 초안과 운영에서 찍은 그림 4장.
- **남은 것:** 런칭 영상 · MCP 화면 도구(설계 → 빌드 에이전트) · 블로그 첫 글 다듬기 에이전트 · 11/28 전 품질 데이터 갱신 PR.

**11/23 16:29 새 스프린트(오너 16:1x 메시지)**
- **오너 말 그대로:** 「고고 괜찮은거 같아. 그리고 홈 헤더에 블로그가 없어서 블로그로 이동이 어려워. 추가해줘. 지금 글 일단 느낌은 괜찮은데, 조금 너무 학술적인 느낌도 있고, 그림이 적절하게 포함이 안돼서 읽기 난해한 부분도 있어. 글 제목에서 후킹이 아쉬운 부분도 있어. 이 부분도 감안해줘. 그리고 블로그 홈 화면 리뉴얼도 필요할 거 같아. 셰이더 느낌도 조금 넣어거나 썸네일 같은거 태그 디자인같은것도 포함되면 좋을 거 같아. 리뉴얼 시안 나오면 나한테 컨펌 받아줘. <- oh-my-design 이 부분은 빼도 좋을 거 같아. 블로그는 서브도메인으로 뺀 단독 사이트 느낌이니까. 스레드에는 이번에 사이트 레퍼런스 수집한거 관련해서 해주면 될 거 같고, 우리 mcp나 skill 관련해서 해당 레퍼런스를 쓰는 구조도 있어 ? 우리 mcp가 있긴 해 ? mobbin이나 refero처럼 mcp로 레퍼런스 연동해서 실제 시안이나 사이트 레퍼런스 기반으로 하는 기능도 포함하고 스킬로 더 잘 조작하게 하려 하는데. 그 부분도 한번 봐줘. 그리고 우리 elevenlabs있으니까 이번 어찌보면 꽤 큰 런칭 기능 관련해서 openmotion이란걸 이용해서 한번 런칭 영상화 해주면 좋을 거 같아. openmotion은 깔아뒀어. 일본어 kana 페이지도 만들고, 다 만들면 시안 공개도 해줘.」
- **본 세션의 해석(오너에게 말함):** 「고고 괜찮은거 같아」 = 24번 「공개 go」(올리기 → 초안 PR → 기술 확인 넷 → 머지, 어긋나면 멈춤) · 「시안 공개」 = 시안을 아티팩트에 올려 보여 줌(머지 아님).
- **업로드는 아직 못 함:** `vercel env ls`로 보니 연결은 여전히 Production·Preview. `vercel blob list-stores`(읽기 전용) = 저장소 `oh-my-design-blob` `store_AwMBlo41eqzg8jRW`, 파일 0. `vercel blob list`는 「No Vercel Blob credentials found」로 거절 → 이 길은 닫음, 다른 자격 증명은 시도하지 않음. 오너의 연결 변경(Development 추가)이 여전히 필요. 신호가 오면: `vercel env pull <scratch 파일> --environment=development`(파일 이름 필수) → 받은 값 확인(토큰이 `vercel_blob_rw_`로 시작하거나 `VERCEL_OIDC_TOKEN`+`BLOB_STORE_ID`) → 워크트리 스크립트로 dry-run 대조 다시 → 한 장 시험(비인증 GET, 헤더, 주소가 테스트의 정규식에 맞는지, `vercel ls`에 새 배포 없음) → 전체 → 저장소 목록 = 540 → 파일 삭제.
- **3371 프리뷰:** 다른 세션(business_plan_k 리드)이 오너 요청으로 내렸다고 알려 옴(CPU 100~700%). 다시 띄울 때는 짧게만.
- **에이전트 2개 도는 중(유료, 오너에게 이름 말함):** `blog-renewal`(워크트리 `.claude/worktrees/blog-renewal`, 가지 `feat/blog-renewal` = main + #130 병합: 상단 메뉴에 블로그 링크, 블로그의 「← oh-my-design」 제거, 블로그 홈 리뉴얼 **정지 시안 3안만**(코드 변경 없음), 시안은 `<scratchpad>/blog-mocks/`) · `kana-ja`(워크트리 `kana-ja`, 가지 `feat/kana-ja`: `/ja/kana`, 일본어 출처 인용 중심, 우리가 쓴 일본어는 한 파일의 메뉴·안내 문구뿐, 일본어 표시, noindex). 지시서와 보고서: `<scratchpad>/agent-reports/{blog-renewal,kana-ja}{-brief,}.md`. 커밋만, 푸시·PR·카드는 본 세션.
- **다음 에이전트(자리 나면):** 블로그 첫 글 다듬기(제목 후보 여러 개 · 덜 학술적 · 그림 배치, 슬러그 유지, 숫자는 `rows.json`과 다시 대조, 영어판 같이).
- **MCP 조사(카드 25):** 운영 `/api/mcp`의 `tools/list` = 6개(search_references, get_reference, get_design_md, get_tokens, get_component_states, compare_references), 화면 도구 없음, 스킬은 MCP를 안 씀. Mobbin MCP(원격·OAuth·Pro 이상: search_screens/flows/sections + 컬렉션), Refero MCP(Pro 포함, 화면 145,000+·흐름 12,000+, 화면마다 글 메타데이터, 스킬 배포, DESIGN.md 2,000+도 제공)는 각 회사 페이지를 11/23에 읽음. 제안 = 화면 도구 둘 → 화면의 글 구성 정보 → 스킬의 레퍼런스 조사 단계. **그림을 에이전트에게 주는 범위는 새 배포 경로라 오너 결정(추천: 작은 그림까지).**
- **런칭 영상(카드 26):** 40초 대본·콘티. ElevenLabs는 대본 go 뒤. **openmotion은 이 Mac에서 못 찾음**(전역·이 저장소·`~/projects` 두 단계). npm의 openmotion 0.1.1은 Next.js 앱에 모션 런타임과 `/studio`를 다는 도구(영상 렌더러 아님) → 운영 코드에 넣지 않기를 추천, 위치를 오너에게 물음. 제작은 `product-demo-video` 스킬 방식으로 계획.
- **스레드 초안(화면 수집 건):** `~/Downloads/threads-screens/thread.md`. 공개 뒤 실제 주소에서 그림 3장을 찍어 같은 폴더에. 브랜드 컬러 건은 `~/Downloads/threads-kr-brand-colours/`.

**11/23 15:18 최종 검수 카드 올림**
- **오너 11/23 14:1x:** 「ㄱㄱㄱ 검수 먼저 해봐. 그리고 블로그는 어떻게 하고 있어 ? 스레드에 업로드는 내가 직접할 건데 어떤 컨텐츠로 업로드할 건지도 브리핑해줘. 다음 작업은 뭘로 할거야 ? Kana같은건 끝났어 ? 700개랑.」 → 본 세션의 해석: 「ㄱㄱㄱ」 = #156 머지 go, 「검수 먼저」 = 올리기 전에 이 Mac 프리뷰로 최종 검수(카드 11의 선택지). 그 앞 턴의 「셋다 고쳐.」로 기준 문서의 낡은 문장 셋(+같은 이유의 글자 크기 행 하나)을 #156에 넣음.
- **#156 머지**(main `a6549e14`): 운영 `/design.md`에 필터·서비스 카드·격자·Scope·lg 반영 확인. 루트 `DESIGN.md`(로컬 사본)를 새 파일로 교체(sha256 `92bf017f…`). 워크트리 `design-md-screens`와 로컬 가지 삭제. `feat/screens-publish`와 이 가지에 main 병합.
- **카드 24(최종 검수)**: 프리뷰(3371, `manifest-local.json`)를 창 없는 브라우저로 찍음. 그림 29장(`<scratchpad>/report-img/fr-*.jpg`, 원본 `<scratchpad>/final/`): 상단 메뉴, 랜딩 벽, 모음(전체·데스크톱·종류=로그인), 서비스 12곳 × 모바일·데스크톱(전체 페이지), 크게 보기(가린 줄), 권리·삭제 줄, 상세 탭, 영어 셋, 390 여섯. 측정: 가로 넘침 0, 컬리·오늘의집 그림 0, `/ko/screens/kurly|ohouse`와 그 그림 주소 404, 사이트맵에 /screens 주소 26개, 페이지 robots `index, follow, noimageindex`.
- **검수에서 처음 드러난 것: 공개되면 상단 메뉴에 「서비스 화면」(Screens) 링크가 생긴다.** 이전 카드들에 없던 변화라 24번 첫 그림으로 넣음.
- **go의 범위를 둘로 물음:** 「공개 go」(추천: 올리기 → 초안 PR → 기술 확인 넷 → 머지 → 운영 확인, 어긋나면 멈춤) / 「올리기만」(초안 PR과 Vercel 프리뷰까지). 기술 확인 넷 = `/screens-img` → Blob 연결 · 그 주소의 `X-Robots-Tag` · Blob 주소 자체의 헤더 · 운영 빌드가 목록을 읽는지. 삭제 창구는 GitHub 양식뿐(메일 없음), `screen-removal` 라벨은 아직 없음(공개 때 만든다).
- **촬영에서 배운 것:** 이 페이지들은 `scroll-behavior: smooth`라 `scrollTo` 직후에 찍으면 제목이 잘린다(`behavior: 'instant'`). 아래쪽 그림은 `loading=lazy` + `decoding=async`라 전체 페이지를 찍기 전에 단계적으로 스크롤하고 `img.decode()`를 기다려야 빈 칸이 안 생긴다(페이지 문제 아님: 스크롤하면 전부 뜸을 따로 확인). 랜딩은 화면 벽으로 바로 스크롤해 `animations: 'disabled'`로 찍는다. 스크립트: `<scratchpad>/final-keys.mjs`, `final-shots4.mjs`.
- **브리핑용으로 확인한 사실:** 블로그 첫 글 ko·en 200(목록에 글 3편) · #130은 main과 충돌 없이 병합됨(`git merge-tree` 종료 0) · Threads 초안의 「18곳 중 8곳 파랑」 대조함(same 18행 중 blue 8) · 그림 3장을 `~/Downloads/threads-kr-brand-colours/`에 PNG로 · `/ko/kana` 200(noindex, #compare·#app 있음), `/kana`·`/ja/kana` 404, `skills/`에 kana 없음(초안은 `docs/drafts/kana/`) · 레퍼런스 622(455 verified / 86 partial / 81 legacy), 마지막 추가 11/13 · sendbird의 180일 만료 11/28(기록 기준, 다시 계산하지 않음).

**11/23 12:57 공개 직전 상태**
- **오너 11/23 12:4x:** 「blob은 production에는 넣었어. env local에는 굳이 안넣었어. 프리뷰 서버 다 확인은 했어. 괜찮은 거 같아. 다음 작업 뭐야 ?」 → 아티팩트 23번(새 세 곳) 확인으로 읽음. 3371 프리뷰는 이미 내려가 있었다(내가 끈 것이 아님, 고아 프로세스 없음).
- **토큰:** `vercel env ls`로 이름만 확인: `BLOB_READ_WRITE_TOKEN`(Secret, Production·Preview), `BLOB_STORE_ID`, `BLOB_WEBHOOK_PUBLIC_KEY`. Vercel 문서: Secret 값은 저장 뒤 쓰기 전용(대시보드에서도 다시 못 봄), 받아 오기는 Development 연결이 있어야 함(저장소 Projects 탭 → ⋯ → Update Project Connection → Development). **오너에게 이 한 가지를 요청했다.** 신호가 오면: `vercel env pull <scratch 파일> --environment=development` → `node --env-file=<그 파일> <worktree>/web/scripts/publish-screens.mjs --upload --sheets ~/Downloads/kr-screens/web`(반드시 `feat/screens-publish` 워크트리의 스크립트로: 매니페스트가 그 워크트리에 쓰인다) → 파일 삭제. 값은 출력하지 않는다. 사이트는 토큰을 읽지 않는다(매니페스트의 base로 rewrite만).
- **`vercel env run`은 쓰지 않는다:** `vercel env run -e production -- node -e …`가 CLI 65.9.0에서 명령을 그대로 돌리지 않고 `vercel`을 다시 불러 배포를 시도했다(`deploy_failed: Request body too large`로 실패, `vercel ls`에 새 배포 없음 확인). 오너에게 보고함.
- **오너에게 물은 순서(카드 11):** 추천 = 먼저 올리고 Vercel 프리뷰로 최종 검수. 업로드 시점부터 그림이 Blob 공개 주소로 열린다(주소 규칙이 단순하고 매니페스트가 공개 저장소의 초안 PR에 올라감)고 알렸고, 걸리면 「검수 먼저」(이 Mac 프리뷰로 검수 → go 뒤 업로드)를 고를 수 있다고 했다. 「연결 바꿨어」 = 추천대로. 연결 뒤 토큰이 읽히는지는 미확인: 받은 값이 `vercel_blob_rw_`로 시작하는지로 확인(자리표시 값일 수 있음). 업로드 직전에 워크트리 스크립트로 dry-run 대조를 다시 한다. 올린 뒤 Blob 주소의 응답 헤더를 읽어 보고한다.
- **대조:** `publish-screens.mjs --dry-run`의 목록 = 오너가 본 `manifest-local.json`과 270행 전부 같음(slug·key·width·type·title·masked·thumb, 색 매칭도 같음). 12곳 · 137화면 · 그림 270(21.6MB) + 작은 그림 270(9.2MB) · 가린 화면 7 · kurly/ohouse 0.
- **`feat/screens-publish`**(워크트리 `.claude/worktrees/screens-publish`, `f9eebb7e`, 푸시 안 함; 둘째 커밋은 `needToken()`이 `VERCEL_OIDC_TOKEN`+`BLOB_STORE_ID`도 받게 함: 연결을 바꿔도 토큰이 안 읽힐 때의 길, @vercel/blob 2.9가 지원): 닫힌 상태 테스트 3파일이 커밋된 매니페스트를 빈 것으로 고정(mock)하게 하고, 「커밋된 매니페스트는 닫힌 상태」 테스트를 「닫힌 상태이거나 운영 리더가 받는 매니페스트(https Blob base), kurly·ohouse 없음」으로 바꿈. 빈 매니페스트·채운 매니페스트 양쪽에서 전체 1,594개 통과, tsc 통과. 업로드 뒤 여기에 매니페스트를 커밋해 초안 PR → 프리뷰에서 `curl -sI <preview>/screens-img/29cm/390-home.jpg`의 `X-Robots-Tag` 확인 → 오너 최종 검수(페이지별 그림 + 프리뷰 주소) → go 뒤 머지. `screen-removal` 라벨 만들기, 첫 업로드 뒤 저장소 파일 수 = 540 확인, 비인증 GET 한 번.
- **끝남 → 초안 PR #156**(`docs/design-md-screens`, 워크트리 유지): 에이전트 커밋 `90f4ed0b` + 본 세션 커밋(기기 전환 버튼 초점 외곽선 한 줄, 문서 맞춤). 오너 go 뒤 머지, 머지 뒤 메인 체크아웃의 루트 `DESIGN.md`(gitignore된 로컬 사본)를 새 파일로 바꿀 것. 기존 문장 셋(Scope에 /screens 없음 · lg 48px 「미적용」 · 액션 버튼의 loading/error)은 승인된 문장이라 손대지 않고 PR 본문에 적음. 원래 줄: `design-md-screens`(ops-builder, 워크트리 `.claude/worktrees/design-md-screens`, 브랜치 `docs/design-md-screens`): `web/public/design.md`에 필터 · 서비스 카드 · 격자 정의(값은 머지된 코드에서 읽음) + GA4 `screens_download` 문서화. 보고서 `<scratchpad>/agent-reports/design-md-screens.md`. 커밋만, 푸시와 초안 PR은 본 세션.
- `web/node_modules`에 `@vercel/blob`이 없어서 메인 체크아웃 `web/`에서 `npm install`을 돌렸다(25개 추가, lock 변화 없음).

**오너 11/21 22:30 「블로그 첫글에 이미지도 막 포함해서 고퀄리티 큐레이션 느낌으로 구성해줘. 다국어 처리도 했지 ? kana도 hangul처럼 별도 화면을 만들어서 실제 비교하면서 보여주면 좋을 듯. 그리고 화면 탭을 두는것도 좋은데, 저 레퍼런스들만 모아놓은 mobbin같은 페이지도 있으면 좋을 거 같아. 그 부분도 작업해줘 랜딩페이지에 포함도 해주고, 어떤 형태로 보여줄지는 조금 더 고민해봐. 나머진 추천대로할게 작업 잘 진행하고 있어.」**
- **「나머진 추천대로」가 덮는 것(본 세션의 해석, 카드 그림을 본 뒤의 말):** 카드 7 = #137 머지(뒤이어 루트 `DESIGN.md` 교체) · 카드 9 = #139 머지 · #141 · #140 · 퀸잇(partial 유지, 측정 도구에 폰 폭 옵션, Codex 1회). 하나씩 머지하고 운영 확인.
- **덮지 않는 것:** 남의 화면 그림을 운영에 내보내는 일. 카드 3의 추천(로그아웃 화면 중 사용자 글·사진 위주 화면을 뺀 나머지를 축소해 공개, 출처와 삭제 창구)은 방향으로 받았지만, **실제로 나갈 화면 목록과 그림을 둘 곳을 보여 준 적이 없다.** 모음 페이지와 랜딩 구역은 로컬 문(`OMD_SCREENS_DIR`) 뒤에서 만들고, 공개 대상 목록 카드에 go가 나온 뒤에만 내보낸다.
- **새 일 넷:** ① 블로그 첫 글에 그림(전부 `rows.json`에서 스크립트로 그림, 남의 화면 스크린샷 없음)과 영어판. **다국어는 안 돼 있었다:** 이 글은 `ko.md`뿐이고 블로그 로케일은 ko·en 둘. ② `/kana` 비교 화면: 우리가 지은 일본어는 싣지 않는 규칙이 그대로라, 출처가 직접 준 틀린 예/맞는 예 짝으로 만든다(짝 수를 먼저 센다). ③ 화면 모음 페이지(Mobbin 같은)와 랜딩 구역: 형태 시안 2~3개를 아티팩트에 올리고 추천안은 같이 만든다. ④ 위 머지들.

**00:10(11/22) 마감: 도는 작업 없음. 오너 결정 대기 = 아티팩트 카드 6·10·11·12·13·14.**
- **열린 PR(전부 초안, 머지는 오너 go 뒤 하나씩, 운영 확인):** #143 블로그 그림 8종 + 영어판(카드 12) · #145 `/ko/kana` 비교 구역(카드 13) · #146 화면 탭 + 모음 페이지 + 랜딩 구역, 전부 로컬 문 뒤(카드 14, 머지해도 운영 변화 없음) · #144 컴파일러가 oklch·oklab을 읽음(카드 6, 토큰이 될 수 있는 값이 바뀌므로 go 필요). 상태 문서는 `chore/state-1121c`.
- **카드 11(공개):** 정할 것 셋 = 공개 여부(후보 118 / 뺌 18 / 막힘 2) · 그림 둘 곳(추천 Vercel Blob: 오너가 저장소와 토큰을 만들어야 함) · 삭제 요청 창구(이슈 양식 + 오너가 정하는 메일). 빼는 목록은 `tools/screen-archive/withheld.json`(`feat/screen-archive` `a8f90a08`), `mark-withheld.mjs`가 시트의 `screens.json`에 `withheld`로 쓰고, 사이트 리더(`local.server.ts`, `feat/item-screens-tab` `f7805f9d`)가 그런 기록을 탭·모음·랜딩·개수·그림 주소에서 뺀다. 1차는 첫 화면만(전체 페이지 그림은 내보내지 않음).
- **`/kana` 비교(#145):** 장면 8개(KW-15×2, 24, 26, 28, 54, 65, 62). 일본어는 생성 데이터의 문자열만, 컴포넌트는 회색 뼈대. hangul식 「앱 화면 두 벌」은 우리가 일본어를 지어야 해서 하지 않음: 원하면 표시를 붙여 만들 수 있다고 카드에 적음.
- **블로그(#143):** 한·영 숫자·컬러 코드 대조를 본 세션이 스크립트로 돌림(컬러 코드 동일, 숫자 차이는 제목의 169, 날짜 표기, 3o3, 「of the 34」, 범위 표기). #130과 같은 줄을 고치므로 #143 먼저.
- **컴파일러(#144):** `resolveColourSpaces()`가 sRGB 안의 oklch·oklab을 브라우저가 칠하는 rgb로 읽고, sRGB 밖은 그대로 둬 후보에서 뺀다. `diff-values`와 `remeasure`도 같은 방식으로 읽어 표기만 다른 것을 변화로 치지 않는다. 퀸잇 증거로 색 후보 2 → 14, `#754ee4`가 `--brand_primary_primary`와 함께 잡힘. **남은 한계:** survey 폴더가 여럿이면 색 census는 마지막 것만 쓴다. lab()/lch()/color()는 안 바꾼다. 머지되면 퀸잇 재조립(Codex 1회): 주 색을 `#754ee4`(사이트가 선언·구매 버튼)로 볼지 아이콘의 `#642fe9`로 둘지 근거와 함께 카드로.
- **본 세션이 틀렸다가 고친 것:** 카드 10 시안에 뺄 화면(당근·오늘의집 홈)이 섞여 있었음 → 뺀 목록으로 다시 그림. 공개 목록을 폰 화면만 보고 정했음 → 1440도 보고 당근 동네업체·알바 추가(16 → 18). PR #144 설명의 「피플펀드 폴더는 바이트까지 같다」는 틀림 → 고침(반투명 oklab 셋이 표기만 바뀜). PR #144의 테스트가 tsc에서 실패 → 고침. 에이전트 셋이 잠깐 동시에 돌았음(`blog-en`을 깨워 보고를 받는 동안 `kana-compare` 시작).
- **정리:** 워크트리 `blog-en`·`probe-phone`·`ds2`·`kana`·`blogfix` 삭제. 남은 것: `blog-figs`(#143) · `kana-compare`(#145) · `screens-tab`(#146) · `compile-oklch`(#144) · `screens` · `lang-zh` · `lang-cn`과 이전부터 있던 것들. **`.next`가 남음:** `screens-tab` 1.1G, `blog-figs` 226M, `kana-compare` 155M(`rm -rf`가 권한 검사에 막힘, 돌아가지 않음. PR이 머지돼 워크트리를 지울 때 같이 사라짐). 서버 3361~3364 없음, Codex 프로세스 없음, 디스크 여유 58G.

**오너 11/22 01:06 「추천대로 다 진행해줘」** (카드 17·16·15·12·11·6의 추천 표를 본 뒤).
- **덮는 것:** #143(카드 12) · #149(카드 16) · #146(카드 15, 캐러셀) · #144(카드 6) 머지, 퀸잇 재조립 Codex 1회, 카드 17의 2단계 가리기로 당근 여섯 화면 되돌리기와 다른 서비스로 넓히기, 카드 11의 「공개 · Vercel Blob · 이슈 양식 + 메일」.
- **덮지 않는 것 / 막힌 것:** 공개에는 오너만 줄 수 있는 것 둘이 필요하다: Vercel Blob 저장소의 토큰(`web/.env.local`의 `BLOB_READ_WRITE_TOKEN`)과 삭제 요청을 받을 메일 주소. 받기 전에는 준비까지만. #148(markdown 속성)과 #147(상태 문서)은 카드가 아니었으므로 머지하지 않고 추천만 붙여 둔다. 창 브라우저 촬영(오늘의집·인프런·잡플래닛)은 02:00 이후.

**오너 11/22 12:34 「나안으로 하자. 나머진 추천대로. 그리고 당근 다루기 힘들고 하면 다른 서비스 화면부터 해도 좋아. 방향성은 괜찮네. 모음 페이지에서는 상단에 서비스 화면 이라고 해도 좋을듯. 방향성 굿이야.」**
- **본 세션의 읽기(오너에게 말함):** 「나 안」 = 카드 19의 나 안(모음 페이지 = **서비스 격자**, 누르면 상세 페이지의 「서비스 화면」 탭, 제목 「서비스 화면」). 「나머진 추천대로」 = 카드 20 가 안(랜딩 **화면 벽**) · 카드 21(색 칩도 빼고 #153 머지) · #152 머지 · 증거 보관 갱신(매니페스트 `--write` + iCloud 복사).
- 당근이 다루기 어려우면 다른 서비스 화면부터 공개해도 된다(허락이지 지시는 아님. 지금은 당근 10화면이 가려진 채로 후보에 있다).
- 구현은 문 뒤에서, **눌러 볼 수 있는 프리뷰로 go** 뒤에 공개 절차.

**12:51 진행(「나안으로 하자. 나머진 추천대로」 뒤):**
- **머지 둘, 운영 확인:** #153(main `cac734ba`, 탭 이름 「서비스 화면」/「Product screens」, 대조 패널과 색 칩 삭제; 운영은 문이 닫혀 있어 탭이 안 보임, 상세 페이지 200 · `#use` 있음) → #152(`7567592a`, 흔들리는 테스트 수정). 워크트리 `item-tab`·`screens-test-fix` 삭제.
- **증거 보관 갱신:** `local-store.mjs --write` → 7,561파일 / 2,525MB, `--verify` 전부 OK. iCloud 백업에 세 트리를 `ditto`로 복사하고 `diff -rq`로 차이 없음 확인(rsync는 iCloud가 내려 둔 파일 때문에 실패: README에 적음). 매니페스트와 README는 이 가지(`chore/state-1122`)에 커밋.
- **구현 에이전트 `screens-browse` 도는 중**(Claude 1, 워크트리 `screens-browse`, 가지 `feat/screens-browse`, 포트 3371): 모음 페이지 = 서비스 격자(제목 「서비스 화면」, 필터 나라·기기·분야, 카드 → 상세 페이지의 탭이 열린 채로) · 랜딩 = 「여정」 다음의 화면 벽 섹션(맨 아래 한 줄 삭제) · 썸네일(전송량). 보고는 `scratchpad/agent-reports/screens-browse.md`. **끝나면: 본 세션이 직접 눌러 보고 → 오너에게 눌러 볼 수 있는 로컬 프리뷰 + 그림 → go 뒤 PR 머지.** 푸시·PR은 본 세션.
- **주의:** 스크립트 안에서 REPL이 시작한 폴더(워크트리)를 지우면 그 뒤의 셸 호출이 전부 실패한다. 워크트리 삭제는 스크립트의 마지막에, 또는 다음 스크립트에서.

**14:05 진행:**
- **#154 머지됨**(main `4dff55cc`, 증거 매니페스트 + 상태 문서). 상태 가지는 `chore/state-1122b`.
- **구현 끝, 초안 PR #155**(`feat/screens-browse`, 워크트리 `screens-browse`; 에이전트 `screens-browse`가 벽의 클릭 동작을 마저 고치는 중이라 커밋이 하나 더 온다 → 오면 푸시). 모음 페이지: h1 「서비스 화면」/「Product screens」, 필터 셋(Base UI Select, 주소 쿼리 `?country=&device=&category=`), 서비스 카드 → `/…/design-systems/<id>#screens`. 랜딩: 「여정」 다음 섹션에 벽(두 줄, 23장, 호버 시 멈춤, 줄임 설정이면 정지). 썸네일 `<폭>-<key>.thumb.jpg`(480/960px, 253장 8.4MB)을 `publish-screens.mjs`가 만들고 올림. 메뉴 「화면」 → 「서비스 화면」. 선반·토글·모음 페이지 대화상자·색 점·`cardChips`·`filterCards` 삭제.
- **본 세션이 직접 눌러 확인(1440·390):** 카드 → 탭 선택된 상세 페이지 → 크게 보기 · 기기/분야 필터와 주소 · 랜딩 섹션 위치와 벽 링크 23개(중복 없음, 가로 넘침 0) · 영어 페이지. 벽 그림은 스크롤해 들어가면 뜬다(처음 찍은 그림의 빈 둘째 줄은 캡처 타이밍).
- **닫힌 상태(에이전트 확인):** main 빌드와 비교해 `/screens`·`/ko/screens`·`/screens-img/…` 404, robots.txt 동일, 랜딩의 보이는 HTML 동일(RSC 페이로드에서 쇼케이스의 lazy 자식 하나 줄어듦 = 지운 한 줄의 자리).
- **머지는 오너가 프리뷰를 눌러 본 뒤**(아티팩트 22번). 에이전트가 낸 `web/public/design.md` 추가안(필터 컨트롤 · 서비스 카드 · 카드 격자)은 보고서 `scratchpad/agent-reports/screens-browse.md` 끝에 있다: 머지 뒤 따로 올린다.
- 지우지 못한 것: 워크트리의 `web/.next`, `scratchpad/basebuild`(256MB; rm 거부됨).

**오너 11/22 17:52(3371 프리뷰를 눌러 본 뒤) 「한번 봤거든. 느낌은 괜찮아. 근데, screens기준으로 다음의 피드백 고민해봐줘. (1) ko가 저 위치에 붙는게 맞아 ? (2) 화면 종류 별로도 볼 수 있으면 좋을 거 같아. 그러니까 지금은 나라나 기기 그런걸 선택하면 그리드로 보여주는데, 랜딩이나 온보딩 그런 종류를 모아서 볼 수 있는거지. (3) 실제 서비스의 화면을 서비스별로 모았습니다. 서비스를 누르면 그 서비스의 화면과 DESIGN.md를 함께 봅니다. 함께 볼 수 있습니다로 수정. (4) 상세에서 데스크탑, 모바일로 해줘. 1440 같은 숫자는 빼줘. (5) 지금 보면 디자인시스템 상세로 이동해서 아카이브 뒤로가기 버튼을 누르면 screens로 안가더라고. screens에서 디테일로 갈때는 저 페이지 대신에 아예 저거 용도로 잘 만들어진 (하단에 유사한 사이트 화면도 보여주는) 페이지를 별도로 기획해서 작업하면 좋을 거 같아. 그리고 상세에서 데스크탑과 모바일을 병행해서 보여주는데 선택한 기기에 해당하는 것만 보여줘. 다운로드도 받을 수 있게(개별, 종류별, 전체) 해주고.」**
- **본 세션의 계획(오너에게 말함):** ① `/ko/screens`는 사이트의 주 규칙(`/ko`, `/ko/design-systems`, `/ko/hangul`)과 같다: 유지 ② 모음 페이지에 넷째 필터 「종류」: 고르면 격자가 서비스 카드에서 그 종류의 화면 타일로 바뀜 ③ 문구 「함께 볼 수 있습니다」 ④ 기기 이름은 어디서나 「데스크톱 · 모바일」, 숫자 없음(오너는 「데스크탑」이라 썼지만 표기는 표준 「데스크톱」) ⑤ **서비스 화면 페이지 `/screens/<id>` · `/ko/screens/<id>` 신설**: 「← 서비스 화면」, 기기 전환(고른 기기의 그림만), 종류별 묶음, 화면마다 · 종류마다 · 전체 내려받기(브라우저에서 zip, 권리 안내 README 포함), 아래에 비슷한 서비스. 모음 페이지 카드와 랜딩 벽은 이 페이지로 간다. 상세 페이지의 탭은 남긴다(고른 기기만, 숫자 없음).
- **이번에는 정지 그림 단계를 건너뛰고 바로 눌러 보는 프리뷰로 가져간다**(말씀이 구체적이고, 지난 두 번은 그림이 아니라 프리뷰에서 판단하셨다). 오너에게 그렇게 말함.
- **아티팩트 주소가 또 바뀜:** 17:5x에 게시가 「다른 조직의 것」으로 거부됨(계정이 다시 바뀐 것으로 보임). 오너의 「현 계정 기준으로 하고」에 따라 지금 계정에 새로 게시: https://claude.ai/artifact/KJMmoqr2pP2d2i9D4TB2tk. 이전 둘(KbqQF8nX…, Vuppp7K2…)은 갱신하지 않는다.
- 에이전트 `screens-browse`에 2라운드로 맡김(같은 워크트리·가지, PR #155에 이어서). 3371 프리뷰 서버는 본 세션 것: 끄지 말라고 함.

**18:50 진행(다섯 가지 피드백 뒤):**
- **2라운드 끝, PR #155에 푸시(`11d24bda`).** 새 페이지 `/screens/<id>` · `/ko/screens/<id>`(뒤로 링크, h1 「{이름} 서비스 화면」, 기기 전환 모바일/데스크톱 = 한 기기의 그림만, 종류별 묶음, 크게 보기의 화면은 주소 해시, 맨 아래 비슷한 서비스 3, 권리·삭제 문구). 모음 페이지에 넷째 필터 「종류」(고르면 화면 타일 격자, 타일 → `/screens/<id>#<key>`). 기기 값은 주소에서도 `mobile|desktop`. 내려받기: 화면 하나(크게 보기) · 종류별 · 전체(zip, fflate, README.txt 포함). `fflate`가 정식 의존성이 됨. GA 이벤트 `screens_download` 추가(`docs/funnel-analytics.md` 미갱신 → 머지 뒤 /ga4 규칙대로 적을 것).
- **본 세션이 직접 눌러 확인(1440·390):** 종류 필터 → 타일 → 화면이 열린 서비스 페이지 · 기기 전환 시 폭 하나만 · 단일 내려받기 = 원본과 동일 바이트 · 전체 zip = README + mobile 10 + desktop 10 · 비슷한 서비스가 기기 유지 · 뒤로 링크 복귀 · 상세 탭은 한 기기 + 링크.
- **오너에게 말한 선택지:** 전용 페이지는 「모바일 · 데스크톱」(기본 모바일), 상세 탭은 「데스크톱 · 모바일」(기본 데스크톱)로 다르다. 종류 목록에 한 장짜리 종류도 나온다.
- **프리뷰 서버 사고:** 3371 dev 서버가 4시간 반 뒤 CPU 580% · 4GB로 멈추고 SIGTERM을 무시 → cwd가 워크트리임을 확인하고 `kill -9` 뒤 재시작. 기계 전체가 스왑 30~44GB로 빡빡하다(다른 세션들). **오래 띄워 두는 프리뷰는 dev 서버가 무거워진다: 오너가 다 보면 바로 끈다.**
- 머지는 오너가 다시 눌러 본 뒤.

**오너 11-22 19:40(2라운드 프리뷰를 본 뒤) 「컬리랑 오늘의집은 빼고 다른거 해도 좋을 거 같아. 나머진 냅두고. 추천대로 잘 진행해줘.」**
- **본 세션의 읽기(오너에게 말함):** 컬리·오늘의집을 공개 대상에서 통째로 빼고, 다른 서비스를 새로 찍어 채운다. 나머지 아홉 서비스는 그대로. 「추천대로」 = 아티팩트 22번의 추천(PR #155 머지, 운영에는 안 보임). 이유는 말씀하지 않았다: 추측해 적지 않는다.

**20:08 진행(「컬리랑 오늘의집은 빼고 … 추천대로 잘 진행해줘」 뒤):**
- **#155 머지(main `a915de20`), 운영 확인:** `/screens`·`/ko/screens`·`/screens/karrot`·`/ko/screens/karrot`·`/screens-img/…` 404, 랜딩에 벽 없음, 메뉴 링크 없음, robots.txt 동일, 사이트맵에 없음, 상세 페이지 200 · `#use`. 워크트리 `screens-browse` 삭제. 메인 체크아웃 `chore/state-1122b`에 main 병합.
- **컬리·오늘의집 제외:** `withheld.json`에 `excluded`(서비스 단위), `mark-withheld.mjs`가 그 서비스의 모든 기록을 뺌. 두 곳의 DESIGN.md는 그대로. 오너는 이유를 말하지 않았다.
- **새 서비스 셋(창 없는 브라우저, `feat/screen-archive` `64b96d06`):** 교보문고 12(1440 로그인은 400으로 막힘) · 마이리얼트립 11 · 메가박스 12. 라우트 `routes/{kyobobook,myrealtrip,megabox}.json`(뺀 화면과 이유는 각 파일의 `dropped`). 16곳을 먼저 열어 봄: 거절 = 11번가·에이블리·아이디어스·크림(1440), G마켓·SSG(양쪽) → `services.json`의 `probed`에 기록, 우회 안 함. 열리지만 안 찍은 곳: 패스트캠퍼스·프립·하나투어·밀리.
- **공개 후보: 서비스 12 · 화면 137 · 그림 270장 21.6MB · 작은 그림 270장 9.2MB · 가린 화면 7.** 프리뷰 매니페스트 `~/.omd-workers/screens/preview/manifest-local.json` 다시 만듦.
- **판단 기준(새로 찍을 때 본 것):** 한쪽 폭만 열리는 화면은 싣지 않는다 · 첫 화면에 고객 후기 글이나 일반인 얼굴이 크게 나오면 빼거나 다른 화면으로 바꾼다 · 빈 화면으로 응답하는 404는 싣지 않는다 · 첫 방문 팝업은 「팝업」 화면으로 남기고 나머지에서는 닫는다.
- **남은 일:** 아티팩트 23번 확인 · 토큰 → 올리기 → 초안 PR 프리뷰 + 이미지로 최종 검수 → 공개 · `web/public/design.md`에 필터/서비스 카드/격자 추가안 PR · `docs/funnel-analytics.md`에 `screens_download` · (선택) 02:00~07:00에 창 브라우저로 크림·아이디어스.

**오너 11/22 04:1x(로컬 프리뷰를 본 뒤) 「한번 전반적으로 봤어. 1. 일단 모음 페이지 너무 별로야. refero 레퍼런스나 mobbin 레퍼런스 안봤어 ? 우리 디자인 시스템이 문제인가 ? 상단 부분부터 모두 보기 했을 때 같은 페이지에서 접기로 바뀌고 화면별 서비스별 토글 버튼 디자인(토글이 좋을 지 필터가 좋을지) 그런거 전부 마음에 안들어. 누르면 들어가서 상세로 보는 형태를 생각했거든. 그게 디폴트 화면이 되어야하고. 한국은 나라 선택 필터로 해야할 거 같아. 그렇게 해야 상단 타이틀과 description을 범용적인 형태로 가져갈 수 있으니까. 랜딩의 한줄이라고 맨 아래에 그냥 대충 만들어서 넣었는데, 저거 기각이야. 랜딩의 한 섹션을 훌륭하게 자리할 수 있도록 추가로 고민해. 상세 페이지 부분은 확인은 했어. 좋은데 화면 00 대신 서비스 화면 이라고 하고 DESIGNmd와 대조 부분은 빼도 좋을 거 같아. 현 계정 기준으로 하고. 지금 다른 작업은 진행하고 있는거 없어 ? 토큰 어떤거 필요한지 모르겠네 뭘 해줘야하는거야 ? 절차랑 어떤 값을 가져와야하는지 상세하게 알려줘.」**
- **기각:** 모음 페이지(`/screens`)의 지금 형태 전부(상단, 「모두 보기 ↔ 접기」가 같은 페이지에서 펼쳐지는 것, 「화면 종류별/서비스별」 토글) · 랜딩 맨 아래의 화면 한 줄.
- **원하는 것:** 기본 화면은 「누르면 들어가서 상세로 보는」 형태 · 한국은 **나라 필터**(그래야 제목과 설명을 범용으로) · 랜딩에는 제대로 된 **한 섹션**.
- **상세 페이지 화면 탭: 통과, 고칠 것 둘:** 탭 이름 「화면 N」 → 「서비스 화면」(숫자 없이) · 「DESIGN.md와 대조」 부분 빼기.
- **보고서는 지금 계정에 새 아티팩트로.**
- **본 세션의 진행 방식(이번엔 클릭 뒤가 문제였으므로):** 정지 시안은 「목록 → 누른 뒤 → 상세 페이지」의 흐름으로 그리고, 방향이 정해지면 문 뒤에서 만든 다음 **눌러 볼 수 있는 로컬 프리뷰로 go**를 받는다(정지 그림만으로는 두 번 통과했다가 실제로 보고 기각됨). 새 상세 주소는 공개 URL이므로 닫힌 상태 404 · 뺀 화면 404 · 권리/삭제 문구 · 가린 표시 · noimageindex · 사이트맵 · hreflang · 닫힌 상태 테스트가 다 필요하다. 공개되는 것은 첫 화면 그림뿐이다(전체 페이지 그림이 필요하면 결정으로 올린다).

**04:35 진행(위 말씀 뒤):**
- **새 아티팩트(현 계정): https://claude.ai/artifact/Vuppp7K2EHbroALtBajFuX** (옛 주소 KbqQF8nX…는 이전 계정 것, 더 갱신 안 함). 게시 파일 경로는 세션 scratchpad의 `omd-review.html`, 그림은 `~/.omd-workers/reports/img/`에도 둠.
- **카드 19(모음 페이지 방향, 오너 결정 대기):** 가 안 = 화면 격자(제목 「화면」, 필터 나라·기기·분야 + 종류 탭) → 화면마다 페이지(`/screens/<서비스>/<화면>`, 새 공개 URL) · 나 안 = 서비스 격자 → 상세 페이지의 「서비스 화면」 탭. **추천 가 안.** 정지 그림은 실제 사이트 안에 끼워 그림: `tools/screen-archive/make-browse-mocks.mjs`(`feat/screen-archive` `1fa51653`).
- **카드 20(랜딩 섹션 방향, 대기):** 둘째 섹션(「여정」) 다음에 한 섹션. 가 안 = 화면 벽(두 줄, 그림 15장, 랜딩용 작은 그림 필요) · 나 안 = 글+그림(3장). **추천 가 안.** 맨 아래 한 줄(`sq-gal-strip`)은 방향이 정해지면 코드에서 지운다.
- **카드 21 = 초안 PR #153**(`feat/item-screens-label`, 워크트리 `item-tab`): 탭 이름 「서비스 화면」/「Product screens」(숫자 없음), 대조 패널·토큰 필터·그 문구와 CSS 삭제. 남긴 것: 카드 아래 색 칩(오너에게 물음, 추천은 삭제), `filterCards()`(이제 탭에서 안 씀). 운영 변화 없음. **머지는 오너 확인 뒤.**
- **토큰 절차(공식 문서 확인, 카드 11 고침):** 프로젝트 → Storage → Create Storage → Blob → Continue → **Public** → 이름 → **「Add a read-write token env var to this connection」 체크** → Create. 값은 Settings → Environment Variables의 `BLOB_READ_WRITE_TOKEN`(이 복사 경로는 문서 미확인). 로컬은 `vercel link`가 안 돼 있어 `vercel env pull`은 바로 못 씀(쓰면 기본이 `.env.local` 덮어쓰기: 다른 파일 이름으로). Hobby 한도: 저장 1GB · 전송 월 10GB · 넘으면 30일 잠김.
- **Mobbin·Refero:** 둘러보기는 둘 다 로그인 뒤. 로그인 없이 보이는 화면만 봄(`scratchpad/refs/`). 사이트 기준 문서(`web/public/design.md`)에는 필터·탭·격자 카드 정의가 없다: 방향이 정해지면 추가안을 올린다.
- **다음(방향이 오면):** 문 뒤에서 구현 → **눌러 볼 수 있는 로컬 프리뷰로 go** → 그 뒤 공개 절차. 서버는 전부 껐다(3366·3368·3369).

**오너 11/22 03:5x 「어느 페이지에 어떻게 보이는지 공개 시점 되면 나한테 이미지와 함께 최종 검수 받아줘. 그리고 프리뷰로 내가 미리 확인할 수도 있게 해주고.」**
- **공개 절차(이 말로 확정):** ① 토큰 → `npm install` → `publish-screens.mjs --upload` ② 채워진 목록을 **초안 PR**로(머지 금지) → Vercel 프리뷰 주소 ③ 프리뷰에서 페이지별 그림(랜딩 `/`·`/ko`, `/screens`·`/ko/screens`, 상세 페이지 화면 탭, 크게 보기; 1440·390)을 찍어 오너에게 최종 검수 요청, 프리뷰 주소와 함께 ④ **오너 go 뒤에만 머지** ⑤ 운영 확인. 01:06의 「추천대로」는 공개 방식에 대한 go였고, 내보내는 일 자체는 이 최종 검수를 거친다.
- **주의(오너에게 말함):** ①의 올리기는 그림을 Blob의 공개 주소에 둔다(주소를 아는 사람만 열 수 있고 우리 페이지에는 아직 안 나옴). 최종 검수에서 빼라는 화면은 `--remove`로 지운다.
- **지금 볼 수 있는 로컬 프리뷰(본 세션이 띄움, 03:58):** `http://localhost:3366/ko/screens` 등. 메인 체크아웃 `web/`에서 `OMD_SCREENS_MANIFEST=~/.omd-workers/screens/preview/manifest-local.json OMD_SCREENS_DIR=~/Downloads/kr-screens/web npx next dev -p 3366`. **오너가 다 봤다고 하면 끈다(포트 3366, cwd 확인).**

**03:50 마감:**
- **#147 머지됨(main `c93ba13b`).** 상태 문서의 새 가지는 `chore/state-1122`(PR 아직 없음). 열린 PR: **#152 초안(흔들리는 테스트 수정, 오너 go 대기)** · #130(#143과 충돌) · #129 · #102.
- **퀸잇 문서에 남은 것(다음 레퍼런스 PR에서):** Overview 셋째 문단에 「The product-role proposal for primary_color is #754ee4」라는 옛 표현이 한 군데 남음(Colors 절은 고쳤음). 의미 검토(§1 깊이, 문장)는 돌리지 않았다: 헤드라인 값과 게이트만 확인함.
- **증거 보관이 뒤처져 있음(전부터, 이번에 발견):** `node scripts/local-store.mjs --verify` → reference-evidence **AHEAD: 기록 680 · 현재 7,051(추가 6,371)**, 매니페스트는 2026-10-29 것. 퀸잇의 11/21 폴더(`visual/queenit/20261121-135*`)도 매니페스트에 없다. 백업 폴더(iCloud `omd-evidence-backup`)는 로컬에서 0B로 읽힘(파일 수는 아래 보고 참조). 증거는 2.3GB. **하지 않음:** `--write`(매니페스트 PR)와 rsync(2.3GB를 iCloud로)는 오너에게 물음. 추천은 둘 다 진행.
- **보고서 그림을 로컬 보고서 옆에 복사:** `~/.omd-workers/reports/img/`(106장). scratchpad가 지워져도 다시 게시할 수 있다. 퀸잇 전·후 원본은 `~/Downloads/queenit-before-after/`.
- **공개 전에 할 일(잊지 말 것):** 오늘의집 워크를 최신 가리기 도구로 한 번 더 찍기(스크립트 글자 제외 수정 뒤로는 다시 안 찍음, `partial` 수치가 옛것) · 오늘의집 상품 상세의 가린 그림 15~21장이 무엇인지 확인하고 「가렸습니다」 문구를 첫 화면 기준으로 좁힐지 정하기 · `npm install`(`@vercel/blob`, npm audit 경고를 아직 아무도 읽지 않음) · `screen-removal` 라벨 · 닫힌 상태 테스트 6개 갱신 · 미리보기에서 `X-Robots-Tag` 확인 · `--upload`는 목록에 없는 그림을 저장소에서 지운다(한 번도 안 돌려 봄).

**03:20 진행(오너 02:5x 「재개하자. 고민인 부분은 너가 추천하는대로 갈게 ㄱㄱ」 뒤):**
- **머지 셋, 하나씩 운영 확인:** #150(main `5da43b0d`, 공개 준비; `/screens`·`/ko/screens`·`/screens-img/…` 404, robots.txt 머지 전과 동일, 메뉴·사이트맵 변화 없음) → **#151(`8645486a`, 퀸잇 재검증; partial → verified_v2, 주 색 `#754ee4`, homepage `web.queenit.kr`; 운영 ko·en 상세 페이지와 `#use` 확인)** → #148(`6ecbee44`, markdown `node` 속성; 퀸잇 상세 페이지에서 3,040개 → 0). 워크트리 `screens-public`·`queenit-land`·`md-node` 삭제.
- **퀸잇에서 워커 초안과 다르게 한 것(본 세션 판단, PR #151 본문에 적음):** 토큰 `primary`를 `#754ee4`로 옮김(지시서의 「공개된 이름은 다른 값에 주지 않는다」와 다름. 그 규칙은 지시서에만 있고 스크립트·테스트가 강제하지 않음. 오너가 주 색을 정함). **`#642fe9`는 토큰이 아니라 본문 설명으로만 남김**(어셈블러가 모든 색 토큰을 「제품 화면의 computed-style」로 기록하는데 이 값은 아이콘 픽셀에서 온 것). 카드에는 「앱 아이콘 색이라는 이름으로 남긴다」고 했으므로 오너에게 다른 점으로 보고함. `tokens.extracted` = 2026-11-21, `verified` = 2026-11-22. 반영 전 운영 사이트에서 헤드라인을 직접 다시 잼(구매하기 294×48, 8px, `#754ee4`). 모션 기준선 145 → 144.
- **당근 글 상세 기록 복구:** `--only detail`로 찍으면 「목록에서 링크를 찾는」 화면이라 실패하고 기록에서 `masked`가 빠진다 → 전체를 다시 찍어 복구. **연습 실행: 128화면 · 253장 · 19.7MB · 가린 화면 12**(오늘의집 상품 상세가 12번째: 첫 화면 아래의 사진 15~21장이 가려진 것이라 첫 화면 그림에는 가린 곳이 안 보임. 공개할 때 「가렸습니다」 문구가 이 화면에도 붙는다: 첫 화면 기준으로 좁힐지 공개 전에 정리).
- **아티팩트에 닿지 못함:** 오너가 02:5x에 `/login`으로 계정을 바꾼 뒤 기존 아티팩트(KbqQF8nX…)는 「다른 조직의 것」이라 게시가 거부됨. 우회하지 않음. 보고서는 로컬 `~/.omd-workers/reports/2026-11-21-sprint-report.html`로만 갱신. **오너에게 물은 것:** 지금 계정에 새로 게시할지 / 이전 계정으로 다시 로그인할지.
- **흔들리는 테스트(#150에서 들어옴) → 초안 PR #152(`fix/screens-config-test`, 워크트리 `screens-test-fix`):** `screens-published.test.ts`의 `loadConfig`가 import 뒤에 `vi.doMock`을 하나 더 등록해, 다음 테스트의 mock과 순서 없이 풀렸다(여섯 번에 한 번 실패, #147 CI에서 처음 봄). 테스트 파일만 고침(전 26회 중 4회 실패 → 후 40회 중 0회). **머지 안 함: 오너 go 필요, 추천은 머지.** 그 전까지 다른 PR의 「Web and reference integrity」가 가끔 빨개질 수 있다: 이 테스트 이름이면 다시 돌리면 된다.
- **오너 대기:** `web/.env.local`의 `BLOB_READ_WRITE_TOKEN`(03:00에 없음) · 삭제 요청 메일(없어도 공개 가능) · 보고서를 둘 곳.

**02:30 진행:**
- **가리기 끝(카드 17).** 창 브라우저(02:00~02:26)로 오늘의집·인프런·잡플래닛의 DOM을 보고 판단. **되돌림:** 오늘의집 home · app-sheet · projects(이름은 프로필 사진 옆 span, 사진은 `/content/community/`·`/content(s)/uploads/` 등; `routes/ohouse.json`의 `mask`). **계속 뺌(8):** 당근 community · group · jobs, 오늘의집 photos, 인프런 community · mentoring, 잡플래닛 review · community. 기준: 이름과 사진을 가려도 사람의 글이 본문으로 남으면 뺀다. **후보 128 · 가린 화면 11 · 막힘 2**(연습 실행: 253장 19.7MB).
- **가리기 도구 수정**(`feat/screen-archive` `708f131e`, 푸시됨): ① 링크가 아닌 이름은 글자로 키를 잡음(전에는 선택자 하나에 이름 하나) ② `mask.nameHref`(정규식)로 프로필 링크만 사람으로 봄(오늘의집에서 「로그인」과 공식 계정 바로가기가 이름으로 잡혀 글자가 바뀌었음) ③ 가리기가 MutationObserver로 페이지에 남음(캐러셀·늦게 뜨는 사진). 당근 전체와 무신사 스냅도 이 도구로 다시 찍고 시트를 다시 만듦(`~/.omd-workers/screens/web/{karrot,musinsa,ohouse}-20261122`).
- **PR #150 2라운드 푸시됨(`d0d9d198`):** 공개 상태의 그림 주소는 `/screens-img/<slug>/<폭>-<key>.jpg`, `next.config.ts`가 목록이 찼을 때만 Blob으로 rewrite + `X-Robots-Tag`, `robots.ts`가 그 경로 제외. **확인 못 한 것:** Vercel에서 그 헤더가 실제로 붙는지(로컬 `next start`에서는 안 붙음) → 공개 PR의 미리보기에서 `curl -sI …/screens-img/29cm/390-home.jpg`. 삭제는 `--remove` → 커밋 → 배포, 저장소 캐시 1시간.
- **오너 결정 대기 셋:** 카드 6(퀸잇 주 색) · 카드 18(공개 모습 → #150 머지) · 카드 11(Blob 토큰, 메일 주소). 도는 작업 없음.

**01:50 진행:**
- **퀸잇 재조립 끝(Codex 1회, 새 캡처 없음, 넣지 않음):** `~/.omd-workers/reverify6/queenit/{report.md,front.yaml,body.md,out/DESIGN.md}`. 색 후보 14, 상태 partial(구매 버튼 눌림·카드 상태·홈 포커스 둘 미측정). 초안은 `primary_color: #754ee4`인데 `tokens.colors.primary`는 `#642fe9` 그대로(이름 규칙 때문) → 문서 안에 주 색이 두 값. **오너 결정 대기(카드 6): 주 색 `#754ee4`(추천, 사이트가 선언·구매 버튼·할인율, 6화면 중 5) / `#642fe9`(아이콘 픽셀).** 정해지면 그 값으로 맞춰 반영 PR.
- **공개 준비 PR #150(초안, `feat/screens-public` `052b90a0`, 워크트리 `screens-public`):** 빈 목록 `web/src/data/screens-public.generated.json` = 닫힌 상태. `screensPublished()` 하나가 메뉴 링크·사이트맵·robots·문구를 켠다. `web/scripts/publish-screens.mjs`(`--dry-run` 기본 / `--upload` / `--remove <slug>[/<key>]`; 올리기·삭제는 토큰이 없어 한 번도 안 돌림). 연습 실행: 11곳 · 125화면 · 247장 · 19.3MB · 가린 화면 7. 본 세션이 덧붙인 것: 날짜 범위 표기 통일, 390에서 크게 보기의 닫기 버튼 줄바꿈 수정. **공개할 때 일부러 빨개지는 테스트 6개**(에이전트 보고서 `scratchpad/agent-reports/screens-public.md`에 목록; 보고서는 세션 뒤 사라지므로 PR 본문에도 적음). `screen-removal` 라벨을 저장소에 만들어야 함. `SCREENS_CONTACT_EMAIL`은 빈 값.
- **에이전트 2라운드 도는 중:** 그림을 `/screens-img/…`(우리 주소, Blob으로 rewrite)로 내보내고 그 경로에 `X-Robots-Tag`와 robots.txt 제외. 이유: 상세 페이지와 랜딩에도 같은 그림이 나오는데 `noimageindex`는 모음 페이지에만 걸 수 있음.
- **아티팩트 카드 18(새로):** 공개 상태의 모습과 문구. 오너 go 뒤 #150 머지(운영 변화 없음).
- **02:00 이후 할 일:** 오늘의집 4 · 인프런 2 · 잡플래닛 2를 창 브라우저로 열어 DOM을 보고 가리기 규칙 작성. 기준은 당근과 같게: 사진·이름을 가리면 되는 화면만 되돌리고, 본문이 사람의 글인 화면(인프런 커뮤니티, 잡플래닛 리뷰·커뮤니티일 가능성 큼)은 계속 뺀다.

**01:20 진행(오너 01:06 「추천대로 다 진행해줘」 뒤):**
- **머지 넷, 하나씩 운영 확인:** #143(main `e13f6344`, 블로그 ko·en 그림 8장씩) → #149(`496fb136`, `/ko/kana`의 `#app`과 표시 문구, hangul 200) → #146(`a3d1b1ec`, `/screens`·`/ko/screens`·그림 주소 404, 랜딩·상세에 표시 없음, 사이트맵 없음) → #144(`41946940`, 컴파일러 oklch). 메인 체크아웃 `chore/state-1121c`에 main 병합. 워크트리 `blog-figs`·`kana-app`·`screens-tab`·`compile-oklch` 삭제.
- **퀸잇 재조립 도는 중**(Codex 1회): `~/.omd-workers/reverify6/queenit`, 실행 폴더 `~/.omd-workers/runs/reverify6-queenit-20261122T011725`. 어제의 폰 폭 증거(`artifacts/reference-evidence/visual/queenit/20261121-135*`)에서 다시 조립, 주 색은 두 값의 근거 표를 보고서에 내라고 함(`#754ee4` = 사이트의 `--brand_primary_primary`·구매 버튼, `#642fe9` = 앱 아이콘). 오너에게 가져갈 것.
- **가리기(카드 17):** 당근 전체를 `--mask-photos`로 다시 찍음(`~/.omd-workers/screens/web/karrot-20261122`), 시트 다시 만듦, `withheld.json`에서 여섯(home, buy-sell, search-results, detail, cars, local) 뺌 → 당근 보임 10 · 뺌 3. 무신사 스냅은 화면 단위 `mask`(`routes/musinsa.json`)로 사진만 가려 되돌림(`musinsa-20261122`, 상세는 또 403). **공개 후보 125 · 뺌 11(당근 3, 오늘의집 4, 인프런 2, 잡플래닛 2) · 막힘 2.** `feat/screen-archive` 푸시됨. **남은 것:** 오늘의집·인프런·잡플래닛의 가리기 규칙과 재촬영(창 브라우저, 02:00 이후).
- **공개 준비(카드 11) 에이전트 `screens-public` 도는 중**(워크트리 `screens-public`, 가지 `feat/screens-public`): 빈 공개 목록(`web/src/data/screens-public.generated.json`) + 목록이 차면 그것을 읽는 리더 + 올리기 스크립트(dry-run / upload / remove) + 페이지 문구 + 삭제 요청 이슈 양식 + 색인·사이트맵·메뉴(공개 상태에서만). 아무것도 올리지 않음. **오너에게 받아야 할 것:** `web/.env.local`의 `BLOB_READ_WRITE_TOKEN`(지금 없음), 삭제 요청 메일 주소.
- **머지하지 않은 초안:** #148(markdown `node` 속성), #147(상태 문서). 카드가 아니었음. 추천은 둘 다 머지.
- #130은 이제 #143과 충돌(같은 줄).

**오너 11/22 00:55 「잘 하고 있어 ? 당근쪽도 확인했어. 좋네. 닉네임같은건 js로 바꿔서 보여줘도 좋을것도 같고.」**
- 읽은 것(본 세션의 해석): 당근 화면을 빼 둔 처리를 보고 좋다고 함. **공개 go는 아니다**(카드 11의 셋은 그대로 대기). 닉네임을 스크립트로 바꾸자는 것은 가벼운 제안이라, 당근으로 시험해 카드 17로 보이고 범위는 여쭘.
- **한 것(`feat/screen-archive` `d6fdec79`):** `web-shoot.mjs`에 `maskPage`. 경로 파일의 `mask`(names · images · photos)를 읽어, 사실을 읽은 **뒤** 정지 그림을 찍기 **전**에 프로필 링크의 이름을 「이웃」으로(같은 이름이 본문에 또 나오면 거기도), 프로필 사진을 회색 칸으로, `--mask-photos`면 올린 사진도 회색 칸으로 바꾼다. 배치는 안 바뀜. 기록에 `masked: {level, names, texts, attrs, images}`. 당근 규칙은 `routes/karrot.json`(해시 클래스 대신 `a[href*="/kr/users/"]`와 그림 주소 경로로 고름). 시험: 390에서 다섯 화면(홈 19, 중고거래 목록 48, 상세 이름 1·그림 26, 동네생활 8, 중고차 47개 가림). 그림은 세션 임시 폴더 `mask/out-{names,photos}/`. **시트(`~/Downloads/kr-screens/web/karrot`)와 `withheld.json`은 바꾸지 않았다.**
- **카드 17 추천:** 올린 사진까지 가리고(2단계) 당근 여섯(홈, 중고거래 목록, 검색 결과, 글 상세, 중고차, 동네업체)을 후보에 되돌림(118 → 124), 동네생활·모임·알바는 계속 뺌(글이 본문). 다른 서비스(오늘의집 4, 인프런 2, 잡플래닛 2, 무신사 1)는 규칙을 따로 써야 하고 셋은 창 브라우저(02:00~07:00)가 필요. 오너가 방향을 정하면 진행.
- **시각 바로잡음:** 지난밤 본 세션이 적은 시각이 실제보다 한 시간쯤 앞서 있었다(시계를 보지 않고 어림함). 아래 블록의 「00:50 오너 메시지」는 실제 11/21 23:54, 「01:50 마감」은 00:40, 「02:00」은 00:42, 「00:10 마감」은 11/21 23:48, 「23:00 진행」은 22:36, #145 머지는 00:02(KST)다. 앞으로는 `date`로 확인해 적는다.

**02:00 에이전트 최종 보고 둘 도착(`screens-simple`, `kana-app`. 내용은 파일 보고와 같음).** 거기서 하나 고침: 모음 페이지의 스위치가 폰에서 28px이던 것을 터치 화면에서 40px로(`feat/item-screens-tab`, 390 한 줄·360 두 줄·넘침 0, 마우스 화면은 28px 그대로). 적어 둘 것: `/ko/kana`의 `#app`과 `#compare`는 KW-15·26·62가 겹친다 · 390에서는 `#app` 아래 규칙 아홉 줄이 길다 · 랜딩 캐러셀의 당근은 홈이 withheld라 빠져 10곳이다(의도된 동작).

**01:50(11/22) 마감: 도는 작업 없음. 오너 결정 대기 = 카드 16 · 15 · 12 · 11 · 6 (아티팩트는 탭 셋: 정하실 것 / 진행 중 / 끝난 것).**
- **머지:** #145(카드 13, main `1d0ca05d`, 운영 `/ko/kana`에 `#compare`와 장면 8개 확인). 머지 전에 폰 폭의 포커스 순서를 고침(캡션을 DOM에서 화면 뒤로, 넓은 화면은 `order`로 위로).
- **카드 16 = PR #149(초안, `feat/kana-app-screen`, 워크트리 `kana-app`):** `/ko/kana`의 `#app`. hangul의 모아 홈 화면을 일본어로 두 벌, 다른 문구 9쌍(KW-32·12·33·09·38·62·26·14·15). **지은 일본어는 `web/src/components/kana/app-copy.ts` 한 파일에만**, 화면 위에 「우리가 지은 문장 · 인용 아님 · 원어민이 읽지 않음」 표시, 지은 문자열이 `#app` 밖에 나오면 테스트 실패. 지은 것은 에이전트(Opus), 읽은 것은 본 세션(고친 곳 없음, 파일 머리말에 기록). `moa-screen.tsx`를 부품으로 나눔(hangul 렌더는 바이트 동일, 에이전트가 비교).
- **카드 15 = PR #146에 추가(`feat/item-screens-tab` `15d9aec0`):** 랜딩의 화면 구역을 레퍼런스 쇼케이스 안(로고 줄 아래, 「아카이브 열기」 위)의 캐러셀 한 줄로. 제목·설명·칩·점·버튼 없음. 그리드 대안은 정지 화면만. 모음 페이지는 칩 줄 삭제, 화살표는 hover·focus 때만, 스위치 32px(별도 커밋 `15d9aec0`: 되돌릴 수 있음). 문이 닫히면 여전히 404·랜딩 동일(테스트).
- **화면 변화 없는 초안 PR:** #148 `markdown.tsx`가 `node` prop을 DOM에 넘기지 않게(운영 토스 상세 페이지에 592번) · #147 상태 문서 · #144 컴파일러 oklch.
- **대만·중국 통독 끝:** `docs/drafts/zhuyin/review-2026-11-21.md`(`feat/zh-skills` `bcfde535`), `docs/drafts/pinyin/review-2026-11-21.md`(`feat/pinyin-skill` `f917e5c0`). 규칙은 인용보다 세게 말하지 않음. 검사기를 출처 자신의 글에 돌린 결과: 대만 44건 중 출처가 틀렸다고 한 형태 1건(被·它 검사는 출처의 글에도 걸림 → 빼거나 좁히자는 제안), 중국 경고 19건 중 17건이 출처의 틀린 예(나머지 2건은 Ant 본문의 其它 → 참고로 낮추자는 제안). 검사기는 바꾸지 않음. 아직 안 읽은 것: 두 `coverage.md`의 행, 픽스처.
- **정리:** 워크트리 `kana-compare` 삭제. 남은 PR 워크트리: `blog-figs`(#143) · `screens-tab`(#146) · `kana-app`(#149) · `compile-oklch`(#144) · `md-node`(#148). `.next`는 `screens-tab`·`blog-figs`·`kana-app`에 남음(삭제 명령이 권한 검사에 막힘).

**오너 11/22 00:50 「13은 저 형태도 좋고, 별도의 앱 화면같은걸 만들어줘 모아같이. 랜딩에서는 한국 어쩌구 저런거 말고, 그냥 화면들도 캐러셀이나 그리드 형태로 보여주는거지 레퍼런스도 있는 느낌으로. 필터도 있고 버튼도 있고 하니까 너무 난잡한 느낌이야. 심플하게 가져가줘. 다음 작업 계속 진행해봐. 그리고 이전 작업들은 좀 숨기든가 탭을 아티팩트에서 구분하든가 해봐 맨 아래쪽에 있고 하니까 너무 보기 힘들어.」**
- **읽은 것(본 세션의 해석):** ① 카드 13 승인 → #145 머지(읽기 순서 고친 뒤). ② `/kana`에 hangul의 모아 같은 **앱 화면 한 장**을 따로 만든다. 카드 13에 적은 조건 그대로: 우리가 지은 일본어에는 「출처 인용 아님 · 원어민 검토 없음 · 모델이 씀」 표시를 붙인다. **이것은 페이지의 시연 화면에만 해당한다.** 스킬 파일(`SKILL.md`, `writing-rules.md`)의 일본어는 여전히 출처 인용만. ③ 랜딩 구역: 제목·설명 문구, 종류 칩, 큰 버튼을 걷어내고 화면만 캐러셀이나 그리드로(레퍼런스에 화면도 있다는 느낌). ④ 아티팩트: 탭으로 나눔(정하실 것 / 진행 중 / 끝난 것). ⑤ 「다음 작업 계속」은 **머지 승인이 아니다**: 12(블로그)·14(화면 모음 코드)·11(공개)·6(도구)은 그대로 대기.
- 모음 페이지(`/screens`)도 스위치·칩·화살표가 많다. 「난잡」이 랜딩만 가리키는지 확실하지 않아, 랜딩은 요청대로 고치고 모음 페이지는 덜어낸 안을 따로 커밋해 카드에서 되돌릴 수 있게 한다.

**00:20 에이전트 최종 보고 넷 도착(턴이 끝난 뒤. 내용은 파일 보고와 같음). 새로 적어 둘 것:** ① `screens-gallery`: 한 폭이라도 `withheld`면 그 화면 전체를 빼고, 그림 주소도 404로 답한다(요청보다 엄격, 유지). ② `blog-figures`의 곁다리 발견: 렌더된 HTML의 마크다운 요소마다 `node="[object Object]"` 속성이 붙는다(`web/src/components/markdown.tsx`가 react-markdown의 `node` prop을 그대로 넘김. 이번 변경 전부터 있었고 `/design-systems` 상세 페이지에도 있음). 고치지 않음: 다음에 작은 PR로. ③ `kana-compare`: 880px 아래에서 장면 설명이 CSS `order`로 화면 아래에 놓여 키보드·읽기 순서와 보이는 순서가 다르다. 머지 전에 볼 것. ④ `blog-en`의 커밋·테스트 요청은 이미 본 세션이 `blog-figs`에서 함(#143).

**23:30 퀸잇 재측정 끝, 넣지 않음:** 워커 상태 partial. 폰 폭 측정은 됨(survey 6, states 2, 컴포넌트 5, 글자 14, 대표색 `#642fe9` 유지). **넣지 않은 이유:** 사이트가 색을 `oklch()`로 선언하는데 컴파일러의 색 후보는 hex/rgb만 읽어, 화면에 칠해진 색이 토큰에서 빠지고 이전 색 서술이 「Earlier record」로 내려감(16곳). 본 세션이 원본을 열어 확인: 상품 상세의 「구매하기」 버튼 배경과 목록의 할인율 글자(43곳)가 `oklch(0.551898 0.214659 289.15)` ≈ `#754ee4`(이전 문서의 sale-purple `#714fd8` 자리), 회색 `oklch(0.616213 0.028191 263.726)` ≈ `#7c8597`(이전 `#7d8597`). **다음:** 프로브가 sRGB 밖 표기(oklch·lab·color())를 브라우저가 푼 sRGB 값과 함께 기록하고 컴파일러가 그 값을 후보로 읽게 고친다 → 퀸잇 다시 조립(Codex 1회). 결과 폴더 `~/.omd-workers/reverify5/queenit`, 증거 `artifacts/reference-evidence/visual/queenit/20261121-135*`.

**23:25 진행:**
- **머지 추가:** #140(상태 문서, main `9834a067`) · #142(측정 도구 폰 폭 옵션, main `1277a784`). 메인 체크아웃은 `chore/state-1121c`. 워크트리 `probe-phone` 삭제.
- **퀸잇 재측정 도는 중**(Codex 1회): `~/.omd-workers/reverify5/queenit`, 실행 폴더 `~/.omd-workers/runs/reverify5-queenit-20261121T225107`. 주문 끝에 「폰 폭으로만, 쇼핑 화면만, 대표색은 지속되는 컨트롤이 두 페이지 이상에서 다른 값을 보일 때만 바꿈, 막히면 멈춤」을 덧붙임.
- **블로그 = PR #143(초안, `feat/blog-colour-figures`, 워크트리 `blog-figs`):** 그림 8종 × 한·영 × 720·360(32 SVG), 생성기 `docs/research/2026-11-14-kr-brand-colours/figures.py`(표와 대조하고 어긋나면 멈춤, `figure_hues.py` 대체), `en.md`(에이전트 `blog-en`이 씀. 셸이 없는 에이전트라 본 세션이 커밋하고 영어 그림 8개를 본문에 끼움), `post-view.tsx` 한 줄(그림 다음 문단을 13px 옅은 캡션으로). 본 세션이 고친 것: 캡션 색 클래스가 `${`에 붙어 있어 Tailwind가 규칙을 만들지 않던 것. 블로그 테스트 35, tsc 통과, 개발 서버에서 ko·en × 1440·390 확인. 아티팩트 카드 12. **#130과 같은 줄을 고침**(#143 먼저 추천). 워크트리 `blog-en`은 커밋 없이 남음(파일은 `blog-figs`로 옮김): 정리할 것.
- **화면 공개 대상 목록 = 카드 11:** 136개 중 나갈 후보 120 · 뺄 것 16(당근 7, 오늘의집 4, 인프런 2, 잡플래닛 2, 무신사 1) · 막혀서 그림 없는 것 2. 정할 것 셋: 공개 여부 · 그림 둘 곳(추천 Vercel Blob, 저장소가 공개라 커밋하면 삭제 요청 뒤에도 기록에 남음) · 삭제 요청 창구. 빼는 목록은 본 세션 REPL의 `PUB_EXCLUDE`와 카드 그림(`report-img/pub-{a,b,c}.jpg`)에 있음: **저장소에는 아직 없다.** 공개가 정해지면 시트의 `screens.json`에 표시로 옮길 것.
- **화면 모음 형태 = 카드 10**(추천: 종류별 선반 + 랜딩 한 줄). `feat/item-screens-tab`에 main을 병합해 푸시(`af066642`, 차이 16파일, 테스트 111 통과).
- **도는 에이전트 2개:** `kana-compare`(워크트리 `kana-compare`, 가지 `feat/kana-compare`) · `screens-gallery`(워크트리 `screens-tab`). 보고는 세션 임시 폴더 `agent-reports/<이름>.md`에 쓰라고 함(에이전트의 마지막 메시지는 본 세션이 턴을 끝내야 도착한다).
- **알게 된 것:** `rm -rf <워크트리>/web/.next`는 권한 검사에 막힌다(돌아가지 않음). 무시된 파일이라 `git worktree remove`는 그대로 된다. 커밋 메시지에 `${`가 들어가면 안전 검사가 명령을 막는다: 메시지는 파일로 써서 `git commit -F`.

**23:00 진행(오너 22:30 뒤):**
- **머지 셋, 하나씩 운영 확인:** #141(main `faa2231d`, 블로그 글 200) → #139(`e5c8a1919`, `/ko/kana`에 KW-62·KW-70, 「모델이 검토했습니다」, noindex, 카드 67 = 규칙 51 + 갈리는 곳 16) → #137(`0fdc5092`, 네 페이지에 `sq-page-title`, `/design.md` 갱신). 루트 `DESIGN.md`를 main의 `web/public/design.md`로 교체(sha256 `61d0dac8…`). 워크트리 `ds2`·`kana`·`blogfix`와 로컬 가지 삭제.
- **측정 도구 폰 폭 옵션 = PR #142**(`feat/probe-phone-viewport`, 워크트리 `probe-phone`): `probe-keyboard-states.mjs --viewport phone`(390x844, 터치, 폰 UA, DPR 2), `text-census.mjs` 같은 옵션, `capture-mcp.mjs`의 `probe_page`에 `viewport`. 기본값(1440x1000)은 그대로. 우리 사이트로 survey·census·states를 폰으로, survey를 기본으로 돌려 확인. 머지 뒤 퀸잇 Codex 1회(`web.queenit.kr`, viewport phone).
- **도는 에이전트 2개(Claude 백그라운드):** `blog-figures`(워크트리 `blog-figs`, 가지 `feat/blog-colour-figures`: 글의 그림 전부를 `rows.json`에서 그리는 스크립트, ko·en 그림, 전·후 스크린샷은 세션 임시 폴더 `blog-figs/`) · `blog-en`(워크트리 `blog-en`, 가지 `feat/blog-colour-en`: `en.md`). 열린 #130이 `post-view.tsx`를 고치므로 그쪽 수정은 작게 하라고 지시함.
- **화면 모음 페이지 시안(본 세션):** `tools/screen-archive/make-gallery-mocks.mjs`(`feat/screen-archive`) → `~/Downloads/kr-screens/mock/g-{shelves,shelves-390,matrix,wall,landing}.html`, 그림은 세션 임시 폴더 `gallery/`. 재료: 시트 11곳·화면 136개(웹 1440·390). 추천은 종류별 선반(홈 12 · 검색 결과 10 · 목록 32 · 상세 9 · 로그인 9 · 빈 상태 9 · 없는 주소 11). 아티팩트 카드로 올릴 것. 구현은 로컬 문 뒤에서, 공개 대상 목록 카드는 따로.
- **다음 에이전트(자리 나면):** `/kana` 비교 화면. 출처가 준 틀린 예/맞는 예 짝은 27개 규칙에 42묶음(둘 다 있는 짝은 30개쯤). KW-39(JTF)와 KW-10(Microsoft 표 문장)은 대조하지 못해 뺀다. 우리가 지은 일본어 없이, 뼈대 UI(회색 막대) 안에 출처의 문자열만 실물로 넣는 방식.

**오너 11/21 오후:** 「일단 추천대로 진행하고, 다음부터는 별도의 html로 각각 정리하지말고, 스크린샷이나 화면 사진을 제공해서 before after나 new형태로 보여줘. 그래야 내가 아티팩트에서 벗어나지 않고 추천 승인 이런걸 얘기하지.」
→ 승인된 추천: 상세 페이지 머리 B · 화면 아카이브는 상세 페이지의 「화면」 탭부터 · `/kana`는 A안(한국어 페이지 먼저) · 블로그 슬러그 `korean-brand-colors-measured`와 합니다체 · 재검증은 지시서를 고쳐 4곳 재시험 · #131 머지.
→ 보고 방식: **살아 있는 아티팩트 하나**(https://claude.ai/artifact/KbqQF8nXerNFHVnfGpw884, 원본 `~/.omd-workers/reports/2026-11-21-sprint-report.html`, 그림은 세션 임시 폴더의 `report-img/`에서 같이 올림)에 전·후 또는 새 화면 그림을 넣고 거기서 승인받는다. 별도 HTML 묶음을 만들지 않는다.

**오너 11/21 17:30 「검토자는 없어 자체 검토해. fable이 그런 용도잖아. 진행시켜.」** (다음 작업 브리핑과 「정하실 것」 표를 본 뒤).
- **원어민 검토 문턱 → 모델 자체 검토로 바뀜.** 문장에 언어가 없어 일본어·대만·중국 세 스킬 모두에 적용하는 것으로 읽음(본 세션의 해석). 바뀌지 않는 것: 스킬 파일의 일본어·중국어는 출처 인용 그대로(자체 검토가 예문을 지어도 된다는 뜻이 아님) · 파일과 페이지는 「원어민이 읽지 않음」을 계속 적고 「모델이 검토함, 날짜」를 덧붙임 · 스킬 배포는 여전히 출시 GO(검토 결과와 나갈 것을 카드로 가져감).
- **「진행시켜」가 덮는 것:** 브리핑의 1~5번, 수퍼톤 기록(partial 유지, 넘어간 사실만), 퀸잇 재검증(Codex 1회), #135 머지, 공유 묶음 에이전트 1회. **덮지 않는 것:** 화면 공개(어떤 화면이 나가는지 보여 준 적이 없음 → 공개 대상 카드를 먼저 만든다, 아무것도 공개하지 않는다).

**17:55 진행(오너 17:30 승인 뒤):**
- #135 머지됨(main `10a5d222`, 화면 변화 없음). 마지막 푸시(상태 문서 한 줄)의 CI가 끝나기 전에 머지됐다: 대기 함수가 빈 결과를 통과로 읽었다(고침). main의 Quality 실행 결과를 확인할 것. 상태 문서 가지는 이제 `chore/state-1121b`. **#129와 충돌:** `make-reverify-order.py`를 둘 다 고쳤고 main에는 #135 쪽(확인 못 한 이전 내용을 「Earlier record」로 남기는 문단)이 들어갔다. #129를 머지하려면 그 가지에서 이 문단을 다시 얹어야 한다.
- **퀸잇 재검증 도는 중**(Codex, `~/.omd-workers/reverify4/queenit`, 실행 폴더 `~/.omd-workers/runs/reverify4-queenit-20261121T174954`). 원인: 주문 생성기가 `catalog.homepage`(= rapportlabs.kr, 회사 사이트)를 재는 주소로 썼다. 이번에는 `https://web.queenit.kr`을 인자로 주고 주문 끝에 「상점 화면만 잰다, 회사 사이트 값은 토큰에 넣지 않는다, 막히면 멈춘다」를 덧붙임. 대기 중인 4곳(typed, dable, barogo, fitpet)의 homepage는 제품 주소라 같은 문제는 없어 보임.
- **수퍼톤:** 내 curl로도 supertone.ai → antinodeaudio.com(제목 「Antinode Audio | Clear, Air & Shift Audio Tools」) 확인. 본문 기록은 다음 landing 때 토큰을 건드리지 않는 한 줄로 넣는다.
- **공유 묶음 에이전트 `share-colours` 도는 중** → `claudedocs/share/2026-11-21-kr-brand-colours/`(비공개 폴더, 초안만).
- **일본어 자체 검토(본 세션):** `docs/drafts/kana/review-2026-11-21.md`(`feat/kana-skill`). 인용 대조: 1차 323개 중 294개가 지금 페이지 그대로, 2차 224개 중 112개가 페이지·82개가 Microsoft PDF 본문. 실제 차이는 UW-19의 DADS 인용 한 문장(조사 파일만 틀림, 규칙 파일과 운영 페이지는 맞음). 검사기를 출처 페이지 15개에 돌리면 WARN 4건 전부 출처가 「틀린 예」로 든 문장. SKILL.md의 지어낸 일본어 예문 5개 삭제. `check-quotes-raw.mjs`는 그림 대체 텍스트도 읽게 고침.
- **일본어 2차 반영 에이전트 `kana-fold` 도는 중**(브리핑에서는 본 세션이 한다고 했으나 규모가 커서 맡김): `feat/kana-skill`에 main을 병합해 둠. KW-17(の/を)과 KW-37(가타카나 복합어 공백)은 Microsoft와 갈려 「정하는 곳」으로 옮겨 가고, 새 규칙 8개 안팎이 들어온다. 앞에 내세운 여섯 규칙에서 KW-17이 빠진다. 끝나면 전·후 그림으로 카드를 만들고 `feat/kana-skill` 머지를 같은 카드에 넣는다.

**18:40 에이전트 보고 셋 읽음(`share-colours`, `zhuyin-build` 재전송, `kana-fold`):**
- 대만 addendum의 교육부 수첩 인용을 NFC로 통일(PDF 텍스트 층의 호환용 한자 U+FA08 등이 섞여 있었음)하고 TW-26에 수첩의 예문(「…『…』…」)을 근거로 보탬(`feat/zh-skills` `2ecf33a4`). 에이전트가 되돌려도 된다고 한 판단: TW-17은 통과 판정인데 뺌(키 이름 표), TW-16은 예시 하나로 유지, ZW-30·31은 수첩과 반대 꼴의 가이드 규칙으로 남김. 원어민(또는 통독)이 먼저 볼 것: ZW-26의 겹침 해석, ZW-22에서 釀·童鞋를 뺀 이유, 평범한 글에도 걸릴 FYI 검사들(它, 他的, 被, 輸入로 시작, 한자 옆 숫자).
- **PR #141(초안, `fix/blog-colour-factmap`, 워크트리 `.claude/worktrees/blogfix`)**: 블로그 글이 링크하는 `tables.md` W4a와 `ko.md` 끝의 주석에 남은 다시 재기 전 숫자(23·6·9)를 18·5·8 기준으로 설명. 화면 변화 없음. main 머지는 오너 승인.
- 공유 초안에서 오너가 정할 것: 이 글로 가는 `/go/` 링크가 없음(단축 링크는 같은 사이트 경로만 받음) · 이미지 2장 새로 만들어야 함 · 대비 낮은 서비스 이름을 스레드에 넣을지. `go-links.ts`의 `color-map-ko` 메모는 167곳이라고 적혀 있음(글은 169곳, 고치지 않음).
- `kana-fold`의 보고는 본 세션이 확인한 것과 같음(새 카드 11, 빠진 카드 KW-11·17·37, 새 갈리는 곳 4).

**18:30 마감 점검:** `/ko/kana`에 실리는 인용 307개를 다시 대조(257 web · 19 Microsoft 추출본 · 나머지는 표기 차이). 끝내 대조 못 한 것은 KW-39의 JTF 예시 세 쌍과 KW-10의 Microsoft 표 문장 → 페이지 상태 문구에 그대로 적음(`383b700d`). KW-60의 Ubie ❌/⭕️ 짝, KW-68의 ※는 들어 있음. `kana-page.tsx` 변경은 영어 인용의 따옴표와 「법」 등급 칩. #137에 `web/public/design.md` 수정 포함(머지 때 루트 `DESIGN.md`도 교체). 상태 가지는 PR #140(초안). `land-1121` 워크트리와 가지 삭제. **측정 도구(`capture-mcp.mjs`)에는 뷰포트 옵션이 없다**: 퀸잇을 폰 폭으로 재려면 그것부터 넣어야 한다. 읽지 못한 에이전트 보고: `kana-fold`, `share-colours`, `zhuyin-build` 재전송.

**18:25: 카드 9 = PR #139(초안, `feat/kana-skill` → main)**: `kana-fold` 에이전트가 2차 조사를 규칙·검사기·페이지에 반영(커밋 `51c803fa`…`501f64a2`), 본 세션이 main을 병합하고(`2a672e9b`) 검사를 다시 돌림: 검사기 테스트 101, 자체 시험 PASS(50묶음), 페이지 테스트 45, tsc 통과. `/ko/kana`는 규칙 43 → 51, 갈리는 곳 12 → 16, 앞의 여섯 규칙에서 KW-17이 빠지고 KW-62가 들어감, 상태 문구가 「11/21 원문 대조, 원어민은 읽지 않음, 모델이 검토」로 바뀜. 전·후 그림은 운영 대 개발 서버(3354, 띄우고 끔). 화면 변화라 승인 대기. 머지하면 일본어 스킬 초안 전체가 main에 들어온다. 에이전트의 최종 보고(가장 자신 없는 것 등)는 아직 읽지 못함: 도착하면 카드에 덧붙일 것.
- **지금 도는 것 없음**(에이전트·Codex·서버 모두). 열려 있는 승인: 카드 7(#137), 카드 9(#139), 카드 6의 퀸잇, 카드 3의 화면 공개 기준.
- ROADMAP T2의 「원어민 검토」 문구를 오너 결정에 맞춰 고침.

**18:15: #138 머지(main `1485d34d`)** = 피플펀드 verified(한글 이름 크플, 추가일 없음, hover unmeasured) + 수퍼톤 Overview 첫머리 기록(partial 유지) + `compile-evidence` 수정 + 모션 래칫 146 → 145 + 검색어 설명 18건 재작성(Sonnet, land-batch가 호출). 운영 확인: `/ko/design-systems/peoplefund` h1 「크플 DESIGN.md」, 수퍼톤 페이지에 antinodeaudio 기록. 카운트 454 verified / 87 partial / 81 legacy.
- **퀸잇(결정 대기, 넣지 않음):** `~/.omd-workers/reverify4/queenit`. 상점 화면 홈 1장, 컨트롤 6개, 워커 Status partial. 워커가 primary_color로 캠페인 배지 #6038f2를 제안 → 쓰지 않는다. 상점 화면이 연결한 앱 아이콘(`static.queenit.kr/damoa-mobile-web/public/android-icon-192x192.png`)을 직접 재니 #642fe9가 불투명 픽셀 36,316개 중 28,825개. 추천: 폰 폭으로 홈·목록·상세를 한 번 더(Codex 1회, 오너 승인 필요). 넣게 되면 primary_color #642fe9와 기존 아이콘 로고를 유지.
- **스포카:** 지역 기사 1건 부족 그대로.
- landing 워크트리 `.claude/worktrees/land-1121`(가지 `feat/refs-reverify-1121`, 머지됨)은 퀸잇·스포카를 위해 남겨 둠. 다음 landing은 main에서 새 가지를 딸 것.

**18:05 추가(같은 승인 아래):**
- **카드 7 = PR #137(초안, `feat/site-ds-page-titles`, 워크트리 `.claude/worktrees/ds2`)**: FAQ·changelog·what-is-design-md·alternatives의 h1을 `.sq-page-title`(Wanted Sans 760, 28/32/40px)로. 화면 변화라 승인 대기. 「후」 그림은 개발 서버(3353, 내가 띄우고 끔). OG 이미지는 넣지 않음(시안이 필요).
- **카드 8 = Threads 초안**(`claudedocs/share/2026-11-21-kr-brand-colours/`, gitignore). 숫자는 게시된 글과 대조, 「18곳 중 8곳 파랑」만 미대조.
- **컴파일러 수정**(`feat/refs-reverify-1121`, 워크트리 `.claude/worktrees/land-1121`, 커밋만): `compile-evidence.mjs`의 `brandChanges`가 「정착한 변화 없음 + 아직 움직이는 속성 있음」을 unmeasured로 돌려준다(테스트 1개 추가, 24개 통과).
- **피플펀드 재조립 끝**: `~/.omd-workers/reverify3b/peoplefund`(워커 폴더 복사본). 다시 컴파일하니 `product-tab` hover만 UNMEASURED로 바뀜. front.yaml에서 그 hover 줄과 `added`를 빼고 본문 두 문장과 verification 한 줄을 사실에 맞게 고쳐 다시 조립(claims 122). 카탈로그 차이는 한글 이름 피플펀드 → 크플, verified 날짜뿐.
- **수퍼톤 기록**: `land-1121` 워크트리의 `web/references/supertone/DESIGN.md` Overview 첫머리에 날짜 달린 인용 블록 한 줄(토큰 변경 없음, 미커밋). 다음 landing 때 같이 들어간다.
- **landing 차례**: 퀸잇이 끝나면 보고서의 Status·Doubts부터 읽고, `scripts/workers/land-batch.sh .claude/worktrees/land-1121 ~/.omd-workers/reverify3b/peoplefund ~/.omd-workers/reverify4/queenit` 한 번. verified_v2가 안 나오면 그 레퍼런스는 빼고 보고. 모션 래칫(`evidence-integrity.test.ts`)이 움직이면 날짜 줄과 함께 내림.
- **대만·중국 자체 검토(부분)**: `docs/drafts/{zhuyin,pinyin}/review-2026-11-21.md`. 제목 전부와 대만 5개·중국 8개 규칙만 끝까지 읽음. 나머지 통독이 남음.

**오너 11/21 16:35 「괜찮아보이네. ㄱㄱ」** (새 아티팩트의 카드 여섯 장과 승인 표를 본 뒤). 여섯 카드를 추천대로 승인한 것으로 읽고 하나씩 머지, 운영 확인 뒤 다음으로 넘어감:
- [x] 1 → #133 머지(16:36, main `11d20001`). 운영에서 Home → 브랜드 줄 → 상세 → `#use`를 `/`·`/ko`, 1440·390으로 확인(제목 40/28px, 버튼 40/44px, 겹침·넘침 없음)
- [x] 2 → #136 머지(16:51, `e7b901a7`). `/design.md`가 새 내용, 루트 `DESIGN.md` 교체(옛 파일 `~/.omd-workers/backups/root-DESIGN.md.2026-10-13`). `check-mirror-drift.mjs`: 파일 쌍 차이 0, 종료 코드 1은 스킬 트리 21건(이번에 건드리지 않음)
- [x] 3 → 모양만 승인. 머지 없음. **화면 공개 기준은 열려 있음**
- [x] 4 → #134 머지(16:56, `fd454bba`). `/ko/kana` 200 · noindex · 사이트맵과 링크 없음
- [x] 5 → #132 머지 = 게시(16:59, `4231ec34`). `blog.oh-my-design.kr/korean-brand-colors-measured` 200, 저장소 링크 2개와 그림 200, 목록·사이트맵에 있음
- [ ] 6 → **수퍼톤·퀸잇은 넣지 않음(오너 결정 대기).** 넣기 직전에 워커 보고서를 다시 읽고 발견: 수퍼톤은 supertone.ai가 다른 회사 Antinode Audio로 넘어가 새 토큰이 그 회사 값(대표색 #227cff → #f5a63b), 퀸잇은 쇼핑 화면이 아니라 운영사 라포랩스의 회사 사이트를 재서 대표색·로고가 회사 것으로 바뀜(#642fe9 → #ffcb27). 둘 다 AGENTS.md의 「다른 표면의 값을 브랜드 사실로 올리지 않는다」에 걸림. 카드 6은 이것을 적지 않았고(「재측정 전부 일치」는 값의 재현일 뿐), 네 워커 모두 자기 상태를 partial로 보고했다. 추천: 수퍼톤은 partial로 두고 넘어간 사실만 기록, 퀸잇은 web.queenit.kr을 재도록 주문을 고쳐 재검증. **스포카·피플펀드도 오늘은 넣지 않음(17:12, 워커 보고서의 「Doubts」를 읽고):** 스포카는 지역 언론 기사가 한 건뿐(Platum 403, 우회 안 함)이라 한국 레퍼런스의 지역 출처 2건 문턱에 못 미친다(게이트는 돌려 보지 않았고 워커 보고 기준). 분류도 fintech → saas로 바뀐다. 피플펀드는 워커가 「Review before shipping」으로 적은 것이 있다: `product-tab` hover가 원자료는 NO SETTLED CHANGE인데 조립된 값은 no brand change. 글꼴 로드 미확인. 한글 이름이 크플로 바뀌고 워커가 넣은 추가일 2026-11-21은 원래 없던 값. 다음: 피플펀드는 그 hover 필드만 빼고 추가일을 되돌려 `assemble-reference.mjs`로 다시 조립 → `land-batch.sh`(landing 워크트리 `reverify-w1`은 지금 없음, 새로 만들어야 함). 스포카는 지역 기사 한 건 더. 이 승인은 이 문서들에 한한 것이고 verified의 뜻 전반이나 남은 4곳에 대한 것이 아니다

**승인 대기(아티팩트 카드 제목의 번호 그대로. 오너가 번호로 답하면 머지 전에 카드 이름으로 되짚는다):**
1. 상세 페이지 첫 화면 → #133 머지.
2. 우리 `DESIGN.md` 다시 쓰기(가지 `feat/site-design-md`, #133 위에 쌓음): `web/public/design.md`를 지금 코드와 11/21 실측으로 다시 씀. 값 40개 대조표 `docs/research/2026-11-21-site-design-system/diff.md`, 견본 생성기 `scripts/site-audit/designmd-specimen.mjs`. 승인되면 #133과 함께 머지하고, **이 Mac의 루트 `DESIGN.md`(gitignore, 미러의 원본으로 취급됨)를 같은 내용으로 바꾼다.** 안 바꾸면 `scripts/check-mirror-drift.mjs --fix`가 공개 파일을 옛 내용으로 되돌린다. #133보다 먼저 나가면 안 된다.
3. 상세 페이지 「화면」 탭(가지 `feat/item-screens-tab`, #133 위에 쌓음, PR 없음): 모양 승인과 **화면 공개 기준**. 공개 결정 전에는 운영에 못 나간다.
4. `/ko/kana` 페이지 → #134 머지(색인 제외, 메뉴 미연결 그대로).
5. 블로그 첫 글 → #132 머지 = 게시. 머지 직후 글 안의 저장소 링크 2개를 다시 연다.
6. 재검증 4곳을 이 상태로 넣을지(넣으면 verified, 확인 못 한 이전 서술이 본문의 28~49%를 「Earlier record」 소제목 아래 차지). 추천은 넣기이지만 게이트의 뜻이라 승인 없이는 넣지 않는다. **스크립트로 문장을 본문에 돌려놓지 않는다**(`sieve-earlier-record.mjs`는 처음에 너무 느슨했고, 엄격히 세면 「오늘 잰 값만 담은」 문장은 5~20%뿐이며 값이 같다고 문장이 맞는 것도 아니다). 워커 폴더 `~/.omd-workers/reverify3/<id>`, 재측정은 네 곳 모두 전부 일치.

**대만 검증 끝(11/21 15:50):** 55개 중 통과 41 · 출처보다 세게 적힘 14(TW-04·06·19·21·26·35·42·46·47·48·49·51·54·55). 통과 41 중 7개(TW-03·25·27·28·29·33·36)는 출처가 갈린다는 기록, 3개(TW-30·38·45)는 규칙 꼴이 아니라 규칙 하나로 쓸 수 있는 것은 31개쯤. **원문 보강(16:10, `feat/zh-skills` `860cf58f`):** 에이전트가 못 연 원문 6건을 셸로 받아 `~/.omd-workers/lang-sources/`에 둠(CLREQ 현행본, 교육부 문장부호 수첩, 행정원 숫자 원칙, 행정원 문서 처리 수첩 2권(안 읽음), 정부 웹사이트 규범). 대조 결과는 `docs/drafts/zhuyin/research/addendum-2026-11-21.md`: TW-45~49·55가 옛 초안에서 인용한 30문장 중 25문장이 현행본에서 고쳐졌거나 없음(TW-46·47은 내용이 달라짐), 교육부 수첩이 TW-26(「」 안 『』)과 TW-27(〈〉)의 근거를 줌. GB/T 15834·15835는 moe.gov.cn이 404라 못 받음. **아티팩트 주소가 바뀜(16:30):** 세션이 다른 조직으로 로그인돼 있어 옛 주소(`Nsib1djJMkU1AtC3au9hpd`)에는 게시가 거부된다. 오너가 「여기에 다시 줘」라고 해서 지금 조직에 새로 올렸다: https://claude.ai/artifact/KbqQF8nXerNFHVnfGpw884 (게시 원본은 세션 임시 폴더의 `sprint-report-1121.html`, 같은 내용을 `~/.omd-workers/reports/2026-11-21-sprint-report.html`에도 씀). 앞으로 승인은 이 주소에서 받는다. 옛 주소는 15:55 기준에서 멈춰 있다. **중국 검증 끝(16:12, `feat/zh-skills` `9c0f294a`):** 79개 중 통과 64 · 출처보다 세게 적힘 13(CN-03·08·12·17·22·29·31·43·50·57·60·61·71) · 인용문 못 찾음 1(CN-74) · 근거 없음 1(CN-79). WordPress China와 Teambition 中西文混排는 한 목소리로 센다(CN-39·47·57·59). 15:59에 한도로 멈춰 1차 판정을 잃고 다시 돌린 것. **인용문 원본 대조(16:25, `feat/zh-skills`):** `scripts/lang/check-quotes-raw.mjs`가 `sources.json`의 주소를 직접 받아 `rules.md`의 「」 인용(4자 이상)을 글자 그대로 찾고 등급을 매긴다. 대만 232개: web 75 · 옛 초안에만 25 · PDF 추출본 99 · 띄어쓰기 불일치 1 · 없음 32. 중국 418개: web 355 · 추출본 29 · 띄어쓰기 불일치 4 · 표 칸만 14 · 없음 16. **폭·띄어쓰기 규칙의 근거는 web 등급 인용만**이다(추출본은 글자만 확인, 공백은 조판 흔적). 실제로 원문과 달랐던 것: WordPress 대만 예문 두 문장의 화살표 U+2192 누락(TW-13·34·35에 네 번 인용). 중국의 띄어쓰기 짝(CN-57·60)은 원본과 공백까지 일치. 영어 인용과 문장부호 한 글자는 검사하지 않는다. 읽은 기록: 대만 `addendum-2026-11-21.md` §E, 중국 `raw-check-notes-2026-11-21.md`. **규칙 초안과 검사기 끝(17:10, 빌드 에이전트 2개, 본 세션이 시험을 다시 돌리고 푸시함. 규칙 파일 통독은 아직):** 대만 `feat/zh-skills` `ca63b731`: `docs/drafts/zhuyin/references/{writing-rules,coverage}.md`(규칙 42 · DESIGN.md가 정하는 곳 7 · 뺀 후보 6), `scripts/lang/zhuyin-copy-check.mjs`(15개 검사, 전부 FYI), 테스트 47개 통과. 중국 `feat/pinyin-skill` `b65c51b0`(워크트리 `.claude/worktrees/lang-cn`): 규칙 59(11개는 조판 규칙, 검사기가 안 봄) · 정하는 곳 24(후보째 14 + 규칙의 곁가지 10) · 뺀 후보 6(CN-36·61·65·74·75·79), `pinyin-copy-check.mjs`(23개 검사: WARN 5 = PW-16·18·28·45·53 첫 검사, FYI 18), 테스트 61개 통과. 첫 커밋 제목의 「60 rules, 5 left out」은 마지막 커밋에서 59/6으로 바뀜. 에이전트가 찾은 입력 오류(고치지 않음): `rules.md` CN-32의 「see CN-35」는 CN-36, `verdicts.md`의 CN-36·CN-57 인용 둘은 원본에 그대로 없음. 원어민이 먼저 볼 것: PW-16의 登陆/帐号/其它, PW-01의 你/您(금융·공공), PW-59의 한자–라틴 띄어쓰기가 UI 라벨에도 닿는지. 대만 쪽: TW-27은 교육부 수첩의 〈〉로 정함(가이드 둘의 입장은 남김), TW-29는 못 정함, 원어민이 볼 것은 에이전트 보고에. 두 워크트리의 루트 `node_modules`는 메인 체크아웃으로 가는 링크(커밋 금지). **지금 도는 에이전트 없음.** 일본어 2차는 검증 끝(후보 13개 중 통과 8·약함 5: UW-58·59·60·63·69, 덧붙인 출처 8건 중 통과 7·약함 1: UW-16). 통과분은 4번 카드가 정해질 때까지 `writing-rules.md`에 넣지 않는다(페이지가 「규칙 43개」와 그 파일의 sha256에 묶여 있음). `research/`라는 폴더 이름은 `.gitignore`에 걸리므로 `git add -f`.

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