
## 이번 웨이브의 추가 지시 (오케스트레이터 — 웨이브 27·28 실측 근거)

**§11 서사의 연도·연혁이 구조적으로 새고 있다.** 두 웨이브 연속으로 A계열 사실 소실이
검토 층에서 잡혔다: genie `Korean Windows clients`(플랫폼 폰트 선택의 근거), gaudiolab
`spun out of academic sound research`(창업 연혁), gitlab `tokens.rounded.full: 9999`,
google `Product Sans addressed product lockups after the 2015 identity update`(연도 + identity update).

§11·§1의 **연도·리브랜드·창업·기업 연혁 문장**은 서사라는 이유로 버리지 마라. 받을 슬롯이
없으면 Scope나 Typography/Assets의 가장 가까운 자리에 원본 표현으로 넣고, 그것이 해석이면
인접 B2a 완전형 한정을 붙인 뒤 provenance 원장에 1행을 추가해 1:1을 유지해라.

**값 소실 자가 점검(제출 전 필수).** 원본 YAML `tokens.*`의 모든 키 경로와 §별 수치를
`grep -oF <값> <산출 DESIGN.md> | wc -l`로 대조해라. 같은 숫자가 다른 스케일에 있다고
보존된 것이 아니다 — **키 경로별로** 확인해라(웨이브 22 easywallet이 `tokens.rounded.lg:16`을
spacing의 16 때문에 통과시켰다).

**과잉 방어도 발명이다 (웨이브 29 greeting, D1 판정).** 원본이 말하지 않은 것을 본문에서
「~라고 말하지 않는다」로 적지 마라. greeting은 Desktop 범위를 보존한 뒤
`does not say that anything measures 1440px`를 덧붙였는데, `measures 1440px`라는 측정 틀
자체가 원본에도 sibling에도 없다 — **없는 주장을 지어내 닫은 것**이라 D1 위반이다.
미해상은 **적지 않는 것**이지 「아니다」라고 적는 것이 아니다. 원본이 세운 표면·키를
가르는 범위 한정(`md: 16` ≠ `lg: 16`)과는 다르다 — 그쪽은 원본에 둘 다 있는 것을 구분한다.

**Scope·Avoid의 도메인 발명 (웨이브 27·28·29 3연속).** 「우리가 다루지 않는 것」을 쓰려다
원본에 없는 도메인을 세우지 마라. 실측 사례: gaudiy `mobile app`(원본 0/산출 2) ·
gitlab `product application`(0/3) · gaudiolab `applications the company ships`(0/1) ·
govuk `native application`·`back-office`(각 0/3). 원본이 `native <select>`나
`browser native page transitions`만 말한다고 해서 「native application은 범위 밖」이라고
적을 근거가 되지 않는다. **범위는 원본이 세운 표면으로만 그어라.**

**페르소나 삭제는 이름·전기만이 아니다 (웨이브 27 gitlab · 31 hubspot).** §13을 지울 때
인물의 **동기**와 **소속 분류**도 함께 나가야 한다. gitlab은 동기 문장이 Primary tasks에
`matches GitLab's own product UI`로 남았고, hubspot은 소속 분류가 Audience에
`Solutions Partner agencies`로 **원본에 없는 새 표현으로 재구성**됐다(원본 0 / sibling 0 /
산출 1). 원본이 실제로 쓴 `Solutions Partner Program`·`agency partners`는 오히려 산출 0이었다.
Audience에는 **원본이 스스로 publicly observable segments라고 부른 그룹만**, 원본 표현
그대로 남겨라. 페르소나에서 유도한 재분류는 승격이다.

**§11 서사는 결론 문장까지가 한 단위다 (웨이브 31 hogangnono).** 앞 문장만 착지시키고
마지막을 버리지 마라. hogangnono는 sponsored content·실거래가까지 옮기고 원본 `:292`
`Every design decision — the prominent price display, the map-first layout, the refusal to
accept payment for listings — flows from …`를 통째로 빠뜨렸다(각 원본 1 / 산출 4파일 0).
그 문장이 브랜드가 스스로 밝힌 **설계 원리의 근거**다. §11 문단을 옮길 때는 **문단의 마지막
문장까지** 슬롯을 찾아라.

**`Primitive type`은 원본 YAML에 그 키가 있는 컴포넌트에만 붙는다 (같은 웨이브).**
hogangnono는 `type: button` 3회가 `button-primary`/`button-tint`/`button-disabled`뿐인데
산출이 Outline에 `Primitive type: \`button\``을 붙였다 — disabled의 타입을 다른 컴포넌트로
옮긴 것이다. §4에만 있는 컴포넌트는 `not in the token set`으로 두라(같은 파일의 Filter·
Search·Modal·FAB는 그렇게 했다).

**표면 간 측정 이전 금지 (웨이브 35 intercom).** 원본 한 문장이 여러 표면을 기록할 때,
괄호·수식어가 정하는 **귀속**을 지켜라. intercom 원본 `:268`은 한 줄에서 Hero Primary의
`42px / 12×16 / 16px·400`을 `(intercom.com Cream 캔버스)`로 한정하고, fin.ai에는 `#fff` 6px만
세우며, Compact Primary에는 서체 칸을 두지 않는다. 산출은 셋을 섞었다 — intercom.com 전용
서체를 Compact에, padding·height·font를 fin.ai에 붙였다.
**값이 원본에 있다는 것과 그 표면의 값이라는 것은 다르다.** 값 grep·키 경로 대조·sibling
대조가 전부 통과하므로, 표면 귀속은 문장을 읽어야만 지킬 수 있다.

**같은 값의 두 기록이 다르면 긴 쪽이 완전형이다 (웨이브 37 kakaot).** 원본이 YAML과 §표에
같은 항목을 각각 적을 때, YAML은 축약형이고 §표가 그것을 풀어 쓴 경우가 있다. kakaot 원본
§3 `:136`은 Caption use를 `Timestamps, fine print, ETA sublabels`로 적는데 산출은 YAML 쪽
`Timestamps, fine print`만 옮겨 도메인 용어 `ETA sublabels`를 잃었다(원본 1 / 산출 0).
**두 기록을 다 읽고 긴 쪽을 옮겨라.** 값 자체는 양쪽에 있으므로 값 grep으로는 안 잡힌다.

## 페르소나 그룹 라벨을 Audience로 승격하지 마라 (웨이브 31·42 재발)

원본 §13의 페르소나를 D2로 삭제하면서 **그 페르소나가 속한 그룹 표현을 Audience로 옮기는**
누수가 두 웨이브에서 반복됐다. 웨이브 31 hubspot은 `Solutions Partner agencies`라는
**원본에 없는 새 표현**을 Audience에 만들었고(원본 0 / sibling 0 / 산출 1), 웨이브 42
likelion에서 같은 형태가 다시 나왔다.

이 조항은 그동안 F3 감사 조건에만 있었고 **F3가 두 번 다 놓쳤다** — 검토 층이 잡았다.
그래서 예방 층인 여기로 올린다.

규칙:

- Audience에는 **캡처된 표면이 실제로 세우는 그룹**만 적는다. 원본 §11·§13 머리글이 그룹을
  원문으로 명시했으면 그 **원문 그대로**만 쓴다.
- 삭제한 페르소나의 직업·소속·역할을 재료로 그룹 표현을 **새로 만들지 마라.** 원본에 그
  문자열이 없으면 그것은 발명이다.
- Primary tasks도 같다. 페르소나의 **동기**(「~를 원한다」, 「~를 확인하려 한다」)를 과업으로
  바꿔 적지 마라. 과업은 표면과 컨트롤이 세운다. 웨이브 27 gitlab이 페르소나 동기를
  Primary tasks에 남겨 FAIL했다.
- 제출 전 자가 점검: Audience와 Primary tasks의 각 항목을 원본에서 `grep -oF`로 찾아라.
  원본 출현수가 0이면 그 항목은 근거가 없다.

## 제출 전 자가 대조 (웨이브 43 후속 — 소실형 결함 예방)

직전 세 웨이브에서 검토가 잡은 결함이 전부 **소실형**(원본 고유 사실·제약이 산출에 없음)으로
수렴했다. 발명은 예방 조항이 막았고, 남은 건 네가 원본을 다 옮기지 못하는 문제다. 그래서
산출을 다 쓴 뒤, 제출 전에 다음 대조를 **직접 실행**해라:

1. 원본의 §별로 **고유 표현**을 뽑아라 — 연도·고유명사·인용구는 물론이고, 다음 세 부류를
   특히: (a) §11/§1의 서사 연결문("~해서 ~가 됐다"의 인과), (b) 값에 붙은 **근거·수식어**
   ("의도적으로 +1px", "not a softened navy", "(30, bg)" 같은 단계 귀속),
   (c) §15/§5의 **제약 문장**(금지·조건·페어링).
2. 각 표현을 `grep -oF -- '<표현>' <산출 DESIGN.md> | wc -l`로 세라. 0이면 되돌아가서
   원본이 그 사실을 세운 절에 대응하는 자리에 넣어라. 넣을 슬롯이 없으면 Scope의 서사에
   원본 표현으로 넣어라.
3. 의역했다면 원문 병기를 우선해라 — 검토는 원문 문자열로 실측한다.
4. 이 대조의 결과(뽑은 표현 수 / 0이었다가 복원한 수)를 migration-log 끝에 한 줄로 적어라.

## 파생-편집 원장 형식 고정 (웨이브 46+ — 표기 사냥 종료)

원장 절 제목과 본문 형식이 여섯 가지로 갈라져 기계 검증이 계속 깨졌다(제목 5변형 + meituan의
산문 열거). 이제 규격으로 고정한다:

- 절 제목: 정확히 `## Derived editorial inventory`
- 본문: **표** — 헤더 `| Location in DESIGN.md | Qualified reading |` + 완전형 한정 1건당
  데이터행 1행. 산문 열거·괄호 계수·목록 금지.
- 행 수 == 본문 완전형 한정 수 (1:1). 두 읽기가 한 문장에 있으면 한 행에 병기.
