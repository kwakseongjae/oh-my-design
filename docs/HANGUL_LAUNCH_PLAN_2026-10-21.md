# /hangul 출시 계획 (2026-10-21)

리브랜딩이 main과 2.0.5로 나갔으니, 3주째 대기하던 한글 조판 스킬 /hangul을 새 체계로 출시한다. 성장 계획 P3(CJK 스킬 라인)의 첫 출시이고, 레퍼럴 효과가 가장 큰 작업이다.

## 오너 결정 (2026-10-21)
- 다음 큰 작업은 /hangul 출시다. 오래된 실험 브랜치 6개는 삭제했다.
- 페이지는 한국어 + 영어다: `/ko/hangul`(기본), `/hangul`.
- 콘텐츠는 전후 비교 + 67곳 데이터 카드 + 비교 영상이다(배민 타이포 글, Threads·X 문안 포함).

## 공유 계약
- `web/src/data/hangul-assets.json` + `web/src/lib/hangul/assets.ts`: H3가 채우고(beforeAfter·video·measured), H2가 읽는다. 비어 있으면 그 섹션을 그리지 않는다.
- 스킬 이름은 `hangul`(공개 스킬)이고, 설치 명령은 2.0.6 이후 `npx oh-my-design-cli@latest`(번들) 또는 `npx skills add kwakseongjae/oh-my-design --skill hangul`이다.

## 지금 있는 것

| 갈래 | 위치 | 상태 |
|---|---|---|
| 스킬 | 원격 `feat/hangul-skill`(9/30, 4커밋, 128파일) | 규칙 HG-1~11, 결정론적 체커 `check.mjs`, 렌더 줄바꿈 검사 `render-check.mjs`, 67곳 실측 근거. `.claude/skills`·`.agents/skills` 미러 포함 |
| 평가 | `docs/research/2026-09-29-growth/hangul-eval-results.md` | 스킬 없이 18회 중 17회 위반, /hangul 적용 18회 BLOCK·WARN 0 (Claude·Codex 각 9회) |
| 출시 페이지 | `feat/hangul-launch-page`(10/1, v4) | 옛 디자인, 옛 라우트(`app/hangul`, 루트 레이아웃 없음). 오너 v4 피드백 미반영 |
| 블로그 글 | `worktree-agent-a624…`(9/29) | 배민 타이포 결정 글 ko/en + 에셋. 날짜·사실 재확인 필요 |
| 미추적 초안 | 메인 체크아웃 `skills/hangul/`(9/29) | 브랜치(9/30)보다 오래된 초안 → 브랜치 판으로 대체하고 정리 |

오너 v4 피드백(10/1): 고친 결과(Mend)가 스크롤에 가림, 한국어 문장 어색, 평가 섹션 단순화, 스펙 글자 겹침, 설치 문구 잘림, 체커 단계 제거, 출처 삭제, 그리고 "/hangul을 새 컨셉으로 다시".

## 작업 묶음

### H1. 스킬 통합 (main)
- `feat/hangul-skill`을 지금 main에 맞춰 다시 올린다. 2.0.5의 하이픈 이름·`metadata.internal`·공개 10개 체계와 충돌을 푼다.
- 공개 스킬 10 → 11(hangul 추가), 번들 31 → 32, Cursor 30 → 31. check-counts 표면(README 다국어, llms, docs 스킬 페이지, 랜딩 설치 터미널의 공개 스킬 목록)과 doctor·install-skills 테스트를 함께 갱신한다.
- 미추적 초안 `skills/hangul/`은 브랜치 판으로 대체한다(초안은 스크래치패드에 백업).

### H2. 출시 페이지 (새 체계)
- 새 디자인(아이리스·절제 규칙·라이트 전용)으로 다시 만든다. v4의 좋은 장치(실제 DOM 전후 비교, 폭 슬라이더로 끊긴 단어 표시, 111개 폭 줄바꿈 지도)는 살리고 v4 피드백을 전부 반영한다.
- 라우트: `/ko/hangul`(한국어 기본) + `/hangul`(영어). 헤더·푸터·쿠키·hreflang·사이트맵·OG는 사이트 공통을 쓴다.
- 문서: `/docs/<locale>/skills`에서 /hangul로 연결.

### H3. 출시 콘텐츠
- 같은 페이지 전후: 평가 생성물 하나(p1-A-r3)를 /hangul APPLY로 고친 전후 스크린샷(데스크톱·폰).
- 67곳 실측 데이터 카드: 행간·자간·글꼴 분포.
- 비교 영상: omd-showcase로 전후 스크롤 영상(MP4·GIF).
- 배민 타이포 글(ko/en): 날짜를 출시일로 바꾸고 사실을 재확인한 뒤 /hangul로 연결해 발행.
- Threads·X 게시 문안 초안(게시는 오너).

### H4. 출시
- 프리뷰 → 오너 시각 확인 → main → `v2.0.6` 태그(npm) → skills.sh 노출 확인 → 라이브 확인.

## 실행
- H1·H2·H3를 병렬로 돌린다(H2·H3는 H1의 스킬 수·이름에 의존 → 같은 계약을 미리 고정). 에이전트는 커밋만 하고, push·병합은 메인 세션이 한다.
- 화면이 바뀌므로 main 반영 전 오너가 프리뷰를 직접 본다.
