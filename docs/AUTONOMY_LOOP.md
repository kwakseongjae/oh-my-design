# 자율 운영 루프 (2026-09-23 시작)

오너 지시(2026-09-23): *"내 판단이 필요한 정도 수준의 작업이 아니면 너가 goal이나 loop의
형태로 알아서 처리할 수 있으면 좋겠어."*

이 문서는 루프의 **매 회차가 처음 읽는 곳**이다. 컨텍스트가 압축돼도 같은 기준으로 돌기
위해, 판단 경계와 작업 큐를 여기에 박아둔다.

---

## 1. 오너에게 묻는 것 — 이것뿐이다

| 묻는다 | 이유 |
|---|---|
| **게이트의 의미를 바꾸는 변경** — proof/verified 기준 완화, 임계치 변경, 규칙 삭제 | "verified"가 뜻하는 바가 바뀐다 |
| **레퍼런스 통째 삭제** | 되돌리기 어렵고 카탈로그 범위 결정이다 |
| **main 머지 = 프로덕션 배포** | Vercel이 main에서 배포한다. 출시 GO는 오너 몫(memory: feedback_commits) |
| **버전 출시 GO** | 동일 |
| **라이브러리/브랜드 판정이 규칙으로 안 갈릴 때** | AGENTS.md의 넌센스 경로 대조군으로도 모호한 경우만 |
| **유료 서비스·계정 생성·로그인** | 금지 규칙 |
| **3회 시도해도 수렴 안 하는 실패** | 방향 전환이 필요할 수 있다 |

**이 목록에 없으면 묻지 않는다.** 결과만 보고한다.

**묻는 형식 (오너 지적 2026-09-23: 범주만 나열하면 답할 수 없다).** 물을 때는 AskUserQuestion으로,
① 어떤 레퍼런스/파일의 무슨 건인지 ② 무엇을 발견했는지(측정값) ③ 선택지 2~3개와 각각의 결과
④ 내 추천(첫 번째 선택지) — 을 담는다. 답을 기다리는 동안 그 건과 무관한 큐는 계속 진행한다.

**루프의 실체**: 별도 프로세스가 아니라 이 세션 안의 타이머(ScheduleWakeup)와 서브에이전트 완료
알림이다. 세션이 닫히면 멈춘다. 서브에이전트를 띄웠으면 그 사실을 보고에 적어 오너가 무엇이
돌고 있는지 알 수 있게 한다.

## 2. 묻지 않고 하는 것 (상시 위임)

- 레퍼런스 측정 → 검증 → 저작 → 게이트 → **커밋** (세션 자율권, 2026-09-23)
- **피처 브랜치 푸시** — 매 커밋 후 백업 (상시 위임, memory 2026-08-20)
- 기존 레퍼런스의 오류 정정 — 증거가 요구하면 verified에서 내리는 것까지 (정직한 강등은 판단이 아니라 측정이다)
- 내 도구(`scout-candidates.mjs`, `probe-component-states.mjs` 등)의 결함 수정
- 위임: ①스카우팅·②심층 프로브를 sonnet 서브에이전트에 (실험 결론, 아래 §4)
- CURRENT_STATE.md · JOURNAL.md · 이 문서의 큐 갱신

보고는 **답을 요구하지 않는 형태**로 한다. "~할까요?"로 끝내지 않는다.

## 3. 목표와 작업 큐

**목표: 700 레퍼런스**(오너 설정 작업 목표). 2026-09-23 시작 시점 **458 / verified 164**.
판정 기준은 개수가 아니라 **verified로 들어가는 개수**다 — 얕은 신규는 목표에 기여하지 않는다.

큐는 위에서부터 소비한다. 한 항목이 끝나면 여기서 지우고 다음으로 간다.

1. ~~**브랜치 origin 백업**~~ — 완료 2026-09-23 (`511e9edb`)
2. ~~**crowdworks 저작**~~ — 완료 2026-09-23, verified 141/141
3. ~~**JP 웨이브 4**~~ — 완료 2026-09-23: studysapuri·folio·loglass 3/3 verified. spacemarket은 Aside 대기(429).
4. ~~**UK 웨이브 1**~~ — 완료 2026-09-23: 스카우트 12 → 4 유효(33%) → **4/4 verified**. tesco(403)는 Aside 대기. 경계 zopa는 다음 UK 웨이브 후보.
4b. ~~**"변화 없음" 재검증 스윕**~~ — 2026-09-23: 옛 프로브로 "hover 변화 없음"을 적은 10건 중 7건(crowdworks·taobao·base·newspicks·
   chatwork·nulab·cybozu)을 새 도구로 재측정 — **전부 유지**(7개 값 모두 동일). 커밋된 데이터에 영향 없음, studysapuri만 커밋 전에 잡혔다.
   남음: jal(로컬 차단 → Aside), kakaopay corporate-search(레거시 캡처 인덱스라 라벨 없음).
5. ~~**위생**~~ — 완료 2026-09-23: velog·banksalad `ds:` 제거(디자인 시스템이 없는데 카드가
   "Design System"/"Brand Guide"로 GitHub를 가리켰다 — 없는 것은 없다), adobe 설명에 링크=Spectrum 1 명시
5b. ~~**JP 웨이브 5 + UK 웨이브 2**~~ — 완료 2026-09-26: pairs·hatena(JP 2/2)·sainsburys·bloomandwild·gousto·nhs(UK 4/4) 전부 verified.
5c. ~~**JP 웨이브 6**~~ — 스카우팅 2026-09-26: 2/12(17%, booth `--charcoal*691`·coconala) — 하한 근접 두 번째. 첫 프로브 2건은 5시간 무응답으로 종료, 45분 제한을 걸어 재실행(15:55).
   **마감 2026-09-26: 2/2 verified**(booth — pixiv Charcoal; coconala — 헤더가 중첩 shadow root 166개, 도구의 오버레이 제거가
   shadow 경계에서 조상 탐색을 멈춰 헤더 host를 숨기던 결함 수정). JP 수율 17%로 하한(15%) 위 — 시장 유지, 다음 JP 웨이브는 EU 뒤.
5i. **EU 웨이브 4** — 스카우팅 2026-09-26: **16/32(50%)** — vinted(LT, --v) · vipps(NO, 854) · lego(DK, --ds 2,178) ·
   toogoodtogo(DK, --dt) · idealista(ES, kiwi) · fever(ES, --fv 608) · bitpanda(AT) · wetransfer(NL, --wt) · ns(NL, --nes 496) ·
   zooplus(DE, --pp) · epidemicsound(SE, --es) · bolt(EE — ruby/iris/mint은 Radix 기본값, 제외 후 판단) · avanza(SE) ·
   celonis(DE, --fnd) · ecosia(DE) · trivago(DE, 컨트롤 0 — 지연 렌더 의심). 탈락: booking(202·27)·picnic(wp/tw)·bunq(4)·
   swile(tw)·vestiaire(1)·kahoot(wp)·polestar(6)·factorial(tw)·travelperk(tw 팔레트)·mytheresa(0)·supercell(23)·scalapay(webflow).
   차단: thuisbezorgd·trustpilot·blablacar·decathlon(403).
5d. ~~**EU 웨이브 1**~~ — 스카우팅 2026-09-26: **7/12(58%)** — n26 · zalando · check24 · sumup(`--cui` Circuit UI) · qonto ·
   doctolib(`--oxygen` 3,650) · wolt(DoorDash 소유, 본사 헬싱키 → FI). 탈락: traderepublic·mollie·backmarket(토큰 ≈0),
   personio(tw), hellofresh(403 → Aside). 카탈로그 EU는 사실상 공백(spotify·IT 2·FR 2·DE 1) — **다음 주력 시장**.
   **마감 2026-09-26: 6/7 verified**(n26·sumup·wolt·qonto·zalando·doctolib). **check24 탈락** — 자체 변수 7개(브랜드색 0,
   나머지 217-7은 Tailwind v4·shadcn 기본값), 빨강은 알림 배지 1개·파랑은 숨은 skip 링크뿐, CTA·타일은 닫힌 shadow root.
   traderepublic 등과 같은 '자체 토큰 ≈0' 기준. (위임 프로브의 필별 hover 편차는 전환 도중 값 — 재측정하니 전부 `rgba(255,255,255,0.15)`.)
5g. **EU 웨이브 3** — 스카우팅 2026-09-26: **12/20(60%)** — malt(FR, --p/--joy) · payfit(FR, --uy 803) · pennylane(FR) ·
   contentful · db(DE, 자체 서체) · ing(NL, 1,691) · klm(NL, --aero) · storytel(SE, 1,027) · oura(FI) · cabify(ES) ·
   satispay(IT, --ds) · deezer(FR). 탈락: lydia(wp·sumeria 리다이렉트)·ledger(wp)·lufthansa(4)·aboutyou(1)·bol(0)·
   wallapop(bs)·volvo(대부분 --v 프레임워크?)·sncf(403). **진행 2026-09-26: 10/12 verified**(deutschebahn·storytel·cabify·malt·payfit·oura·satispay·pennylane·klm, 전부 본 세션 직접).
   보류 2(ing는 도구에 shadow 관통 추가 후 등재): **contentful**(Vercel 보안 체크포인트 429,
   본사 샌프란시스코·덴버/베를린 이원 → US 가능성) · **deezer**(/fr/ 404, offers는 컨트롤 2개뿐 — 동의층 의심, Tempo 토큰은 있음).
5h. ~~**가상 요소 소급 스윕**~~ — 완료 2026-09-26: "변화 없음" 34개 중 12개를 본 세션이 재측정(도구에 칠해지지 않은
   ::before/::after 무시 추가) → **정정 2건**: base 분홍 CTA 2개(hover·pressed = 흰 ::before 8%), otto Mein Konto(::after 3%/9%).
   나머지 10개는 기록과 일치. 남은 22개는 가상 요소 없는 대상이라 재측정 생략.
5f. ~~**bg-image 소급 스윕**~~ — 완료 2026-09-26: 37개 재측정(위임) → 본 세션 재확인 후 **정정 5개**: crowdworks 버튼 4개
   (hover = 10%/5% 검은 그라디언트 레이어), bloomandwild Log in(밑줄). **위임 스윕의 '발견' 3건은 다른 요소를 잰 것**
   (hatena 24px `#0000ee` 링크 ≠ 기록된 14px `#111111`, chatwork 투명 텍스트 링크 ≠ `#f03748` 알약, zalando 236px 컨테이너 ≠
   40px 입력) → 채택 안 함. chatwork 알약은 새 도구로 재확인 불가(주석 남김). kakaopay는 레거시 캡처 인덱스라 보류.
   미측정 9개는 그대로 둠(기록값 유지). 교훈: 위임 스윕도 **대상 동일성(기하·rest값)**을 본 세션이 다시 봐야 한다.
5e. **EU 웨이브 2** — 스카우팅 2026-09-26: **12/18(67%)** — klarna(SE) · ikea · hm(`--fds` 11,430, SE) · adyen(NL) ·
   coolblue(NL) · otto(`--oc`, DE) · flixbus(`--flix`, DE) · getyourguide(DE) · leboncoin(FR) · alan(FR) · glovo(ES) ·
   typeform(ES). 탈락: bunq(4)·picnic(wp/tw)·booking(26, 약함)·polestar(26, 보류). blablacar·idealista 403 → Aside 후보.
   **진행 2026-09-26: 10/12 verified**(hm·flixbus·klarna·otto·getyourguide·alan·adyen·coolblue·typeform·ikea).
   남음: **glovo** 보류 — 루트 변수 71개가 전부 타입·간격(색 토큰 0), Datadog WAF가 몇 번 로드 후 403 → CTA 1개만 측정
   (`#017963`→hover `#035949`, focus 2px `#017963`). 나중에 시간대를 바꿔 재시도. **leboncoin** 보류 — DataDome이 헤드리스와 Aside 모두 차단(15:55, CloudFront 오류). CTA rest만 1회 읽음(`#ec5a13`, 알약, 44px). 재프로브 에이전트는 3시간 무응답 → 종료.
6. JP/US 웨이브를 수율이 유지되는 한 반복. 수율이 15% 밑으로 두 번 연속 떨어지면
   그 시장을 멈추고 다음 시장으로.

**TW 리뉴얼(10/63)은 큐에 넣지 않는다** — 개수를 안 보태서 700 목표에 기여하지 않는다.
목표가 바뀌면 오너가 말한다.

## 4. 회차당 절차 (레퍼런스 1건)

모델 배정은 `COLLECTOR_MODEL_TRIAL_2026-09-22.md` §6의 3회차 결론을 따른다.

| 단계 | 누가 | 조건 |
|---|---|---|
| ① 스카우팅 | sonnet | `scripts/scout-candidates.mjs`, 함정 체크리스트 포함 |
| ② 심층 프로브 | sonnet | `scripts/probe-component-states.mjs` + 토큰 덤프 |
| ②′ 헤드라인 검증 | **본 세션** | 보고서의 가장 강한 주장 1건을 독립 재측정. **필수** |
| ③ 분리 판정 | 본 세션 | 프레임워크·임베드·서드파티 분리. 위임 안 함 |
| ④ 저작 | 본 세션 | DESIGN.md + .verification.md |

haiku는 쓰지 않는다(3회 모두 탈락).

저작 후 체크리스트 — 전부 통과해야 커밋:

- [ ] 포맷: `tokens.colors`는 6자리 hex만(8자리 알파·rgba는 산문으로), `rounded`는 숫자만(%는 산문으로)
- [ ] 근거: 모든 `tokens.colors` hex가 본문(토큰 블록 밖)에 나온다
- [ ] 역할명: 본문색은 `foreground`(`text` 아님 — `selectForeground`가 못 읽는다)
- [ ] 서체: census 1위 이름을 **`document.fonts` loaded 목록과 대조**했다(측정법 §2.6)
- [ ] focus: `auto`면 브라우저 것 → 토큰 안 만듦(측정법 §2.5)
- [ ] 컴포넌트: 못 잰 **상태**는 적지 않는다(잰 상태만 선언). "못 쟀음" ≠ "변화 없음". Aside로 hover를 쟀다면 `matches(':hover')`가 true였는지 확인
- [ ] **끝난 서브에이전트는 종료한다** — SendMessage `{"type":"shutdown_request"}`. 끝난 에이전트도 패인을 붙잡고 있어서 ~11개가 쌓이면 새 스폰이 `fork failed: Device not configured`로 실패한다(2026-09-26).
- [ ] 저작 도구: `web/scripts/assemble-reference.mjs`(front.yaml+body.md → DESIGN.md + 클레임), `web/scripts/add-fingerprint.mjs`(3중 미러)
- [ ] `npm run build-registry` 순서대로 → quality → evidence:ledger → reference-ast
- [ ] fingerprint 추가 + 3중 미러(`data/`, `.claude/data/`, `.codex/data/`)
- [ ] `design-md/<id>/` 와 `packages/mcp/data/references/<id>/` 미러
- [ ] `npm run query:references:data` → `node web/scripts/sync-catalog.mjs` → `check-counts` ✓
- [ ] `web`에서 `npm test` 전부 통과 + `npx tsc --noEmit -p .` 통과(생성된 registry 타입 — 새 토큰 그룹이 타입에 없으면 `next build`가 깨진다, 2026-09-26 motion)
- [ ] 커밋 → 푸시

## 5. 루프를 멈추는 조건

- §1의 항목을 만났을 때 → 그 항목만 물어보고 나머지 큐는 계속 진행 가능한지 판단
- 같은 실패가 3회 → 멈추고 보고
- 큐가 비었을 때 → 다음 시장 후보를 스스로 찾되, 수율 근거가 없으면 보고
- 레퍼런스 10건마다 → **답을 요구하지 않는** 진행 보고를 남기고 계속

## 6. 진행 로그

회차가 끝날 때마다 한 줄. 최신이 위.

- 2026-09-26 · 회차 46–48 · vinted(LT) · vipps(NO) · lego(DK) 등재 — EU 웨이브 4 3/16. 국가 LT·NO·DK·AT·EE 추가(build-registry·verify·route·selector·catalog-integrity 테스트) · 503 / 209
- 2026-09-26 · 회차 45 · coconala 등재(JP, 19개 색 램프) → **JP 웨이브 6 마감 2/2**. 도구: 오버레이 제거가 shadow host를 조상으로 인식 · **500 / 206**
- 2026-09-26 · 회차 44 · booth 등재(JP, pixiv Charcoal) + 가상 요소 스윕 정정 2건(base·otto). 도구: 칠해지지 않은 가상 요소 무시 · 499 / 205
- 2026-09-26 · 회차 43 · ing 등재(62/62, NL). **도구: 열린 shadow root(중첩) 안의 대상·동의 거부 버튼까지 탐색**(__omdAll/__omdOne 초기화 스크립트). ING 컨트롤이 전부 웹 컴포넌트 안 · 498 / 204
- 2026-09-26 · 회차 42 · klm 등재(59/59, NL — 합병 운영사는 자기 본사 규칙). --aero-* 832, --mat-* 884 제외. 도구에 네덜란드어 'Weiger' 추가. contentful은 보류(Vercel 체크포인트, 본사 미국 가능성) · 497 / 203
- 2026-09-26 · 회차 41 · pennylane 등재(45/45, FR). CTA hover = 2px 상승+그림자(색 불변) · 496 / 202
- 2026-09-26 · 회차 40 · satispay 등재(55/55, IT). --ds-* 87개. 포커스 링 #94a3b8·테두리 #e2e8f0은 Tailwind 기본값 → 브랜드 토큰에서 제외 · 495 / 201
- 2026-09-26 · 회차 39 · oura 등재(49/49, FI). 국가: 임프레섬·저작권 = Oura Health Oy(오울루) → FI, 단 미국 이전(redomicile) 진행 공지 — 자체 법적 고지에 미국 모회사가 뜨면 US로 재분류 · 494 / 200
- 2026-09-26 · 회차 38 · payfit 등재(60/60, FR). --uy-* 803개가 대부분 oklch → 표준 변환으로 hex(자체 hex 토큰과 일치 확인: #f048f0·#d100d1) · 493 / 199
- 2026-09-26 · 회차 37 · malt 등재(59/59, FR, Joy — joy.malt.com zeroheight). 헤더 컨트롤 3개 모두 키보드 포커스 표시 없음 · 492 / 198
- 2026-09-26 · 회차 36 · cabify 등재(49/49, ES). hover가 밝아짐(#7145d6→#8a6ee4), press에 2px 링 · 491 / 197
- 2026-09-26 · 회차 35 · storytel 등재(43/43, SE). 본 세션 직접(범용 survey 스크립트). **위임 에이전트 7개가 1.5~5시간 무응답** → 전부 종료, EU 웨이브 3은 본 세션이 직접 측정으로 전환 · 490 / 196
- 2026-09-26 · 회차 34 · deutschebahn 등재(54/54, DE, DB UX Design System 공개). 본 세션 직접 측정. 헤더 링크 hover가 `::after` 막대 — 가상 요소 비교가 첫 실전에서 잡음. `--db-adaptive-*` 1,040개는 컴포넌트 스코프라 값 미해결 → 렌더 값만 기록 · 489 / 195
- 2026-09-26 · 회차 33 · ikea 등재(48/48, NL). 국가: ikea.com 약관·저작권 = Inter IKEA Systems B.V.(델프트) → 모회사 본사 규칙 NL. Skapa는 문서가 SSO 뒤라 라이브 `data-skapa` 버전 속성으로 입증 · 488 / 194
- 2026-09-26 · 회차 32 · typeform 등재(58/58, ES). 브랜드 페이지의 Paper·Ink가 곧 토큰(#faf9fb·#2a222b), Webflow 변수 2단. 검색 결과 제목에 LLM 대상 지시문이 섞여 있었음 → 무시, 주소는 자체 개인정보처리방침·DPA에서 · 487 / 193
- 2026-09-26 · 회차 31 · coolblue 등재(69/69, NL). 헤드리스 403 → 본 세션 Aside(openTab·looksAuthenticated=false). 동의창은 '전부 수락'/'직접 설정'뿐 — 수락 안 함('직접 설정' 열고 닫기). 녹색 action 스타일은 동의창 수락 버튼에서 hover/focus만 읽음(클릭 안 함) · 486 / 192 — **오늘 10건째(qonto 이후)**
- 2026-09-26 · 회차 30 · adyen 등재(37/37, NL). **세 번째 사각지대**: hover가 `::before` 오버레이(네이비 7.4%)의 opacity 0→1 — 요소 자신은 불변. 도구에 가상 요소 비교 추가, '변화 없음' 34개 가상 요소 스윕 위임 · 485 / 191
- 2026-09-26 · 회차 29 · alan 등재(57/57, FR). 동의 모달의 거부가 `<a>`라 도구가 못 누름 → 거부 문구 검색에 링크 포함. 버튼은 링크라 자기 color가 UA 기본(#0000ee) — 자식 라벨 색 기록. hover/press = indigo700/900 · 484 / 190
- 2026-09-26 · 회차 28 · getyourguide 등재(47/47, DE). 국가: 채용 사이트 연표 'Established Berlin HQ', 취리히는 '창업 국가' → DE(스위스 AG 기록). 'Compass'는 아이콘 폰트명뿐 → 시스템명 없음. GT Eesti 렌더, GYG Sans는 선언만 · 483 / 189
- 2026-09-26 · 회차 27 · 소급 스윕 정정: crowdworks 4(bg-image 레이어)·bloomandwild 1(밑줄). 위임 스윕 발견 3건은 다른 요소 → 기각 · 482 / 188
- 2026-09-26 · 회차 26 · otto 등재(55/55, OTTO Components). 레거시 문서는 SPA라 curl 대조군이 거짓 음성 — 렌더링해서 404 제목 확인. PDP는 자동화에 HTTP 400 → 장바구니 버튼 미측정 · 482 / 188
- 2026-09-26 · 회차 25 · klarna 등재(80/80, SE). 잉크 `#0b051d`=`--brand`, 핑크 `#ffa8cd`는 면·배지. 도구: `:focus-visible` 미매칭 focus도 못 쟀음 처리, 스웨덴어·네덜란드어 거부 문구 추가 · 481 / 187
- 2026-09-26 · 회차 24 · flixbus 등재(63/63, Honeycomb). hover가 background-image 반투명 레이어 → **프로브 도구 사각지대 발견·수정**(bg-image·밑줄 비교, shadow root 동의 배너). '변화 없음' 39개(23건) 소급 스윕 위임 중 · 480 / 186
- 2026-09-26 · 회차 23 · hm 등재(52/52, Fabric Design System, SE). Akamai가 로컬 IP 차단 → Aside로 재측정(openTab·looksAuthenticated=false). **위임 프로브가 프라이버시 규칙 없이 Aside를 썼다** → PROBE_BRIEF에 위임 Aside 금지, 진행 중 프로브 전원에 통지 · 479 / 185
- 2026-09-26 · 회차 22 · doctolib 등재(59/59, Oxygen). 헤드라인 재측정: Rechercher 포커스 이중 링은 Tab 직후 첫 프레임엔 투명 → 대기 후 읽어야 함. Turnstile 오버레이 때문에 probe 도구가 대상 못 찾음 → 같은 방법의 짧은 스크립트로 측정 · 478 / 184
- 2026-09-26 · 회차 21 · zalando 등재(62/62). 리브랜드 토큰 레이어(`@scope (:root)`)가 기본 테마를 덮는 구조 — 렌더 값은 오버라이드 쪽. 위임 프로브의 "lagom=블로그 테마명"·"25개 시장"·"프랑크푸르트 상장"은 인용 페이지에 없어 제외 · 477 / 183
- 2026-09-26 · 회차 20 · qonto 등재(78/78). 위임 프로브가 인용한 Medium 리브랜드 글은 재확인 불가(Cloudflare) → 서사는 qonto.com 제1자 페이지로만 · 476 / 182
- 2026-09-26 · 회차 19 · wolt 등재(62/62, FI 신규 국가 — FI·NL·SE·ES 허용 목록 추가). 09-22부터 있던 tsc 오류(tokens.motion 타입 누락 → next build 실패) 발견·수정, 체크리스트에 tsc 추가 · 475 / 181
- 2026-09-26 · 회차 18 · sumup 등재(66/66, Circuit UI). 브랜드 토큰이 레포 문서값과 일치, 모든 색이 hovered/pressed 단계 보유 · 474 / 180
- 2026-09-26 · 회차 17 · n26 등재(53/53) — EU 첫 건. 위임 프로브가 '동의 배너 없음·hover 미측정'이라 한 것은 Usercentrics 배너가 가린 것 — 거부 후 hover·이중 포커스 링 측정. 서브에이전트 스폰 실패(fork failed)는 끝난 에이전트 패인이 쌓인 탓 — 종료 요청으로 정리 · 473 / 179
- 2026-09-26 · 회차 16 · gousto 등재(71/71) — sonnet 저작 초안 2번째. 컴포넌트 값은 전부 맞았으나 서사·출처 오류 4건. **4회차 결론: sonnet 저작 채택 안 함**(COLLECTOR_MODEL_TRIAL §8). UK 웨이브 2 마감 4/4 · 472 / 178
- 2026-09-26 · 회차 15 · nhs 등재(87/87). 저작된 노랑·검정 포커스 두 변형(링크 채움+하단선 / 입력 링+굵은 테두리) 재측정 일치, 디자인 시스템 문서 인용 대조 · 471 / 177
- 2026-09-26 · 회차 14 · bloomandwild 등재(104/104) — **첫 sonnet 저작 초안**. 검토에서 사실 오류 6건 정정(포커스 메커니즘×5, 카드 포커스·pressed, '브라우저 링' 서술, 출처 도메인만, 미확인 그룹 연혁, B Corp 누락) · 470 / 176
- 2026-09-26 · 회차 13 · sainsburys 등재(52/52, Luna). 동의 배너가 열린 채로는 hover·focus가 전부 '변화 없음' — 거부 후 저작된 포커스 링(토큰 그대로) 확인. 프로브 도구가 배너를 먼저 닫고 :hover 미매칭을 미측정 처리 · 469 / 175
- 2026-09-26 · 회차 12 · hatena 등재(89/89). 위임 프로브 헤드라인 '서비스 색 토큰 선언만 되고 미사용'이 틀림 — 그 링크들은 보이지 않는 요소, 토큰은 17개 규칙에서 사용 · 468 / 174
- 2026-09-26 · 회차 11 · pairs 등재(81/81). 위임 프로브가 '흰 바탕에 흰 글자'로 보고한 CTA가 실은 `--color-pairs-gradient` PNG 배경 — 픽셀 샘플링으로 #70dfab→#3bd6cb→#20cfe3. 저작 도구에 근거 사전 점검 추가 · 467 / 173
- 2026-09-23 밤 · 재개 준비 · OS 재부팅으로 스크래치패드 소실(프로브 결과 6건·저작 도구). 도구 2종과 프로브 지시를 레포로 옮김 · 466 / 172
- 2026-09-23 · 회차 10 · theguardian 등재(43/43). **UK 웨이브 1 마감 4/4 verified**(ft·citymapper·ocado·theguardian). 검색칸은 7값 중 5값만 잰 채라 컴포넌트 선언 안 함 · 466 / 172
- 2026-09-23 · 회차 9 · ocado 등재(79/79). 헤드라인(`--salt-*` ≠ J.P. Morgan Salt) 독립 검증: 1,869개 이름과 겹침 0. 프로브 요약이 그려지지 않는 outline(style none) 변화를 세지 않도록 수정 · 465 / 171
- 2026-09-23 · 회차 8 · citymapper 등재(91/91). 헤드라인(검색칸 포커스 표시 없음) 재측정 일치. 프로브 `--text`가 aria-label·placeholder도 찾도록 수정. 국가 UK(Via 인수, 자회사 선례) · 464 / 170
- 2026-09-23 · 회차 7 · ft 등재(96/96) — 로컬은 Cloudflare 챌린지라 Aside로 측정. 포커스는 저작된 2겹 링, **hover는 Aside 세션이 :hover를 못 만들어 미측정으로 둠**(JAL 땐 됐음). Origami 문서는 로그인 뒤로 → 웨이백 스냅샷으로 대조. 국가는 UK(자회사 선례: skyscanner·farfetch) · 463 / 169
- 2026-09-23 · 회차 6 · "변화 없음" 스윕 7/7 유지 — 도구 결함은 커밋된 데이터를 오염시키지 않았다 · 462 / 168
- 2026-09-23 · 회차 5 · loglass 등재(99/99, 4 stated). JP 웨이브 4 마감 3/3 — 스카우트 유효 판정 전부 verified. 헤드라인(CTA 호버 링 #e77623) 일치, 인용 못 하는 봇월 출처 2건 제외 · 462 / 168
- 2026-09-23 · 회차 4 · folio 등재(95/95, 4 stated). 위임 프로브 5개 컨트롤 전부 재측정 일치, 헤드라인(모리사와 あおとゴシック 실제 로드) 확인, CDO 리브랜딩 글 원문 대조. 프로브 `--vars` 재귀(@layer) 수정 · 461 / 167
- 2026-09-23 · 회차 3 · studysapuri 등재(89/89, 4/4 stated). 위임 프로브의 헤드라인 "hover 변화 없음"이 틀림 — opacity 페이드(0.9/0.8/0.7/0.5). 원인은 프로브 도구(opacity 미출력·배경만 비교) → 수정, 평가기도 opacity 상태 인식. crowdworks는 재측정해 유지 · 460 / 166
- 2026-09-23 · 회차 2 · JP 웨이브 4 스카우팅 3/12(25%) + 위생 3건(velog·banksalad ds 제거, adobe S1 명시) · 459 / 165
- 2026-09-23 · 회차 1 · crowdworks 등재(141/141, 6/6, reason·advisory 0). 근거·포맷 게이트가 첫 시도에 통과 — §4 체크리스트가 작동. 증거 날짜를 캡처일로 정정 · 459 / 165
- 2026-09-23 · 루프 준비 · 상태 파악, 브랜치 origin 백업(`511e9edb`), 큐 정리 · 458 / 164
