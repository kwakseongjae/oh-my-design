# 67-Reference Migration Plan

> Pipeline: `spec/verification-pipeline.md` · Skill: `.claude/skills/omd-add-reference/SKILL.md` · Definition of done per brand: ① §4 풀 reconcile + verification footer ② §10-15 philosophy 6 섹션 ③ tests pass.

## 현재 상태 (2026-05-08)

| 상태 | 수 | 목록 |
|---|---|---|
| ✅ Full done (§4 reconcile + philosophy) | 1 | apple |
| 🟡 Footer만 (§4 reconcile pending) — re-do 필요 | 9 | toss, airbnb, spotify, kakao, stripe, linear.app, vercel, notion, figma |
| 🔴 미처리 | 57 | 그 외 전부 |
| 📜 Philosophy 보유 brand | 19 | (Apple 포함) |
| 📜 Philosophy 누락 brand | 48 | |

## 시간 단위 (1 batch ≈ 1 turn)

각 batch는 **5 brand**, brand 1개당 ~8 tool call (live inspect + Tier 2 fetch + §4 edit + philosophy fetch + philosophy edit + 테스트). batch 끝마다 `npm test`, **부분 결과를 commit하지 않음**(사용자 컨펌 후 일괄).

---

## Phase A — Re-do 9 footer-only brands (3 batches × 3)

이전에 footer만 박아 안티패턴 됐던 9개를 풀깊이로 다시.

### A1 — KR + JP fintech/social (3)
- toss · kakao · baemin
- 공통 surface: 한국어 커머스/금융, 라이브 inspect는 toss.im / kakaocorp.com / baemin.com
- Style ref for philosophy: `toss` (자체) / `toss` / `toss`

### A2 — Travel + media (3)
- airbnb · spotify · elevenlabs
- airbnb는 이미 logged-out home, spotify는 open.spotify.com 추가 페이지 필요
- Style ref: `notion` 중립 / `claude` US 미니멀 / `claude`

### A3 — US dev/product (5 — 이건 5)
- stripe · linear.app · vercel · notion · figma
- 이미 있는 Tier 1/2 raw data 활용 가능. philosophy 어떤 것은 이미 있을 수 있음 — 점검 후 누락만 fill
- Style ref: `stripe` engineering / `claude` / `stripe` / `notion` (자체) / `claude`

---

## Phase B — 미처리 57 brand (12 batches × 5)

알파벳/유사 surface 기반으로 batch 묶음. 같은 batch 내 brand는 도메인 구조가 유사해 inspect 패턴 재사용.

### B1 — Productivity (5)
airtable · cal · clay · clickhouse · cohere
- web 대시보드 패턴 공유, refero에 stripe/notion류로 등재된 것 다수 가능

### B2 — Crypto + AI tools (5)
coinbase · composio · cursor · dcard · kraken
- coinbase/kraken 묶음 (crypto 화폐 단위 표시 패턴)
- cursor/dcard는 컬러 색조 강한 사이트

### B3 — Asia + dev infra (5)
expo · framer · freee · hashicorp · ibm
- expo/framer는 dev 채택, freee JP, ibm Carbon DS 공식 보유

### B4 — Communication + Asia (5)
intercom · karrot · line · mercari · pinkoi
- karrot/line/mercari/pinkoi 동아시아 marketplace, intercom US

### B5 — AI labs (5)
lovable · minimax · mintlify · mistral.ai · ollama
- 모두 AI 도구, 다크 surface dominant

### B6 — Visual + DB (5)
miro · mongodb · nvidia · ollama·posthog → 정정: miro · mongodb · nvidia · pinterest · posthog
- visual canvas + DB + observability

### B7 — Dev tools premium (5)
raycast · replicate · resend · revolut · runwayml
- raycast 다크 prosumer, runway 미디어, resend 엔지니어링

### B8 — Cloud + monitoring (5)
sanity · sentry · spacex · supabase · superhuman
- spacex 우주 dark, supabase Postgres, superhuman email

### B9 — Auto luxury (5)
bmw · ferrari · lamborghini · renault · tesla
- 자동차 5개 묶음, hero photography 패턴 공유

### B10 — AI / 검색 (5)
together.ai · voltagent · warp · webflow · x.ai
- AI/dev 혼합

### B11 — Anthropic / fintech (5)
claude · wise · zapier · opencode.ai · uber
- Claude 자체 brand, fintech wise, zapier, opencode

### B12 — Remaining stragglers (5)
ferrari (이미 B9?) — 정정. 미배치 brand 점검 후 채움

---

## 각 batch 내 단계 (per brand)

1. **Tier 1 라이브 inspect** — `mcp__playwright__browser_navigate(<brand-domain>)` + `evaluate` (computed style)
2. **Tier 2 교차** — `WebFetch(getdesign.md/<id>)` + `WebFetch(refero search ?q=<brand>)` (refero 결과 있으면 detail page WebFetch)
3. **Conflict matrix** → `web/references/<id>/.verification.md`
4. **§4 풀 재작성** — canonical schema 변형 블록
5. **Philosophy** — §10-15 누락이면 omd-init/AUGMENT 절차로 fill (Phase P)
6. **footer 박음** — Verified date / Tier sources / unresolved
7. **`npm test --silent`** — 215 passing 유지

batch 끝나면 보고: `완료 N | 남은 M | 다음 batch 후보`.

---

## 자동화 옵션

- `/loop` 또는 `schedule` 스킬로 batch 자동 트리거 가능 (사용자가 "주말 동안 자동으로" 류 요청 시)
- 단일 brand에서 unresolved conflict 발견 시 자동화 중단하고 사용자에게 보고

---

## 합리적 turn 분배 (estimate)

- Phase A: 3 turns (A1-A3)
- Phase B: 12 turns (B1-B12)
- 미세조정 / regression / sync: +2 turns
- **총 ~17 turns** 그러면 67/67 완료

각 turn은 5 brand, 한 batch 끝나면 사용자 검토받고 다음 진행. 자연어 한 줄(예: "다음 batch 가" / "A1 풀깊이로" / "전부 알아서")로 구동.
