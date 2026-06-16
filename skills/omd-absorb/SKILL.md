---
name: omd:absorb
description: "기존 프로젝트 코드베이스(+CLAUDE.md/AGENTS.md 룰셋 + 이번 세션 채팅 결정)에서 디자인 토큰·컴포넌트·voice를 추출해 DESIGN.md를 신규 생성하거나 보강 — 레퍼런스에서 시작하는 omd:init의 brownfield 형제. §1-9(토큰·컴포넌트)는 코드에서 측정해 grounding하고, §10-15(철학)는 룰셋·채팅·실제 카피에 출처를 달거나 [FILL IN]으로 남긴다(절대 지어내지 않음). '코드베이스로 DESIGN.md 만들어', '우리 코드에서 디자인 추출', 'Tailwind/CSS 토큰 읽어서 시스템화', 'extract design from our codebase', 'reverse-engineer DESIGN.md', 「既存コードから設計言語を抽出」, 「從程式碼提取設計系統」류에 트리거. 코드베이스가 풍부할 때 omd:init 대신 라우팅되거나 단독 호출."
---

# omd:absorb — Codebase → DESIGN.md (Brownfield)

기존 코드베이스의 *실제 구현된* 디자인을 측정해 DESIGN.md를 만든다. omd:init이 **레퍼런스 → variation**(greenfield)이라면, omd:absorb는 **코드 → 합성**(brownfield)이다. 이것은 Hermes 피드백 루프의 **콜드스타트(turn 0)** — 여기서 세운 DESIGN.md를 omd:learn/remember/taste가 이후 점진적으로 고도화한다.

**CLI 호출 없음** — Read/Bash/Write 툴 + 번들 헬퍼 스크립트로 self-contained 처리.

## 두 구역 규율 (CRITICAL — 위반 = fabrication 사고)

| 구역 | 성격 | 출처 | 규칙 |
|---|---|---|---|
| **§1-9** 토큰·컴포넌트·레이아웃 | data-bound | 코드 측정 (seed) | 모든 값은 실제 코드/computed-style 샘플에 grounding. 측정 못 한 건 비우거나 정직히 cap. |
| **§10-15** voice·narrative·principles·personas·states·motion | judgment-bound | 룰셋 + 채팅 + 실 카피 | CSS에서 역추론 **불가**. 증거에 출처를 달거나 `[FILL IN]`. **절대 지어내지 않음.** |

> exemplar(가장 가까운 카탈로그 레퍼런스)는 **품질의 천장(ceiling)**을 보정하고, 증거가 **실제 fill**을 정한다. 빈약한 입력에 `[FILL IN]`이 많은 건 실패가 아니라 정직 신호다.

## 전체 플로우

```
Phase 0: 진입/라우팅 확인
Phase 1: 코드베이스 프로파일 + 모드 (create / augment, rich / thin)
Phase 2: §1-9 토큰 seed 추출 (결정론적)
Phase 3: 최근접 exemplar 선정 (품질 보정 기준)
Phase 4: §1-9 DESIGN.md 조립 (data-bound, 컴포넌트 sparse↔rich flex)
Phase 4.5: §10-15 grounded 합성 (cite-or-[FILL IN])
Phase 5: 검증 + Fidelity Receipt
Phase 6: DESIGN.md + shim 작성
Phase 7: 요약 출력
```

## Phase 0 — 진입 / 라우팅

이 스킬은 두 경로로 들어온다:
1. **자동 라우팅** — omd:harness Step 2.5 또는 omd:init Phase 1이 *리치 코드베이스*(아래 신호)를 감지하면 reference picker 대신 여기로 보냄.
2. **단독 호출** — 사용자가 "코드에서 DESIGN.md 만들어" 류로 직접 트리거.

**리치 코드베이스 신호** (하나라도 충족 시 codebase-led 우선): `tailwind.config.*` 존재 / CSS `:root` custom property(`--primary` 등) 존재 / `src/components/`·`app/components/`에 N≥5 컴포넌트 / 라이브 dev 서버 도달 가능. 신호 없으면 → omd:init(reference-led)로 되돌림.

## Phase 1 — 코드베이스 프로파일 + 모드

1. `package.json`으로 스택 판정(next/nuxt/vite/react/vue/svelte/astro). cwd가 모노레포면 디자인이 사는 워크스페이스(예: `web/`)를 타깃으로.
2. **모드 결정:**
   - 루트에 DESIGN.md 없음 → **create**.
   - 이미 있음 → **augment**(측정값으로 §1-9 토큰 갱신·검증, 기존 §10-15 narrative는 보존, 백업 없이 덮어쓰기 금지).
3. **dev 서버 탐지:** `package.json` scripts에서 `dev`(next dev/vite 등) 추론. 떠 있으면 그 URL 사용, 아니면 부팅 제안 또는 `build && serve`. **렌더 불가 시** → 정적 소스만 읽고 산출물에 `static-derived / unverified` 표기(정직한 degrade).

## Phase 2 — §1-9 토큰 seed 추출 (결정론적)

번들 헬퍼로 측정 기반 seed를 만든다. `--url`은 Phase 1의 dev 서버:

```bash
node <skill>/scripts/dump-seed.mjs --url <devserver-url> --cwd <target> --out .omd/absorb/<run>
```

(dev 레포 경로: `web/scripts/dump-seed.mjs`. 설치 시 `.claude/skills/omd-absorb/scripts/`로 동봉.)

`seed.json`이 주는 것: `framework`, `surfaces[]`, `colors{primary/background/foreground/card/secondary/muted/accent/destructive/border/ring/charts[]}`(라이브 `:root` 토큰을 oklch/lab까지 canvas로 해석), `radius_scale[]` + `radius_base_px`, `fonts[]`, `confidence`. dev 서버가 없으면 ctx-prime의 source-derived 값으로 채우고 confidence를 낮춘다.

- **색 우선순위:** 선언 `:root` 토큰(canonical) > 라이브 observed primary 후보 > source dominant. 충돌하면 산출물에 한 줄 명시.
- 토큰을 "개선"하지 말 것 — 측정값이 canonical.

## Phase 3 — 최근접 exemplar 선정 (품질 보정)

omd:init Phase 2와 동일한 fingerprint 매칭(`reference-fingerprints.json`)으로 가장 가까운 카탈로그 레퍼런스 1개를 고른다. 이건 **톤 복제용이 아니라** §1-15의 *깊이·"why" 산문 밀도·분량*을 맞추는 **품질 잣대**다. (예: 핀테크 대시보드 → toss; 미니멀 프리미엄 → apple.)

## Phase 4 — §1-9 DESIGN.md 조립 (data-bound)

캐논 스키마(`spec/omd-v0.1.md` §1-9 + `spec/components-schema.md` §4 문법)대로, seed 값으로 채운다:

- **§1 Visual Theme** — 측정된 팔레트·radius·밀도에서 분위기를 *기술*(추측 금지). exemplar 수준의 "why" 한 줄 이상.
- **§2 Color** — descriptive-name + hex 동시(`Indigo Primary (#5358ee)`). seed.colors의 role을 그대로. 역할(primary/bg/fg/border/...)별로.
- **§3 Typography** — seed.fonts + 소스(layout/`@font`)에서 패밀리·스케일.
- **§4 Components** — **코드베이스에 따라 flex.** 랜딩앱(shadcn 프리미티브 위주) → 핵심 variant만(정직한 cap). 디자인시스템 레포 → 풍부하게. §4 variant-block 문법 준수(variant heading + `- Field: value` 한 줄당 1필드, slash-join 금지). 부족하면 omd-component-harvest로 보강 가능하다고 표기.
- **§5 Layout / §6 Depth & Elevation** — surface_inventory·spacing·shadow에서. shadow 미측정 시 비우거나 cap.
- **§7 Do/Don't · §8 Responsive · §9 Agent Guide** — 측정 가능한 사실 + exemplar 형식.

## Phase 4.5 — §10-15 grounded 합성 (cite-or-[FILL IN])

omd:init Phase 4.5의 규율을 **§10-15 전체로 확장**(#32). 세 증거원을 읽는다:
- **룰셋** — `CLAUDE.md` / `AGENTS.md` / `.cursor/rules/*` (팀이 이미 적어둔 voice·원칙 지시).
- **이번 세션 채팅** — 사용자가 내린 디자인 결정(예: "Linear보다 차분하게").
- **실 카피** — 코드의 실제 버튼 라벨·empty/error 문구.

각 §10-15 문장은 **출처 태그**(`file:line` / `CLAUDE.md 규칙` / `chat-turn`)를 달거나, 증거 없으면 본문을 `[FILL IN: <섹션 목적 한 줄>]` + 상단 `<!-- omd:limitation §X needs project facts. Replace before shipping; do not fabricate. -->`로 남긴다. 이 placeholder들은 이후 omd:taste/learn이 채워가는 **enrichment 타깃**이다(성숙도 미터).

## Phase 5 — 검증 + Fidelity Receipt

1. **포맷 게이트** — 캐논 스키마 준수 검증(§1-15 존재, §4 문법, descriptive-name+hex, placeholder-lint). `omd validate`(가능 시) 또는 catalog-integrity 규칙 수동 확인.
2. **토큰 충실도** (dev 서버 있을 때) — `node <skill>/scripts/verify-fidelity.mjs`로 §1-9 토큰이 실 UI를 재현하는지 패밀리별(color/type/radius) 점수.
3. **드리프트** — `node <skill>/scripts/verify-drift.mjs <url>`로 observed-but-undeclared 버킷(코드가 쓰지만 토큰에 없는 색).
4. **깊이 보정** — `verify-fidelity`/`receipt`를 Phase 3에서 고른 exemplar로 돌려(`--exemplar references/<id>/DESIGN.md`) §1-9가 그 exemplar 깊이의 몇 %인지(`depthParity`) 점수. 얇은 섹션(under-developed)을 표기해 어디를 더 채울지 안내. (exemplar = 천장, 증거 = 실제 fill / #36)
5. **양면 Fidelity Receipt** `.omd/fidelity-receipt.md` emit — 윗면: 토큰 충실도 + 드리프트 + **깊이 vs exemplar(§1-9)**, 아랫면: §10-15 provenance ledger + **maturity 미터([FILL IN] 정직 표기, cited-only)**. (#35/#36/#38)

## Phase 6 — DESIGN.md + shim 작성

- **create**: 루트에 `DESIGN.md` Write. frontmatter:
  ```yaml
  ---
  omd: 0.1
  brand: <Project Name or "Project">
  absorbed_from: codebase
  absorbed_at: <ISO-8601>
  calibrated_against: <exemplar-id>
  ---
  ```
- **augment**: 기존 §1-9 토큰 섹션만 측정값으로 갱신, §10-15 보존, 변경점 요약.
- frontmatter `tokens:` 블록(DTCG-lite)을 seed에서 채운다.
- Shim 3종은 omd:sync 위임(`Skill: omd:sync, args: --force`).

## Phase 7 — 요약 출력

한 문단으로: 모드(create/augment) · 측정된 주요 토큰 2-3개(primary/radius/font) · 컴포넌트 커버리지(sparse/rich) · §10-15 중 채워진 vs [FILL IN] 개수(성숙도) · Fidelity Receipt 경로 · 다음 스텝(`omd:apply`로 UI 작업 / `omd:taste`로 [FILL IN] 채워가기 / `omd-component-harvest`로 §4 보강).

## 핵심 원칙 (위반 = regression)

- **§1-9는 측정, §10-15는 증거.** 측정 못 한 토큰·증거 없는 철학을 지어내지 말 것.
- **측정값이 canonical** — 레퍼런스/exemplar는 품질·형식 보정용일 뿐 토큰값 권위 아님.
- **honest cap** — 컴포넌트·shadow 등 코드에 빈약하면 억지로 만들지 말고 비우고 표기.
- **augment는 보존** — 기존 §10-15 narrative를 측정으로 덮지 말 것.

## 금지

- 증거 없는 §10-15 산문을 "exemplar처럼 보이려고" 작성(= fabrication).
- 측정 안 된 §1-9 토큰 값 임의 생성.
- DESIGN.md가 이미 있는데 백업 없이 덮어쓰기.
- 존재하지 않는 CLI subcommand 호출 (현 CLI는 `install-skills`만).
- dev 서버 렌더 실패를 숨기고 high-confidence인 척(반드시 `unverified` 표기).
