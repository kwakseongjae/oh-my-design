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
5b. **JP 웨이브 5 + UK 웨이브 2** — 스카우팅 2026-09-23: JP 2/12(17%, pairs·hatena — 15% 하한 근접),
   UK 4/12(33%, sainsburys `--ln*364` Luna · bloomandwild · gousto · nhs `--nhsuk*73`). 경계 zopa. 탈락 사유: 토큰 ≈0
   (retty·openwork·cyberagent·gmo·waitrose·sky), 프레임워크(bizreach Mantine·raksul tw·kaonavi wp), 소수(connpass·dena·itv·nothing),
   차단(argos 403·boots catch-all), 중복(sakura = sakura-internet). 심층 프로브 6건(sonnet) 진행 중.
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
- [ ] `npm run build-registry` 순서대로 → quality → evidence:ledger → reference-ast
- [ ] fingerprint 추가 + 3중 미러(`data/`, `.claude/data/`, `.codex/data/`)
- [ ] `design-md/<id>/` 와 `packages/mcp/data/references/<id>/` 미러
- [ ] `npm run query:references:data` → `node web/scripts/sync-catalog.mjs` → `check-counts` ✓
- [ ] `web`에서 `npm test` 전부 통과
- [ ] 커밋 → 푸시

## 5. 루프를 멈추는 조건

- §1의 항목을 만났을 때 → 그 항목만 물어보고 나머지 큐는 계속 진행 가능한지 판단
- 같은 실패가 3회 → 멈추고 보고
- 큐가 비었을 때 → 다음 시장 후보를 스스로 찾되, 수율 근거가 없으면 보고
- 레퍼런스 10건마다 → **답을 요구하지 않는** 진행 보고를 남기고 계속

## 6. 진행 로그

회차가 끝날 때마다 한 줄. 최신이 위.

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
