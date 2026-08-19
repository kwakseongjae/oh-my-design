# 프리셋 — fundamentals (장르 불문)

## P-FN-01 커스텀 리스트박스 (select-only combobox)

정렬·필터 셀렉트의 표준 구현. 네이티브 `<select>` 팝업 노출은 G28 위반.
계약: C17–C23 전부. 검증: 온집 store 정렬, 이웃장터 동네 선택, 스타일몰 정렬.

해부: 라벨(eyebrow) → 트리거 버튼(현재 값 + 캐럿) → `role="listbox"` 팝오버.
상태: 트리거 default/hover/focus-visible/expanded(elevation-selected),
옵션 active(키보드·호버 동기화)/selected. DOM 포커스는 트리거 고정,
옵션은 `aria-activedescendant`. Escape=값 유지 취소, Enter/Space/Tab=커밋,
typeahead·Home/End 지원. 팝업은 탭 시퀀스 밖.

참조 구현 (온집 e2e4 검증본 요약 — 토큰 슬롯: --radius-control,
--color-rule, --color-chip, --elevation-selected):

```jsx
export default function Listbox({ label, value, options, onChange }) {
  const listId = useId(); const labelId = useId();
  const triggerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(value);
  const selected = options.find((o) => o.id === value) ?? options[0];
  useEffect(() => { if (open) setActive(value); }, [open, value]);
  // 문서 클릭 시 닫기: mousedown 리스너, 컨테이너 밖이면 setOpen(false)
  const commit = (id) => { onChange(id); setOpen(false); triggerRef.current?.focus(); };
  const move = (d) => { const i = Math.max(0, options.findIndex((o) => o.id === active));
    setActive(options[(i + d + options.length) % options.length].id); };
  const onTriggerKey = (e) => { if (["ArrowDown","Enter"," "].includes(e.key)) { e.preventDefault(); setOpen(true); } };
  const onListKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
    else if (e.key === "Home") { e.preventDefault(); setActive(options[0].id); }
    else if (e.key === "End") { e.preventDefault(); setActive(options.at(-1).id); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); commit(active); }
    else if (e.key === "Escape") { e.preventDefault(); setOpen(false); }   // 값 유지 취소
    else if (e.key === "Tab") { commit(active); }
    else if (e.key.length === 1) { const hit = options.find((o) => o.label.startsWith(e.key)); if (hit) setActive(hit.id); }
  };
  return (
    <div className="listbox">
      <div id={labelId} className="eyebrow">{label}</div>
      <button ref={triggerRef} type="button" className="listbox-trigger"
        aria-haspopup="listbox" aria-expanded={open} aria-controls={listId}
        aria-labelledby={labelId} onClick={() => setOpen((v) => !v)}
        onKeyDown={open ? onListKey : onTriggerKey}>
        <span>{selected.label}</span><span className="listbox-caret" aria-hidden="true" />
      </button>
      {open ? (
        <ul id={listId} className="listbox-popup" role="listbox" tabIndex={-1}
          aria-activedescendant={`${listId}-${active}`}>
          {options.map((o) => (
            <li key={o.id} id={`${listId}-${o.id}`} role="option"
              aria-selected={o.id === value} data-active={o.id === active}
              onMouseEnter={() => setActive(o.id)} onClick={() => commit(o.id)}
              className="listbox-option">{o.label}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
```

## P-FN-02 라우트 전환 접근성 포커스

SPA 라우트 전환 시 스크린리더가 새 페이지를 인지하도록 h1에 프로그램
포커스를 주되, **시각 링은 반드시 억제**한다(G19 확장 — 3케이스 연속
재발했던 결함). 페이지별 `document.title` 갱신과 `scrollTo(0,0)`을 동반.

```jsx
// 라우트 변경 effect: 제목 갱신 → 스크롤 리셋 → 헤딩 포커스
useEffect(() => {
  document.title = pageTitle;
  window.scrollTo(0, 0);
  const h = document.getElementById("page-title");
  if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
}, [pathname]);
```
```css
#page-title:focus, #page-title:focus-visible { outline: none; }
```

## P-FN-03 가로형 미디어 카드

역참조·관련 콘텐츠가 1~2건일 때 세로 카드 그리드는 우측이 빈다(GS5).
커버 좌(고정 폭, 고정 종횡비) · 본문 우(eyebrow/제목/요약/메타)로 컬럼
폭을 채운다. 3건 이상이면 세로 카드 그리드로 전환. 검증: 온집 상품 상세
집들이 역참조, 스타일몰 룩북 역참조.

## P-FN-04 필터 칩 행

역할은 필터 단일(C27 — 정적 배지와 혼용 금지). 칩: 보더 rule + 면 chip,
활성은 면 반전(솔리드) 또는 악센트 링 중 시스템이 하나를 선언. 히트 타깃
≥44px(C28). 줄바꿈 허용, 폭주 시 접기(C30). "전체" 칩이 기본 활성.
필터 초기화 버튼은 **기본 상태에서 숨기고**, 활성 필터가 있을 때만
ghost로 노출. 검증: 온집 store, 이웃장터 카테고리, 스타일몰 필터.

## P-FN-05 빈 결과 상태

필터 조합이 0건일 때: 정직한 문장("이 조건의 매물이 없습니다") +
필터 해제 액션 1개. 일러스트·이모지 금지, 시스템 토큰 안에서.

## P-FN-06 결과 수 정의 라인

목록 위에 현재 조건과 결과 수를 사용자 언어로: "모든 동네 · 전체 카테고리
매물 30건". 정렬 기준이 데이터에 없어 생략된 것이 있으면 그 정의도 이 줄에
붙인다("수록된 순서"). 별도 경고 밴드·회색 박스로 만들지 않는다 — 그건
시스템 경고처럼 읽힌다(온집 G2에서 제거된 패턴).

## P-FN-07 칠해지는 표면의 패딩 해부 (interactive row/tile surface)

**규칙: 칠해지는 표면은 4면 전부 안쪽 패딩을 가진다.** 콘텐츠(특히 썸네일·
아바타 같은 미디어)가 칠해진 가장자리에 닿으면 실패. 세로 패딩만 준 행은
배경이 없을 때는 멀쩡해 보이지만, hover/selected/zebra 표면을 칠하는 순간
틴트 밴드가 썸네일에 달라붙어 "패딩을 모르는 화면"이 된다 — 이웃장터
e2e1에서 실제로 나온 결함(`padding: var(--space-3) 0` + `:hover{background}`).

해부 계약:
- 패딩은 4면 동일 스텝(스케일 값, 17px류 금지 G24). 미디어와 칠해진
  가장자리 사이 최소 간격 = 행 패딩과 같다.
- 텍스트가 콘텐츠 웰 기준선에서 밀려나면 안 되므로, 수평 패딩만큼
  **음수 inline 마진으로 되뽑는다**(`margin-inline: calc(-1 * <pad>)`).
- 디바이더는 행 박스 전체 폭이 아니라 **콘텐츠 폭에 인셋**한다(가상 요소
  `inset-inline: <pad>`). 칠해진 표면 위에서는 디바이더를 죽인다.
- 칠해진 표면에는 라운드를 준다 — 라운드 없는 전폭 틴트는 디자인된 표면이
  아니라 잘린 블록으로 읽힌다.
- 밀도 변형(compact/comfortable)은 패딩과 min-height가 **페어로** 움직인다(C9).

```css
.row {
  display: grid;
  grid-template-columns: var(--size-thumb) minmax(0, 1fr) auto;
  gap: var(--space-3);
  align-items: center;
  min-height: var(--size-row-min);
  padding: var(--space-3);                    /* 4면 — 핵심 */
  margin-inline: calc(-1 * var(--space-3));   /* 웰 정렬 보존 */
  border-radius: var(--radius-row);
  position: relative;
}
.row + .row::before {                         /* 디바이더는 콘텐츠 폭 */
  content: ""; position: absolute; top: 0;
  inset-inline: var(--space-3);
  border-top: 1px solid var(--color-rule);
}
.row:hover { background: var(--color-inset); }
.row:hover::before, .row:hover + .row::before { border-color: transparent; }
```

같은 규칙이 카드 내부에도 적용된다: 미디어가 풀블리드면 본문 패딩과 미디어
폭이 정렬되어야 하고(C26), 미디어에 패딩을 주면 4면 균등이다.

## P-FN-08 브랜드 마크 + 마스트헤드

**워드마크 텍스트 한 줄은 로고가 아니다.** 마크(인라인 SVG)와 워드마크의
락업이 최소 단위다. 외부 이미지 금지(G31), 이모지 금지(G30).

- **마크**: 철학에서 유도된 기하 하나. 장식이 아니라 제품의 명제를 압축한다
  (예: "자리를 먼저 고르는 상점" → 창/자리의 사각 프레임). 24×24 그리드,
  스트로크는 토큰 두께, 단색(currentColor)으로 반전 표면에서도 산다.
- **락업**: 마크 높이 = 워드마크 cap-height 기준(폰트 크기가 아니라 시각
  높이에 맞춘 광학 정렬), 마크-워드마크 갭은 시스템 값, 클리어 스페이스는
  마크 높이의 0.5 이상.
- **접근성**: 마크는 `aria-hidden`, 접근 이름은 워드마크 텍스트가 제공.
  홈 링크의 히트 영역 ≥44px.
- **마스트헤드**: 높이 토큰 고정, 현재 페이지 표시는 시스템 정식 마크(직선
  룰·배경 전환·웨이트 — 장식 언더라인 금지 G8), 스크롤 시 헤어라인/표면
  전환은 한 가지만. 워드마크-좌 + 링크-인라인 + 버튼-우 기본형을 목적 없이
  반복하지 않는다(G42) — 태그라인·동네 선택 같은 제품 고유 요소를 넣거나
  구조를 바꾼다.

## P-FN-09 히어로

"큰 글씨 + 버튼"은 히어로가 아니다. 정보 구조가 있어야 한다:
eyebrow → display → lede → 액션(1개) → **지지 요소**.

- 지지 요소는 장식 이미지가 아니라 **데이터에서 계산되는 정보**(동네별 건수,
  기획전, 랭킹)이거나 제품을 대표하는 실사다. 와이드에서 한쪽이 비면 실패
  (GS5) — 지지 요소가 그 자리를 채운다.
- `min-height:100vh` 전체 센터 스택 금지(G6). 1280×800 폴드에서 다음
  섹션의 존재가 보여야 하고, 하단 패딩 ≥ 1.3×상단(G44).
- 히어로에 쓴 이미지는 같은 화면 아래 그리드에 다시 등장하지 않는다.
- 액션은 1개(primary 1개 규칙 C3). 보조 동선은 링크로.

## P-FN-10 푸터

**고지 한 줄짜리 다크 스트립은 푸터가 아니다.** 최소 구조:

1. 브랜드 락업(P-FN-08의 마크+워드마크) + 한 줄 포지셔닝
2. 내비 그룹 1~3개(그룹 제목은 label 타이포, 항목은 링크)
3. 메타 줄 — 고지·저작권·언어 등, 규칙선 아래 낮은 대비

- 4열 균등 AI 기본 푸터 금지(G43). 브랜드 열이 넓고 링크 열이 좁은 비대칭
  또는 2열로. 열 수는 실제 링크 수에서 역산한다.
- 다크 표면이면 반전 토큰 쌍만 사용(G41/C39) — 라이트 hex 재사용 금지.
  본문 4.5:1, 메타 줄도 4.5:1 실측(C45). 회색을 어둡게 깔고 옅은 회색 글자를
  얹는 관행이 여기서 제일 자주 깨진다.
- 링크 히트 ≥44px, 그룹 간 간격은 섹션 스케일.
- 샘플/데모 고지는 여기 메타 줄 한 줄로만 산다(제품 본문에 반복 금지).
