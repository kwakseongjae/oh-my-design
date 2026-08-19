# 프리셋 — genres/onboarding

## P-OB-01 첫 실행 가치 제시
**언제** — 설치·첫 세션에서 제품이 무엇을 해 주는지 한 약속으로
보여 준 뒤 설정에 들어가기 전.
**언제 아닌가** — 재방문·로그인 후 홈. 마케팅 히어로는 P-FN-09.
권한·약관·설정을 이 화면에 얹지 않는다.
**Base** — hand-rolled. 락업 P-FN-08, 정보 구조 P-FN-09
(eyebrow → display → lede → 액션 1 → 지지 요소). CTA는 shadcn
`Button`(P-PR-01).
**해부** — 브랜드 락업(마크 `aria-hidden` + 워드마크) → eyebrow →
display(한 약속) → lede(한 문장) → primary 1개("시작하기", 동사
C5) → 보조 링크("로그인", "건너뛰기" P-OB-05). 지지 요소는 데이터
또는 제품 실사 — 아이콘-위-헤드라인 3타일 금지(G3).
`min-height:100vh` 센터 스택 금지(G6). 문법 C32 중앙 max(예:
36rem 웰); 와이드 공백은 지지 요소가 채운다(GS5). 컨트롤은 웰
안(C7).
**상태** — CTA default/hover/pressed/focus-visible. 건너뛰기
ghost/link. 시작이 비동기일 때만 loading(C4). empty·error 없음.
**접근성** — display가 `h1`. 진입은 P-FN-02(제목 포커스, 시각 링
억제). 시작=`Button`, 로그인·건너뛰기=`Link`. 히트 ≥44(C2).
**토큰 슬롯** — display/lede 타이포·measure(C31),
`--size-onboard-well`, CTA 면/글자, 건너뛰기 색(4.5:1 C45), 지지
종횡비, `--space-hero-pad`(하단 ≥1.3×상단 G44).
**게이트** — C2 C3 C5 C7 C31 C32 C45 · G3 G6 G16 G18 G30 G44 G45
G46 · GS5 GS8
**검증** — 미검증 — 리서치 유도

## P-OB-02 한 화면 한 질문
**언제** — 온보딩에서 선호·역할·동네처럼 **한 결정**만 받을 때(토스 One thing per one page).
**언제 아닌가** — 이메일+비밀번호처럼 한 과업이 필드 묶음인 인증
(P-AU-01/02). 계정 안 설정 허브. 한 화면 질문 3개 나열.
**Base** — shadcn `Questionnaire` (`Questionnaire`, `QuestionnaireItem`,
`QuestionnaireTitle`, `QuestionnaireDescription`, `QuestionnaireChoices`,
`QuestionnaireChoice`, `QuestionnaireInput`, `QuestionnaireError`,
`QuestionnaireActions`, `QuestionnairePrevious`, `QuestionnaireNext`,
`QuestionnaireSkip`, `QuestionnaireSubmit`). 배타는 P-PR-05, 복수는 P-PR-04,
자유 입력은 P-PR-02+P-PR-08. 옵션이 많으면 P-FN-01 — `<select>` 금지(G28).
**해부** — 활성 아이템 하나만. 진행 크로마(P-OB-03) → 제목(질문 하나)
→ 설명(왜 묻는지) → 초이스 또는 필드 하나 → 에러 슬롯 → 다음
primary 1, 이전 ghost, 건너뛰기 P-OB-05. 설명·에러 별 슬롯, collapse
금지(G39). 라벨을 placeholder로 대체 금지(C12). 초이스 카드와 플레인
라디오를 섞지 않음. 전체 클릭+내부 CTA 금지(C25).
**상태** — 아이템 idle / 선택 / `data-invalid`. 초이스 unchecked/
checked/hover/focus-visible/disabled. 다음 disabled(required 미선택)/
loading. 비활성 아이템은 숨기고 inert.
**접근성** — Item=`fieldset`, Title=`legend`. 배타 APG Radio Group, 복수
APG Checkbox. Input은 보이는 라벨/`aria-labelledby`. 성공 이동 후 새
아이템 포커스, 실패는 첫 무효 컨트롤(P-PR-09). 라우트마다 P-FN-02.
**토큰 슬롯** — `--size-onboard-well`, 질문 타이포, 초이스 면/보더/선택
악센트(G8 스쿼글 금지), 필드 갭(G24), 에러 3종(C16), `--size-control-*`(C9).
**게이트** — C3 C9 C12 C13 C16 C17 C25 C31 · G8 G18 G24 G28 G39 G40 · GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-OB-03 단계형 설정 스테퍼
**언제** — 온보딩이 이름 있는 단계(계정 → 선호 → 권한 → 첫
데이터)로 나뉘고 지금 어디인지 보여 줄 때.
**언제 아닌가** — 질문 1개. 단계 이름 없이 숨은 저장만이면
P-OB-05. 체크아웃 스테퍼는 이 장르가 아니다.
**Base** — shadcn에 Stepper 없음. 진행 값은 `Progress`(Radix
`Progress`) 또는 `QuestionnaireProgress`. 이름 있는 단계는
hand-rolled `<ol>`. 서드파티 레지스트리 Stepper를 공식 Base로
적지 않는다.
**해부** — 상단 크로마: (선택) 단계 이름 + "3 중 2" + 트랙.
본문은 P-OB-02 한 질문. 완료/현재/예정만 — 시스템 정식
마크(웨이트·면·직선 룰, G8). 협폭에서 이름 목록이 폭주하면 현재
이름+트랙만. 미래 스텝 점프 기본 금지, 완료 스텝 수정만
버튼으로. 푸터 액션은 웰 안(C7), 화면 끝 풀폭 pill 금지.
**상태** — 트랙 `value` 또는 스텝 `data-state`
complete/current/upcoming. 현재만 `aria-current="step"`. 모션은
transform·opacity(G14). `prefers-reduced-motion`이면 즉시(G27).
**접근성** — `<ol>`/`<li>`. 트랙은 `progressbar` + 이름("온보딩
진행") + `aria-valuenow/min/max`. 점이 버튼이면 히트 ≥44(C2),
아니면 포커스 불가. 본문 포커스는 질문이 가진다.
**토큰 슬롯** — `--size-progress-track`, 채움/트랙 면, 현재·완료
마크(G23), 점 크기 vs 히트, `--duration-progress`(reduced-motion
0).
**게이트** — C2 C7 C8 C9 · G8 G10 G12 G14 G23 G27 G56 · GS5 GS8
**검증** — 미검증 — 리서치 유도

## P-OB-04 권한 요청
**언제** — 알림·위치·카메라처럼 OS 권한이 필요한 기능을 켜기
**직전**, 이유를 제품 언어로 먼저 보일 때.
**언제 아닌가** — 첫 페인트에서 네이티브 프롬프트를 바로 띄울 때.
이미 허용/거절된 권한의 재요청 루프. 설정 안 토글(P-PR-06).
**Base** — hand-rolled 또는 shadcn `Card` + P-PR-01 `Button`.
권한을 토스트로 묻지 않음(P-PR-27). 거절 안내는 같은 화면 대체
카피.
**해부** — 한 화면 한 권한(P-OB-02). 제목은 권한 이름이 아니라
혜택("새 매물을 바로 알려 드릴까요") → 이유(무엇을 쓰는지, 안
쓰면 무엇이 안 되는지) → 프리뷰 한 줄(가짜 이름 금지 G18) →
primary "허용하기" → 건너뛰기("나중에", OS 미호출, P-OB-05).
**허용 클릭 후에만** 네이티브 프롬프트. 거절 후 재프롬프트 루프
금지, 설정에서 켤 수 있다는 한 문장 + 다음 스텝. 여러 권한
체크리스트 금지.
**상태** — idle / prompting(CTA loading·disabled C4) / granted /
denied / skipped. denied는 error 면이 아니라 대체 카피. 이모지
아이콘 금지(G30).
**접근성** — `h1`은 혜택 문장. 허용=Button, 건너뛰기=ghost
Button 또는 Link, 히트 동등(C2). 복귀 후 결과 `h1` 또는 대체
카피로 포커스(P-FN-02).
**토큰 슬롯** — 웰 폭, 이유 measure, CTA/건너뛰기, 프리뷰
면(카드 변형 한 장르 C24), 아이콘(단색 currentColor).
**게이트** — C2 C3 C4 C5 C24 C45 · G16 G18 G30 G45 G46 · GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-OB-05 진행 저장·건너뛰기
**언제** — 온보딩이 2스텝 이상이라 중도 이탈·질문 생략·전체
포기가 생길 때. 모든 P-OB-02에 붙는 크로마 계약.
**언제 아닌가** — 법적 필수(나이·약관)를 건너뛰기로 숨길 때.
인증을 건너뛰어 보호 리소스에 들어가는 경로.
**Base** — shadcn `QuestionnaireSkip` + `Questionnaire` Resume
(저장 답·활성 아이템 복원). 진행 폐기가 파괴적이면 P-PR-21
`AlertDialog`. 저장 성공을 토스트로 겹치지 않음(G16).
**해부** — 동선 세 개를 라벨로 분리. (1) 이 질문 생략 —
`QuestionnaireSkip`, optional만. (2) 온보딩 전체 나중 — "나중에
하기", 답을 저장하고 P-OB-06 또는 홈. (3) 이전 —
`QuestionnairePrevious`. "건너뛰기"/"나중에"/"취소"를 한 단어로
섞지 않는다. 진행은 스텝 id+답으로 저장, 재진입 시 그 스텝부터.
필수 질문에는 Skip을 그리지 않되 전체 나중은 남긴다. 저장 메타는
muted 한 줄("저장됨").
**상태** — skippable / required. 저장 idle / saving / saved /
resume-available. 폐기 확인은 P-PR-21(취소 왼쪽, 폐기
destructive). saving 중 다음/스킵 재진입 불가(C4).
**접근성** — Skip·나중은 보이는 이름, 아이콘-온리면
`aria-label`. 복원 후 활성 아이템 포커스. 폐기는 APG Alert
Dialog, 첫 포커스=취소. 저장 한 줄은 `status`/`aria-live="polite"`.
**토큰 슬롯** — 건너뛰기 색(4.5:1 C45/C42), 크로마 링크 위치
(시스템 하나), saved 메타, 다이얼로그는 P-PR-21 슬롯.
**게이트** — C3 C4 C5 C16 · G16 G18 G19 G26 · GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-OB-06 빈 상태 첫 데이터 만들기
**언제** — 온보딩을 끝냈거나 건너뛴 뒤 목록이 0건이라 **첫
객체**를 만들어야 제품이 시작될 때.
**언제 아닌가** — 필터 0건(P-FN-05). 권한 거절(P-OB-04). 검색
무결과. 온보딩 중간 스텝.
**Base** — shadcn `Empty` (`Empty`, `EmptyHeader`, `EmptyMedia`,
`EmptyTitle`, `EmptyDescription`, `EmptyContent`) + P-PR-01.
미디어는 단색 SVG 또는 실사 — 이모지 금지(G30). P-FN-05를 이
화면에 확장.
**해부** — 정직한 제목("아직 매물이 없습니다") → 다음 행동 한
문장 → primary 1개("매물 올리기") → 선택 보조(둘러보기, 온보딩
재개 P-OB-05). 시작 가이드 3타일 금지(G3). 와이드 40% 공백
금지(GS5) — 선호 요약·미리보기로 채우거나 중앙 max(C32). 생성
폼은 이 화면이 아니라 작성 플로우 진입만.
**상태** — empty. CTA default/hover/pressed/focus-visible/loading.
생성 직후 목록이 피드백, 축하 토스트 금지(G16).
**접근성** — `EmptyTitle`이 `h1`이거나 `aria-labelledby`. CTA
동사(C5). 장식 미디어 `aria-hidden`. 라우트 P-FN-02. 빈 상태를
라이브 영역으로 반복 발표하지 않음.
**토큰 슬롯** — Empty 면/패딩(4면 P-FN-07), 미디어 크기, 타이포,
CTA, 보조 링크, `--size-onboard-well`.
**게이트** — C3 C5 C24 C32 C45 · G3 G16 G18 G30 G45 · GS5 GS6 GS8
**검증** — 미검증 — 리서치 유도

## P-OB-07 온보딩 완료 확인
**언제** — 마지막 필수 스텝을 마친 직후, 무엇이 켜졌는지 확인하고
제품으로 내보낼 때.
**언제 아닌가** — 매 스텝 축하(G16). 권한 거절을 "준비됐습니다"로
덮기. 첫 데이터 0건을 완료로 위장(다음은 P-OB-06).
**Base** — hand-rolled 또는 shadcn `Card` + `Item`/`ItemGroup`
(`Item`, `ItemMedia`, `ItemContent`, `ItemTitle`, `ItemDescription`)
으로 선택 요약. CTA는 P-PR-01.
**해부** — `h1`은 빈말 대신 한 줄 결과("알림은 끄고, 동네는
연남동으로 시작") → 요약 목록(질문 → 답, 건너뛴 항목은 "나중에")
→ primary 1개(제품 진입) → 선택 수정 링크. 폭죽·컨페티·이모지
금지(G16, G30, G45). 사용자가 준 값만(G18). 재방문에 이 화면을
다시 띄우지 않음.
**상태** — default. 진입 버튼 loading(플래그 기록 C4). 수정 가능
행 hover는 P-FN-07 4면 패딩.
**접근성** — 결과 `h1` + P-FN-02. 요약은 정의 리스트 또는 Item.
수정은 링크("동네 바꾸기"). 완료를 `alert`로 소리 내지 않음 —
페이지 전환이 피드백.
**토큰 슬롯** — 결과 타이포, 요약 행 면/룰, 완료 마크(G8), CTA,
웰 폭.
**게이트** — C3 C4 C5 C45 · G8 G16 G18 G30 G45 G46 · GS4 GS8
**검증** — 미검증 — 리서치 유도
