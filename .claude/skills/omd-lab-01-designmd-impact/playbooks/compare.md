# Compare Playbook — 4-column 동시 스크롤 뷰

## 산출물
`.experiments/01-designmd-impact/compare/index.html`

## 요구사항

### Layout
- 4 column flex (옵션으로 5번째 column "Reference: Pinterest 핀 8개 슬라이드쇼" 추가 가능)
- 각 column 헤더: 라벨 + 짧은 설명 + chatlog 링크
  - V1: "DESIGN.md 없음"
  - V2: "수동 DESIGN.md"
  - V3: "자동 DESIGN.md"
  - V4: "자동 + 피드백 5회"
- 각 column body: `<iframe src="../v1-no-design/output/index.html">` ... 같이 4개

### 동기화 스크롤
- 한 iframe이 스크롤 → 나머지 3개 동일 비율로 스크롤
- 구현: 각 iframe 내부 contentWindow.scrollY를 listen → ratio 계산 → 다른 iframe scrollTo

### 부가 기능
- 우상단 "Reference 핀 보기" 토글 → `shared/reference-toss/pinterest/pin-*.jpg` 슬라이드쇼 모달
- 각 column 하단 "📜 chatlog" 링크 → `chatlog/v*-session.md` 새 탭으로
- 데스크탑 전용. 모바일 안내 메시지만.

### 정적 파일만
빌드 도구 없음. `index.html` + 인라인 CSS/JS 또는 `compare/style.css`, `compare/sync.js`.

### 실행 안내
`python3 -m http.server 8080` 또는 그냥 `open compare/index.html` (file://도 동작하도록 path 처리).
