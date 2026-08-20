# 프리셋 — genres/dashboard

## P-DB-01 KPI 카드 행
**언제** — 분석 화면 상단에서 같은 기간·같은 분모의 핵심 수치를 한 행으로 훑을 때.
**언제 아닌가** — 숫자 하나면 P-PR-68 단독. 아이콘-위-헤드라인 3열 타일(G3).
사용자가 주지 않은 "10×"류(G46). 기간이 다른 수치를 한 행에 섞는 자리.
**Base** — 표면 P-PR-60 `Card`(`CardHeader`/`CardTitle`/`CardDescription`/`CardContent`,
`size` `"default"|"sm"`, `--card-spacing`). 수치 P-PR-68. 증감 P-DB-03.
로딩 P-PR-65 `Skeleton`. Radix 통계 프리미티브 없음.
**해부** — 와이드에서 카드를 전폭으로 늘리기만 하면 실패(GS5). C32 3택1 중
**컬럼 추가(고밀도)** 또는 **좌측 max(프로덕트)** — 칸이 남으면 스파크·비교
문장·다음 지표를 채우거나 데이터를 더 요청한다. 카드 순서: 정의(분모+기간,
사용자 언어) → **수치(최대 웨이트, tabular-nums)** → 단위 → 비교(P-DB-03).
예: "지난 7일 결제 완료 금액 · 원". `gmv_7d` 금지(GS4). 페이지당 카드 변형
하나(C24), 카드 안 카드 금지(G4), 좌측 컬러 스트라이프 금지(G5). 전체 클릭과
내부 CTA는 하나만(C25). 그리드 트랙 `minmax(0,1fr)`(G50).
**상태** — default. hover는 선언된 면/보더만(hover-lift 금지 C24). 드릴다운
승격 카드만 `:focus-visible`. loading: 정의 라벨 유지, 숫자 슬롯만 같은 폭
스켈레톤. error: 수치 자리 실패 문장+재시도(P-DB-07). empty: **0은 값**.
**접근성** — 위젯 롤 남용 금지. 행은 `section`+보이는 제목. 수치는 정의와 DOM
순서로 병기(`aria-label`로 정의를 숨기지 않음, P-PR-68). 라이브면 `role="status"`.
링크/버튼이면 APG **Link** 또는 **Button Pattern**, 히트 ≥44(C2). 포커스 링
`:focus-visible` 즉시(G19/G15).
**토큰 슬롯** — 디스플레이 숫자 크기·웨이트·tabular-nums, 정의 라벨 색(4.5:1
C45), `--space-card-pad`/`--radius-card`, 행 갭(G24), 열 브레이크, 스파크 높이.
**게이트** — C2 C8 C24 C25 C32 C45 · G3 G4 G5 G11 G15 G18 G19 G24 G40 G46 G50 · GS4 GS5 GS8
**검증** — 미검증 — 리서치 유도. 정의·분모 병기는 온집 P-CM-04·P-FN-06이 실화면 확인됨(대시보드 행 자체는 아님).

## P-DB-02 시계열 차트 블록
**언제** — 한 지표가 시간에 따라 어떻게 움직였는지를 같은 기간 정의로 보여줄 때.
**언제 아닌가** — 시점 하나인 KPI(P-DB-01). 시간을 숨기는 구성비만. KPI 칸을
채우는 장식 스파크는 이 블록이 아니다.
**Base** — shadcn `ChartContainer` + `ChartConfig` + `ChartTooltip`/
`ChartTooltipContent` + `ChartLegend`/`ChartLegendContent`. 시리즈는
**Recharts** `LineChart`/`AreaChart`/`BarChart` + `Line`/`Area`/`Bar` +
`XAxis`/`YAxis`/`CartesianGrid`, `accessibilityLayer`. Radix 없음.
`ChartContainer`에 높이·`min-h-*`·`aspect-*` 중 하나(첫 페인트 측정).
**해부** — 제목 → 정의 라인(지표·기간·단위·집계, P-FN-06) → 플롯 → 범례 →
텍스트 요약 → 표 대안. **축·단위·데이터 없음 상태는 필수**: X=시간, Y 단위가
눈금·축 라벨에 보인다("원", "건"). 툴팁만의 값·축 없는 본체 금지. 시리즈는
`ChartConfig` 라벨로 이름 있고 색만으로 구분하지 않는다. 색은 `--chart-1`…
토큰, inline hex 금지(G48). 그라데이션 장식 필 금지(G2). 와이드에서 플롯만
늘어 비면 시리즈·비교 구간·표를 올려 채운다(GS5). 빈 데이터여도 축 크롬은
남기고 플롯 안에 정직한 문장(P-FN-05).
**상태** — default(시리즈+축). hover/active는 툴팁·가이드. `:focus-visible`은
차트|표 전환·범례. loading: 같은 높이 스켈레톤(P-PR-65). empty: 축 유지+문장+
필터 해제 1개. error: 카피+재시도(P-DB-07). reduced-motion이면 드로잉 0(G27).
**접근성** — (1) 정의·기간·최댓값/최솟값·추세 한 줄, (2) 같은 데이터의
**표 형태**를 P-PR-40 탭(차트|표) 또는 접는 표로 — 스크린리더 전용만으로
충족 아님. 표는 P-PR-63 또는 정적 `<table>`+`caption`. 툴팁은 유일한 값 채널이 아니다.
**토큰 슬롯** — `--chart-1`…`--chart-n`(라이트/다크 쌍 C39), 플롯 높이(P-DB-08 페어), 축 눈금 타이포(4.5:1), 그리드 `--color-rule`, 툴팁 면, 모션(transform/opacity만).
**게이트** — C32 C39 C45 · G2 G10 G14 G27 G40 G46 G48 · GS4 GS5 GS8
**검증** — 미검증 — 리서치 유도.

## P-DB-03 비교/증감 표기
**언제** — KPI·차트 주석·표 셀에서 이전 기간 대비 얼마가 달라졌는가를 붙일 때.
**언제 아닌가** — 비교 대상이 없는 단독 값(P-PR-68). 목표 없는 게이지를
증감으로 위장. 색만 바꿔 의미를 만드는 배지.
**Base** — hand-rolled 인라인(텍스트+기호). 표면이 필요하면 P-PR-61 `Badge`
`variant` `"outline"|"secondary"`. 정적 배지에 onClick 금지(C27). 장식 아이콘은
`aria-hidden`.
**해부** — 채널을 겹친다: **기호**(▲/▼ 또는 "+12%") + **숫자(단위)** +
**비교 대상 문구**("직전 7일 대비"). 색은 세 번째 채널 — 색만으로 오름/내림·
호재/악재 전달 금지. 극성은 지표마다 선언: 매출 오름=유리, 오류·이탈 오름=불리.
0 변화는 "같음"(중립)이지 초록이 아니다. 분모·기간이 본 수치와 다르면 문장에
쓴다. `%`만 있고 절댓값이 없으면 작은 모수에서 오해하므로 둘 다 또는 절댓값
우선. `delta_pct` 금지(GS4).
**상태** — up-favorable / up-unfavorable / down-favorable / down-unfavorable /
flat / unknown("비교할 지난 기간이 없습니다"). loading은 본 수치 스켈레톤에
맡김. 배지여도 hover 스케일 금지(G11).
**접근성** — 텍스트가 의미. 기호만이면 접근 이름에 "증가 12퍼센트, 직전 7일
대비"를 넣되 보이는 문구를 빼지 않는다. 색각·고대비에서 기호가 남는지
실측(C43/C45). 라이브면 `role="status"`. 정적 배지는 버튼이 아님.
**토큰 슬롯** — 유리/불리/중립 면·글자 쌍(다크 on-color C39, 악센트 남용 금지
G23), 기호 글리프 한 세트(G30), tabular-nums, 보조 문구 타이포(4.5:1).
**게이트** — C27 C39 C43 C45 · G8 G11 G22 G23 G30 G40 · GS4 GS8
**검증** — 미검증 — 리서치 유도. 할인율 대비 실측은 온집 P-CM-06(본 표기와는 별개).

## P-DB-04 필터·기간 선택
**언제** — 화면의 KPI·차트·표가 **한 기간·한 조건**을 공유할 때.
**언제 아닌가** — 위젯마다 몰래 다른 기간. 정렬만(P-FN-01). 전역 검색(P-PR-26). 네이티브 `<select>` 팝업(G28).
**Base** — 프리셋 기간: P-FN-04 칩, 또는 배타·소수면 shadcn `ToggleGroup`/
`ToggleGroupItem`(`type="single"`, `variant="outline"` — 현재 shadcn base는
**Base UI Toggle Group**). 사용자 지정: P-PR-23 `Popover` + shadcn `Calendar`
(`mode="range"`, react-day-picker, `--cell-size` 히트 ≥44). 트리거 P-PR-01
`Button` outline, 표시는 실제 날짜("8월 1일–8월 7일"). 차원은 ≤10이면 P-FN-01,
폭주면 P-PR-22(C30). 라벨은 P-PR-08.
**해부** — 툴바: 기간 프리셋 → 범위 트리거 → 차원 → (활성일 때만) 초기화
ghost(P-FN-04). 아래 정의 라인(P-FN-06): "지난 7일 · 전체 매장 · 결제 완료
12,403건". 칩은 즉시, 달력은 끝 날짜 커밋 전 요청하지 않음(C13). 적용이
필요하면 primary 1개(C3). 라벨은 "오늘/지난 7일/지난 30일/이번 달" — `last_7d`
금지. 기준 시각 병기("이 숫자는 오늘 14:32 기준"). 폭주는 접기(C30), 가로
스크롤 금지(G34).
**상태** — 칩/토글 default·hover·selected·`:focus-visible`·disabled. 팝오버
`data-state=open`. 범위 미완(시작만). loading은 본문(P-DB-07), 트리거는 유지.
초기화는 기본 숨김.
**접근성** — 배타 기간은 APG **Radio Group** 또는 **Toggle Button**(그룹 이름
"기간"). 범위 팝오버는 P-PR-23 + APG **Date Picker Dialog**: 열림 포커스
캘린더, Escape=값 유지 취소·트리거 반환. 리스트박스는 P-FN-01(C17–C23).
네이티브 셀렉트 금지(G28).
**토큰 슬롯** — 칩/토글 높이(밀도 페어 C9, 32/40/48), `--cell-size`, `--radius-control`, 활성 면(G8 정식 마크), 툴바 갭, 정의 라인 타이포.
**게이트** — C2 C3 C9 C13 C17 C28 C30 · G8 G19 G28 G34 G39 · GS4 GS8
**검증** — 미검증 — 리서치 유도. 필터 칩·초기화 숨김·정의 라인은 온집·이웃장터·스타일몰 P-FN-04/P-FN-06이 실화면 확인됨.

## P-DB-05 분석 데이터 테이블
**언제** — 차트와 같은 기간의 행 목록을 정렬·비교·드릴다운할 때. 숫자가 열의 본체다.
**언제 아닌가** — 키-값 스펙(P-CM-03). 셀 편집 스프레드시트(APG **Grid**).
카드 그리드. P-PR-63을 0에서 다시 그리는 자리(GS8).
**Base** — **P-PR-63 참조 조립**: shadcn `Table`/`TableHeader`/`TableBody`/
`TableRow`/`TableHead`/`TableCell`/`TableCaption` + Data Table 가이드 +
`@tanstack/react-table` v9(`rowSortingFeature`/`rowSelectionFeature`). 선택 열
`Checkbox`. 0건은 P-FN-05 또는 shadcn `Empty`. URL 페이지면 P-PR-42, 밀도
P-DB-08, 증감 열 P-DB-03, 행 드릴다운 P-DB-06.
**해부** — Caption이 정의+기간+건수+정렬을 사용자 언어로("지난 7일 결제 완료 ·
12,403건 · 금액 많은 순"). 숫자 열은 헤더에 단위, 셀은 우측 정렬·tabular-nums.
구현 컬럼키를 헤더로 쓰지 않음(GS4). 칠해지는 행은 4면 패딩(P-FN-07).
와이드에서 표만 얇으면 열을 더 보여 주거나 좌측 max(C32/GS5). 행 전체 클릭과
행 안 메뉴는 하나만(C25). 메뉴는 P-PR-25.
**상태** — P-PR-63 매트릭스 재사용(default/hover/selected/`focus-visible`/
disabled/loading/empty). 부분 실패는 표만 에러(P-DB-07). 로딩 스켈레톤 행은
열 폭 복제(P-PR-65).
**접근성** — P-PR-63: APG **Table Pattern** + **Sortable Table Example**.
`th scope="col"`, 정렬 열만 `aria-sort`. 캡션의 기간·정의는 차트 대안
표(P-DB-02)와 같은 문장. 드릴다운 행의 이름은 제목+수치. `role="grid"`를 함부로 올리지 않음.
**토큰 슬롯** — P-PR-63 재사용(행 최소 높이 밀도 페어, 셀 패딩, selected/hover
면, `--color-rule`, tabular-nums). 증감 열은 P-DB-03 토큰.
**게이트** — C9 C25 C32 C41 · G19 G28 G40 G50 · GS4 GS5 GS8
**검증** — 미검증 — 리서치 유도. 표 해부·정렬·빈 상태는 P-PR-63, 키-값 표는
온집 P-CM-03(본 조립과 별개).

## P-DB-06 드릴다운
**언제** — KPI·차트 구간·표 행에서 같은 정의를 유지한 채 한 단계 더 쪼갤 때
(전체 → 매장 → 주문).
**언제 아닌가** — 무관한 화면 점프. 짧은 편집 모달(P-PR-20). 파괴 확인(P-PR-21).
경로 없이 필터만 바뀌는 자리(P-DB-04).
**Base** — 경로 P-PR-41 `Breadcrumb`(`BreadcrumbList`/`Item`/`Link`/`Page`/
`Separator`/`Ellipsis`). compact 1패인 상세는 P-PR-22 `Sheet`/`Drawer`,
expanded 동시 2패인(C35). 라우트면 P-FN-02. 행 해부 P-FN-07. 차트|표 전환 P-PR-40.
**해부** — 한 번에 한 차원만. 상위 기간·필터는 유지되고 정의 라인에 쌓인다
("지난 7일 · A매장 · 결제 완료"). 와이드=마스터-디테일 2패인, 협폭=시트/라우트
(C35). 트리거는 카드/행/차트 구간 중 **하나** — 전체 클릭+내부 CTA 금지(C25).
차트 점 클릭은 그 시간의 표 필터이거나 상세, 둘 다이면 우선순위를 선언.
빈 하위는 P-FN-05. 브레드크럼 현재는 링크가 아님.
**상태** — 트리거 hover/`focus-visible`/current. 시트 `data-state=open`.
하위 loading은 디테일만 스켈레톤. 하위 error는 패인 안 카피+뒤로. 결과가
이미 목록에 있으면 축하 토스트 금지(G16).
**접근성** — 브레드크럼 APG **Breadcrumb**, `aria-current="page"`. 시트는
P-PR-22(APG **Dialog (Modal)**). 라우트는 P-FN-02(제목 포커스, 시각 링 억제
G19). 차트 구간이 포인터만의 히트면 실패 — 같은 필터에 표 행·버튼 경로.
포커스는 열린 디테일 제목으로.
**토큰 슬롯** — 패인 폭(예: 28rem / 1fr), 마스터-디테일 갭, `--size-sheet-width`,
브레드크럼 갭(P-PR-41), 행 패딩(P-FN-07과 페어).
**게이트** — C25 C35 · G16 G19 G56 · GS4 GS5 GS8
**검증** — 미검증 — 리서치 유도.

## P-DB-07 빈/로딩/부분 실패 상태
**언제** — 여러 위젯이 각자 데이터를 가져올 때. 전부 대기, 전부 0건, **일부만 실패**, 새로고침·실시간 표기를 정직하게 할 때.
**언제 아닌가** — 버튼 한 개의 펜딩(C4). 필드 에러(C16). 결과가 이미 보이는
행동의 축하 토스트(G16). 개발자 상태 스위처(GS3).
**Base** — 로딩 P-PR-65 `Skeleton`+`Spinner`. 빈 상태 P-FN-05, 표면 shadcn
`Empty`(`EmptyHeader`/`EmptyTitle`/`EmptyDescription`/`EmptyContent` —
`EmptyMedia` 일러스트·이모지 금지 G30). 위젯 실패 shadcn `Alert`(`AlertTitle`/
`AlertDescription`/`AlertAction`, `variant` `"default"|"destructive"`) +
재시도 P-PR-01. 페이지 치명만 상단 Alert. 화면 밖 실패만 P-PR-27.
**해부** — **위젯 단위 생존**: 차트 실패가 표를 비우지 않는다. 실패 슬롯은
높이를 유지하고 "이 그래프를 불러오지 못했습니다"+재시도 1개 — 에러코드·스택
금지(GS4). 빈 건은 정직한 문장+필터 해제 1개, 0과 "없음"을 구분. 로딩은 자리
복제 스켈레톤이지 화면 중앙 스피너가 아님. **새로고침·실시간은 정직**: 폴링이면
"1분마다 다시 가져옴 · 마지막 오늘 14:32", 수동이면 그 시각만. 소켓이 없으면
"실시간" 점·LIVE 배지 금지. 잦은 자동 갱신은 일시정지(G17 동형).
**상태** — loading / empty / error / partial-error / stale(마지막 성공을 보여
주며 갱신 중) / live(실제 연결일 때만). partial-error는 실패 위젯만 Alert.
reduced-motion이면 펄스 정지(G27).
**접근성** — 영역 `aria-busy`(P-PR-65). 완료는 polite `status` 한 번. 실패는
`Alert`+`role="alert"`(APG **Alert**), 포커스를 빼앗지 않되 재시도는 탭으로
닿는다. Empty 액션 1개. 실시간 점만 있고 이름 없으면 실패 — "연결됨" 텍스트.
**토큰 슬롯** — 스켈레톤 면(C42), 위젯 최소 높이(차트/카드와 페어), Alert 면/보더(두께로 상태 만들지 않음 G39), 재시도 높이(C9), stale 메타 타이포.
**게이트** — C4 C16 C42 · G16 G17 G18 G27 G30 G39 G40 · GS3 GS4 GS8
**검증** — 미검증 — 리서치 유도. 빈 문장+액션 1개는 온집·이웃장터·스타일몰
P-FN-05가 실화면 확인됨.

## P-DB-08 밀도 전환
**언제** — 같은 분석 화면에서 행·카드·차트·컨트롤의 여백을 한 스케일로
줄이거나 넉넉히 할 때.
**언제 아닌가** — 페이지마다 다른 밀도를 즉흥으로. 인풋만 줄이고 버튼은
그대로(C9). 개발자용 테마/상태 스위처를 제품에 노출(GS3). 반응형 한 구간을
"밀도"라고 부르는 자리.
**Base** — 배타 전환 shadcn `ToggleGroup`/`ToggleGroupItem` `type="single"`.
컨트롤 높이는 P-PR-01/P-PR-02와 공유. 표 행 P-FN-07, 카드 P-PR-60 `size`
`"sm"|"default"`. 저장은 사용자 설정이지 쿼리 디버그 플래그가 아님.
**해부** — 밀도는 **패딩과 min-height가 페어**(C9). 스케일 예: compact 32 /
comfortable 40 / 필요 시 48 — 이름 있는 토큰만(G24). 한 스위치가 KPI 카드
패딩, 차트 `--size-chart-h`, 표 행 높이, 칩/버튼/인풋 높이를 같이 옮긴다.
보더 두께로 밀도를 만들지 않음(G39). 와이드 compact에서 생긴 여백은 열 추가
(P-DB-01/C32)로 채운다 — 공백을 남기면 GS5. 라벨은 "촘촘히/보통". 툴바 한 자리,
히트 ≥44(시각 32여도).
**상태** — 각 값 selected/unselected + hover + `:focus-visible` + disabled
(로딩 중에도 밀도는 대개 가능). 레이아웃 속성 애니 금지(G14) — 즉시 또는
color만. reduced-motion이면 즉시(G27).
**접근성** — 그룹 이름 "표시 밀도". 배타면 APG **Radio Group** 또는
**Toggle Button**. 아이콘만이면 `aria-label`. 큰 레이아웃 변경은 `status`로
"촘촘히 보기". 포커스 링 `:focus-visible`(G19). 화살표로 형제 이동, Space/Enter 선택.
**토큰 슬롯** — `--size-control-{sm,md,lg}`, `--size-row-min-*`,
`--space-card-pad-*`, `--size-chart-h-*`, 칩 높이, 스위치 높이(페어), 갭 스케일.
**게이트** — C2 C8 C9 · G14 G19 G24 G27 G39 · GS3 GS5 GS8
**검증** — 미검증 — 리서치 유도.
