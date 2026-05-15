---
name: omd:batch-launch
description: "10개 brand 일괄 reference 추가 + 문서 카운트 sync + hyperframes 기반 promo MP4 생성. '10개씩 추천해줘', '한국 IT 10개 추가하고 영상까지', 'batch-launch', 'X 카테고리에서 10개 더' 류 트리거. 매 회 reference count +10, gitignored promo video 1편."
argument-hint: "[category|theme] [--n 10] [--lang ko|en] [--orientation portrait|landscape]"
user-invocable: true
---

# omd:batch-launch

omd 카탈로그에 **한 번에 10개**의 brand reference를 추가하고, 동시에 SNS(스레드/X/링크드인)에 그대로 올릴 수 있는 **30초+ 프로모 MP4**를 만드는 3-phase 파이프라인.

**왜 스킬화 했나**: 사용자가 "10개씩" 요청을 반복할 예정이라 매번 (1) 후보 큐레이션 (2) reference build (3) 문서 카운트 갱신 (4) 영상 합성을 일관 포맷으로 돌려야 한다. 매 회 의사결정 흔들림 없이 같은 산출물 → 시리즈가 일관된 톤을 가지게 됨.

---

## Phase 1 — Recommend (큐레이션)

### 입력 파싱
- `[category|theme]` 자유 텍스트. 예: "한국 IT 대기업", "AI 스타트업", "글로벌 핀테크", "디자인 스튜디오"
- 미입력 시 사용자에게 카테고리/제약 물어보기

### 후보 산출 규칙
1. **중복 배제**: `ls web/references/` 결과를 먼저 읽고, 거기 있는 id는 후보에서 제외
2. **DS 가시성 기준**: 다음 중 최소 1개 만족
   - 공식 design system docs 페이지 존재 (예: `<brand>.design`, `<brand>/design-system`)
   - 디자인팀 medium/brunch 시리즈 (≥2 글)
   - `getdesign.md/<id>` 또는 `styles.refero.design` 에 entry 존재
3. **도메인 다양성**: 같은 도메인(예: 핀테크)이 5개 초과하지 않도록
4. **단순 reskinning 회피**: 게임사처럼 DS보다 IP UI가 지배적인 경우 제외 권장

### 출력 포맷
사용자에게 표로 제시 (id / 한글명 / DS 자료 근거 1줄):

```
| # | id           | 한글명     | DS 근거 |
|---|--------------|------------|---------|
| 1 | socar        | 쏘카       | SOCAR DS brunch 시리즈 |
| ...
```

+ "포트폴리오 관점 균형" 단락(도메인/규모/카테고리 다양성)과 "대체 후보 5개"를 같이 제시. 사용자 컨펌 후 Phase 2로.

---

## Phase 2 — Build (10개 일괄 reference 생성)

각 brand에 대해 `omd:add-reference` CREATE 파이프라인을 그대로 적용. **단순 footer 박기 금지** — 모든 brand가 Apple-tier 풀 reconcile.

### 실행 방식
- **병렬 wave**: 5개씩 2 wave (Agent subagent로 위임 권장). 한 wave 안에서는 brand별로 독립 subagent를 spawn해 parallel WebFetch + sequential playwright.
- **Wave 1 끝나면 sanity check** (`grep -c "^## 4\." web/references/<id>/DESIGN.md` 각각 1 이상) 후 Wave 2 진행.
- 실패한 brand는 보고하고 다음 wave에서 단독 재시도. 2회 실패 시 사용자에게 escalate.

### 각 brand build 체크리스트 (omd:add-reference CREATE 그대로)
- [ ] Tier 1: 라이브 inspect (hero CTA / nav / footer / input / card) — playwright 필수
- [ ] Tier 2: getdesign.md/<id> + refero (둘 다 시도)
- [ ] **Tier 1.5 — 공식 DS surface 탐색** (Phase 3 등재에 직접 사용):
  - `<brand>.design`, `design.<domain>`, `<domain>/brand`, `<domain>/brandcenter` HEAD
  - GitHub: `gh search repos "<brand> design"`, `<org>.github.io/<brand>-ui` (Storybook 흔함)
  - WebSearch: `"<brand>" design system site:<domain>`, `"<brand>" brunch design system`, `"<brand>" tech blog design`
  - 발견 시 `curl -sIL` 200 확인 → `_promo.json` `design_system` 필드 기입
  - 없으면 필드 omit
- [ ] Tier 3: reconcile + §4 canonical schema
- [ ] §10-15 philosophy (Voice/Narrative/Principles/Personas/States/Motion)
- [ ] `_research.md` 작성
- [ ] §4 footer `**Verified:** YYYY-MM-DD` + sources

### 산출물
- `web/references/<id>/DESIGN.md`
- `web/references/<id>/_research.md`
- (선택) `web/references/<id>/_preview.png` — Phase 3에서 쓸 라이브 hero 캡쳐 1장. **Phase 2에서 미리 찍어두면 Phase 3 재방문 비용 절감.**

---

## Phase 2.5 — Audit (리서치 정합도 추적)

**핵심**: 매 batch마다 `data/reference-audits/<YYYY-MM-DD>-<batch-slug>.md` 단일 파일 생성. 6개월 뒤에도 어떤 brand가 어떤 깊이로 추출됐는지, 어디를 보완해야 하는지 한 페이지로 확인 가능해야 한다.

### 필수 섹션 (greppable)

`data/reference-audits/2026-05-13-kr10.md` 가 reference template:

1. `## How the N were researched` — 적용된 파이프라인 요약
2. `## Systemic finding` — 이 batch에서 발견된 카테고리 수준 인사이트 (예: "Korean brands는 Tier 2 directories에서 empty")
3. `## Per-brand audit` — 표: id / confidence / Tier 1 depth / Tier 2 / Known gaps / Follow-up
4. `## Confidence distribution` — High / Medium / Low 분포 + aggregate publishability
5. `## Known shared limitation` — process 차원의 한계 + 다음 batch process 개선안
6. `## Promo highlight selection` — `_promo.json` highlight type 분포 (palette / voice / cta)
7. `## Follow-up TODO` — 우선순위 정렬된 UPDATE 대상

### Confidence 등급 기준 (3-tier)

- **High** — ≥2 Tier 1 surfaces OR production CSS bundle 캡쳐; 미해결 hex 없음; ≥3 brand-owned 보조 source (blog/medium/brunch); §10-15 sourced
- **Medium** — 1 Tier 1 surface; 일부 inferred values; brand-owned philosophy sources 있음
- **Low** — Tier 1 partial blocked; 핵심 토큰 `(unverified live)` 또는 `(illustrative)` 표시; UPDATE pass 필요

이 등급은 batch 보고서뿐 아니라 **`web/references/<id>/_research.md` 상단에도 명시**되어야 (`Confidence: High|Medium|Low`).

### Audit 작성 절차

Phase 2 끝난 직후, build subagent들의 return summary를 모아서 작성. 각 subagent가 return한 정보:
- Tier 1 source count
- Tier 2 found / empty
- Conflicts unresolved
- Known gaps

→ 이걸 표로 합치고, 위 기준에 따라 confidence 등급 매김. Aggregate / TODO 작성.

### Anti-patterns

- ❌ 모든 brand를 "High"로 표시 (작성자 편의를 위한 인플레이션)
- ❌ Follow-up TODO를 비워둠 (Medium/Low brand는 항상 TODO entry가 있어야 함)
- ❌ Audit 없이 SYNC로 넘어감

---

## Phase 3 — SYNC (문서 카운트 갱신)

`omd:add-reference` SYNC 모드와 동일. **반드시 build 끝난 직후, promo 전에** 실행.

### 갱신 대상
1. **References count** (marketing surfaces only — skill 내부는 count-agnostic 유지). **이전 카운트는 `data/reference-fingerprints.json.count`에서 읽어서 → 새 카운트로 교체**. 직전 batch가 +10 했더라도 카운트는 fingerprints에서 산출 — hardcoded "78 → 88" 식 가정 금지:
   - `README.md`, `README.ko.md`, `README.ja.md`, `README.zh-TW.md` — badge SVG + 본문 + 디렉토리 트리
   - `web/src/components/landing-v2/{hero,sections,the-wall,tokens}.tsx` — `BRAND_COLORS` map에 신규 entry, 본문 "X real brands", "X-card wall" 주석
   - `web/public/llms.txt` — 카탈로그 lines + "## N reference brands bundled" 헤더 + "Examples:" 리스트에 신규 brand append
   - **SEO layouts (이전 batch 누락 함정 — 명시):**
     - `web/src/app/layout.tsx` — root description / openGraph / twitter / JSON-LD `text` 필드 (5~7곳)
     - `web/src/app/docs/layout.tsx` — description
     - `web/src/app/docs/page.tsx` — body 텍스트 "X DESIGN.md files", "X real design systems"
     - `web/src/app/builder/layout.tsx` — description × 3 (default / openGraph / twitter)
     - `web/src/app/design-systems/layout.tsx` — description × 2 (default / openGraph)
   - **컴포넌트 본문 카피 (이전 batch 누락 함정):**
     - `web/src/components/reference-preview.tsx` — JSDoc 주석 "across all N references"
     - `web/src/components/survey/result-card.tsx` — "browse all N references" CTA
   - **`skills/*/SKILL.md`, `agents/*.md`는 절대 숫자 박지 말 것** — count-agnostic. 카운트 노출 필요시 런타임에 `fingerprints.json.count` 읽어서 표시.
   - **Regression guard (Phase 3 끝나기 전 필수 실행):**
     ```bash
     # 1. skill / agent count contamination
     grep -rn "[0-9]\{2\}개 (레퍼런스|reference|카탈로그)" skills/ agents/ .claude/skills/ .claude/agents/  # 0 expected
     # 2. stale number sweep — old count + the one before
     OLD_COUNT_PREV=$(($(jq .count data/reference-fingerprints.json) - 10))
     OLD_COUNT_PREV2=$((OLD_COUNT_PREV - 10))
     grep -rn "\\b${OLD_COUNT_PREV}\\b\\|\\b${OLD_COUNT_PREV2}\\b" \
       --include="*.md" --include="*.ts" --include="*.tsx" --include="*.txt" \
       README*.md web/src web/public 2>/dev/null \
       | grep -vE "(node_modules|\\.next|references/|design-md/|\\.promo/|CHANGELOG|tasks/|reference-audit)" \
       | grep -iE "(reference|brand|design.system|companies|company)"  # 0 expected
     ```
2. **Symlink sanity**: 루트 `references` → `web/references` (이미 있으면 skip)
3. **Fingerprints**: `data/reference-fingerprints.json`, `.claude/data/reference-fingerprints.json`, `.codex/data/reference-fingerprints.json` 새 10 entry append (셋 다 byte-identical 유지)
4. **API 매핑 4종** (`web/src/app/api/references/route.ts`) — **이전 batch에서 누락된 함정**. 추가 안 하면 Builder Step 1에서 brand가 'Other / United States'로 분류되어 한국 필터에 안 잡힘:
   - `CATEGORIES` — 각 id의 industry 카테고리
   - `COUNTRIES` — 한국 brand는 모두 `'Korea'`
   - `DISPLAY_NAMES` — UI에 표시될 이름 (한글 또는 영문 wordmark)
5. **Logo + URL 매핑 3종**:
   - `web/src/lib/logos.ts` — `LOGO_MAP` (favicon URL) + `DOMAIN_OVERRIDES`
   - `web/src/lib/homepage-urls.ts` — `HOMEPAGE_URLS`
   - `web/src/components/landing-v2/tokens.ts` — `BRAND_COLORS` (alpha-2 fallback 가능하지만 hint 있으면 the-wall 카드가 더 선명)
6. **공식 DS 페이지 등재** (`web/src/lib/design-systems.ts` `DESIGN_SYSTEMS`):
   - **소스**: 각 brand의 `_promo.json` `design_system` 필드 (Phase 2 Tier 1.5에서 이미 발견·검증·기입됨)
   - 필드 있는 brand만 `DESIGN_SYSTEMS`에 append; 없는 brand는 skip (UI가 자동으로 DS 버튼 숨김)
   - **재검증 1회**: 모든 새 등재 URL을 `curl -sIL` 200 한번 더 확인 (Phase 2와 Phase 3 사이 시간 경과 시 발생할 수 있는 dead link 차단)
   - 영향: Browse 모달 카운트 배지 + Builder Step 3 preview header DS 버튼 + `/design-systems` 카탈로그 페이지
   - **anti-pattern**: 여기서 새로 리서치해서 URL 만들어내기 (build 단계에서 못 찾았다 = 정말로 공개 자료가 없다는 신호)
7. **design-md/ 미러 sync**: `cp -RL web/references design-md` (먼저 `rm -rf design-md`). 루트 `design-md/`는 publish용 git-tracked 미러. `web/references/`가 canonical(빌드 의존)이고 `design-md/`는 사본 — 매 batch마다 sync 필수. (참고: 루트 `references` symlink는 gitignored 로컬 편의용, 무시.)
8. **CHANGELOG.md** (있으면): `feat(refs): +10 <category> — <id list>`
9. **GitHub repo description**: `gh repo edit --description "..."` (사용자 컨펌 후만)

### 검증
- `npm test --silent` (reference fingerprint test 포함) pass
- `node -e "console.log(require('./data/reference-fingerprints.json').length)"` = ls 결과와 일치

---

## Phase 4 — Promo (hyperframes MP4)

### 사용 도구
`npx hyperframes` (v0.6+). 처음 호출이면 자동 설치.

### 디렉토리
`.promo/<YYYY-MM-DD>-<batch-slug>/` (gitignored). 결과 MP4는 같은 폴더에.
- 예: `.promo/2026-05-13-kr10/` → `.promo/2026-05-13-kr10/kr10.mp4`

### Composition 구조 (30s+, 1080×1920 portrait 기본)

| Segment | duration | 내용 |
|---|---|---|
| Intro (0–3s) | 3s | "오늘의 batch — <category>" + omd 로고 페이드인 |
| Brand cards (3–33s) | 3s × 10 = 30s | **좌**: brand 로고(SVG 우선) + 한글명 큼지막 / **우**: 우리가 추출한 "흥미 요소" 1개 |
| Outro (33–37s) | 4s | "지금 바로 **oh-my-design**에서 확인해보세요" + URL/QR |

**총 길이 37s** (사용자 요구 30s 이상 만족). orientation flag로 landscape(1920×1080) 전환 가능.

### "흥미 요소" 추출 규칙 (우측 우리 preview)
각 brand DESIGN.md에서 다음 우선순위로 1개 골라 HTML로 합성:
1. **시그니처 컬러 팔레트**: §3 컬러 토큰 중 brand-primary + accent — 색칩 카드
2. **CTA 컴포넌트**: §4 의 primary button (배경/radius/padding/font) 그대로 렌더
3. **Voice sample**: §10 voice sample 1개 (한글 강조)

→ 어떤 걸 고를지는 build subagent가 brand별로 **"가장 시각적으로 강력한 1개"**를 `_promo.json` 에 기록하게 함. 이후 Phase 4가 그걸 그대로 합성.

### `_promo.json` 스키마 (Phase 2에서 작성)
```json
{
  "id": "socar",
  "korean": "쏘카",
  "logo_url": "https://socar.kr/.../logo.svg",
  "highlight": {
    "type": "palette|cta|voice",
    "tokens": { "primary": "#00A862", "accent": "#222" },
    "label": "Signature Green"
  },
  "design_system": {
    "name": "SOCAR Design",
    "url": "https://design.socar.kr/",
    "type": "system",
    "description": "SOCAR's design system hub — Space Frame, SOCAR Blue, mobility-flow components.",
    "live_verified": "2026-05-13"
  }
}
```

**`design_system` 필드 규칙 (build 시점에 결정)**:
- 공식 DS docs / Storybook / Carbon급 시스템 → `type: "system"`
- 브랜드 가이드라인 페이지 / DS-narrative 블로그 / GitHub org → `type: "brand"`
- 공개 DS surface 전혀 없음 → 필드 자체를 **omit** (UI에서 자연스럽게 버튼 숨김)
- URL은 build subagent가 **반드시 `curl -sIL`로 200 확인 후 기입** (404/403 박지 않기)
- description은 1-2문장. brand의 시그니처 토큰/철학을 1개 언급 (보일러플레이트 금지)
- 이렇게 build 시점에 박아두면 Phase 3는 단순 집계만 함 → 중복 리서치 제거

### Hyperframes 단계
1. **scaffold**: `npx hyperframes init <dir> --resolution portrait --non-interactive --skip-transcribe`. 직전 batch (`.promo/<prev>/index.html`)가 있으면 **반드시 읽고 layout/CSS/모션 패턴을 그대로 미러** — 시리즈 톤 일관성.
2. **assets/logos/** (mandatory — 이전 batch 누락 함정):
   - 모든 brand에 대해 `assets/logos/<id>.png` 다운로드. 1차: Tier 1 사이트의 `<link rel="icon" sizes="256">` / `apple-touch-icon`. 2차 fallback: `https://www.google.com/s2/favicons?domain=<domain>&sz=256`. 3차: `https://github.com/<org>.png?size=128` (GitHub org avatar).
   - **검증**: `file assets/logos/*.png` → 모두 `PNG image data` 출력. 1KB 미만은 retry (다른 source).
   - **mandatory `<img class="logo">`**: 각 brand 카드 좌상단(=wordmark 위)에 `<img class="logo" src="assets/logos/<id>.png" alt="<id>" />` 삽입. wordmark만 텍스트로 두는 패턴 금지 — 직전 batch (2026-05-14 kr10) 가 이걸 빼먹어 재렌더 사태 발생.
   - **CSS template** (직전 batch 2026-05-13 패턴 그대로):
     ```css
     .card .left .logo {
       width: 140px; height: 140px;
       border-radius: 28px;
       background: #fff;
       padding: 12px;
       object-fit: contain;
       box-shadow: 0 8px 24px rgba(0,0,0,.08);
     }
     ```
   - **GSAP intro**: `tl.from(logo, { scale: 0.7, opacity: 0, ease: "back.out(2)" })` — 카드 entry 모션의 첫 비트.
3. **edit `index.html`**: 카드 시퀀스 합성. timeline은 GSAP 또는 hyperframes 기본 `data-anim`.
4. **lint**: `npx hyperframes lint` — 0 errors 확인.
5. **render**: `npx hyperframes render -o ../<batch-slug>.mp4 -q standard -f 30`
6. **verify**: 파일 사이즈 > 1MB, duration ≥ 30s (`ffprobe`).
7. **logo presence assertion** (regression guard, render 후):
   ```bash
   # index.html에 모든 10 brand logo가 박혀있는지 확인
   for id in <10-brand-ids>; do
     grep -q "assets/logos/${id}.png" .promo/<batch>/index.html || echo "MISSING LOGO: $id"
   done
   ```
   하나라도 missing이면 render 무효 — 다시 작업.

### 자막/오디오
- TTS는 옵션. 기본은 무음 + 한글 텍스트 큰 활자. 사용자가 명시적으로 요청 시 `hyperframes tts` 사용.

---

## 트리거 패턴

- 카테고리 + 숫자 자유 텍스트:
  - "한국 IT 10개 추가해줘" → 카테고리=한국 IT, n=10
  - "AI 스타트업 10개 더" → AI 스타트업, n=10
  - "디자인 스튜디오 10개 batch" → 디자인 스튜디오, n=10
- 영상까지 기본 포함. "영상 없이"라고 명시하면 Phase 4 스킵.

---

## 안티패턴 (절대 금지)

- ❌ Phase 2 완료 전에 Phase 3 카운트 갱신 (mismatch 발생)
- ❌ `.promo/` 결과물을 git add (gitignored 강제)
- ❌ "Verified footer만 박고 §4 본문 안 건드림" (omd:add-reference 와 동일 룰)
- ❌ TTS/음악을 사용자 컨펌 없이 추가
- ❌ logo를 자체 그리기 (public brand asset URL 또는 fetch 실패 시 텍스트 로고)
- ❌ **카드에 logo `<img>` 없이 wordmark 텍스트만 박는 것** — 2026-05-14 kr10 재렌더 trigger. 카드 좌상단 logo PNG는 hard requirement.
- ❌ Phase 3 끝났는데 regression guard grep을 안 돌림 (stale number 누락의 1순위 원인)
- ❌ `web/src/app/builder/layout.tsx` · `web/src/app/design-systems/layout.tsx` · `web/src/app/layout.tsx`의 SEO description 미갱신 (이전 2 batch 연속 누락된 surface — 체크리스트 명시됨)
- ❌ promo composition을 Phase 2 결과(_promo.json) 없이 작성

---

## 산출 보고 형식 (각 phase 끝)

```
Phase 1: 10 후보 — <list>  ✓ 사용자 컨펌
Phase 2: build — 완료 <n>/10, 실패 <list>, 평균 §4 길이 <n> bullets
Phase 3: sync — refs <prev> → <now>, 갱신 파일 <n>개, npm test pass
Phase 4: promo — .promo/<batch>/<file>.mp4, <duration>s, <size>
```
