---
name: omd:feel
description: "디자인·프론트 업계가 '감'으로 쓰던 인터페이스 디테일을 수치화한 규칙으로 적용(APPLY)하거나 감사(AUDIT)한다. Jakub Krehel의 make-interfaces-feel-better 철학을 계승 + HIG/Material/WCAG/DS 토큰/실무자 리서치로 확장한 17축·113규칙(provenance 등급별). 모션 타이밍·이징·동심원 radius·tabular-nums·44px 타깃·focus ring·prefers-reduced-motion 등. 'feel 좋게 다듬어줘', '인터페이스 디테일 적용', 'feel 점검', '마이크로 인터랙션 손봐줘', 'make this feel better', 'polish the interactions', 「インターフェースの細部を詰めて」, 「介面細節打磨」 류에 트리거. 브랜드 토큰은 DESIGN.md(omd:apply)가 우선."
user-invocable: true
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:feel — Interface Feel, Quantified

업계가 **감(感)으로 쓰던** 인터페이스 디테일 — "이 정도 속도", "이 정도 그림자", "이 정도 여백" — 을 **출처 등급이 매겨진 체크 가능한 숫자**로 바꿔 적용하고 감사하는 스킬. Jakub Krehel의 *"great interfaces are a collection of small things that compound"* 명제를 계승하되, **어떤 숫자를 맞춰야 하는지 / 언제 틀렸는지**까지 수치로 답한다.

핵심 통찰: **품질은 수십 개 작은 제약을 각자의 band 안에 가둔 것의 적분**이다. 600ms짜리 체크박스 틱, 1px focus ring, 본문 2.85:1 대비, `@media (hover:hover)` 게이트 없는 hover lift — 하나하나가 "feel"에서 측정 가능한 차감이다. 이 스킬은 그 차감을 막는다.

전체 규칙(17축·113개)은 [`reference.md`](./reference.md)에, 각 숫자의 출처·tier·방법론은 [`provenance.md`](./provenance.md)에 있다. 아래 **cheat-sheet**는 항상 로드되는 핵심이고, 깊은 감사·엣지 축은 reference를 읽는다.

## 언제 쓰나

- **APPLY** — UI를 새로 만들거나 고칠 때 정량 feel 규칙을 주입. ("feel 좋게", "인터랙션 손봐줘", "디테일 적용")
- **AUDIT** — 기존 HTML/JSX/TSX/CSS를 규칙표 대비 점검해 feel-score + BLOCK/WARN/FYI 리포트. ("feel 점검", "이 화면 감사해줘")

UI 작업이 아니면 트리거하지 않는다. 카피·정보구조만 다루는 작업은 대상 아님.

## 0. 출처 등급 → 강제 강도 (이 스킬의 심장)

모든 규칙은 tier를 달고 있고, **tier가 강제 강도를 정한다.** 이게 "감을 정직하게 수치화"하는 방법 — spec 숫자는 게이트, 취향 숫자는 제안.

| Badge | Tier | APPLY | AUDIT severity |
|---|---|---|---|
| 🟢 **SPEC** | spec-authoritative (W3C/WCAG·HIG·normative) | 강제 | **BLOCK** |
| 🟢 **DS** | ds-token (커밋된 디자인시스템 토큰) | 강제 (브랜드가 덮지 않으면) | **BLOCK** |
| 🟡 **CONV** | industry-convention (독립 실무자 ≥2 수렴) | 기본값으로 적용 | **WARN** |
| ⚪ **OP** | single-opinion (신뢰할 만한 1인) | 제안만 | **FYI** |
| ⚪ **FOLK** | folklore-unverified (근거 추적 불가) | 제안 + tier 명시 | **FYI** |

분포: SPEC 61 · DS 24 · CONV 19 · OP 7 · FOLK 2 → **85/113이 spec·token 근거(강제 가능)**.

> **DESIGN.md가 항상 이긴다.** 브랜드 `DESIGN.md` 토큰이 규칙과 충돌하면 브랜드 토큰이 권위. 이 규칙들은 브랜드가 **침묵할 때의 기본값**이지 override가 아니다. 프로젝트 루트에 DESIGN.md가 있으면 `omd:apply`로 먼저 토큰을 읽고, 빈 축만 feel 규칙으로 채운다.

## 1. Cheat-sheet — 항상 적용하는 핵심 숫자

> tier 표기: 🟢=강제, 🟡=기본값, ⚪=제안. 충돌 시 DESIGN.md > 🟢 > 🟡 > ⚪.

### Motion & Timing
- **일상 UI 전환 ~200ms** (hover ≤150 · popover ~200 · overlay/modal ~300). 범위 150–300ms, **>400ms = 굼떠 보임**. 🟡
- duration은 **50ms 그리드**에 양자화 (220/333ms 금지). 🟢
- **exit ≈ 0.8 × enter** (열 때보다 닫을 때 빠르게). 🟢
- 한 개의 전역 duration 금지 — 이동 면적/거리에 비례. 🟢

### Easing & Springs
- **enter/사용자 트리거 = ease-out** `cubic-bezier(0,0,0.2,1)` · **exit = ease-in/accelerate** · 이미 보이는 morph = ease-in-out · 스피너/progress = linear. **enter에 ease-in 금지.** 🟡
- Apple = spring 기본 `(response 0.55, damping 0.825, bounce 0)`, 기능적 UI는 bounce <0.4. 🟢
- **interruptible**: 인터랙티브 상태는 transition/spring(재타깃 가능), one-shot 연출만 `@keyframes`. 🟢

### Spacing · Radius · Rhythm
- **8px base, 4px half-step** (4·8·12·16·24·32·40·48·64). 🟢
- **내부 padding ≤ 형제 간 외부 gap.** 🟡
- 동심원 radius: **outer = inner + padding.** 🟢
- UI 타입 스케일 ~**1.25**(major third). 🟡

### Shadow & Depth
- **레이어드 그림자 3–5겹**, 광원은 위 하나. 저고도=tight+sharp, 고고도=diffuse+spread (Tailwind md→lg 램프). 🟡/DS
- **다크모드는 그림자보다 밝은 표면**으로 깊이를 낸다. 🟡

### Typography
- 본문 **line-height 1.5**, **measure ~66ch** (45–75). 🟢
- display tracking **−0.02~−0.03em**, all-caps **+0.05~0.1em**, 본문 ~0. 🟡
- 변하는 숫자엔 **tabular-nums**; 제목 **text-wrap: balance**, 본문 **pretty**; 레이아웃에 **antialiased**. (seed/jakub) 🟡

### Color & Contrast
- 텍스트 **4.5:1**(large 3:1) AA · 비텍스트/UI 경계 **3:1** · focus ring **3:1 + 2px + ~2px offset**. 🟢
- M3 state layer: **hover 8% · focus 10% · pressed 10% · dragged 16%.** 🟢
- disabled ~**38% opacity**. 🟡

### States & Feedback
- 데이터 컴포넌트는 **5 상태**(empty/loading/error/content/skeleton) 전부 정의. 🟡
- pressed: **scale 0.96–0.97, 150ms ease-out** (바닥 0.95). DS/⚪
- 아이콘 상태 스왑: scale+opacity+blur 4px→0, spring ~0.3. 🟡

### Targets & Pointer
- 탭 타깃 **44pt(iOS/WCAG AAA) / 48dp(Material) / 24px(WCAG AA 최소)**, 인접 타깃 간 **≥8pt**. 🟢
- **cursor**: 인터랙티브=pointer · 비활성=not-allowed · 드래그=grab→grabbing · 편집=text. 🟡

### Scroll & Gesture
- 오버레이/중첩 스크롤러에 **`overscroll-behavior: contain`** (스크롤 체이닝·PTR 차단). 🟢
- 스와이프 해제 임계 **~30% 거리 또는 velocity flick**. DS
- scroll-snap: 롱폼=proximity · 캐러셀=mandatory. 🟢

### Response Time & Perceived Perf
- **100ms = 즉각 · 1s = 사고 흐름 한계 · 10s = 주의 한계(% progress 표시).** Doherty **400ms** ceiling. 🟢
- **INP ≤200ms p75, 프레임 예산 16.6ms.** 🟢
- 스피너는 예상 대기 **>1s일 때만**; 띄웠으면 **최소 500ms 유지**(깜빡임 금지). 레이아웃을 알면 skeleton. 🟡/DS

### Layout Stability (CLS)
- **CLS ≤0.1 p75.** 미디어는 width/height 또는 **aspect-ratio**로 자리 예약. **`scrollbar-gutter: stable`**. `font-display: optional`(또는 swap)+metric override. 입력 500ms 창 밖에서 콘텐츠 위쪽 삽입 금지. 🟢

### Modals · Overlays · Z-index
- `role=dialog` + **`aria-modal=true`**, 열 때 다이얼로그로 focus, **Tab trap, Esc 닫기, 닫을 때 트리거로 focus 복원, 배경 inert**. scrim `#000 ~32%`. 🟢
- light-dismiss: 임시/정보 다이얼로그는 ON, **데이터 입력·파괴적 액션은 OFF.** 🟢
- z 사다리: dropdown 1000 / sticky 1100 / fixed 1200 / backdrop 1300 / modal 1400 / popover 1500 / toast 1600 / tooltip 1700. 오버레이는 **portal**. (gap-fill)

### Performance · Glass · A11y
- 애니메이션은 **transform/opacity(+filter)만**, **`transition: all` 금지**; `will-change`는 transient(쉴 때 제거). 🟢
- glass: `backdrop-filter: blur(16px) saturate(180%)` + 반투명 fill ~0.6 + 1px hairline + **불투명 fallback**, 텍스트 ≥4.5:1. 🟡/🟢
- **`prefers-reduced-motion: reduce` → cross-fade/즉시 전환**, 큰 이동·parallax 제거(작은 opacity는 유지). ≤3 flashes/s. **focus outline은 대체 없이 제거 금지**(`:focus-visible`). 🟢

### Form Validation
- 1차 검증은 **blur에서**, 한 번 에러난 필드는 **on-change(라이브)**로 전환(고치는 즉시 에러 해제). async 검증 debounce **300–500ms**. 🟡

## 2. APPLY 워크플로

1. **컨텍스트 감지** — 프로젝트 루트/대상 폴더에 `DESIGN.md`가 있나? 있으면 `omd:apply` 절차로 토큰(색·radius·spacing·motion·type) 먼저 read. 브랜드 토큰 = 권위.
2. **빈 축 채우기** — DESIGN.md가 침묵하는 축만 cheat-sheet 기본값으로. 깊은 축(스크롤 물리·glass·z 사다리·CLS)은 `reference.md`의 해당 섹션 참조.
3. **tier 존중** — 🟢는 그대로 적용, 🟡는 기본값(브랜드/요청이 덮으면 양보), ⚪/FOLK는 **"이건 취향 휴리스틱이에요"라고 밝히고** 제안만.
4. **출력에 근거 남기기** — 비자명한 숫자(예: exit 0.8×, focus offset 2px)는 한 줄로 왜인지 + tier를 코드 주석이나 설명에 남긴다. 숫자를 **발명하지 말 것** — cheat-sheet/reference에 없으면 reference를 읽거나 모른다고 말한다.
5. **prefers-reduced-motion은 항상** 동반 — 모션을 넣으면 reduce 분기도 같이 넣는다 (A11y는 옵션이 아님).

## 3. AUDIT 워크플로

`omd:designer-review`와 같은 advisory(읽기 전용) 패턴 + feel 축. 매 호출 DESIGN.md 재read(캐싱 금지).

1. **입력**: `artifact_path`(HTML/JSX/TSX/CSS) + (있으면) `design_md_path` + viewport.
2. **machine_check 스캔** — `reference.md`의 각 규칙 `🔍 machine_check`를 artifact에 적용. 예:
   - `transition: all` / >400ms duration / off-grid duration → 검출
   - 탭 타깃 <44px, focus outline 제거, 텍스트 대비 <4.5:1
   - aspect-ratio 없는 `<img>`, `aria-modal` 없는 modal, `overscroll-behavior` 없는 오버레이
3. **severity = tier 매핑** — SPEC/DS 위반 = **BLOCK**, CONV = **WARN**, OP/FOLK = **FYI**. (severity inflation/deflation 금지.)
4. **feel-score** — 적용 가능한 축 중 in-band 비율: `🟢 in-band / 🟢 applicable`을 핵심 숫자로, WARN/FYI는 부차. "feel-score 18/22 SPEC in-band, BLOCK 2, WARN 5".
5. **출력**: `<work_dir>/.reviews/feel-audit-round-<N>.md` — issue마다 **line ref + tier + machine_check 근거 + fix(actionable)**. line ref 없는 issue·"looks good" rubber-stamp 금지.

```markdown
### [BLOCK] Tap target below minimum — icon button
- **Location:** `components/Toolbar.tsx:31`
- **Rule:** §8 Targets — 44pt/48dp/24px min (🟢 SPEC, WCAG 2.5.8)
- **Evidence:** `<button className="w-6 h-6">` → 24px, hit-slop 없음
- **Fix:** 패딩으로 44×44 hit region 확보 (`p-2.5` + 시각 24px 아이콘 유지)
```

## 4. 가드레일

- ❌ **folklore를 spec처럼 제시 금지.** ⚪/FOLK는 항상 tier를 밝힌다. (corpus Appendix B의 demote 목록 — Hick-Hyman 0.155s/bit, Fitts ms/bit, rubberband 0.7, pressed 0.95 바닥, exit 0.8×, stagger 80/100ms, optical 2px 등 — 은 **숫자 게이트로 강제하지 말 것**, 방향만 차용.)
- ❌ **숫자 발명 금지.** cheat-sheet/reference에 없으면 reference를 읽거나 "모름"이라고 말한다.
- ❌ **DESIGN.md 무시하고 일반 best-practice로 덮기 금지.** 브랜드 토큰이 먼저.
- ❌ **모션을 넣고 `prefers-reduced-motion` 분기 누락 금지.**
- ❌ AUDIT에서 severity inflation(다 BLOCK)·deflation(BLOCK을 FYI로)·line ref 없는 issue 금지.
- ❌ 숫자 변경이 필요하면 `reference.md`를 손으로 고치지 말고 **corpus → 제너레이터로 재생성**.

## 5. omd 생태계 관계

- **`omd:apply`** — 브랜드 DESIGN.md 토큰 적용. omd:feel은 그 위에서 토큰이 침묵하는 *느낌* 층을 채운다.
- **`omd:designer-review`** — 브랜드 일관성(typo/color budget/radius scale) 감사. omd:feel AUDIT은 그 **feel 축 짝꿍**(모션 타이밍·타깃·CLS·a11y).
- **`omd:taste`** — 사용자 *취향* 대시보드(별개 개념). 반복되는 feel 결정이 취향으로 굳으면 `omd:remember`로 흘려보낸다.

> **수동 검증**: `transition: all 0.6s` + `<button class="w-5 h-5">` + `prefers-reduced-motion` 분기 없는 컴포넌트를 AUDIT하면 — BLOCK 최소 3건(transition all=GPU SPEC, 20px 타깃=WCAG SPEC, reduced-motion 누락=a11y SPEC)이 line ref와 함께 뜨고 feel-score가 그만큼 깎여야 한다.
