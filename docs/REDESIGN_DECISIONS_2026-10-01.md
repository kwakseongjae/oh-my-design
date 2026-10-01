# OmD 리디자인·SEO 결정 (2026-10-01)

근거: `docs/research/2026-10-01-redesign/AUDIT.md` (로컬 전용; Vercel 30일 사람 요청 기준).

| # | 결정 | 오너 선택 |
|---|---|---|
| R1 | 첫 화면이 앞세우는 것 | **카탈로그 우선** — 실측 레퍼런스 521개 → 브랜드 선택 → /builder. CLI·스킬은 그 다음 |
| R2 | 시각 톤 | **시안 2~3개를 보고 결정** (방향별 첫 화면 목업 비교) |
| R3 | 언어 | **영어 기본 + 한국어 랜딩** (lang 처리 포함; ja·zh 문서는 축소 검토) |
| R4 | 저수요 페이지 | **감사 표대로 정리** — 삭제: playground(+og route), font-playground(+API), presets, benchmarks, qa-references. 통합: collections→/design-systems 필터, changelog 버전 페이지→단일 페이지, alternatives ×5→1, cli→홈/docs, docs/connector→docs AI. 트래픽 있는 URL은 리디렉트. 유지: evolution, 블로그, /api/mcp |

미결(다음 단계): 로고(OMD 스크립트 SVG화 vs 교체, 표기명), legacy 113 색인 비중, /reference/[id] 삭제 여부(R4 표에서 '오너 몫'), /hangul 위치(새 컨셉 첫 페이지 vs docs 하위), 이번 수정판 /hangul 선출시 여부.
