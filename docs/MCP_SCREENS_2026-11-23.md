# MCP 화면 도구 — 화면과 그 화면을 만들 측정값을 함께 주는 도구 4개

작성 2026-11-23 · 관련: `docs/MCP_V2_SPEC_2026-10-29.md`(이 문서는 그 §11), 코드 `web/src/lib/mcp/screens.ts`

## 0. 요약

- 공개한 서비스 화면(`/screens`)을 MCP로도 줍니다. 도구는 읽기 전용 4개입니다: `list_screen_types`, `search_screens`, `get_service_screens`, `get_screen_context`.
- 다른 화면 MCP는 화면 그림과 설명을 줍니다. 우리는 **그 화면을 만든 서비스의 DESIGN.md 측정값을 근거와 함께** 같이 줍니다. 화면마다 DESIGN.md 색 토큰 중 정확히 같은 값이 그 화면에 있었는지가 매니페스트에 기록되어 있어서, 이 다리가 가능합니다.
- 화면 수와 서비스 수는 도구 설명·문서에 적지 않습니다. 매주 늘어서, 응답의 `screens.services`·`screens.screens`가 그때의 수를 알려 줍니다.

## 1. §3·D6과의 관계

v2 명세 §3과 §10 D6은 "시각 근거(스크린샷·영상)는 게재 정책 결정 뒤"로 미뤄 두었습니다. 그 정책은 2026-11-22 오너가 정했고(공개 범위: Blob 저장, 첫 화면, 닉네임·올린 사진 가림, 권리·삭제 요청 문구), 화면은 2026-11-23 공개되었습니다(#157). 2026-11-23 오너 방향(「모빈과 refero mcp를 능가하는 형태를 무료로」)에 따라 MCP도 같은 공개 범위 안에서 화면을 줍니다. 공개 페이지에 없는 것은 MCP도 주지 않습니다.

## 2. 데이터 출처와 규칙

- **읽는 것은 커밋된 매니페스트 하나**(`web/src/data/screens-public.generated.json`, `lib/screens/manifest.ts`로 읽음, 파일 시스템 접근 없음). 매니페스트에 없는 화면은 없는 것입니다. 레퍼런스 id가 아닌 서비스는 뺍니다(갤러리와 같은 규칙).
- **빈 매니페스트(닫힌 상태)**: 네 도구 모두 오류 없이 빈 결과와 `screens.published: false`, `message`, `absent: ["screens"]`를 돌려줍니다. 레퍼런스 도구는 그대로 답합니다.
- **모르는 값은 비웁니다.** 촬영일이 없으면 `provenance.shot`을, 작은 그림이 없으면 `images.<device>.thumb`을, 한글 이름이 없으면 `display_name_ko`를 빼고 `absent`에 적습니다. `null`은 내보내지 않습니다.
- **화면마다 붙는 것**: 서비스(id, 이름, 국가, 분야, 검증 상태와 `trust`), 촬영일, 로그아웃 상태, 가림 여부(`masked`, 가렸으면 페이지와 같은 문장), 권리 문장(페이지 문구 `components/screens/notice-copy.ts` 그대로), 삭제 요청 주소(서비스가 채워진 GitHub 양식), 그림 주소, 그 화면을 여는 페이지 주소.
- **그림 주소**는 우리 주소만 씁니다: `https://oh-my-design.kr/screens-img/<id>/<width>-<key>.jpg`(원본)과 `.thumb.jpg`(작은 그림). 저장소 호스트는 응답에 나오지 않습니다(테스트가 확인). 페이지 주소는 `/screens/<id>?device=<mobile|desktop>#<key>`와 `/ko/screens/…`입니다.
- **사용 안내 한 문장**이 모든 화면 도구 설명과 응답(`screens.use`)에 있습니다: "Study layout and patterns; do not copy a company's branding, text or images verbatim."
- **"화면에서 봄"과 "DESIGN.md에서 옴"을 섞지 않습니다.**
  - `tokens_seen` / `seen_on_this_screen` (`label: "seen on this screen"`): 그 서비스 DESIGN.md의 색 토큰 중, 같은 값(#rrggbb, 불투명)이 그 화면의 캡처된 요소 계산 색에 있었던 것. 화면 키 단위이며 어느 폭·요소·속성인지, 몇 번인지는 매니페스트에 없습니다(`not_known_for_this_screen`).
  - DESIGN.md의 근거(`design_md`)는 지금 DESIGN.md의 값이 촬영일에 비교한 값과 **같을 때만** 붙입니다. 다르면 `design_md_value_now`만 주고 `absent`에 적습니다.
  - `compared_not_seen`: 비교했지만 그 화면에 없던 색. 매니페스트에 없는 토큰은 "비교하지 않음"이라 여기에도 넣지 않습니다.
  - `from_design_md` (`label: "from this service's DESIGN.md, not claimed to be on this screen"`): 타입 스케일·서체·반경·간격·컴포넌트와 측정된 상태. 값과 근거는 `get_tokens`·`get_component_states`와 같은 것입니다.
  - `not_known_for_this_screen`: 화면의 어느 요소가 어느 컴포넌트인지, 레이아웃 치수, 화면별 글자 크기·반경·간격, 색이 나온 요소·폭, 상호작용 상태, 그림 밖의 글과 이미지.
- **집계**: 기존과 같이 도구별 호출 수와, 서비스 id(레퍼런스 id)만 셉니다. 질의 원문·화면 키·유형은 세지 않습니다. 개인정보 페이지의 "도구별·레퍼런스별 호출 수" 문장이 그대로 맞습니다.
- **응답 상한·속도 제한**: 256KB, IP당 60회/60초 그대로입니다. 2026-11-23 공개분에서 가장 큰 `get_screen_context`는 약 205KB(구조화 + 텍스트 두 벌 합)입니다. 넘치면 `response_too_large` 오류가 나며, `include`로 DESIGN.md 묶음을 줄여 다시 부릅니다.

## 3. 도구

| 도구 | 입력 | 출력 |
|---|---|---|
| `list_screen_types` | 없음 | 화면 유형(slug, 영어·한국어 이름)별 화면 수·서비스 수(전체·모바일·데스크톱), 화면이 있는 서비스 목록(촬영일, 로그아웃, 기기별 화면 수) |
| `search_screens` | `query?`, `type?`(slug·영어·한국어 이름), `service?`, `country?[]`, `category?[]`, `device?`, `limit?`(≤30, 기본 10) | `total`과 결과(서비스, 화면, `tokens_seen`, 질의가 있으면 `match`·`score`). `device`를 주면 그 기기 그림만 |
| `get_service_screens` | `id`, `device?` | 요약, 화면 페이지 주소, 출처, 기기별 수, 유형별 묶음(페이지와 같은 순서), 서비스 색 표(토큰과 그 색이 보인 화면 키), 다음에 부를 도구 |
| `get_screen_context` | `id`, `key`, `include?[]`(`typography`, `rounded`, `spacing`, `components`, 기본 전부) | 화면, `seen_on_this_screen`, `compared_not_seen`, `from_design_md`, `not_known_for_this_screen`, (있으면) `outline`, 다음 도구 |

- 없는 id는 `unknown_reference`, 없는 화면 키는 `unknown_screen`, 없는 유형은 `unknown_screen_type` 오류입니다. 비슷한 것으로 바꿔 답하지 않습니다.
- 화면이 없는 레퍼런스(예: toss)에 `get_service_screens`를 부르면 오류가 아니라 빈 `groups`와 `absent: ["screens.<id>"]`입니다.
- 서버 버전은 2.1.0입니다(도구 추가).

## 4. 구조 개요(outline) — 읽는 쪽만, 공개 안 함

- `get_screen_context`는 `web/src/data/screens-outline.generated.json`에 그 화면 항목이 있을 때만 `outline`을 줍니다. 커밋된 파일은 비어 있어서 지금은 모든 화면에서 `absent: ["outline"]`입니다.
- 항목 하나: 폭별로 뷰포트, 페이지 높이, 요소 500개 상한에 걸렸는지, 첫 화면의 역할별 요소 수와 입력·채워진 컨트롤의 상자(x, y, w, h, 반경, 채움 색), 페이지 전체의 역할별 요소 수. **글자는 싣지 않습니다**: 캡처 도구의 요소 목록은 사람을 가리기 전의 페이지에서 뽑았기 때문입니다.
- 정해진 모양이 아닌 항목은 읽지 않습니다. 쓰는 쪽(`web/scripts/publish-screens.mjs`)은 오너 승인 뒤에 만듭니다.
