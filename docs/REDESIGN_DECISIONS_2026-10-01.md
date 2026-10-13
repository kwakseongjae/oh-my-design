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

## 2026-10-13 오너 결정

| # | 결정 |
|---|---|
| Q1 | **builder 완전 제거** — `/builder?ref=X` → `/design-systems/X#use` 308. 커스터마이즈 기능 폐기. 붙여넣은 옛 링크는 리디렉트로 계속 열림 |
| Q2 | 10/1 랜딩은 되돌리지 않고 **전면 리브랜딩**("너무 베끼는 느낌, 구림"). codex CLI로 로고·이미지 새로 생성 허용. "신박하게" |
| Q4 | 계측: Vercel Speed Insights 켜져 있는지 확인 → 아니면 GA4 복구 |
| Q5 | 로캘 순서 ko → ja → zh-tw 승인 |
| 추가 | 트렌드 조사: shadcn DESIGN.md 스킬 포스트(X 10/10), Kailash ui-skills 목록(X 9/22) + 셰이더 오픈소스 실험(`~/Desktop/projects/tf-shaders`, shader-landing 스킬) 반영 |

## 2026-10-13 규격·폰트 결정 (근거: `docs/research/2026-10-13-format/FORMAT-LANDSCAPE.md`)

| # | 결정 |
|---|---|
| F1 | 형식: **B(Google frontmatter + Google 섹션 순서)도 허용 — "업계 규격에 더 맞다면"**. 판정은 실증으로: shadcn 스킬 end-to-end에서 frontmatter vs 섹션 내 fenced YAML 추출 비교 후 확정 (Claude) |
| F2 | **대체 폰트 허용** — 이름표 단 대체 층(브랜드 사실 / 실측 권장 대체 "not the brand face" / 문자 체계별 안전 기본값). shadcn 폰트 레지스트리는 Google Fonts만 받으므로 대체는 Google Fonts 서체 우선(KR: Noto Sans KR 등) 명시. AGENTS.md 문구는 "이름표 없는 대체 금지"로 개정(별도 커밋, 전후 비교 제시) |
| F3 | 검사 기준(Claude 판단): **`@google/design.md lint` 오류 0개가 게이트**. 경고는 파일별 사이드카에 기록하고 게이트하지 않음. 실측 브랜드 값의 대비 경고(예: toss 3.71:1)는 숨기지 않고 "Known Gaps" H3에 사실로 기록 |
| F4 | **새 형식 전환 진행** — legacy 518 → 새 형식 직행(Core v2 경유 안 함). 품질 등급 299/109/113·evidence-integrity 모션 수 불변, 레지스트리 출력은 형식 차이만(값 변화 없음) 비교기로 검증. 출시 GO는 별도 |
| F5 | CJK 조판(Claude 추천, 오너 "추천으로"): **구조화 + 산문 병행** — frontmatter 네임스페이스 키 `typesetting:`(문자 체계별 word-break/line-break/폰트 스택/구두점 처리; Google lint는 오타형이 아닌 커스텀 키에 침묵) + "CJK Typesetting" 산문 섹션 |
