---
name: omd:add-reference
description: "URL 또는 brand id 입력 → 3-tier 검증 파이프라인(Tier 1 라이브 + Tier 2 getdesign/refero + Tier 3 reconcile)으로 references/<id>/DESIGN.md를 신규 생성(CREATE)하거나 기존 섹션을 검증·갱신(UPDATE). '레퍼런스 추가/수정', 'X DS 검증', 'X 컴포넌트 다시 뽑아줘' 류에 트리거."
argument-hint: "<url|id> [--mode create|update|update-§N] [--style-ref <id>] [--runner codex-terra]"
user-invocable: true
---

# omd:add-reference

`spec/verification-pipeline.md`의 3-tier 파이프라인을 기계적으로 실행하는 스킬. **CREATE / UPDATE / SYNC** 세 모드.

## 모드 라우팅 (Phase 0)

| 입력 | 모드 |
|---|---|
| `https://...` | **CREATE** — 새 reference 9-section 생성 |
| `<id>` (web/references/<id>/ 존재) | **UPDATE** — §4 (기본) 또는 지정 섹션 검증·갱신 |
| `<id>` (없음) | 에러 — URL로 CREATE할지 묻기 |
| `--mode sync` | **SYNC** — count·landing·README·gh description만 갱신 |

CREATE에는 항상 SYNC가 뒤따른다 (count +1).

---

## 핵심 원칙 (모든 모드 공통)

1. **Tier 1 = 절대 우선.** brand의 공식 DS docs 또는 라이브 사이트 computed style이 truth.
2. **Tier 2 = 교차검증.** getdesign.md/<id> + styles.refero.design/?q=<brand> **둘 다 시도**. 한쪽만 성공해도 OK, 둘 다 실패면 footer에 명시.
3. **컨플릭트 silent 해결 금지.** Tier 1 ↔ Tier 2 충돌 시 채팅으로 보고 후 결정.
4. **거짓 주장 금지.** "확인했다"고 쓰려면 같은 턴에 tool call 증거 필요. refero "없음" 단정은 `?q=` 검색 + 스크롤 시도 후만.
5. **검증 footer 의무.** 갱신한 섹션 끝에 `Verified: YYYY-MM-DD` + 모든 source URL 기록.
6. **정확성만큼 맥락 깊이도 gate다.** reference는 감사 보고서가 아니라 사용자가 브랜드를 이해하고 적용하기 위한 문서다. 검증 메타·미확인 목록으로 §1/§3/§10-13을 대체하지 않는다. 공식 history/rebrand/culture/font 자료로 브랜드의 기원, 현재 변화, 표현 방식, 타이포 자산을 설명하되 각 사실의 evidence class를 분리한다.

### Context depth contract (CREATE/UPDATE 공통)

- §1 첫 문단은 `무엇을 하는 브랜드인가 + 무엇이 인상을 구별하는가`를 80–160단어 산문으로 답한다. `current public ecosystem`, `this reference preserves`, `unverified claims are omitted` 같은 검증 메타로 시작하지 않는다.
- §1은 가능하면 3층으로 구성한다: **product/category → recognizable brand expression → current evolution/rebrand**. 최소 2개 공식 source를 `.verification.md`의 context evidence에 남긴다.
- §3은 폰트를 한 덩어리로 평탄화하지 않고 다음 evidence class를 분리한다: **official product-use**, **live computed surface-use**, **official distributed brand asset**, **declared-only**, **unresolved**.
- 공식 발표가 특정 폰트를 앱/제품에 적용했다고 명시하면 live webfont가 없어도 product family 사실로 승격할 수 있다. 이 경우 metadata는 보여주되 browser-loadable source가 없으면 specimen은 unavailable로 둔다.
- 공식 배포 서체는 현재 UI 폰트가 아니어도 이름·역사·형태·license boundary를 설명할 가치가 있다. 다만 `tokens.typography.family.ui`에는 넣지 않는다.
- 미확인 경계는 해당 주장 근처의 짧은 boundary note나 verification footer에 둔다. 유용한 브랜드 설명 전체를 경고문·상태문서로 바꾸지 않는다.
- §10–13은 공식 mission, service principles, stakeholder groups, first-party culture/history 자료가 있으면 `[FILL IN]`보다 그것을 우선 사용한다. 허구 인물/인용/의도는 만들지 않는다.

---

## CREATE 모드

### Phase 1 — id 결정
- URL → 도메인에서 id 추출 (예: `kakao.com` → `kakao`)
- 충돌 시 사용자에게 (덮어쓰기 / 다른 id / abort) 묻기

### Phase 2 — Tier 1 수집
1. `<brand>.design`, `design.<domain>`, `<brand>/design-system` HEAD
2. WebSearch: `"<brand>" design system site:<domain>`
3. GitHub: `gh search repos "<brand> design tokens"`
4. 발견 시 → 공식 토큰 그대로 추출
5. **추가**: MCP 없이 결정론 collector 실행: `npm --prefix web run capture:reference -- <id> --max-routes 3`. 생성된 `artifacts/reference-evidence/<id>.json`의 computed style, FontFaceSet, `@font-face`, surface/state evidence를 사용한다.
6. **🔒 Proof block 작성 (mandatory, `verified >= 2026-06-01` 게이트됨)**: inspect한 raw computed-style를 `web/references/<id>/.verification.md`에 `## Proof — Tier 1 live inspect` 블록으로 기록 — `**Inspected:**` 날짜 + `**Sources:**` URL + `### Raw samples` (≥5줄, 각 줄 = 실제 1개 관측값 with `rgb(`/`#hex`/`px`). 포맷은 `spec/verification-pipeline.md` "Proof Gate" 참조. **footer만 박고 proof 생략 = catalog-integrity 실패.**
7. **🌏 KR/TW 추가 시 (`country: KR|TW`, `verified >= 2026-06-01`)**: Tier 2(getdesign/refero)는 한국·대만 brand 커버리지가 약함 → Tier 1이 증거를 짊어진다. `spec/regional-sources.yaml`의 `brand_owned`에서 **brand 자체 surface ≥2개**(공식 사이트 / DS docs / 공식 eng-design 블로그 / 공식 GitHub org)를 §4 footer `Tier 1 sources`에 명시. getdesign/refero는 이 ≥2에 **카운트 안 됨**. `discovery` aggregator(요즘IT/velog/iThome/INSIDE)는 brand surface를 **찾는 용도**일 뿐 인용 대상 아님.

### Phase 3 — Tier 2 수집 (둘 다 시도)
- `WebFetch https://getdesign.md/<id>` — 토큰 + component 스펙
- playwright `https://styles.refero.design/?q=<brand>` → 결과 카드 클릭 → 페이지 WebFetch
  - 한 brand에 여러 style 페이지가 있을 수 있음 (ex: Apple = 4개) — 가장 트렌딩한 1-2개 사용

### Phase 4 — Reconcile + 9-section 작성
`references/stripe/DESIGN.md`를 포맷 레퍼런스로 9 섹션 작성. §4는 canonical schema(variant heading + bullet `Field: value`).

### Phase 4.5 — Machine-readable `tokens:` 블록 (mandatory)
산문을 다 쓴 뒤, frontmatter에 **DTCG-lite `tokens:` 블록**을 추가한다. 신규 ref는
Phase 2 라이브 inspect를 이미 했으므로 `source: live-extract`(또는 Tier 2와 reconcile 시 `reconciled`).
`references/stripe/DESIGN.md`의 tokens 블록을 **스키마 레퍼런스**로 사용:

- 네임스페이스(getdesign.md 정렬): **`colors`**(역할+variant: primary/primary-hover/brand/canvas/foreground/muted/on-primary/hairline/error/success…) · **`typography`**(`family` + 명명 토큰 `{size, weight, lineHeight, tracking, use}`) · **`spacing`**(명명 또는 배열) · **`rounded`**(`sm/md/lg/full`) · `shadow` · `components`.
- 결정론 입력: `artifacts/reference-evidence/<id>.json`의 색·타이포·간격·radius cluster와 element provenance를 사용한다. LLM은 후보를 새로 추출하지 않고 canonical 역할/값만 확정한다(legacy-vs-live 판별, Google/임베드 오탐 거부).
- **정합성 필수**: `tokens.colors`의 모든 hex는 **산문(§2)·primary_color 어딘가에 존재**해야 한다(미존재 → 산문에 명시하거나 토큰 수정). catalog-integrity의 token↔prose 게이트가 강제한다.
- 작성 후 `cd web && node scripts/build-registry.mjs && node scripts/token-status.mjs` 로 검증 + 체크리스트 갱신.

### Phase 5 — _research.md + footer
- `_research.md`: Tier별 source URL, 신뢰도, 추출 일자
- §4 footer: `Verified` / `Tier 1 sources` / `Tier 2 sources` / `Conflicts unresolved`

### Phase 6 — SYNC (CREATE 자동 후행)
아래 SYNC 모드 절차 실행.

---

## UPDATE 모드

기존 reference를 풀 검증·갱신. **기본 대상은 §4 Components + 누락된 §10-15 Philosophy**. `--mode update-§N` 으로 단일 섹션만 지정 가능. `--no-philosophy` 로 §10-15 fill 스킵.

### Default behavior (사용자 지정 없을 때)
1. §4 풀 reconcile (모든 변형을 conflict matrix에 통과시키고 다시 작성)
2. `grep -c "^## 10\." DESIGN.md` == 0 이면 §10-15 generation 추가 (omd-init / 기존 augment 절차 활용 — 아래 P-Phase)
3. footer 박음

**footer-only 갱신은 금지.** "verified stamp만 박고 §4 본문 안 건드림"은 사용자 신뢰 깨는 안티패턴 — 이전 batch 1·2 (Toss/Airbnb/Spotify/Kakao + Stripe/Linear/Vercel/Notion/Figma)에서 했던 실수. 지금부턴 모든 brand가 Apple 식 풀 reconcile.

### Phase U1 — pre-check
- `web/references/<id>/DESIGN.md` 존재 확인
- 갱신 대상 섹션 read

### Phase U2 — Tier 1 라이브 inspect
1. `npm --prefix web run capture:reference -- <id> --max-routes 3` 실행. MCP server나 Playwright MCP는 필요 없다. 현재 collector는 hover/focus/pressed style snapshot과 menu/dialog/form-error/tab/toast expansion을 `interactions[]`에 보존한다. `coverage.interactionKinds`와 `interactionCount`가 0이면 상호작용 상태를 관측했다고 주장하지 않는다.
2. **browser-harness exception lane**: collector가 유용한 공개 surface를 2개 미만으로 잡거나, 눈에 보이는 interactive UI인데 interaction coverage가 0이거나, SPA/overlay/반응형 상태·폰트·컴포넌트 충돌이 남으면 `browser-harness`를 사용한다. 항상 screenshot → disputed element/state의 computed style + `document.fonts` → screenshot 순서로 검사하고 URL·viewport·selector/visible text·raw value·screenshot path를 `.verification.md`에 기록한다. browser-harness 관측은 raw evidence이며 단독으로 token을 승격하지 않는다.
3. `artifacts/reference-evidence/<id>.json`이 없거나 `surfaces.length < 2`면 완료로 보고하지 않는다. 공개 surface가 하나뿐이면 cap 사유를 명시한다.
4. 색·간격·타이포는 aggregate 값만 복사하지 말고 representative element의 `surfaceId + selector + raw style`을 claim evidence로 연결한다.
5. 폰트는 다음 순서로 판정한다: visible computed family → loaded `document.fonts` match → `@font-face` source URL → 공식 font/license URL. loaded match가 없으면 brand font로 확정하지 말고 `declared`/`system`/`unresolved`를 유지한다.
   - 단, 공식 rebrand/product announcement가 "앱/제품에 적용"을 명시하면 `official product-use`로 별도 확정한다. 이는 마케팅 페이지 computed-use와 독립된 증거이며, browser loader 부재는 family 사실을 지우지 않고 specimen availability만 제한한다.
6. 마케팅 surface와 product/docs surface가 분리된 brand는 둘 다 방문한다. login/checkout을 억지로 자동화하지 않는다.
7. bundle 요약과 필요한 raw samples를 `web/references/<id>/.verification.md`에 기록한다. 원본 bundle은 ephemeral artifact이며 DESIGN.md보다 먼저 trust를 주장하지 않는다.
8. 전체 운영 순서는 `spec/reference-collection-final.md`를 따른다. in-app browser는 Home → `/builder` acceptance에 사용하며 reference claim 수집기로 승격하지 않는다.

### Phase U3 — Tier 2 교차검증
1. `WebFetch https://getdesign.md/<id>` — 둘 다 표/스펙 추출
2. playwright `?q=<brand>` 검색 → refero 페이지 WebFetch
3. 둘 다 raw observation으로 `.verification.md`에 기록

### Phase U4 — Conflict matrix
`.verification.md`에 다음 표 작성:
```
| Field | Tier 1 (live) | getdesign | refero | Resolution |
```
**해결 규칙**:
- 셋 다 일치 → 그대로
- Tier 1 ≠ Tier 2 → Tier 1이 라이브 inspect 가능했으면 Tier 1 우선, 아니면 Tier 2 다수결
- 둘이 갈리고 Tier 1 침묵 → `(unresolved)` 플래그 + 채팅으로 사용자 보고
- 이전에 잘못 들어간 값(Apple `#0066cc` 9999px 케이스 등) 발견 시 **롤백 사유** 명시

### Phase U4.5 — Context depth reconcile

1. 공식 history/about, current rebrand/newsroom, culture/brand-assets/font 자료를 최소 3개 시도한다.
2. `.verification.md`에 `## Context and narrative evidence`를 만들고 source별로 사용할 수 있는 사실과 evidence boundary를 적는다.
3. §1·§3·§10–13을 읽고 다음 anti-pattern이면 반드시 다시 쓴다:
   - 첫 문단이 검증 범위/미확인 경고만 설명함
   - 브랜드 고유 설명 없이 색·토큰 목록으로 바로 진입함
   - 공식 폰트 자산을 모두 UI family로 합치거나, 반대로 current UI 미사용이라는 이유로 역사/형태/라이선스 설명까지 삭제함
   - 공식 mission/stakeholder 자료가 있는데 `[FILL IN]`만 남김
4. narrative fact와 machine token은 독립적으로 판정한다. 서사적으로 유용한 공식 사실이 반드시 UI token일 필요는 없다.

### Phase U5 — Write
- §4를 canonical schema로 재작성:
  ```
  ### <Component class>

  **<Variant name>**
  - Background: <value>
  - Text: <value>
  - Border: <value>
  - Radius: <value>
  - Padding: <value>
  - Font: <size> / <weight> / <family>
  - Use: <one-line context>
  ```

#### 🚨 §4 작성 강제 규칙 (이거 어기면 builder/components 섹션이 통째로 안 나옴)

**1줄 = 1필드.** 절대 슬래시(`/`)나 콤마로 여러 필드를 한 줄에 결합하지 말 것. 파서는 `^- Field: value$` 패턴만 인식한다.

❌ **금지** — 1줄 multi-field (KRDS 초기 작성 케이스, 36 variants 중 35개가 안 보였음):
```
- Background: `#256EF4` / Text: `#FFFFFF` / Border: 1px solid `#256EF4`
```

✅ **필수** — 1필드 1불릿:
```
- Background: `#256EF4`
- Text: `#FFFFFF`
- Border: 1px solid `#256EF4`
```

**측정 못 한 필드는 불릿째 생략.** 값이 없으면 `- Padding: not measured` / `- Radius: n/a` / `not specified` 같은 placeholder를 절대 쓰지 말 것 — component preview가 그 문자열을 실제 스펙 값처럼 렌더한다. variant 블록은 측정한 필드만 나열한다 (Background+Text+Radius만 있어도 OK). catalog-integrity가 placeholder lint로 막는다.

**State variants (Hover/Pressed/Focus/Disabled/Required/Error)**도 같은 variant 블록 안에서 별도 `- Hover:` / `- Pressed:` 불릿으로. 별도 `**Variant**` 블록을 따로 만들지 않는다.

**Size scale (xsmall/small/medium/large/xlarge 등)**은 1개 `**Variant**`에 default 사이즈 값만 불릿으로 적고, 나머지 사이즈는 그 블록 뒤에 markdown 테이블/프로즈로 보강. variant를 5개로 쪼개지 않는다.

**자가 검증 (write 직후 반드시 실행)**:
```bash
S4=$(awk '/^## 4\./,/^## 5\./' web/references/<id>/DESIGN.md)
echo "$S4" | grep -E "^- " | grep -cE " / [A-Za-z][a-z]+:"   # 0이어야 함 — 0 아니면 슬래시 multi-field 잔존
echo "$S4" | grep -cE "^\*\*[A-Za-z가-힣]"                    # variant 수
echo "$S4" | grep -cE "^- [A-Za-z]"                            # bullet 수 (variant당 평균 ≥3 권장)
```

슬래시 multi-field가 1줄이라도 잔존하면 → fix → 다시 검증. 이 체크 통과 못하면 commit 금지.
- 끝에 verification footer:
  ```
  ---
  **Verified:** YYYY-MM-DD
  **Tier 1 sources:** <list>
  **Tier 2 sources:** <list>
  **Conflicts unresolved:** <list or "none">
  ```

### Phase U6 — Tests + smoke
1. `cd web && npm test --silent` — 215 passing 유지
2. `web/src/lib/extract-components.test.ts`에 canonical default variant assertion 추가 (해당 brand 처음 검증 시)
3. 시각 smoke: `/reference/<id>` 로컬에서 띄워서 white-on-white / circular-as-ellipse / radius cap regression 없는지 확인

UPDATE는 SYNC를 트리거하지 않는다 (count 변동 없음).

## Codex Terra 구독 실행기 (`--runner codex-terra`)

Codex 로컬 실행에서는 결정론 collector와 이 스킬을 그대로 사용하고, 공식 출처 추가 수집과 증거 reconcile 단계를 로그인된 ChatGPT 구독의 `gpt-5.6-terra` + `high`에 위임한다. API key 기반 종량제 경로와 섞지 않는다. 원시 DOM/computed-style/FontFaceSet 수집은 결정론 collector가 담당하고 Terra는 브라우저 수치를 새로 추정하지 않는다.

### 전제

- `codex --version`은 Terra를 지원하는 버전이어야 한다. 현재 검증 기준은 `0.144.1+`이다.
- 사용자는 로컬 Codex에서 ChatGPT 계정으로 로그인되어 있어야 한다. `OPENAI_API_KEY`를 요구하거나 패킷에 기록하지 않는다.
- `~/.codex/models_cache.json`에 `gpt-5.6-terra`와 `high` reasoning level이 실제로 노출되는지 실행기가 선검증한다.
- 프로젝트 MCP와 Codex apps는 중첩 worker에서 끈다. 수집은 `playwright-core` 기반 로컬 collector가 먼저 완료하며, Terra는 raw bundle을 해석·교차검증한다.

### 실행 순서

```bash
# 1) 한 reference만 Terra/high 정책으로 큐에 넣는다.
npm --prefix web run reverify:queue -- --ids <id> --limit 1 --model-profile gpt-5.6-terra --reasoning-effort high

# 2) 명령·전송 파일을 먼저 확인한다. 구독 adapter라 --budget-usd를 쓰지 않는다.
npm --prefix web run reverify:run -- --id <id> --adapter config/reverify-runner.codex-terra.example.json

# 3) 명시적 실행. collector → evidence validation → Terra reconcile → deterministic gates 순서다.
npm --prefix web run reverify:run -- --id <id> --execute --adapter config/reverify-runner.codex-terra.example.json

# 4) 여러 reference는 10개 단위 resumable runner로 계획을 먼저 확인한 뒤 실행한다.
npm --prefix web run reverify:batch -- --queue artifacts/reverify/<queue>.json --batch 1
npm --prefix web run reverify:batch -- --queue artifacts/reverify/<queue>.json --batch 1 --execute
```

배치 runner는 capture evidence가 `surfaces >= 2`, `coverage >= 60`, `components >= 1`인 항목만 Terra에 보낸다. 나머지는 `hold`, 기존 Verified가 이 조건을 어기면 `audit_required`로 기록한다. Terra worker 안에서는 repository gate를 반복하지 않고 per-reference gate는 outer runner가 1회, 전체 Web/test/typecheck gate는 배치 끝에 1회 실행한다.

### 권한·성공 판정

- `--execute`는 packet과 `artifacts/reference-evidence/<id>.json`을 OpenAI 서비스로 보내는 명시적 경계다. 사용자가 요청한 reference만 1개씩 실행한다.
- nested Codex worker는 대상 `web/references/<id>/DESIGN.md`, `.verification.md`, 해당 `design-md/<id>` mirror 외에는 수정하지 않는다. commit/push/deploy/PR은 금지다.
- worker 응답만으로 성공 처리하지 않는다. `turn.completed`, runner의 `run.json = complete`, packet의 deterministic acceptance가 모두 통과해야 한다.
- capture만 점검할 때는 `reverify:run -- --id <id> --capture-only`를 사용한다. 이 모드는 Terra를 호출하지 않는다.
- worker edit은 끝났지만 deterministic acceptance만 실패한 경우 canonical을 최소 수정한 뒤 `reverify:run -- --id <id> --acceptance-only`로 worker를 재호출하지 않고 gate만 재개한다.
- `--execute`는 live surface가 2개 미만이면 실패한다. 단일 surface capture는 raw artifact로 보존할 수 있지만 Verified 승격 근거로 쓰지 않는다.
- 모델·reasoning level이 계정에 없거나 CLI가 오래됐으면 조용히 다른 모델로 fallback하지 않고 즉시 실패한다.

---

## Phase P — Philosophy fill (§10-15)

CREATE 모드에서는 항상 실행. UPDATE 모드에서는 §10-15 누락 시 자동 실행.

### P-1. Style ref pick
- KR brand → `toss` 톤 차용
- JP brand → `line`
- TW brand → `pinkoi`
- US brand → `claude` 또는 `stripe` (engineering tone이면 stripe)
- 기타 → `notion` (중립)
- `--style-ref <id>` flag로 override

### P-2. Source 수집
- `<domain>/about`, `<domain>/brand`, `<domain>/manifesto`, `<domain>/mission`
- 창업자 인터뷰·에세이
- WebSearch: `"<brand>" voice tone guidelines`, `"<brand>" brand philosophy`
- 최소 3 source 권장

### P-3. 섹션 생성 (OmD v0.1 spec)
- §10 Voice & Tone — 2-3 voice adjectives + Do/Don't 표 + ≥3 voice samples (각각 verification 주석)
- §11 Brand Narrative — 2-3 문단 origin → mission → why-now + 임원 인용 ≥1
- §12 Principles — 3-5 numbered, 각각 *UI implication:* 라인
- §13 Personas — 2-4 archetypes ≤ 3 sentences, 상단 disclaimer
- §14 States — Empty/Loading/Error(≥2)/Success/Skeleton/Disabled 6 카테고리 모두
- §15 Motion & Easing — duration scale + easing tokens + motion rules

### P-4. Validate
- `grep -c "^## 1[0-5]\." DESIGN.md` == 6 확인
- voice samples ≥3, principles ≥3, states ≥10 행
- 거짓 인용 없는지 (illustrative는 인라인 주석으로 명시)

### P-5. Append
DESIGN.md §9 끝에 §10-15 append. 프론트매터 `omd: 0.1` 없으면 추가.

---

## SYNC 모드

CREATE 시 자동, 수동으로도 호출 가능.

1. **References count 갱신**: 현재 `ls -d web/references/*/ | wc -l` 결과를 다음 위치에 반영
   - `README.md`, `README.ko.md`, `README.ja.md`, `README.zh-TW.md` — "67 brand DESIGN.md" 류
   - `web/src/components/landing-v2/hero.tsx` 또는 `sections.tsx` — 카피 내 숫자
   - `web/public/llms.txt` — 카탈로그 line
   - GitHub repo description: 이미 **"100+ real company design systems"** count-agnostic 문구로 고정 (2026-05-15 결정 — 매 batch마다 숫자 갱신 안 함). 한 단계 (e.g. 200+ 도달) 넘기 전까진 `gh repo edit` 호출 금지.
2. **Symlink sanity**: 루트 `references` → `web/references` symlink 확인 (이미 있으면 skip)
3. **Reference fingerprints**: `data/reference-fingerprints.json`, `.claude/data/reference-fingerprints.json`, `.codex/data/reference-fingerprints.json` 새 entry append
4. 사용자에게 git status 보여주고 commit 여부 묻지 않음 (memory: no auto-commits)

---

## Reusable utilities

### refero 검색 흐름
```
1. 일반 HTTP fetch 또는 로컬 browser CLI로 "https://styles.refero.design/?q=<brand>" 조회
2. DOM의 결과 카드에서 /style/<uuid> URL 수집
3. 각 카드를 HTTP fetch로 추출 (클라이언트 렌더링이 필요하면 로컬 Playwright/browser-harness 사용)
```

### apple.com 류 라이브 inspect 패턴
```js
const out = [];
document.querySelectorAll('button, a, input').forEach(el => {
  const cs = getComputedStyle(el);
  const r = cs.borderRadius;
  const bg = cs.backgroundColor;
  if ((bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') && (r === '0px')) return;
  const rect = el.getBoundingClientRect();
  if (rect.height < 24) return;
  out.push({
    text: (el.textContent||el.getAttribute('aria-label')||'').trim().slice(0,40),
    bg, color: cs.color, radius: r,
    padding: cs.padding, h: Math.round(rect.height),
    fontSize: cs.fontSize, fontWeight: cs.fontWeight,
    cls: el.className.toString().slice(0, 60),
  });
});
return out.slice(0, 30);
```

---

## 안티패턴 (절대 금지)

- ❌ Tier 2 전혀 시도 안 하고 "확인했음" 주장
- ❌ refero "없음" 결론을 단일 스크롤에서 내림
- ❌ Tier 1 라이브 인 inspect 없이 §4 컴포넌트 값 작성
- ❌ 검증 footer 누락
- ❌ 충돌 silent 해결
- ❌ getdesign.md 표시값을 Tier 1로 취급 (Tier 2임)
- ❌ **Proof block 없이 footer만 `Verified` 박기** — `verified >= 2026-06-01` ref은 `.verification.md`에 `## Proof` 블록(≥5 raw sample + URL + 날짜) 필수. footer-only stamp = catalog-integrity 실패. (`spec/verification-pipeline.md` Proof Gate)
- ❌ **§4 필드에 placeholder 값** (`not measured` / `not specified` / `n/a` / `tbd`) — 측정 못 한 필드는 불릿째 생략. preview가 문자열을 그대로 렌더해서 깨져 보인다. catalog-integrity placeholder lint가 막음.
- ❌ **§7 Do's and Don'ts를 `**Do**` 볼드 헤더나 `- Do …` 평문으로 작성** — 파서(`extractGuidelines`)는 **`### Do` / `### Don't` 헤더** 또는 인라인 `- **DO**` 불릿만 인식한다. 그 외 형식은 0개로 처리돼 preview Guidelines 섹션이 통째로 빈다. 반드시 `### Do` + 불릿 / `### Don't` + 불릿 형식. (don't 불릿은 맨 앞 "Don't" 빼고 적기 — 섹션 헤더가 컨텍스트 제공). catalog-integrity guideline advisory가 감지.
- ❌ **KR/TW ref인데 Tier 1 source가 getdesign/refero뿐** — `verified >= 2026-06-01` KR/TW는 brand-owned regional source ≥2 필수 (`spec/regional-sources.yaml`). 서구 카탈로그는 Tier 2일 뿐 카운트 안 됨.
- ❌ **새 reference 추가 후 SYNC phase 안 돌리고 종료** — fingerprints / API mapping / logos / docs SEO 카운트가 mismatch. 단일 추가도 SYNC 필수 (아래 Phase 5 참조).
- ❌ **§1 헤더를 비표준으로 변경** — `## 1. Visual Theme & Atmosphere` 가 catalog canonical. "Overview" / "Identity" / "Foundation tokens" / `## §1` 등 변형 쓰면 web preview Hero 카드의 description이 빈칸으로 렌더 (2026-05-14 kr10 batch에서 flex/upbit/kbank 3건 발생). 모든 §N 헤더는 `## N. <Title>` 형식 + §1은 무조건 `Visual Theme & Atmosphere` + 첫 단락은 산문 prose (테이블/리스트/서브헤딩 금지). 검증: `grep -L '^## 1\. Visual Theme' references/*/DESIGN.md` 결과 0.

---

## Phase 5 — SYNC (registry-driven, 새 reference 추가 직후 mandatory)

Hand-maintained map drift was the recurring batch-bug (homepage-urls.ts 2-batch miss). It's eliminated: every brand attribute lives in the **canonical frontmatter** at the top of `references/<id>/DESIGN.md`, and `web/src/data/registry.generated.ts` is the typed projection consumed by every UI surface.

### 1. Canonical frontmatter (the only place you edit data)
Required keys per id (schema doc lives at the top of `registry.generated.ts`):

```yaml
---
id: <slug>
name: <English display>
display_name_kr: <한글 표시>    # optional
country: KR|US|JP|TW|UK|DE|FR|IT
category: ecommerce|fintech|saas|ai|consumer-tech|education|productivity|developer-tools|design-tools|backend-devops|automotive|marketing|government|healthcare
homepage: https://...
primary_color: "#hex"
logo:
  type: favicon|simpleicons|github
  slug: <domain | simpleicons-slug | github-org>
verified: YYYY-MM-DD
omd: 0.1
ds:                              # optional, Tier-1 official DS only
  name: ...
  url: ...
  type: system|brand
  description: ...
  og_image: ...                  # optional
---
```

### 2. Regenerate + gate
```bash
cd web && npm run build-registry && npm test
```
The vitest catalog-integrity suite asserts schema, §1 canonical header, prose-first paragraph, fingerprint cross-check, design-md mirror, triple-fingerprint byte identity, and registry sort order. If green, the API route / logos / tokens / design-systems modules pick up the new entry automatically — they all read from the registry.

### 3. Adjacent surfaces (not registry-derived, manual)
- Fingerprints × 3 (root + `.claude` + `.codex`) — append entry, bump `count`, refresh `generated_at`; keep byte-identical
- `design-md/<id>/DESIGN.md` — mirror sync: `rm -rf design-md && cp -RL references design-md`
- READMEs × 4 (en/ko/ja/zh-TW) — count badge + body
- `web/public/llms.txt` — header count + Examples list display name append
- `web/src/app/{layout,docs/layout,docs/page,builder/layout,design-systems/layout}.tsx` — count strings
- CHANGELOG.md + `package.json` patch bump (omd-cli memory rule)

### 4. Sub-agent self-verification (mandatory at end of CREATE/UPDATE)
```bash
cd web && npm test -- --run __tests__/catalog-integrity.test.ts -t "<id>"
```
Report pass/fail and the exact failing assertion. Do not declare done before this is green.

## 트리거 (자연어 OK — 슬래시 없이 호출되어도 동작)

- "X 레퍼런스 추가" / "X 새로 만들어줘" / URL 한 줄 → CREATE
- "X 컴포넌트 다시 뽑아줘" / "X §4 검증" / "X 잘못된거 같아" → UPDATE
- "67 카운트 맞춰줘" / "landing 동기화" / "리퍼런스 동기화" → SYNC

### Batch / 자연어 인식

- "next 5", "다음 5개", "다음 10개" → 알파벳 순으로 미검증(no `**Verified:**` footer) brand 중 N개를 골라 UPDATE 일괄
- "남은거 다 처리해줘", "67 migration 처리해줘" → 미검증 전체를 N=5씩 batch로 진행하고 매 batch 끝에 status 보고
- "stripe부터 5개" → 알파벳 정렬 위치 stripe부터 5개 (stripe/supabase/superhuman/tesla/together.ai)
- "<brand1> <brand2> <brand3>" 공백 list → 명시된 brand 일괄

### Batch 진행 절차

1. `grep -L '^\*\*Verified:\*\*' web/references/*/DESIGN.md` 로 미검증 list 산출
2. 사용자 지정 N(또는 전체)만큼 head/range 선택
3. 각 brand에 대해 UPDATE phase U2~U5 실행 (parallel WebFetch + sequential playwright session)
4. batch 끝마다 `npm test --silent` 실행
5. 보고 형식: `완료: <list> | 남은 수: <count> | 다음 batch 후보: <head 5>`
