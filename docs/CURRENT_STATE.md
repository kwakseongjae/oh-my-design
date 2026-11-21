# CURRENT STATE — 단일 복원 지점

이 파일은 짧게 유지한다. 세션을 복원할 때 `scripts/context_restore.sh`가 이 파일의 앞부분(약 5KB)만 낸다.
새 일이 생기면 「지금」 블록을 고쳐 쓰고, 날짜 절은 최근 것만 아래에 둔다. 오래된 절은 `docs/archive/state/`로 옮긴다.
방향과 트랙은 `docs/ROADMAP.md`, 오너에게 묻는 것과 묻지 않는 것은 `docs/AUTONOMY_LOOP.md` §1–2에 있다.

## 지금 (2026-11-22 01:50) — 머지 넷 끝 · 오너 결정 대기: 카드 6(퀸잇 주 색) · 카드 18(공개 모습, PR #150) · 카드 11(Blob 토큰, 메일) · 에이전트 screens-public 2라운드 도는 중 · 02:00 이후 창 브라우저로 세 곳 가리기

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