# rx4-C — 타 에이전트 디자인 스킬 규칙 비교 (Lane C, 2026-09-04)

조사 대상: 실제 저장소에서 원문을 받아서 읽은 것만 인용한다(모두 `curl` 로 raw 파일 취득).
받지 못한 것은 §0 에 "미확인"으로 남긴다. 추측으로 채운 규칙은 없다.

---

## 1. 한 줄 결론

**우리는 "무엇을 몇 개 놓는가"(개수·밀도·타이밍)를 업계에서 가장 촘촘하게 계량했지만, 타 스킬들이 공통으로 갖고 있는 세 가지 — ① 요소 하나의 *크기*가 화면을 지배하는지 묻는 테스트, ② 호버·제스처 단독 의존 금지(터치·키보드 동등), ③ 화면당 요소·초점 예산 — 이 셋이 전부 빠져 있고, 그 셋이 정확히 r3 가 60점으로 떨어진 세 지점이다.**

---

## 0. 조사한 저장소와 취득 여부

| 대상 | URL | 취득 |
|---|---|---|
| tasteskill (design-taste-frontend) | `https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/taste-skill/SKILL.md` (87KB) · 사이트 tasteskill.dev | ✅ 원문 |
| Anthropic `frontend-design` | `https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md` | ✅ 원문 |
| Anthropic `web-artifacts-builder` | 같은 레포 `skills/web-artifacts-builder/SKILL.md` | ✅ 원문(디자인 규칙 1줄뿐) |
| pbakaus/impeccable | `.agent/skills/impeccable/` SKILL.md + reference/{craft-floor, layout, animate, bolder, polish, critique, distill, overdrive}.md | ✅ 원문 |
| refero_skill (referodesign) | `https://raw.githubusercontent.com/referodesign/refero_skill/master/skills/refero-design/…` (기본 브랜치 `master`) | ✅ 원문 |
| Open Design (nexu-io) craft refs | `https://raw.githubusercontent.com/nexu-io/open-design/main/craft/{anti-ai-slop,animation-discipline,laws-of-ux,typography-hierarchy}.md` | ✅ 원문 |
| open-design-skill (sugarforever) | `https://raw.githubusercontent.com/sugarforever/open-design-skill/main/SKILL.md` | ✅ 원문 (로더 스킬 — 디자인 규칙 없음, craft/*.md 로 위임) |
| ui-ux-pro-max (nextlevelbuilder) | `.claude/skills/ui-ux-pro-max/{SKILL.md, references/quick-reference.md, references/pro-rules.md}` | ✅ 원문 |
| Vercel Web Interface Guidelines | 스킬 `vercel-labs/agent-skills/skills/web-design-guidelines/SKILL.md` → 규칙 본문 `vercel-labs/web-interface-guidelines/main/command.md` | ✅ 원문 |
| v0 시스템 프롬프트 | `x1xhlol/system-prompts-and-models-of-ai-tools` → `v0 Prompts and Tools/Prompt.txt` | ✅ 원문 |
| Lovable Agent Prompt | 같은 레포 `Lovable/Agent Prompt.txt` | ✅ 원문 |
| Bolt 프롬프트 | 같은 레포 `Open Source prompts/Bolt/Prompt.txt` | ✅ 원문 — **시각 디자인 규칙 사실상 없음**(스택·아티팩트 포맷 프롬프트). 비교표에서 제외 |
| WCAG 2.2 SC 1.4.13 | `https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html` | ✅ 규범문 |
| `vercel-labs/skills` | 레포는 있으나 `skills/find-skills/SKILL.md` 하나뿐 — 디자인 가이드라인은 **다른 레포**(`vercel-labs/agent-skills`)에 있다 | ⚠️ 위치 정정 |
| 21st.dev magic / shadcn 스킬 | 시간·호출 예산상 미조사 | ❌ 미확인 |

---

## 2. 비교 표

| 스킬 | 출처 | 이미지 스케일 규칙 | 호버·유휴·지속 상태 규칙 | 간결·초점·요소 예산 | 모션 규칙 | 프로세스(사전 리뷰·자기 비평) | anti-slop |
|---|---|---|---|---|---|---|---|
| **tasteskill** | github.com/Leonxlnx/taste-skill | §4.8 "Landing pages and portfolios are **visual products**", "**Hero needs a real visual.** Text + gradient blob is not a hero - it's a placeholder.", "Even minimalist sites need real images … at least 2-3 real images". §4.7 "**Hero font-scale discipline.** Plan font size and image size *together*." **크기 하한 수치는 없음**(폰트 스케일 범위만: `text-4xl md:text-5xl lg:text-6xl` 기본, `text-6xl md:text-7xl` 는 3-5단어 헤드라인일 때만) | §7 MOTION_INTENSITY 1-3 = "CSS `:hover` and `:active` states only". §9.A "**NO custom mouse cursors.** Outdated, accessibility-hostile, perf-hostile." 유휴 층 개념 없음. 터치 동등 규칙 없음 | §4.7 하드룰 다수: 히어로 텍스트 요소 **최대 4개**, 서브텍스트 **≤20단어 & ≤4줄**, `pt-24` 상한, **eyebrow ≤ ceil(sectionCount/3)**(기계적 카운트), 지그재그 3연속 금지, 섹션 레이아웃 패밀리 재사용 금지(8섹션이면 ≥4패밀리), 마키 1개, §4.9 섹션당 "headline ≤8 words + sub ≤25 words + one visual asset OR one CTA" | §5.D `window.addEventListener('scroll')` **하드 밴**, §6.A transform/opacity만, §6.B `MOTION_INTENSITY>3` 이면 reduced-motion 필수, §5.A/5.B GSAP sticky-stack·horizontal-pan 정본 스켈레톤 | §0.B **"Design Read" 한 줄 선언** 후 착수, 3다이얼(VARIANCE/MOTION/DENSITY) 명시, 애매하면 질문 **딱 1개**, §14 **프리플라이트 60여 항목**("If a single checkbox cannot be honestly ticked, the page is not done") | §9 A~G. em-dash 전면 금지, 3열 동일 카드 금지, Inter 기본 금지, AI-퍼플/베이지+브라스 팔레트 금지, "Quietly in use at" 금지, 섹션 번호 eyebrow 금지, scroll cue 금지, div 가짜 스크린샷 금지 |
| **Anthropic frontend-design** | github.com/anthropics/skills | "the hero is the first thing viewers will see. Open with **the most characteristic thing in the subject's world**… a headline, an image, an animation, a live demo, an interactive moment". 크기 수치 없음 | "**Motion that answers a person's action** (opening, expanding, confirming) is welcome when it shows what changed." 반대로 "hover transitions on every card are the generic default and **read as AI-generated**" | **"Spend your boldness in one place. Let one element be the memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief."** + 샤넬 인용: "before leaving the house, take a look in the mirror and **remove one accessory**". 줄길이 <80자 | "Use non-user-triggered motion **sparingly and deliberately**… **A single orchestrated moment** — one page-load sequence or one reveal — lands better than scattered effects; **fade-and-slide-up entrances on each section** … are the generic default" | **2패스**: ① 디자인 플랜(색 4-6 hex, 서체와 역할, ASCII 와이어프레임, 원칙) ② **"review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) … revise that part, say what you changed and why."** 빌드 중 "**Critique your own work as you build, taking screenshots to review** — a picture is worth 1000 tokens" | 5종 AI 클러스터 명시(크림+세리프+테라코타 `#D97757`, 니어블랙+애시드, 브로드시트, SaaS 카드킷, 템플릿 크롬: ALL-CAPS eyebrow / `A · B · C` 미들닷 / `→` 접미 / `#0B0B0B` 틴티드 블랙) |
| **impeccable** | github.com/pbakaus/impeccable | 직접 규칙 없음. 대신 `bolder.md` **스켈레톤 테스트**: "Strip the copy out of your planned section and study the bare structure… **If it only works once the words return, the boldness is in the text size, not the design.**" + "A placeholder for an image or artifact **names a job, an anchor and a piece of evidence**, not a cue to drop in a decorative photo" | `craft-floor.md` States: "hover, disabled, loading, error, empty." `critique.md` 접근성 페르소나 Sam: "**Cannot see hover states or visual-only indicators**", 레드플래그 "Click-only interactions with no keyboard alternative" | `layout.md` **스퀸트 테스트**: "With detail blurred, can you still identify the primary element, the secondary element, and the major groups in order?" · "Do tight and generous intervals create a deliberate cadence, or is **one spacing value repeated until everything has equal weight**?" · craft-floor "**tight groups, generous separation**, more space above a heading than below it" · 타입 "body measure 65–75ch, display max 6rem, tracking floor -0.04em" | `animate.md` 지속시간표(100–150 즉시 / 150–300 통상 / 300–500 레이아웃 / 500–800 **의도된 초점 진입**), "Exit faster than entrance", `cubic-bezier(0.16,1,0.3,1)`, **"The focal moment must come from this product and surface concept. A generic fade-and-rise, hover lift, parallax layer, or scroll reveal is not a thesis."** · "Any nonessential loop must stop when offscreen or hidden" | **바운디드 검증**: "Build fully, inspect once with a **batched round (desktop and mobile together)**, fix everything it shows in one batch, confirm with **at most one more round**, and stop polishing." · layout.md **두 평가를 격리**: "Keep mechanical evidence out of the first assessment, then synthesize both passes before editing. **A clean scan cannot prove hierarchy or rhythm.**" · `critique.md` **5인 페르소나 워크스루**(Jordan/Alex/Sam/Riley/Casey) + 61개 결정론적 디텍터 CLI | `craft-floor.md` Refuse 목록: 동일 크기 아이콘+제목+본문 카드가 페이지 구조인 것, 중첩 카드("always wrong"), 히어로-메트릭 템플릿, **eyebrow 는 "a ban, not a default: no brief earns it back"**, 그라디언트 텍스트, 장식용 글래스/블러, 1px 초과 컬러 좌측 보더, `4px 4px 0` 하드 섀도, 시스템 디스플레이 서체("the closest installed font is a **failure**, not a fallback"), 이모지 아이콘, **기하 마스크로 유기적 윤곽 흉내내기** |
| **Open Design craft** | github.com/nexu-io/open-design `craft/` | 없음(이미지 스케일 규칙 부재). 대신 `anti-ai-slop.md` 외부 플레이스홀더 CDN(unsplash/picsum) 금지 | `animation-discipline.md`: "frequent animations (**a hover effect seen 50 times per session**) need to stay **≤200 ms**" · "**Animation as the only signal of state change. Reduced-motion users miss it; always pair with a static affordance** (color, position, label)" · 루프 모션: WCAG 2.2.2 로 5초 초과 시 일시정지 컨트롤 필수, 캐러셀 3-5회 후 정지 | `anti-ai-slop.md` P1: "**`var(--accent)` used 6+ times in the rendered body. Cap at 2 visible uses per screen.**" · "More than ~12 raw hex values outside `:root`" · P2 "**Perfect symmetric layout with no visual tension** — alternating density (one tight section, one breathing section) reads as intentional" · "**~80% proven patterns + ~20% distinctive choice**" | 1차 문헌 기반: 수렴 기본값 **150ms**, M3 standard `cubic-bezier(0.2,0,0,1)`(M2 의 `0.4,0,0.2,1` 을 M3 라 부르는 것이 오류), 비내비 마이크로인터랙션 **<500ms**, 모바일은 데스크탑 대비 **20–30% 짧게**, WCAG 2.2.2(A) vs 2.3.3(AAA) 구분, View Transitions 는 reduced-motion 자동 적용 **안 됨** | 데몬 `lint-artifact` 로 P0 규칙 자동 차단(색·이모지·서체 바인딩) | 7대 죄: Tailwind 기본 인디고 hex 열거, 히어로 2-stop "trust" 그라디언트, 이모지 피처 아이콘, 시드가 세리프를 바인딩했는데 산세리프 디스플레이, **둥근 카드 + 컬러 좌측 보더**, 지어낸 지표("10× faster"), lorem ipsum |
| **refero_skill** | github.com/referodesign/refero_skill | **`anti-ai-slop.md` Litmus — "Image test: If the first viewport works fine without the hero image → the image is too weak. Make it dominant or remove it."** · "#9 TELL: FAKE GRAPHICS OR TEXT-ONLY COLLAPSE… **Replacing an image-led hero with only text and buttons**" · 플레이스홀더는 "fixed aspect ratio, clear art direction, alt/caption, and **enough visual space to keep the composition honest**" | `motion.md` 상태표: Hover 배경 전환 **120ms**, Press `scale:0.98` 90–120ms, Focus 링 120ms. "**How often is this triggered?** High-frequency (hover, typing): faster." 호버 게이팅 자체에 대한 규칙은 없음 | Litmus 5종: **Card test**(보더·섀도·배경·라운드 빼도 이해에 지장 없으면 카드 아님), **Brand test**, **Copy test — "If deleting 30% of copy improves the page → keep deleting. AI over-writes; real designers edit down."**, **Identity test**, **Editorial test** · "Use whitespace as a design element", "Break the grid intentionally (**one element, not everything**)" | duration 토큰 `fast 120 / default 200 / slow 320`, "500ms+ in product UI almost always feels slow", reduced-motion 대체표 | **레퍼런스 락**(빌드 전 선언 블록): `Preserve / Borrow only / Role rules / **Media strategy: [real/generated/stock/code-native/placeholder, with aspect ratio and art direction]** / Reject / Token commitments` + "**If implementation drifts from the lock, stop and correct it.**" · `visual-workflow.md` 구현 증거로 스크린샷 요구 | "AI Slop Detector Checklist" 18항 + 레이아웃 증상 목록("Hero with left text + right image (every landing page ever)", "Centered everything with no visual tension") |
| **ui-ux-pro-max** | github.com/nextlevelbuilder/ui-ux-pro-max-skill | 없음(성능 규칙만: WebP/AVIF, srcset, `aspect-ratio` 로 CLS 방지) | **`hover-vs-tap` — "Use click/tap for primary interactions; don't rely on hover alone"** · SKILL.md 우선순위 2 안티패턴 = "**Reliance on hover only**, Instant state changes (0ms)" · `tooltip-keyboard` — "Tooltip content must be keyboard-reachable and **not rely on hover alone** (WCAG)" · 터치 타깃 44×44pt / 48×48dp, 간격 8px | `excessive-motion` — "**Animate 1-2 key elements per view max**" · `whitespace-balance` · `visual-hierarchy` — "Establish hierarchy via **size, spacing, contrast — not color alone**" · `content-priority` — 모바일에서 핵심 먼저 | 119개 규칙표: `exit-faster-than-enter`(진입의 60–70%), `stagger-sequence` 30–50ms/항목, `interruptible`("user tap/gesture cancels in-progress animation immediately"), `no-blocking-animation`, `opacity-threshold`(0.2 아래로 머무르지 말 것) | 10개 카테고리 우선순위(1 접근성 → 10 차트), `--density` 다이얼, 규칙 검색 스크립트 | 안티패턴 열: 이모지 아이콘, 12px 미만 본문, 컴포넌트 내 raw hex, 모든 전환에 한 duration, width/height 애니메이션 |
| **Vercel Web Interface Guidelines** | vercel-labs/agent-skills → vercel-labs/web-interface-guidelines `command.md` | "Above-fold critical images: `priority` or `fetchpriority='high'`", "Images without dimensions" 금지. 스케일 규칙 없음 | **"Drag/swipe/pinch/path gestures need tap/click and keyboard alternatives unless essential"** · "Buttons/links need `hover:` state" · "Interactive states increase contrast: hover/active/focus more prominent than rest" · `touch-action: manipulation` | 없음(요소 예산 규칙 없음 — 감사용 체크리스트 스킬) | "Honor `prefers-reduced-motion`", transform/opacity만, "Animations interruptible—respond to user input mid-animation", "**Autoplay motion >5 seconds** alongside other content needs pause, stop, or hide controls", "**Muted decorative loops must stop under `prefers-reduced-motion`**" | 스킬이 매 리뷰마다 원문 규칙을 **fetch 해서 최신본으로** 감사 → `file:line` 형식 출력 | 금지 목록: `user-scalable=no`, `outline-none` 무대체, 치수 없는 이미지, GIF |
| **v0 / Lovable** | x1xhlol 아카이브 | v0: "**Use images to create engaging, memorable interfaces**", "**NEVER generate abstract shapes like gradient circles, blurry squares, or decorative blobs as filler**", "You ALWAYS PREFER creating real images with the GenerateImage tool. **Do NOT leave placeholder images.**" · Lovable: "Images can be great assets… You **do not let placeholder images** in your design, you generate them" | 규칙 없음 | v0: "Ship something interesting rather than boring, but never ugly." Lovable: 시맨틱 토큰 강제, `text-white` 류 직접 클래스 금지 | 없음(스택 규칙 위주) | v0: "**Utilize the GenerateDesignInspiration tool before any design work.**" Lovable: 착수 전 "List possible colors, gradients, animations, fonts and styles you'll use" | v0: 이모지 아이콘 금지, 복잡 일러스트 SVG 직접 작성 금지, 지도 SVG 수기 금지 |
| **우리(omd-aphrodite)** | `skills/omd-aphrodite/SKILL.md` + `docs/design-excellence/` | 코덱스 §6 표에 섹션 유형별 스펙 있음(히어로 16:9 ≥89% 뷰포트, 다이어그램 ≥1200px). 그러나 **검사기는 개수만 잰다**: LI-25 `foldMedia < 3`, LI-26 `perVh < 1`, LI-24 화면 잉크 ≥12%. **요소 하나의 크기 하한이 없다** | fx-library **3층 분리**(유휴/호버/스크롤, 층당 섹션 1개) — 이 개념은 타 스킬 어디에도 없다. 그러나 호버 게이팅 금지는 **컴포넌트 README 에만** 존재(`stack-fan-hover/README.md`: "호버 뒤에 **정보를 숨기지 않는다**", `@media (hover:none)` 에서 58% 펼침 기본) — SKILL·코덱스·게이트 어디에도 승격되지 않아 **강제되지 않았다** | 스토리보드 게이트 A(색 6항)·B(구도 5항)·C(효과 8항). 첫 뷰포트 액센트 ≤3·면적 ≤3%, 피크 정확히 1개, 3연속 동일 밀도 금지. **화면당 텍스트/요소 개수 상한 없음** | LC-29~32(지배 duration 1개, 2번째는 1.3–1.6×, opacity+transform, reduced-motion), **LC-48 정착 타이밍**(pinLeadVh ≥0.6, settle 45–75%, `bottom bottom` 금지) + LI-33 자동 검사 | §2.5 **빌드 전 스토리보드 리뷰 게이트**(FAIL 이면 §3·§4 진입 불가) → 빌드 → 3종 검사기 → designer-review 서브에이전트 | LC 코덱스 §4 "생성형 디자인 반사" 실측표(균일 카드 그리드·아이콘 타일·중첩 카드·그라디언트·글로우·스톡 호스트), LI-20~23 자동 검사, 스톡·이모지·가상 수치 금지 |

---

## 3. 우리에게 없는 규칙 상위 10개

각 항목: **원문 인용 → 출처 → 우리 스킬 배치 위치 → r3 실패 방어 논리**.
r3 실패 태그: **[크기]** 이미지가 소극적 · **[호버]** 호버 게이팅 · **[간결]** 화려함 속 간결함/시원시원함.

### 1. 히어로 이미지 지배력 테스트 **[크기]**
> "**Image test:** If the first viewport works fine without the hero image → the image is too weak. **Make it dominant or remove it.**"
> — refero_skill `references/anti-ai-slop.md` (github.com/referodesign/refero_skill, branch `master`)

- **배치**: `docs/design-excellence/storyboard-review.md` **B 표에 B6 신설** + `skills/omd-aphrodite/SKILL.md` §2 밀도 예산 줄에 병기 + 검사기 신규 LI(가장 큰 미디어 요소의 뷰포트 점유 비율).
- **r3 방어**: r3 는 LI-25(폴드 미디어 ≥3장)·LI-26(vh당 ≥1장)을 **개수로** 통과했다. 개수 바닥은 "작은 이미지 여러 장"으로도 채워지므로 원통 갤러리·스택이 뷰포트의 일부만 차지해도 전 항목 ok 가 나왔다. 이 테스트는 **하나의 요소가 사라졌을 때 화면이 무너지는가**를 묻기 때문에 "소극적 사이즈"를 정확히 잡아낸다.

### 2. 히어로 요소 스택 예산 (텍스트 요소 최대 4개) **[간결]**
> "**HERO STACK DISCIPLINE (max 4 text elements).** The hero is a single moment, not a feature list." … "**BANNED in the hero:** tiny tagline below CTAs …, trust micro-strip …, pricing teaser …, feature bullet list, social-proof avatar row."
> "**EYEBROW RESTRAINT** … **Maximum 1 eyebrow per 3 sections.** … **Pre-Flight Check is mechanical:** count instances of `uppercase tracking` … if count > ceil(sectionCount / 3), the output fails."
> — tasteskill §4.7 (github.com/Leonxlnx/taste-skill)

- **배치**: 스토리보드 게이트 **B 표 B7 신설(요소 예산)** — 히어로 텍스트 요소 ≤4, eyebrow 총량 ≤ ceil(섹션수/3). 우리 A4(섹션 태그 액센트 금지)와 짝을 이룬다.
- **r3 방어**: "화려함 속에 숨어있는 간결함"은 효과를 빼는 문제가 아니라 **요소를 세는 문제**다. 우리 게이트는 색(A)·구도(B)·효과(C)를 세지만 **텍스트/UI 요소 개수는 한 번도 세지 않는다**. r3 는 층을 더하면서 요소도 같이 늘었고 그걸 막을 규칙이 없었다.

### 3. 호버 단독 의존 금지 **[호버]**
> `hover-vs-tap` — "**Use click/tap for primary interactions; don't rely on hover alone**"
> 우선순위 2 (Touch & Interaction, CRITICAL) 안티패턴 = "**Reliance on hover only**, Instant state changes (0ms)"
> — ui-ux-pro-max `references/quick-reference.md` §2 / `SKILL.md` 규칙표 (github.com/nextlevelbuilder/ui-ux-pro-max-skill)

- **배치**: `skills/omd-aphrodite/SKILL.md` **§4 마감 구현에 LC 신규 규칙으로** + 스토리보드 게이트 **C8 확장**("호버 팟 펼침 ≥1" → "호버는 **강화**이지 관문이 아니다: 유휴 상태에서 이미 볼 것이 있고, 호버 없이도 같은 정보에 도달").
- **r3 방어**: r3 verdict 원문 "**사용자가 매번 호버를 해야 펼쳐지고 돌아오고 하는**". 우리 C8 은 "호버 팟 펼침 ≥1" 을 **요구**했지 상한이나 대체 경로를 요구하지 않았다. 규칙이 실패의 원인이었다 — 이 조항이 있었다면 C8 의 요구가 게이팅으로 번역되지 않았다.

### 4. 제스처·포인터 상호작용에 탭·키보드 대체 경로 필수 **[호버]**
> "**Drag/swipe/pinch/path gestures need tap/click and keyboard alternatives unless essential**"
> — Vercel Web Interface Guidelines `command.md` §Touch & Interaction (vercel-labs/web-interface-guidelines)
> (근거 규범: WCAG 2.5.1 Pointer Gestures — 우리 fx-library `inertia-drag-gallery`·`poster-cylinder` 가 정확히 이 범주)

- **배치**: `docs/design-excellence/fx-library/INDEX.md` **예산 규칙 절에 추가**(층 표 바로 아래) + 스토리보드 C 표.
- **r3 방어**: r3 의 원통 갤러리는 **드래그+관성**이 주 조작이고 자동 회전이 보조였다. 데스크탑 호버 감속·드래그가 없는 환경(터치·키보드)에서 무엇이 남는지 스토리보드에 적힌 적이 없다. 이 규칙은 그걸 강제로 적게 만든다.

### 5. 호버로 나타난 콘텐츠는 지속되어야 한다 (Dismissible / Hoverable / Persistent) **[호버]**
> "Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: **Dismissible** … **Hoverable**: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing; **Persistent**: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid."
> — W3C WCAG 2.2 SC 1.4.13 Content on Hover or Focus

- **배치**: `SKILL.md` §4 (LC-44 커스텀 커서 조항 옆) + fx-library 호버 계열 README 공통 조항.
- **r3 방어**: "**펼쳐지고 돌아오고**"의 "돌아오고"가 바로 이 조항 위반이다. 호버를 떼면 즉시 닫히는 층은 사용자가 내용을 읽을 시간을 갖지 못한다. 우리는 `flip-expand-card`·`stack-fan-hover`·`hover-cross-open` 셋 다 "떼면 원복"이 기본이고, 그것을 문제로 규정한 규칙이 없었다.

### 6. 대담함은 한 곳에만 (초점 1개 원칙) **[간결]**
> "**Spend your boldness in one place. Let one element be the memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief.**" … "Consider Chanel's advice: before leaving the house, take a look in the mirror and **remove one accessory**."
> — Anthropic `frontend-design` SKILL.md §Restraint and self-critique (github.com/anthropics/skills)

- **배치**: 스토리보드 게이트 **B3 확장**. 현재 B3 은 "압도 지점 **페이지에** 정확히 1개". 이것을 **화면(뷰포트)당 초점 1개**로 한 단계 내린다.
- **r3 방어**: 우리 B3 은 페이지 스케일의 피크만 통제한다. 그래서 나머지 섹션 각각이 유휴 1 + 호버 1 + 스크롤 1 을 다 채우고도 게이트를 통과했다(C8 이 오히려 그걸 권장했다). "시원시원함"은 **한 화면에 봐야 할 것이 하나**일 때 나온다.

### 7. 스켈레톤 테스트 (카피를 빼고 구조만으로 읽히는가) **[크기][간결]**
> "**Strip the copy out of your planned section and study the bare structure.** Does the skeleton still say what this section is and why it matters, through hierarchy and the system's devices alone? **If it only works once the words return, the boldness is in the text size, not the design.**" … "A placeholder for an image or artifact **names a job, an anchor and a piece of evidence**, not a cue to drop in a decorative photo"
> — impeccable `reference/bolder.md` (github.com/pbakaus/impeccable)

- **배치**: **§2.5 스토리보드 리뷰 게이트의 판정 절차**로. 표 항목이 아니라 게이트 통과 조건("스토리보드의 각 섹션에서 카피를 지우고도 무엇을 보는 섹션인지 말할 수 있는가").
- **r3 방어**: 빌드 전에 실행 가능한 유일한 스케일 테스트다. 스토리보드는 텍스트로 쓰여 있어서 "이미지 12장, 자동 6deg/s" 같은 서술이 실제로는 작은 타일 12장이어도 통과한다. 카피를 지운 골격에서 "무엇이 크게 보이는가"를 묻는 순간 소극적 스케일이 드러난다.

### 8. 미디어 역할 보존 — 이미지 주도 구성을 텍스트·CSS 로 붕괴시키지 않는다 **[크기]**
> "**RULE: Preserve the media role.** Use a real asset, generated/stock asset, code-native primitive, product screenshot, or intentional placeholder. Do not fake complex imagery."
> Red flags: "**Replacing an image-led hero with only text and buttons.**" · "Using generic gradients or abstract shapes where the reference relies on specific media." · "**Collapsing product screenshots into decorative cards with no real content.**"
> 플레이스홀더 조건: "fixed aspect ratio, clear art direction, alt/caption, and **enough visual space to keep the composition honest**"
> — refero_skill `references/anti-ai-slop.md` "#9 TELL"

- **배치**: `SKILL.md` §3 (에셋) 첫 문단 + 스토리보드 B 표 B1 옆에 **미디어 전략 칸** 신설(비율 · 아트디렉션 · 실물/생성/플레이스홀더).
- **r3 방어**: "**이미지를 그냥 단순히 사용한 느낌**"은 r0 부터 반복된 지적이다. 우리 스토리보드는 이미지마다 **동사**(C4)를 적게 하지만 **비율·크기·역할**은 적게 하지 않는다. 동사만 있고 스케일이 없으니 "돌기는 하는데 작다"가 나온다.

### 9. 액센트 가시 사용량 상한을 화면 단위로 **[간결]**
> "**`var(--accent)` used 6+ times in the rendered body. Cap at 2 visible uses per screen.**" · "More than ~12 raw hex values outside `:root`."
> — Open Design `craft/anti-ai-slop.md` P1 (github.com/nexu-io/open-design)

- **배치**: 스토리보드 게이트 **A2 확장**. 현재 A2 는 "**첫 뷰포트** 액센트 ≤3 요소, 면적 ≤3%". 이걸 **모든 화면**으로 확장한다.
- **r3 방어**: r1 에서 A2 FAIL(7요소)로 도입된 규칙인데 **첫 뷰포트에만** 걸려 있다. 페이지 아래로 내려가면 다시 흩어질 수 있고, r3 의 "화려함 속 간결함 부족"의 일부가 여기서 온다.

### 10. 섹션 콘텐츠 형태의 기본값 (한 섹션 = 짧은 제목 + 짧은 문단 + 시각물 **또는** CTA 하나) **[간결]**
> "**Default content shape per section:** short headline (≤ 8 words) + short sub-paragraph (≤ 25 words) + **one visual asset OR one CTA. Anything more must be justified by the section's job.**"
> 그리고 refero 의 대응 규칙: "**Copy test:** If deleting 30% of copy improves the page → keep deleting. **AI over-writes; real designers edit down.**"
> — tasteskill §4.9 Content Density / refero_skill `anti-ai-slop.md` Litmus Tests

- **배치**: 스토리보드 게이트 **B4 옆에 B8 신설(섹션 콘텐츠 형태)**. 우리 B4 는 잉크 **비율**만 계획하게 하고 **무엇이 몇 개인지**는 묻지 않는다.
- **r3 방어**: LI-24(화면 잉크 ≥12%)는 **하한**만 있고 상한이 없다. "시원시원함"은 잉크 비율의 상한과 항목 수의 상한에서 나온다. 이 규칙은 우리 밀도 규칙이 "채우기"로 오독되는 것을 정면으로 막는다.

**차점(11~15, 기록만)**
11. impeccable `layout.md` **스퀸트 테스트** — "With detail blurred, can you still identify the primary element, the secondary element, and the major groups in order?" → 빌드 후 검증에 넣을 값싼 시각 테스트(스크린샷 블러 1회).
12. tasteskill §4.7 **섹션 레이아웃 패밀리 재사용 금지** — "A landing page with 8 sections must use at least 4 different layout families." (우리 B4 는 밀도만 본다)
13. Open Design `animation-discipline.md` — "**a hover effect seen 50 times per session** needs to stay ≤200 ms" + "**Animation as the only signal of state change** … always pair with a static affordance". (우리 LC-29~30 은 페이지 지배 duration 만 규정)
14. ui-ux-pro-max `excessive-motion` — "**Animate 1-2 key elements per view max**". (우리 C1 은 "주효과 1 + 보조 1"로 **효과 종류**를 세지 효과받는 **요소 수**를 세지 않는다)
15. Vercel WIG — "**Muted decorative loops must stop under `prefers-reduced-motion`**" + "Autoplay motion >5 seconds … needs pause, stop, or hide controls". (우리 유휴 층은 `IntersectionObserver` 로 화면 밖에서 끄지만 **사용자가 멈출 방법**이 없다 — WCAG 2.2.2 Level A 위반 가능)

---

## 4. 우리가 더 잘하는 것 (공정하게)

1. **실측 코퍼스 기반 수치.** LC-1~36 은 5개 사이트를 헤드리스로 재서 나온 값이다(폴드 미디어 89–130%vh, 섹션 0.8–2.0vh, 지배 duration 100/300/320/400ms, 텍스트 비율 중앙값 2.6–13.6%). tasteskill·ui-ux-pro-max 도 숫자를 쓰지만 출처는 대부분 플랫폼 규범(HIG/Material)이거나 저자 관례다. **"어떤 사이트를 재서 나온 값인가"를 밝히는 스킬은 우리뿐이다.** Open Design 만이 1차 문헌(Tversky 2002, Fitts 1954)을 같은 수준으로 인용한다.
2. **LC-48 정착 타이밍 + LI-33 자동 검사.** 스크럽/핀 연출이 **언제 끝나야 하는가**(pinLeadVh ≥0.6, settle 45–75%, 스티키 트랙에 `end:"bottom bottom"` 금지)를 규정하고 기계로 재는 스킬은 **조사한 9개 중 우리뿐**이다. tasteskill 은 GSAP sticky-stack 정본 스켈레톤(§5.A)을 주지만 `start`/`pin`/`scrub` 값만 고정하고 정착 시점은 다루지 않는다.
3. **유휴/호버/스크롤 3층 분리와 층당 상한.** "시간 축이 누구 것인가"로 효과를 나누고 섹션당 층별 1개 상한을 두는 개념은 어디에도 없다. impeccable 의 "focal moment"가 가장 가깝지만 층 개념은 아니다.
4. **검증된 인라인 fx 라이브러리.** 27종 데모가 헤드리스에서 콘솔 에러 0·가로 오버플로 0·다크/라이트 확인, **배타 관계표**(같이 쓰면 고장나는 조합)와 예산 규칙까지 있다. tasteskill 은 코드 스켈레톤 3종, impeccable·refero 는 산문 규칙뿐이다.
5. **폰트 조달 파이프라인(LC-47).** impeccable craft-floor 는 "Source and self-host a face … the closest installed font is a failure"라고 **요구**하지만 방법을 주지 않는다. 우리는 `font-inline.mjs --list/--family` 로 실행 가능한 절차 + 라이선스 기록까지 준다.
6. **빌드 전 게이트가 실제로 차단력을 갖는다.** §2.5 는 "FAIL 이 하나라도 있으면 §3·§4 로 가지 않는다"이고 r1 소급 적용 결과까지 문서에 남아 있다. Anthropic frontend-design 의 2패스는 같은 취지지만 자기 판정이고, tasteskill §14 프리플라이트는 **빌드 후**다.

**정직하게 덧붙일 것 — 우리가 갖고 있었는데 강제하지 않은 것:**
`fx-library/stack-fan-hover/README.md` 에는 이미 "**호버 뒤에 정보를 숨기지 않는다. 펼쳐야만 보이는 텍스트는 터치·키보드 사용자에게 없는 것과 같다**"와 `@media (hover:none)` 에서 58% 펼침 기본이 적혀 있고, `hover-cross-open/demo.html` 에도 "터치 기기에서는 프리뷰를 **제거**하고 평범한 그리드로 남는다 — 호버 뒤에 정보를 숨기지 않는다"가 있다. **지식은 있었으나 컴포넌트 README 층에만 있었고 SKILL.md·코덱스 LC·스토리보드 게이트·검사기 중 어디에도 승격되지 않아 r3 빌드를 구속하지 못했다.** r4 의 핵심 작업은 새 지식의 발굴이 아니라 **이 규칙의 층 승격**이다.

---

## 5. 프로세스 격차 — 그들이 "빌드 전"에 하는데 우리 게이트에 없는 것

| # | 그들이 하는 것 | 출처 원문 | 우리 상태 |
|---|---|---|---|
| P1 | **자기 표절 테스트** — 계획을 브리프에 대고 검토하되, "이 계획이 비슷한 프롬프트에도 똑같이 나올 것 같으면" 그 부분을 고치고 **무엇을 왜 바꿨는지 적는다** | frontend-design: "review that plan against the brief before building: **if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar)** rather than a choice made for this specific brief — revise that part, **say what you changed and why**." | **없음.** 우리 게이트 A·B·C 는 전부 "이 페이지 안에서 일관적인가"를 묻고, "이게 우리가 아무 브리프에나 낼 기본값 아닌가"를 묻지 않는다. 업종 무관 스킬을 지향하는 우리에게 특히 필요한 조항 |
| P2 | **페르소나 워크스루(빌드 전/후)** — 5인 고정 페르소나로 흐름을 걸어본다. 랜딩 페이지 기본 조합은 Jordan·Riley·**Casey(한 손 모바일)** | impeccable `critique.md`: 접근성 페르소나 Sam "**Cannot see hover states or visual-only indicators**" / 모바일 페르소나 Casey "Uses thumb only… Are touch targets at least 44×44pt?" | **없음.** r3 verdict 원문이 "**사용자의 UX적인 관점을 충분히 반영하지 못한거 같아**"였다. 우리 게이트에는 색·구도·효과·타이밍은 있어도 **사람이 이 페이지를 어떻게 쓰는가**를 묻는 칸이 하나도 없다. 이게 P1~P5 중 최우선 |
| P3 | **미디어 전략을 락으로 선언**(비율·아트디렉션·실물/생성/플레이스홀더 명시)하고 **구현이 락에서 벗어나면 멈춘다** | refero `SKILL.md`: "`Media strategy: [real/generated/stock/code-native/placeholder, **with aspect ratio and art direction**]`" … "**If implementation drifts from the lock, stop and correct it.**" | **부분.** 우리 §3 은 프롬프트 규격(조명·렌즈·회피 문구)을 요구하지만 **스토리보드 단계의 비율·크기 선언 칸이 없다**. §2 는 동사만 적게 한다 |
| P4 | **눈 검사와 기계 검사를 격리해서 돌리고 나중에 합친다** | impeccable `layout.md`: "run these independently… **Keep mechanical evidence out of the first assessment**, then synthesize both passes before editing. **A clean scan cannot prove hierarchy or rhythm.**" | **역순.** 우리는 검사기 3종 → designer-review 순이라 리뷰어가 이미 "LI 전항목 ok" 를 본 상태에서 본다. r3 는 LI-1~33 전부 ok 였고 리뷰어도 BLOCK 0 이었는데 사용자는 60점을 줬다 — 정확히 이 오염의 증상 |
| P5 | **다이얼을 숫자로 선언하고 시작한다** (밀도·모션·변주) | tasteskill §0.B/§1: "Output a one-line **'Design Read'** before generating" + `DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY` 1–10, "**Motion claimed, motion shown**" | **부분.** 우리는 §2 에서 **액센트 전략**(절제형/전면형)만 선언한다. **밀도 다이얼이 없어서** 밀도 규칙이 항상 "최대로 채운다"로 읽혔다 — r3 의 복잡화가 여기서 왔다 |
| P6 | **빌드 중 스크린샷 자기 비평 + 시도 기록** | frontend-design: "**Critique your own work as you build, taking screenshots to review** if your environment supports it — a picture is worth 1000 tokens… if you have a space to quickly jot down notes about what you've tried, it can help you in future passes." | **부분.** 우리는 빌드 **후** `render-integrity` 로 1440/390 을 잡는다. 빌드 **중** 스크린샷 비평 루프와 시도 기록(우리 `trace.md` 가 그 자리)이 절차로 명시돼 있지 않다 |
| P7 | **검증 라운드 수를 상한으로 못박고, 데스크탑·모바일을 한 라운드에 묶는다** | impeccable SKILL.md: "Build fully, inspect once with a **batched round (desktop and mobile together …)**, fix everything it shows in one batch, confirm with **at most one more round, and stop polishing.** Open-ended self-QA burns the user's money" | **유사(우리가 더 관대)**. 우리는 §5 에서 최대 3회. 배치화 요구는 없다 |

---

## 6. 다음 단계 제안 (Lane C 관점, 결정은 오케스트레이터)

1. **층 승격이 최우선.** 이미 fx-library README 에 있는 호버 게이팅 금지·터치 동등 조항을 **LC 신규 번호로 코덱스에 올리고**, 스토리보드 게이트 C8 을 "호버 팟 ≥1 요구"에서 "호버는 강화, 게이트 금지"로 다시 쓴다. 새 리서치보다 이게 먼저다.
2. **크기 검사기 1개 추가.** LI 신규: 각 뷰포트에서 **최대 미디어 요소의 화면 점유 비율**(면적 기준). 개수 바닥(LI-25/26)과 짝을 이루는 크기 바닥. 임계값은 Lane A/B 의 실측 결과에 맞춘다.
3. **게이트에 사람 칸을 만든다.** 게이트 **D 표(사용자)** 신설: 터치 기기에서 각 섹션에 무엇이 남는가 / 키보드로 도달 가능한가 / 스크롤·호버·드래그 없이 첫 화면에서 무엇을 아는가. r3 verdict 의 첫 문장에 대한 직접 응답.
4. **밀도 다이얼 도입.** 밀도 규칙이 "채우기"로 오독되지 않도록 `VISUAL_DENSITY` 류의 선언을 §2 에 넣고, 선언값에 따라 LI-24 잉크 하한과 **신설 상한**을 다르게 적용한다.
