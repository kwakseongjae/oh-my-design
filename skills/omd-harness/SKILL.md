---
name: omd:harness
description: "화면 전체나 신규 surface를 처음부터 디자인할 때의 진입점 — Discovery→Wireframe→Components→Microcopy→Validation 파이프라인을 omd-master 오케스트레이터로 실행. '랜딩 처음부터', 'production-ready', 'wireframe to production', 「一からデザイン」, 「從頭設計」류의 요청에 트리거. 단일 컴포넌트 수정은 omd:apply."
---

# omd:harness — Design Harness Entry

이 스킬은 **omd-master 오케스트레이터**를 호출하는 단일 진입점이다. 본 스킬은 launcher + 사전체크 + run 디렉토리 부트스트랩 책임만 가지고, phase 로직은 `agents/omd-master.md`에 있다.

CLI 의존 없음. 모든 부트스트랩은 Bash + Write 툴로 직접 실행한다.

## 트리거

- `/omd-harness <task>` 명시 호출
- 사용자가 자연어로 "디자인 하네스 / 시니어 디자이너처럼 / 알아서 디자인" 요청

## Step 0 — task 추출

슬래시에 task 같이 적었으면 (`/omd-harness 물 음용 유도 메인 화면`) 그 자연어 부분이 task. 빈 슬래시면 한 번 묻기:

```
어떤 디자인 작업을 진행할까요?
shape: "[도메인] + [톤/스타일] + [핵심 화면]" — 예: "토스 스타일 가족용 식단 앱 메인 화면"
```

## Step 1 — Subagent registration 사전체크 (CRITICAL)

`omd-master` subagent가 이 세션에 dispatch 가능한지 verify. Agent tool의 사용 가능 subagent 목록에 `omd-master`가 있으면 진행. 없으면:

```
omd-master subagent가 이 세션에 등록되어 있지 않아요. Claude Code는 세션 시작 시점에만 .claude/agents/*.md를 로드합니다 — install-skills를 세션 띄운 후에 돌렸으면 이 케이스.

해결 (가장 빠른 순서):
1. 현재 세션에서 /agents 실행 — Claude Code가 .claude/agents/*.md 강제 재스캔. omd-* 8개가 목록에 나타나면 /omd-harness 재호출.
2. 안 되면: Claude Code 앱 완전 종료 (Cmd+Q / 터미널 자체 quit) → 새 터미널 → claude 재실행 → /omd-harness <task> 재호출.
```

## Step 2 — Run 디렉토리 부트스트랩 (인라인 Bash)

이전엔 `omd harness "<task>" --internal` CLI를 호출했지만 1.0.0부터는 스킬이 직접 한다. 결정론적 hard verify gate:

### 2.1 기존 run 재사용 체크

```bash
ls -t .omd/runs 2>/dev/null | head -1
```

출력 있으면 그 디렉토리의 `task.md`를 Read해서 사용자 task와 의미적으로 일치하는지 확인. 일치하면 그 run 재사용 — Step 3으로 점프.

### 2.2 신규 run 부트스트랩

다음을 **반드시 정확히 이 순서로** Bash 툴로 실행:

```bash
# 2.2.1 — timestamp + slug 결정 (한국어 보존)
TS=$(node -e "console.log(new Date().toISOString().replace(/[:.]/g,'-'))")
SLUG=$(node -e "
const s = process.argv[1].toLowerCase().trim()
  .replace(/[^a-z0-9가-힣\s-]+/g,'')
  .replace(/\s+/g,'-')
  .replace(/-+/g,'-')
  .replace(/^-|-$/g,'');
console.log(s.slice(0,40) || 'untitled');
" "<EXTRACTED_TASK>")
RUN_ID="run-${TS}-${SLUG}"
RUN_DIR=".omd/runs/${RUN_ID}"

# 2.2.2 — 표준 서브폴더 생성
mkdir -p "${RUN_DIR}"/{wireframes,components,assets/briefs,assets/fallback,assets/pinterest-refs,eval/screenshots,persona-feedback,handoff,checkpoints}

# 2.2.3 — task.md
cat > "${RUN_DIR}/task.md" <<EOF
# Harness Task

<EXTRACTED_TASK>

---

- run_id: \`${RUN_ID}\`
- started_at: $(date -u +%Y-%m-%dT%H:%M:%SZ)
- cwd: \`$(pwd)\`
EOF

# 2.2.4 — run.log
echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] run initialized" > "${RUN_DIR}/run.log"

# 2.2.5 — .omd/.gitignore (idempotent)
mkdir -p .omd
[ -f .omd/.gitignore ] || printf "runs/\ncache/\n" > .omd/.gitignore

# 2.2.6 — INDEX.md (idempotent header + append)
INDEX=".omd/runs/INDEX.md"
[ -f "${INDEX}" ] || cat > "${INDEX}" <<EOF
# Harness Runs Index

One line per run. Append-only.

EOF
TASK_ONELINE=$(echo "<EXTRACTED_TASK>" | tr '\n' ' ' | cut -c1-120)
echo "- $(date -u +%Y-%m-%dT%H:%M:%SZ) \`${RUN_ID}\` — ${TASK_ONELINE}" >> "${INDEX}"

# 2.2.7 — 결과 출력 (이 스킬이 파싱)
echo "RUN_DIR=${RUN_DIR}"
echo "RUN_ID=${RUN_ID}"
```

### 2.3 Hard verify gate (master spawn 차단 조건)

부트스트랩 다음, master spawn 전에 반드시:

```bash
test -d "${RUN_DIR}" && test -f "${RUN_DIR}/task.md" && echo "OK" || echo "FAIL"
```

`OK`가 출력되지 않으면 master는 절대 spawn하지 않는다. 사용자에게:

```
하네스 부트스트랩이 실패했어요 (run dir or task.md 누락). 디스크 권한·경로 문제일 수 있어요. 다시 시도하거나 .omd/ 디렉토리를 정리해주세요.
```

이 gate를 통과해야만 Step 3로.

## Step 3 — DESIGN.md 존재 확인 + reference 의미 매칭

프로젝트 루트에 DESIGN.md 없으면 reference를 직접 추천한다. 외부 API 호출 없음.

### 3.1 카탈로그 로드

다음 파일을 Read 툴로 전체 로드:

- `.claude/data/reference-fingerprints.json` — reference fingerprint (tone keywords, visual theme, antipatterns, signature motion, has_personas, category)
- `.claude/data/reference-tags.md` — 사람-읽기용 keyword 매트릭스
- `.claude/data/vocabulary.json` — controlled vocab

`.claude/data/`에 없으면 `node_modules/oh-my-design-cli/data/` 또는 패키지 root `data/` 에서 fallback.

### 3.2 사용자 task 분석 (silent)

- controlled-vocab 키워드 추출 (예: "헬스/웰니스 / calm-blue / 차분" → `[calm, minimal, approachable, warm]`)
- 명시 brand hint (예: "토스 같은" → `["toss"]`)
- 카테고리 추측 (Consumer / Productivity / Fintech / AI / Developer Tools / Design Tools / Automotive / Aerospace / SaaS / Enterprise)

### 3.3 점수 계산 (in-head, 결정론적)

- 각 ref의 `tone_keywords` ∩ task keywords → 1점/매칭
- brand hint match → +5점
- 카테고리 일치 → +1점
- top 5 정렬

### 3.4 검증 (hallucination 방지)

추천하는 모든 id는 `reference-fingerprints.json`의 `items[].id`에 **반드시** 존재해야 한다. 없는 id는 만들어내지 않는다.

### 3.5 사용자에게 제시 (자연어 prose)

라벨 없이, 추천을 statement로:

```
DESIGN.md가 없어서 reference 한 개를 골라 부트스트랩할게요. <task 핵심 한 줄>을 보니 <top1.id>가 가장 잘 맞을 것 같아요 — <visual_theme 핵심 + 매칭 키워드 1-2개를 한 줄로>.

이대로 가시려면 go (또는 <top1.id>).
다른 후보: <top2.id> (한 줄 이유) · <top3.id> (...) · <top4.id> (...) · <top5.id> (...)
본인이 아는 다른 reference면 한 줄로 id만 (예: vercel) — reference 카탈로그에 없으면 알려드립니다.
```

### 3.6 사용자 응답 처리

- `go` 또는 reference id (top-5 안) → 그 id로 master spawn
- 다른 reference id (top-5 밖이지만 카탈로그 안) → 동일하게 진행
- 카탈로그에 없는 id → "해당 id는 reference 카탈로그에 없어요. top-5 중에서 골라주세요."
- `중단` → 종료

### 3.7 라이브 reference capture (선택)

선택된 reference의 라이브 사이트에서 디자인 토큰 + 시각 reference + 폰트를 가져오면 master phase 정확도가 크게 올라간다. 단일 mode (이전의 clone/inspired 갈래는 v1.3.3에서 폐기 — 시각 동일성은 brand creative work을 가져와야 가능하고, 그건 IP 영역).

사용자에게 한 줄로 묻기:

```
<id> 라이브 자료를 가져올까요? (토큰·구조 cue·폰트·hero screenshot)

가져옴: 컬러·radius·간격·폰트(open-source CDN)·구조 cue(carousel/CTA 모양/nav)·voice register
가져오지 않음: brand mascot 일러스트·마케팅 사진·로고(사용자 자체 자산으로 시작)

답: yes / skip
```

`yes` → omd:reference-capture skill 호출 (Skill 툴) → 끝나면 Step 4로
`skip` → 바로 Step 4

omd:reference-capture는 LICENSE-NOTE.md / attribution.md / fonts.json / structure.json 작성. 모든 brand-identifying 자산은 `assets/_reference/<id>/`에 reference 용도로 보존되며 사용자 product DOM에는 들어가지 않는다.

## Step 3.8 — Surface signal 추출 (master prompt에 한 줄 전달)

사용자 task에서 surface idiom 신호 추출. 이 신호는 master가 reference-capture 자료 중 어떤 부분을 더 무겁게 볼지 결정한다.

### 키워드 → surface 매핑

| 키워드 (KR/EN/JP/TW) | surface_signal |
|---|---|
| `랜딩`, `홈`, `메인`, `landing`, `home`, `main`, `marketing`, `홍보`, `프로모션`, 「ランディング」, `首頁` | **`marketing`** |
| `대시보드`, `앱`, `화면`, `설정`, `관리`, `dashboard`, `app`, `settings`, `console`, `admin`, 「ダッシュボード」, `儀表板` | **`product`** |
| `문서`, `가이드`, `docs`, `documentation`, `help`, 「ドキュメント」, `文件` | **`docs`** |
| `온보딩`, `시작하기`, `가입`, `onboarding`, `signup`, 「オンボーディング」, `註冊` | **`onboarding`** |
| (위에 매치 없음) | **`null`** (master 자유 판단) |

### Step 4 prompt에 포함되어야 할 필드

기존 `<RUN_DIR + task + chosen_ref_id>` 에 surface_signal과 reference-capture 자료 경로를 명시:

```
RUN_DIR: <path>
task: <user task>
chosen_ref_id: <id>
surface_signal: marketing | product | docs | onboarding | null
reference_capture_dir: assets/_reference/<id>/ | null
```

reference_capture_dir이 존재하면 master는 그 디렉토리의 `tokens.json`, `structure.json`, `screenshots/*.png` 를 **모두 활용**한다 (canonical DESIGN.md만 보지 말 것).

## Step 4 — Master 호출 (handoff loop)

Subagent (master)는 AskUserQuestion 직접 호출 불가 (main-thread 전용). file-based handoff 패턴으로 돌린다.

### Master에게 강제되는 시각 grounding 규칙

master에게 전달되는 prompt 첫 단락은 **반드시** 다음을 포함:

```
시각 grounding 규칙 (위반 = regression):
1. reference_capture_dir이 null이 아니면, master의 Component phase 진입 전에
   `<reference_capture_dir>/screenshots/hero-desktop.png`을 Read 툴로 **이미지로**
   읽는다. 텍스트 분석만으로 끝내지 말 것 — 실제 hero composition
   (carousel/illustration/data-card/text-only 등)을 시각 inspect 후 진행.
2. `<reference_capture_dir>/structure.json`에 기록된 hero.type, cta.dominant_shape,
   nav.structure, page.viewport_heights를 wireframe + component 결정에 반영.
   surface_signal과 structure.json이 일치하면 그대로, 어긋나면 surface_signal 우선.
3. `<reference_capture_dir>/tokens.json`의 live_overrides가 있으면 그 값을 우선
   사용. canonical DESIGN.md 값은 voice/principles/motion philosophy에만 절대 권위.
4. `<reference_capture_dir>/fonts.json`의 `live_observed: true` 항목은 생성 HTML
   `<head>`에 반드시 `html_link` 그대로 박을 것. 누락 시 시스템 fallback으로
   렌더되어 결과가 spec과 silently 어긋남 (예: Pretendard 미로드 → 둥근 시스템 폰트).
   canonical DESIGN.md가 언급한 폰트라도 `live_observed: false`면 적용 금지
   (대표 함정: "BM JUA accent only" 같은 spec 문구를 잘못 적용해서 둥근 디스플레이체로 헤더 렌더).
5. **사용자 product 결과물 자산 정책** (단일 mode — 이전 clone/inspired 갈래는 v1.3.3 폐기):
   - **brand creative work (mascot 일러스트·마케팅 사진·고유 ornament)는 product DOM 미사용.** captured logo/screenshot은 `assets/_reference/<id>/` 안에 reference로만 보존.
   - 마케팅 카피·tagline·slogan은 라이브 사이트에서 verbatim 인용 금지. voice register + 문장 길이만 따르고 텍스트는 사용자 프로젝트 맥락에서 새로 작성.
   - **헤더 logo = product name 워드마크만** (v1.3.7부터 — 별도 icon/shapes mark 금지):
     ```html
     <a class="logo" href="/" style="display:inline-flex;align-items:center;text-decoration:none;">
       <span class="logo-wordmark">{{PRODUCT_NAME}}</span>
     </a>
     <style>
       .logo-wordmark{
         font-family:"Bricolage Grotesque","Space Grotesk","DM Serif Display","Fraunces",-apple-system,sans-serif;
         font-size:22px;font-weight:700;letter-spacing:-0.04em;
         color:var(--color-text-heading);
       }
     </style>
     ```
     - **그냥 폰트 + 텍스트**가 logo 역할. shapes mark / DiceBear icon / svg 마크 추가 금지 — 사용자가 짜증나는 "AI가 만든 generic 로고" 회피.
     - 디스플레이 폰트는 `<head>`에 `<link rel="stylesheet">` 의무 로드. brand vibe별 선호:
       - cool / minimal / fintech serious → **Space Grotesk** 또는 **Bricolage Grotesque** (geometric, modern sans)
       - warm / playful / community → **Bricolage Grotesque** (variable, 친근)
       - editorial / luxury / serif → **DM Serif Display** 또는 **Fraunces** (display serif)
     - CDN URLs (omd:asset-fetch §6 참고, 모두 SIL OFL):
       - `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap`
       - `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap`
       - `https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap`
       - `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&display=swap`

   - **{{PRODUCT_NAME}} 결정 logic**:
     1. 사용자 prompt에 명시된 product name 있으면 그걸로 (예: "내 가계부 앱 만들어줘" → 사용자에게 "이름은 뭘로 할까요? skip하면 placeholder"라고 한 줄 묻기 — 답 받으면 그대로, skip이면 step 2)
     2. 사용자 응답 없거나 임의 placeholder 필요 → **brand vibe 맞는 generic placeholder 1개**:

   | brand vibe | placeholder 후보 (1개 선택) |
   |---|---|
   | cool / fintech / minimal | `Folio`, `Mint`, `Nord`, `Vector`, `Norma`, `Atlas` |
   | warm / conversational / friendly | `Pop`, `Spark`, `Halo`, `Cosy`, `Hue` |
   | community / local / marketplace | `Townie`, `Hood`, `Plot`, `Block`, `Brick` |
   | editorial / commerce / curated | `Folio`, `Curator`, `Volume`, `Edit` |
   | mobility / service | `Lane`, `Trip`, `Glide`, `Loop` |
   | productivity / advisor | `Compass`, `Norm`, `Plan`, `Beacon` |

     3. 선택된 이름을 `<title>`, hero copy `[YOUR PRODUCT NAME]` 자리, footer brand 자리 등 **product 전체에 일관 적용** — 사용자가 swap할 때 grep 한 번으로 끝나도록 단일 토큰 유지.

   - 사용자에게 한 줄 알림 (생성 후): "Product name으로 `Folio` 사용 — 본인 이름으로 바꾸려면 `landing.html`에서 `Folio` grep replace."

6. **자산 라이브러리 — 검증된 CDN URL만 사용** (mandatory):

   **각 항목 옆 timestamp는 마지막 200 OK 확인 일자.** 이 리스트에 있는 URL은 generator가 즉시 사용 가능. 이 리스트에 없는 자산은 generator가 임의로 URL 추측·생성 금지.

   **CHARACTERS / AVATARS (hero 캐릭터 자리, CC0)**:
   - DiceBear notionists — `https://api.dicebear.com/9.x/notionists/svg?seed=<seed>&size=<n>` ✓ 2026-05-14
   - DiceBear lorelei — `https://api.dicebear.com/9.x/lorelei/svg?seed=<seed>&size=<n>` ✓ 2026-05-14
   - DiceBear personas — `https://api.dicebear.com/9.x/personas/svg?seed=<seed>&size=<n>` ✓ 2026-05-14
   - DiceBear 전체 스타일 카탈로그: `notionists | notionists-neutral | lorelei | personas | adventurer | avataaars | bottts | croodles | fun-emoji | thumbs` — 모두 CC0
   - `seed` 값은 brand-relevant 토큰 사용 (예: `banksalad-advisor-001`) — deterministic 출력 보장

   **ICONS (product 카테고리·feature 카드·nav)**:
   - Lucide (ISC) — `https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/<name>.svg` ✓ 2026-05-14
   - Heroicons (MIT) — `https://cdn.jsdelivr.net/npm/heroicons@2/24/outline/<name>.svg` ✓ 2026-05-14
   - Tabler Icons (MIT) — `https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/<name>.svg` ✓ 2026-05-14

   **PATTERNS / BACKGROUNDS**:
   - Hero Patterns (CC BY 4.0) — `https://heropatterns.com` ✓ 2026-05-14 (도큐 보고 inline SVG 복사)
   - 원형 그라데이션 ornament은 `radial-gradient + filter: blur()` CSS로 generator가 직접 생성 (brand-specific creative work 아님)

   **FONTS (open-source)**:
   - Pretendard (SIL OFL) — `https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css` ✓ 2026-05-14
   - Wanted Sans (SIL OFL) — `https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@latest/packages/wanted-sans/fonts/webfonts/static/complete/WantedSans.css` ✓ 2026-05-14
   - Noto Sans KR (SIL OFL) — `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap` ✓ 2026-05-14
   - Inter (SIL OFL) — Google Fonts

   **이전 버전에 있던 미검증 항목 (skill 제거됨)**: Humaaans github raw / Open Peeps github raw / unDraw direct CDN / Storyset CDN — 직접 SVG URL 패턴 미공식, 404 빈번. 다시 등재하려면 verify 후 timestamp 부착.

   **Fetch 시 절차**:
   - 자산 1회 `curl -sIL -o /dev/null -w "%{http_code}"` 로 200 확인
   - 결과물 `attribution.md` 에 사용된 URL + 라이선스 + fetch 일자 명시
   - `<!-- asset-source: <CDN url>, license: <license>, status: fetched|fallback -->` 코멘트를 HTML에 박을 것

   **CDN fetch 실패 fallback 정책 (위반 = regression)**:
   - **금지**: 핸드드로잉 inline SVG 캐릭터 합성 (stick figure, 손으로 그린 face 등 — sub-agent가 "curl 못 한다" 핑계 도피 안티패턴). **v1.3.4의 Karrot에서 다시 발생함 — 이번에 gate를 강화.**
   - **허용 fallback (우선순위 순)**:
     1. 동일 카테고리의 다른 검증 URL 시도 (DiceBear notionists 실패 → lorelei → personas)
     2. 모두 실패 시 brand-color 그라데이션 placeholder box:
        ```html
        <div class="hero-character-fallback"
             style="aspect-ratio:1; background:linear-gradient(135deg, var(--brand) 0%, var(--brand-light) 100%); border-radius:24px; display:flex; align-items:center; justify-content:center;">
          <span style="color:#fff; font-size:14px; opacity:.7;">[CHARACTER IMAGE]</span>
        </div>
        ```
     3. 사용자에게 한 줄로 알림: "CDN 자산 fetch 실패, brand-color placeholder 사용."
   - **사용자 product DOM에 amateur SVG는 절대 들어가지 않음.**

   **Handcraft gate (v1.3.5 신설 — Karrot 사고 재발 방지)**:
   - hero-character.svg 파일을 emit하기 직전 **상단에 의무 코멘트**:
     ```xml
     <!-- omd-asset: source=https://api.dicebear.com/9.x/<style>/svg?seed=<seed>, license=CC0, fetched=<ISO-date> -->
     ```
   - 이 코멘트가 없거나 source URL이 검증 catalog (omd:asset-fetch §2)에 없으면 — generator는 **그 파일 product DOM에 embed 금지**. fallback gradient placeholder 사용.
   - product DOM 작성 후 self-audit grep:
     - `grep -cE '<path d="M[0-9.,\sCQTLZ\- ]{200,}"' landing.html` (긴 path data = 손으로 그린 anatomy 흔적)
     - 차트(.hero-chart) / Lucide 아이콘(viewBox 0 0 24 24) 외에 long path **0** 이어야 함. > 0 이면 sub-agent가 다시 fetch.
   - product DOM 안 `<svg>` 인라인은 두 카테고리만 허용:
     1. 차트 / 데이터 시각화 (line/bar/area chart — 데이터 패턴, brand-specific X)
     2. Lucide / Heroicons / Tabler 아이콘 인라인 (작은 viewBox)

   기타 모든 시각 자산은 catalog `<img>` URL 통해 로드. **catalog 외 임의 SVG 그리기 금지.**

   자세한 catalog + 검증 gate는 `skills/omd-asset-fetch/SKILL.md` 참조.

7. **CSS 컨테이너 일관성** (위반 = regression):
   - 모든 top-level 섹션은 **단일 공유 클래스** `.container-inner` (또는 동등한 이름)을 사용.
   - 그 클래스 한 곳에 `max-width: <N>px; margin: 0 auto; padding: 0 24px` 정의. **섹션별로 padding 값 다르게 정의 금지** — header / hero / features / footer 모두 같은 inner 컨테이너로 left/right edge가 정확히 일치해야 함.
   - 결과 HTML 작성 후 self-audit: 모든 section의 inner element가 동일한 horizontal padding 적용됐는지 grep으로 확인. 어긋난 곳 있으면 통일.
   - 직접 결함 예시 (v1.3.3에서 발생): `.header-inner { padding: 0 24px }` + `.hero-inner { padding: 0 }` → 뷰포트 wide에서 24px offset.

8. **Hero composition decomposition** (위반 = regression):
   - **먼저 rule 12 (Hero archetype)에서 archetype 1개 선택**. 모든 archetype은 분리된 elements 원칙 적용.
   - 시각 요소는 분리된 element:
     - `.hero-character` / `.hero-visual` — img / 또는 inline svg 단일 (DiceBear 등 검증 자산)
     - `.hero-chart` — 별도 inline `<svg>` (차트는 brand-specific creative work 아닌 일반 데이터 시각화 패턴)
     - `.hero-stat-card` — HTML `<div>` 카드 (숫자·라벨·trend chip)
     - `.hero-ornament` — 배경 ornament (CSS radial-gradient + blur)
     - `.hero-slide` (carousel archetype용) — 각 slide 분리된 element
   - 각 element는 absolute positioning 또는 grid로 조합.
   - **금지**: 캐릭터 + 차트 + 데이터 카드를 single SVG 파일 안에 통합 (v1.3.3 결함).

9. **Hero archetype selection** (v1.3.8 신설 — monotone hero 회귀 방지):

   v1.3.5~v1.3.7에서 brand가 다른데 hero 구도는 매번 "text-left + character-right + floating cards" 동일 → "와우" 약화. 이 rule부터 sub-agent는 brand vibe + surface signal 기반으로 **7가지 archetype 중 1개를 명시 선택**하고 그에 맞춰 구성.

   ### archetype catalog

   **A. `left-character`** (현행 default)
   - 좌측: 카피 + CTA + carousel dot
   - 우측: 캐릭터 일러스트 + floating data card 2-3개
   - 적합: 핀테크 advisor / 데이터 어드바이저 / B2C 모바일 앱

   **B. `center-text`**
   - 중앙 정렬 헤드라인 + lead + 2 CTAs
   - 아래: 큰 visual (screenshot / video / illustration) 단일
   - 좌우 floating card 없음, 시선 단일 축
   - 적합: AI / 개발자 도구 / Linear-style minimal SaaS / 검색 중심 portal

   **C. `carousel`**
   - 풀-블리드 또는 wide carousel — 3-5 slide auto-rotate
   - 각 slide: 자체 카피 + visual + CTA (모두 다른 메시지)
   - dot pagination + auto 5-7s
   - 적합: 커뮤니티 마켓플레이스 / 이커머스 / 다양한 카테고리 promoting

   **D. `split-screen`**
   - 50/50 그리드: 좌측 = 카피 + CTA / 우측 = 큰 product 이미지 또는 booking widget
   - floating card 없음, 큰 우측 단일 visual
   - 적합: 모빌리티 (booking strip) / 여행 (검색 widget) / B2B (product 스크린샷)

   **E. `editorial-magazine`**
   - 풀-블리드 헤로 사진 + overlay 텍스트 (top-strip + cover caption + 큰 headline)
   - 잡지 표지 메타포 (Vol.X · Year · Issue 같은 editorial 메타)
   - 적합: 큐레이트 커머스 / 패션 / 라이프스타일 / 문화

   **F. `dashboard-preview`**
   - 좌측 또는 상단: 짧은 카피 + CTA
   - 메인 visual: 큰 product UI 스크린샷 (가짜 dashboard mock)
   - 시선 = "이게 우리 product 모습" 자체
   - 적합: B2B SaaS / analytics / productivity 도구

   **G. `quote-led`**
   - 큰 인용구 (display serif, 80-120px) — 사용자 testimonial 또는 brand thesis
   - 아래: 짧은 보강 카피 + CTA
   - 캐릭터 / 차트 / floating 없음 — 단 한 문장의 권위
   - 적합: 컨설팅 / 에이전시 / 럭셔리 brand / 사명 강조 surface

   ### archetype 선택 룰 (brand vibe ↔ archetype)

   | brand category / vibe | 1순위 | 2순위 (variation) |
   |---|---|---|
   | Fintech (advisor) — banksalad, kakaopay, toss | A `left-character` 또는 F `dashboard-preview` | B `center-text` |
   | AI / Developer tools — anthropic, claude, vercel | B `center-text` | F `dashboard-preview` |
   | Productivity / SaaS — linear, notion, asana | F `dashboard-preview` | B `center-text` |
   | E-commerce (curated/editorial) — 29cm, musinsa, ssense | E `editorial-magazine` | C `carousel` |
   | Community marketplace — karrot, dcard, mercari | C `carousel` | A `left-character` |
   | Mobility / service — socar, uber, lime | D `split-screen` (booking widget) | C `carousel` |
   | Travel — airbnb, yanolja, kayak | D `split-screen` (검색 widget) | E `editorial-magazine` |
   | Luxury / heritage — ferrari, hermes | G `quote-led` 또는 E `editorial-magazine` | D `split-screen` |
   | Consultancy / B2B services | G `quote-led` | B `center-text` |
   | Health / wellness — gangnamunni, headspace | B `center-text` 또는 D `split-screen` | A `left-character` |

   ### 선택 절차

   1. brand의 `web/references/<id>/DESIGN.md` §1 (Visual Theme) + fingerprint `category`를 읽고 위 표에서 1순위 archetype 선택
   2. 사용자가 같은 brand로 **이미 한 번 실험**했으면 (`.omd/runs/INDEX.md`에 기록) → 2순위 사용해서 variation 제공
   3. 사용자가 명시 ("center 정렬로", "carousel로") → 그대로 따름
   4. 선택된 archetype을 `experiment-meta.json`의 `hero_archetype` 필드에 명시 (gallery 표시용)
   5. 사용자에게 한 줄 알림: "Hero archetype: `center-text` 사용 — Linear-style minimal SaaS 매칭"

   ### archetype 구현 시 공통 제약

   - 모든 archetype은 rule 8 decomposition 따름 (element 분리)
   - 모든 archetype은 rule 10 reveal safety net 적용
   - 모든 archetype은 rule 5 wordmark-only logo 사용
   - 모든 archetype은 rule 6 verified asset catalog만 사용
   - archetype별 specific 자산 (예: editorial-magazine의 헤로 photo) — Picsum/Loremflickr 결정적 URL 필수

10. **IntersectionObserver reveal safety net** (v1.3.6 신설, 위반 = regression):

10. **IntersectionObserver reveal safety net** (v1.3.6 신설, 위반 = regression):

    이전 batch에서 toss + socar 둘 다 round-2 refinement에서 **동일한 결함을 fix**함 — IntersectionObserver-기반 scroll reveal이 fullpage screenshot 또는 인쇄 모드에서 viewport 밖 element를 `opacity: 0`으로 영구히 hidden시킴. 시스템 결함이라서 skill에 박음:

    - reveal 패턴 사용 시 **safety net 의무**:
      1. CSS `@keyframes failsafeReveal` 정의:
         ```css
         @keyframes failsafeReveal { to { opacity: 1; transform: none; } }
         [data-reveal] { animation: failsafeReveal 0.01s ease 2s forwards; }
         html.js-ready [data-reveal] { animation: none; }  /* JS ready 시 IO가 주도 */
         .is-revealed { opacity: 1 !important; transform: none !important; }
         ```
      2. JS 초기화 시점에 `document.documentElement.classList.add('js-ready')` 추가 → IO 정상 동작 path 진입
      3. JS 미로드 / IO 미지원 / fullpage screenshot 시 → 2s 후 자동 reveal (CSS animation forwards)
      4. `@media (prefers-reduced-motion: reduce)` 에서는 모든 reveal element를 `opacity: 1` 즉시
    - **금지**: `opacity: 0` initial state + IO trigger만 + safety net 없음 — fullpage screenshot 시 빈 섹션 발생

11. **"와우" 수준 polish 체크리스트** (master는 다음 중 최소 5개 구현):
   - [ ] 헤더 sticky + scroll 시 subtle backdrop blur or shadow
   - [ ] Hero 카르셀 (auto-rotate 5-7s, dot indicator, smooth fade)
   - [ ] CTA hover micro-interaction (brand의 motion philosophy 따라 — banksalad면 "lighten on hover")
   - [ ] 숫자 count-up 애니메이션 (자산·사용자 수 등 stat에)
   - [ ] Scroll reveal stagger (IntersectionObserver, 60ms 간격)
   - [ ] 차트 stroke-dashoffset draw-in (financial 도메인이면 mandatory)
   - [ ] Feature 카드 hover에 subtle elevation + icon rotate/scale
   - [ ] Background ornament — 원형 그라데이션 blur layer (CSS `filter: blur(120px)`로 ambient color wash)
   - [ ] `prefers-reduced-motion` 가드 (모든 모션 끔)
   - [ ] Footer가 정보 풍부 (4 column, legal·company·resources·contact)
   - [ ] 모바일 viewport에서도 깔끔 (768px / 375px 둘 다)

   모든 모션은 brand DESIGN.md §15 (Motion & Easing)의 duration scale + easing 토큰 따름.
```

이 규칙은 Step 4의 master spawn prompt에 매번 prefix로 들어간다 (사용자에게 노출 X — 내부 contract).

### 루프 의사코드

```
spawn_count = 0
prompt = "<위 grounding 규칙 prefix> + <RUN_DIR + task + chosen_ref_id + surface_signal + reference_capture_dir>. Phase 1부터 시작."

while spawn_count < 12 (safety cap):
  result = Agent({
    subagent_type: "omd-master",
    description: "Run design harness round N",
    prompt: prompt
  })
  spawn_count += 1

  handoff_path = "<RUN_DIR>/.handoff.json"
  if not exists(handoff_path):
    relay result text to user; halt

  handoff = JSON.parse(Read(handoff_path))

  if handoff.user_prose:
    print handoff.user_prose to user

  if handoff.status == "done": halt
  if handoff.status == "error": halt + show
  if handoff.status == "ask_user":
    questions = JSON.parse(Read(handoff.questions_file))
    answers = AskUserQuestion({ questions: questions.questions })
    answers_file = "<RUN_DIR>/checkpoints/<handoff.checkpoint_id>.answers.json"
    Write(answers_file, JSON.stringify({checkpoint_id, answers}))
    prompt = "continue checkpoint:" + handoff.checkpoint_id + " — answers at " + answers_file
```

### Safety cap

한 번의 `/omd-harness` 호출에 최대 12 spawn. 초과 시 사용자에게 escalate ("master가 12 spawn 초과, 멈춥니다 — run dir 보존").

### 재진입

사용자가 자연어로 "go" / "fix X" 답하면 동일 loop 재시작. master는 `.handoff.json` 보고 어디까지 갔는지 파악.

## 사용자 체크포인트 처리

Master가 체크포인트에서 turn을 종료한 후 다음 사용자 메시지가:

- **하네스 컨텍스트 안의 응답** (예: "go", "fix the home screen IA", "stop") → master 재spawn + 그대로 전달
- **다른 작업으로 바뀐 메시지** → run 디렉토리에 `paused.flag` 생성. 나중에 `/omd-harness resume` 하면 재개

## 산출물 위치 (master가 emit, 이 스킬은 안내만)

```
.omd/runs/run-<ts>-<slug>/
├── task.md
├── brief.md
├── references-cited.md
├── journey.mmd
├── wireframes/
├── DESIGN.md.patch
├── components/
│   ├── manifest.json
│   └── microcopy.json
├── assets/
│   ├── brief.md
│   ├── manifest.json
│   ├── briefs/
│   ├── fallback/
│   └── pinterest-refs/
├── eval/
│   ├── deterministic.json
│   ├── jury.json
│   └── screenshots/
├── persona-feedback/
│   └── <persona>.json
├── critique.md
├── handoff/
│   ├── v0.zip
│   ├── cursor.zip
│   └── subframe.zip
├── run.log
└── postmortem.md
```

## 이 스킬이 하지 않는 것

- Phase 로직 실행 (master)
- Sub-agent 직접 spawn (master)
- 사용자 응답 해석/라우팅 (master)
- DESIGN.md 직접 수정 (Phase 5에서 master)

## 금지

- Master 없이 phase를 직접 수행하지 말 것
- 사용자 체크포인트를 자동 승인하지 말 것
- Run 디렉토리를 임의로 정리/삭제하지 말 것
- Step 2.3 verify gate 통과 전에 master spawn 절대 금지
