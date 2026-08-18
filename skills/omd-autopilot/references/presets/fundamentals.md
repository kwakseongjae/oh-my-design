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
