---
name: omd:add-reference
description: "URL 또는 brand id 입력 → 3-tier 검증 파이프라인(Tier 1 라이브 + Tier 2 getdesign/refero + Tier 3 reconcile)으로 references/<id>/DESIGN.md를 신규 생성(CREATE)하거나 기존 섹션을 검증·갱신(UPDATE). '레퍼런스 추가/수정', 'X DS 검증', 'X 컴포넌트 다시 뽑아줘' 류에 트리거."
argument-hint: "<url|id> [--mode create|update|update-§N] [--style-ref <id>]"
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
5. **추가**: playwright로 brand 메인 사이트 라이브 inspect (computed style: hero CTA / nav / footer / search input / card)

### Phase 3 — Tier 2 수집 (둘 다 시도)
- `WebFetch https://getdesign.md/<id>` — 토큰 + component 스펙
- playwright `https://styles.refero.design/?q=<brand>` → 결과 카드 클릭 → 페이지 WebFetch
  - 한 brand에 여러 style 페이지가 있을 수 있음 (ex: Apple = 4개) — 가장 트렌딩한 1-2개 사용

### Phase 4 — Reconcile + 9-section 작성
`references/stripe/DESIGN.md`를 포맷 레퍼런스로 9 섹션 작성. §4는 canonical schema(variant heading + bullet `Field: value`).

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
playwright로 brand 메인 사이트 + 핵심 surface 1-2개 navigate → `browser_evaluate(getComputedStyle)` 로 raw observation 수집:
```js
const els = document.querySelectorAll('button, a[role=button], input, [role=tab]');
// 각 element의 bg / color / radius / padding / height / fontSize / fontWeight / border 추출
```
- 마케팅 surface와 commerce/checkout surface가 분리된 brand는 **둘 다** 방문 (Apple 패턴)
- raw → `web/references/<id>/.verification.md`에 기록

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
   - GitHub repo description: `gh repo edit --description "..."` (사용자 컨펌 후)
2. **Symlink sanity**: 루트 `references` → `web/references` symlink 확인 (이미 있으면 skip)
3. **Reference fingerprints**: `data/reference-fingerprints.json`, `.claude/data/reference-fingerprints.json`, `.codex/data/reference-fingerprints.json` 새 entry append
4. 사용자에게 git status 보여주고 commit 여부 묻지 않음 (memory: no auto-commits)

---

## Reusable utilities

### refero 검색 흐름
```
1. mcp__playwright__browser_navigate("https://styles.refero.design/?q=<brand>")
2. mcp__playwright__browser_snapshot — 결과 카드의 /style/<uuid> URL 수집
3. 각 카드를 WebFetch로 추출 (depth가 필요하면 navigate 후 evaluate)
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
