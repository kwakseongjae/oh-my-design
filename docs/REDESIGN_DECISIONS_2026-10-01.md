# OmD 리디자인·SEO 결정 (2026-10-01)

근거: `docs/research/2026-10-01-redesign/AUDIT.md` (로컬 전용; Vercel 30일 사람 요청 기준).

| # | 결정 | 오너 선택 |
|---|---|---|
| R1 | 첫 화면이 앞세우는 것 | **카탈로그 우선** — 실측 레퍼런스 521개 → 브랜드 선택 → /builder. CLI·스킬은 그 다음 |
| R2 | 시각 톤 | **시안 2~3개를 보고 결정** (방향별 첫 화면 목업 비교) |
| R3 | 언어 | **영어 기본 + 한국어 랜딩** (lang 처리 포함; ja·zh 문서는 축소 검토) |
| R4 | 저수요 페이지 | **감사 표대로 정리** — 삭제: playground(+og route), font-playground(+API), presets, benchmarks, qa-references. 통합: collections→/design-systems 필터, changelog 버전 페이지→단일 페이지, alternatives ×5→1, cli→홈/docs, docs/connector→docs AI. 트래픽 있는 URL은 리디렉트. 유지: evolution, 블로그, /api/mcp |

미결(다음 단계): 로고(OMD 스크립트 SVG화 vs 교체, 표기명), legacy 113 색인 비중, /reference/[id] 삭제 여부(R4 표에서 '오너 몫'), /hangul 위치(새 컨셉 첫 페이지 vs docs 하위), 이번 수정판 /hangul 선출시 여부.

## IA·경로 (2026-10-01 저녁, 오너 위임 "SEO에 맞춰 경로·이름 바꿔도 돼" → Claude 판단)

근거: `docs/research/2026-10-01-redesign/IA-PLAN.md`.

| # | 결정 | 이유 |
|---|---|---|
| D1 | **URL 유지** (`/design-systems/[id]`, `/builder` 이름 그대로) | 검색어 "<brand> design system"과 일치, 상세 페이지가 이미 색인·AI 인용 중. 521 리디렉트·MCP 패키지 재배포·계측 부재 상태의 순위 변동 리스크 |
| D2 | **랜딩 브랜드 행 → `/design-systems/[id]`** (상세 = 레퍼런스 저장소의 항목 페이지). 상세에 `#use`(DESIGN.md 복사·다운로드, 에이전트 프롬프트, 설치 명령, "Customize →" /builder) | "builder보다 저장소" — R1 카탈로그 우선과 일치. builder 요청 수는 설계상 감소 |
| D3 | `/builder`는 색인 유지, 제목 "Customize a DESIGN.md" + 서버 렌더 h1. 색인 여부는 측정 후 재판단 | 판단 근거(측정) 부족 |
| D4 | `/reference/[id]` → `/design-systems/[id]` 308 | 30일 요청 1, 이미 canonical이 상세. 리디렉트라 되돌릴 수 있음 |
| D5 | 한국어 상세(`/ko/design-systems/[id]`)는 Phase 3로 별도 | 범위 분리 |
| D6 | 표기: EN "Design systems", KO "디자인 시스템 레퍼런스" | 검색어 일치 |
| D7 | legacy 113 색인 비중 현행 유지 | 별도 판단 |

AGENTS.md "Product surface ownership"는 구현 시 퍼널 Home → `/design-systems/[id]` → (선택) `/builder`로 개정.
