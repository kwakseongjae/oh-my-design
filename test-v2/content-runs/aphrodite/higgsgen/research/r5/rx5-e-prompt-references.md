# rx5-E · 랜딩 프롬프트 생태계 레퍼런스 — 프롬프트 원문·구도 어휘·에셋 어휘

> 레인 E · r5 리서치 · 2026-09-05 · 수집 도구: WebSearch / WebFetch / GitHub raw / api.fxtwitter.com
> 원칙: **프롬프트는 원문(영어) 그대로 인용**하고 URL을 남긴다. 지어낸 프롬프트는 없다.

---

## 1. 한 줄 결론

랜딩 **프롬프트** 생태계는 "섹션 목록 + 금지 목록"을 아주 잘 다루고 **모션은 거의 다루지 못하지만**(최상급이 `scroll-triggered fade-in`), 사용자가 준 @nateherk 게시물이 그 예외를 정확히 짚었다 — 실체는 프롬프트가 아니라 **`/scroll-craft` 라는 경쟁 스킬**이고, 그 안에 **r4 스크롤 딱딱함의 처방(플레이헤드 lerp 0.18/frame + dwell 리매핑 + 클립을 핀 구간이 아니라 스테이지 가시 수명 전체에 매핑)이 문서화된 기본값으로 들어 있다.**

---

## 1.5 [최우선] 사용자 지정 X 게시물 — @nateherk 의 `/scroll-craft`

### 실제로 읽은 소스 (명시)

| 대상 | 결과 | 경로 |
|---|---|---|
| 원 게시물 본문 | ✅ **읽음** | `https://api.fxtwitter.com/nateherk/status/2096018636079026498` (JSON 미러) |
| x.com 직접 | ❌ HTTP 402 | WebFetch |
| nitter.net | ❌ "nitter.net is offline" | curl |
| nitter.poast.org | ❌ 무응답(000) | curl |
| xcancel.com | ❌ **2026-08-24 X Corp. C&D 로 서비스 중단** (안내문만 반환) | curl |
| threadreaderapp `/thread/2096018636079026498.html` | ❌ 스레드 본문 없이 JS 셸만 반환 | curl |
| 스레드 답글 10개 | ❌ **못 읽음** — fxtwitter 는 단일 트윗만 반환 | — |
| 게시물이 가리키는 실체(`/scroll-craft`) | ✅ **GitHub raw 로 원문 직독** | `github.com/nateherkai/scroll-craft` |

게시물 메타: 2026-09-04 23:32 UTC · 좋아요 82 · 답글 10 · 첨부 = **50.5초 1920×1080 영상 1개**(자막·설명 없음).
답글은 못 읽었으나, 같은 계정의 2026-08-22 스레드가 **본문 → 답글 = 저장소 링크** 구조였음을 확인했으므로(아래 계정 문단) 이 게시물의 실체도 같은 저장소로 본다. *추측이 아니라 동일 계정의 확인된 선례에 근거한 연결이며, 답글 원문 대조는 미완이다.*

### 게시물 원문 (verbatim)

- 출처: https://x.com/nateherk/status/2096018636079026498 (본문은 fxtwitter 미러로 읽음)

```
One shot website design outputs from GPT-6 Astra. 

All I told it to do was use my /scroll-craft skill and build me different websites. I told it to impress me.

Very impressed.
```

- 도구: **GPT-6 Astra + 자작 스킬 `/scroll-craft`**. 산출물: 원샷 웹사이트 여러 개(50초 영상).
- **핵심 관찰: 이 게시물에는 프롬프트가 없다.** 사용자 지시의 전부가 `use my /scroll-craft skill … I told it to impress me` 다. 자산은 프롬프트가 아니라 **스킬**이고, 그것은 우리 `omd-aphrodite` 와 **정확히 같은 형태의 경쟁 산출물**이다. 레인 E가 수집한 P-01~P-17 전부보다 이 한 건이 우리에게 더 가깝다.

### `/scroll-craft` 는 무엇인가 (원문 인용)

- 저장소: https://github.com/nateherkai/scroll-craft (MIT · Claude Code 플러그인 겸 Codex 스킬 · v0.3.0)
- 스킬 본체: `plugins/nateherk-design/skills/scroll-craft/SKILL.md` + `references/{uniqueness,feel,devices,taste,assets,worlds,worldflight,hero-depth,verify}.md` + `engine/scrollcraft.js`

문제 정의가 우리 r4 채점과 같다:

> `Most AI website output fails in one of two directions. It is either well behaved and forgettable, or it is a flashy scroll animation with 2.1:1 body text, a headline that wraps to six lines on a phone, and the same six sections every other AI page has. scroll-craft is built to fail neither way: it treats **interaction** and **craft** as one job rather than two.`

그리고 **자기 표절 문제를 우리보다 먼저, 더 아프게 진단했다**(`references/uniqueness.md` § The template trap):

> `All four open with a full-bleed scrub under a fixed minimal top bar carrying a wordmark and one CTA. … All four land between 13.6 and 13.8 viewport-heights across 6 or 7 acts with exactly one accent colour. What actually varied was the order of the middle acts and the palette.`
>
> `The world changes how a page LOOKS. The grammar changes what a page IS. A build that only changes world is a re-skin.`

> ⚠️ **13.6~13.8vh / 6~7 acts / 액센트 1개** — 이것은 우리 r4 의 **14.27vh** 와 사실상 같은 수치다. 같은 함정에 같은 방식으로 빠졌다는 독립 증거.

### ★ r4 "스크롤이 딱딱하다"의 처방이 여기 문서화되어 있다

`references/devices.md` § `scrub` — **우리 `docs/reviews/scroll-stiffness-diagnosis-2026-09-05.md` 의 진단(감쇠·상시 rAF·속도 항 부재)과 한 글자씩 맞아떨어진다.**

> `### The playhead is lerped`
> `Scroll never writes currentTime. It writes a target, and a standalone rAF loop walks the clip toward that target at a fixed fraction per frame. Wheel events do not arrive at a constant rate, so a 1:1 write reproduces every gap in them and the clip reads as a stutter rather than a glide.`
> - `**Lerp 0.18 per frame.** data-sc-lerp overrides it … Clamped to 0.02 to 1, and never read as 0 … Under reduced motion the rate is 1.0, which is no smoothing at all.`
> - `**Deadband** of 8ms desktop, 20ms mobile. A write smaller than that costs a seek and shows nothing.`
> - `**Seek coalescing.** No seek is queued while the decoder is still resolving the last one. A fast flick otherwise piles seeks up and freezes the clip.`

그리고 **홀드 구간이 얼어붙는 문제**(우리 LC-48/LC-56이 다루는 그 지점)를 별도 규칙으로 못박는다:

> `### Clip time is not cue time` — `A pinned stage is on screen for one viewport before its pinned travel begins … and one viewport after it ends … So a clip driven by p sits frozen on its first frame while it slides in, and frozen on its last frame while it slides out. … It reads as the site breaking, and it is the fastest way to make an expensive page feel cheap.`
> `The engine therefore maps the clip across the stage's entire visible life, not across its pinned travel, and this is the default.`
> `**Pair it with data-sc-dwell.** Dwell moves quickly at the edges and settles in the middle, which is exactly the shape this mapping wants: the fast motion lands on the two slides, and the settle lands inside the pin where the copy is.`
> `The harness checks this now, so a frozen clip fails verification instead of shipping. Do not rely on noticing it by eye: every individual frame of a frozen clip looks completely correct.`

핀 스팬 하한도 수치로 있다:

> `**Minimum useful span is about 1.2.** A pinned act's travel is max(height - viewport, 1), so at a span of 1 or below that is one pixel: progress jumps 0 to 1 between two scroll notches and every cue, reveal and --sc-p-driven animation inside the act snaps instead of running.`
> `data-sc-span … 2.2 to 3.0 for a hero. Below 1.8 the clip flies past; above 3.5 the reader starts wondering whether the page is broken.`

### 9종 스크롤 디바이스 (우리 "이미지마다 동사 1개"의 상위 호환)

`scrub`(휠이 스크러버) · `pin`(프레임 고정, 내용 전진) · `pan`(세로 스크롤 → 가로 이동) · `reveal`(와이프 = 상태 변화) · `kinetic`(조립되는 타입) · `parallax`(레이어별 속도) · `count`(착지하는 숫자) · `flow`+`in`(평범한 섹션, 잘) · **포인터 디바이스**(스크롤이 아닌 상호작용) · `drift`(스크롤과 함께 움직이는 바탕).

규칙: `Pick per beat, never per page … four or more families, never the same one twice in a row.` · `**At most two scrub acts per page.** The third one is no longer a surprise, and it is the heaviest thing on the page.`

### 큐 계약(cue contract) — 우리에게 통째로 없는 것

`data-sc-cue="from [to [rampIn [rampOut]]]"` (전부 act 진행도 0~1)

| 형식 | 동작 |
|---|---|
| `"0.2"` | 0.2에서 페이드인, **act 끝까지 유지** |
| `"0.1 0.6"` | in → 고원(plateau) → out. 램프 기본 = 창의 30%씩 |
| `"0 0.78 0"` | **greet**: act 시작 시 이미 완전 불투명, 이후 페이드 |
| `"0.1 0.9 0.15 0.4"` | 빠르게 들어오고 길게 나감 |
| `"0 1 0 0"` | **greet and hold**: p=0에서 완전, 양끝 램프 없음 |

> `The plateau is the point. Without one a cue is a triangle that touches full opacity for a single instant, so the reader has to stop on exactly the right pixel to see the line at full strength and every heading reads slightly faded.`
> - `**A hero cue needs the greet form.** "0 0.7" ramps up from nothing, which means the landing view, the one screen every visitor sees, has no headline on it.`
> - `**The last act's cue must hold.**` / `**Only the last act may hold.**` (중간 act의 1값 큐는 언핀 슬라이드 내내 켜져 있어 헤더를 가로지르고 다음 섹션과 겹친다)
> - 큐 창은 **의도적으로 겹친다** — `A gap between cues reads as a loading failure. Overlap by roughly 15% of the act.`

### 감정 곡선과 단일 피크 (`references/feel.md`)

> `Design the feeling before the acts. An act list written first will always be a list of things that happen, and a page of things happening is a page nobody can describe afterwards.`
> `**If two adjacent acts produce the same feeling, one of them is filler.** … relief needs tension in front of it, awe needs quiet in front of it, intimacy needs scale in front of it.`
> `**One engineered peak.** Peak-end rule, applied literally. The peak gets the asset budget, the silence in front of it, and the most scroll room. A page with three peaks has none.`

작성 형식은 **act당 한 줄, `감정 → 화면에서 그것을 일으키는 것`** 이고 감정 칸이 제약, 디바이스 이름은 두 번째 칸에만 나온다(`the feeling picks the device and never the other way round`).

### 자기 검증 (우리 `landing-integrity.mjs` 와 겹치지 않는 항목)

헤드리스 브라우저가 모든 스크롤 위치를 걸으며 **비디오 플레이헤드가 정착하기를 기다린 뒤** 보고:
- `**dead scroll**: scroll that changes nothing on screen` ← **우리에게 없는 검사. r4 의 "딱딱함"을 기계로 잡는 항목.**
- `**cues that never reach full opacity**: copy the reader can only ever see faded`
- `**contrast measured on the composited page**, per line, at the brightest frame that ever passes under it, with the direction picked per line`
- `**legs stuck on a poster**: a clip that silently never decoded, which looks exactly like a paused film`

### 한 가지 결정적 아키텍처 원칙

> `The engine is the mechanism and it is **never edited per project.** Theme it with six colour tokens and two fonts, write your own semantic HTML, and drive anything bespoke off the --sc-p custom property the engine publishes. A runtime that builds the page from a config object is exactly why every site built on one looks the same.`

우리 r3→r4 는 정반대로 갔다 — **런마다 핀 엔진을 새로 짜면서 GSAP `scrub:n` 의 감쇠를 함께 버렸다.** 이 문장이 그 실패의 일반화된 형태다.

### 계정 @nateherk 은 랜딩 프롬프트를 어떻게 다루는가 (관련 게시물 3건)

1. https://x.com/nateherk/status/2091265597237608664 (2026-08-22 · 좋아요 1,570) — `This is by far the best web design Claude skill I've ever used. Linked in the replies.`
2. https://x.com/nateherk/status/2091265648286429430 (같은 스레드 답글 · 좋아요 78) — `https://github.com/nateherkai/scroll-craft`
3. https://x.com/nateherk/article/2091265388067569835 — X Article "I Built The Ultimate Claude Website Design Skill (steal this)". **본문 미확보**(X Article 은 fxtwitter 가 텍스트를 반환하지 않는다). 제목만 확인.
4. (2026-09-04) 본 절 상단의 원 게시물.

**한 문단 정리**: 이 계정은 **랜딩 프롬프트를 공유하지 않는다.** 프롬프트를 길게 쓰는 대신 *스킬을 만들어 배포하고, 모델에게는 "내 스킬 써서 감동시켜봐" 한 줄만 던진다.* 게시물 형식은 항상 **① 결과 영상(무자막·50초 내외) + ② 짧은 감탄 한 줄 + ③ 답글에 저장소 링크** 이고, 프롬프트 원문·구도 지시·에셋 지시는 게시물이 아니라 저장소의 `references/*.md` 안에 문서로 존재한다. 즉 이 장르의 최상위 실무자는 **프롬프트 엔지니어링에서 스킬 엔지니어링으로 이미 넘어가 있다** — 우리가 하고 있는 것과 같은 방향이고, 차이는 그가 **엔진을 고정하고 검증기를 붙였다**는 점이다.

---

## 2. 레퍼런스 프롬프트 모음 (17개)

### P-01 · v0 (Vercel) 공식 문서 — 랜딩 기본형
- 출처: https://v0.app/docs/text-prompting
```
A landing page for a mobile app with a hero section, features grid, and pricing table
```
```
Create a portfolio website for a freelance designer with hero section, projects showcase, contact form, and responsive design
```
```
Design a minimal, dark-mode interface with mobile-first responsive layout
```
- 산출물: v0 기본 shadcn/Tailwind 랜딩. 공식 문서에는 **구도·위계·크기·모션 어휘가 사실상 0** — "섹션 이름 나열"이 전부다.
- 배울 점: 도구 공급자 자신이 권하는 것은 **섹션 인벤토리의 명시**뿐이다. 구도는 시스템 프롬프트(P-15)가 대신 강제한다.

### P-02 · v0 — 실무 케이스(구도가 들어간 한 줄)
- 출처: https://www.bitcot.com/how-we-used-v0-dev-to-build-a-client-website-with-just-a-few-prompts/ (본문 403, 검색 인덱스 스니펫으로 확보)
```
A component library landing page with a simple navbar and a hero section with text content on the left and an image on the right
```
- 배울 점: 실무에서 실제로 결과를 바꾸는 최소 단위는 **"좌: 텍스트 / 우: 이미지"** 라는 *배치 문장 한 개*다.

### P-03 · Lovable 공식 문서 — 원페이지 + 톤
- 출처: https://docs.lovable.dev/prompting/prompting-one
```
Build a one-page site for a budgeting app targeted at Gen Z freelancers. The main CTA should be 'Start Saving Smarter.' Focus on a bold, expressive aesthetic with large text and punchy colors.
```
- 배울 점: **CTA 문구를 프롬프트에 못박는다.** 우리 브리프 템플릿에 CTA 원문 슬롯이 없다.

### P-04 · Lovable — 히어로 (카피 + 레이아웃 + 여백)
- 출처: https://docs.lovable.dev/prompting/prompting-one
```
Hero section with headline: 'Design Calmly.' Subtext: 'Turn stress into structure with Lovable.' CTA: 'Start Building Free.' Use copy-centered layout with generous vertical spacing.
```
- 배울 점: 히어로를 **카피 3종 + 레이아웃 1종 + 여백 1종**의 5슬롯으로 지시한다. 우리 스토리보드는 카피를 나중에 붙인다(→ 순서 역전 후보).

### P-05 · Lovable — "premium and cinematic" 히어로 (우리 아프로디테와 가장 가까운 문장)
- 출처: https://docs.lovable.dev/prompting/prompting-one
```
Design a landing page hero that feels premium and cinematic. Use layered depth, translucent surfaces, soft motion blur, and dramatic contrast between headline and background.
```
- 배울 점: `layered depth` · `translucent surfaces` · `soft motion blur` · `dramatic contrast` — **마감 층을 형용사가 아니라 기법 이름으로** 부른다. 우리 LC-39(글래스)·LC-45(비네트)와 1:1 대응되는 사용자측 어휘.

### P-06 · Lovable — 정반대 톤 두 벌 (같은 축, 다른 값)
- 출처: https://docs.lovable.dev/prompting/prompting-one
```
Build the landing page bold and disruptive: oversized typography, high contrast colors, a strict grid, and massive calls to action.
```
```
Design the onboarding flow calm and organic: soft gradients, muted earth tones, gentle transitions, extra whitespace, and rounded corners in a single centered column.
```
- 배울 점: 같은 5축(타이포 크기 · 대비 · 그리드 · CTA 크기 · 여백)에 **반대 값을 넣어 톤을 만든다.** 우리 LC-59(밀도/모션 다이얼)의 확장형 — 축을 5개로 늘릴 후보.

### P-07 · Lovable — 피처 섹션(3카드) : 생태계의 기본 반사 신경
- 출처: https://docs.lovable.dev/prompting/prompting-one
```
Create a feature section with a centered headline, followed by three horizontally aligned cards. Each card includes an icon on top, a headline, and a short description. Cards should have soft shadows and lift on hover.
```
- 배울 점: **이것이 바로 Hallmark가 "critical slop"으로 지목한 3-column feature grid다**(P-16). 공식 문서가 슬롭을 가르치고 있다 — 우리는 반대로 금지해야 한다.

### P-08 · Lovable — 미디어 배치
- 출처: https://docs.lovable.dev/prompting/prompting-one
```
Embed a product demo video. Use this URL: https://cdn.midjourney.com/video/cb84f296-92a0-4a37-a0e3-1c9c95299488/0.mp4. Place it below the feature section in a full-width card with a soft shadow.
```
- 배울 점: 미디어 지시가 **"어느 섹션 다음 · 어떤 폭 · 어떤 컨테이너"** 3요소로 되어 있다. 우리 §2 크기 락(LC-51)에 "앞뒤 섹션 관계"가 빠져 있다.

### P-09 · Lovable — 스크롤 패턴 프롬프트 (모션 어휘의 실제 수준)
- 출처: https://lovable.dev/guides/scrolling-designs-patterns-when-to-use
```
Add a hero section with scroll-triggered fade-in animations
```
```
Create a product showcase with snap scrolling between features
```
```
Build a portfolio gallery with horizontal scroll navigation
```
- 배울 점: **생태계 최상급 모션 프롬프트가 이 정도다.** 8종 패턴(parallax / infinite / horizontal / scrollytelling / snap / fixed-background / scroll-triggered / multi-directional)에 각각 "언제 쓰고 언제 피하라"가 붙어 있는 것이 유일한 소득.

### P-10 · WebsitePrompts — 전환형 랜딩 한 문단형
- 출처: https://websiteprompts.com/v0-prompts/
```
Build a landing page for [product] targeting [audience]. Include hero, problem section, benefits, feature grid, product screenshot placeholder, pricing, testimonials, FAQ, and final CTA. Use crisp copy, strong visual hierarchy, and Tailwind CSS.
```
- 배울 점: `product screenshot placeholder` — **에셋 슬롯을 섹션 목록 안에 이름으로 박아둔다.**

### P-11 · WebsitePrompts — 리드 마그넷 랜딩 (11섹션 전문)
- 출처: https://websiteprompts.com/prompts/landing/lead-magnet-landing-page/
```
Create a lead magnet landing page:

1. HERO SECTION
- Compelling headline
  - "Free [Resource]: [Benefit]"
- Resource preview (ebook cover, checklist preview)
- Email capture form
- "Get Free Access" button

2. WHAT'S INSIDE  … 3. WHO IS THIS FOR … 4. BENEFITS … 5. AUTHOR CREDIBILITY
6. SOCIAL PROOF … 7. SAMPLE CONTENT … 8. WHAT HAPPENS NEXT … 9. FAQ
10. EMAIL FORM … 11. FINAL CTA

Design: Single goal - get the email. Remove all distractions. Make the resource look valuable.
```
(전문: 위 URL)
- 배울 점: 마지막 한 줄 **`Design: <단일 목표> — <제거 지시> — <느낌 지시>`** 가 이 장르 프롬프트의 표준 마무리다. 우리 브리프에 "이 페이지의 단일 목표" 슬롯이 없다.

### P-12 · Lovable 커뮤니티 — 스크롤 애니메이션 랜딩 전문(프롬프트 생성기 산출물)
- 출처: https://lovableprompts.app/prompts/0dee533b-0481-44a4-845a-7e7a35fef301
```
## DESIGN SPECIFICATIONS
- **Visual Style**: minimalist - Clean, simple design with plenty of white space, minimal color palette, and focus on typography
- **Color Mode**: Light theme with dark text on light backgrounds
- **Primary Color**: #1978E5 (accent for buttons, links, highlights)
- **Typography**: Use Inter from Google Fonts for headings, Inter for body text and UI elements
- **Border Radius**: 8px (moderately rounded) for buttons, cards, and inputs
- **Layout**: The layout will consist of a full-width hero section, followed by sections that feature scroll animations to present the event details, all structured vertically with ample spacing for clarity.
```
- 산출물: 전형적 AI 슬롭 사양서 — **Inter 단일 폰트 + 파란 액센트 + 8px 라운드**. 프롬프트 생성기가 슬롭을 자동 주입한다.
- 배울 점: **"프롬프트 자동 생성기"는 우리의 적이다.** 우리 §1(서체 조달)·LC-47이 왜 필요한지의 실물 증거.

### P-13 · X / @AmirMushich — 유리 로고 조각 (원문 전문, fxtwitter API로 확보)
- 출처: https://x.com/AmirMushich/status/2043027633114333543 (본문은 `api.fxtwitter.com` 미러로 읽음. x.com 직접 fetch는 402)
```
[BRAND NAME].
Act as a High-End Product Photographer and CGI Artist.

PHASE 1: SUBJECT & LOGIC
Generate a massive, perfectly centered, three-dimensional physical sculpture of the official, unaltered corporate logo for [BRAND NAME]. The sculpture must strictly adhere to the brand's precise logo geometry and proportions (1:1 from brandbook). The sculpture is suspended in mid-air.

PHASE 2: MATERIALITY (GLASS)
The entire logo is made of hyper-realistic, optical-grade crystal glass (not water, not gel). The material is solid, colorless, and boasts high clarity with a high refractive index. It must look heavy and monolithic. The glass structure contains subtle, photorealistic microscopic flaws: fine polished scratches on the surface and minor internal inclusions (dust particles/seed bubbles, very few) to avoid "CGI plastic." The edges must be precision-beveled and fire-polished.

PHASE 3: ENVIRONMENT & CAUSTICS
The logo is suspended against a strictly clean, bright blue sky with sparse, naturally defined white cumulus clouds. NO land, NO trees, NO palms. The background is purely atmospheric. Critically render hyper-realistic, complex glass caustics: intense, sharp patterns of focused light and color (refractions of the blue sky) cast inside and onto the surface of the glass form due to the sunlight passing through it.

TECH SPECS
Rendered with Arnold or Octane. Phase One XF, 120mm Macro lens. Aperture f/5.6 for sharp depth across the entire glass sculpture. Intense, direct sunlight (hard lighting) to maximize caustics. Global illumination, ray-traced refractions (double-sided geometry), and chromatic aberration emulation (subtle) for optical realism. Fine grain film emulation (Fujifilm Velvia 50).
```
- 배울 점: **"PHASE 순서"로 프롬프트를 구조화**하고, 마지막에 `TECH SPECS`(렌더러 · 바디 · 렌즈 · 조리개 · 광원 성격 · 필름 에뮬레이션)를 블록으로 붙인다. 우리 §3 프롬프트 순서(배경→피사체→디테일→제약→용도)의 상위 호환.

### P-14 · X / @AmirMushich — 히어로 웹디자인 이미지 (구도 수치가 들어간 유일한 프롬프트)
- 출처(원 게시물): https://x.com/AmirMushich/status/2054622754134020191 — **본문은 스레드 답글에 있어 미확보.** 아래는 해당 프롬프트를 전재한 2차 출처 인용: https://blog.mulerun.com/p/how-to-design-a-website-hero-section-with-ai-2026/
```
[BRAND NAME] | [HEADLINE = user text or AUTO] | [SUBHEADLINE = user text or AUTO] | [BUTTON TEXT = user text or AUTO] | [COLOR = your color or AUTO]
Act as a Senior Web Art Director and CGI Artist creating a photorealistic hero section of a premium brand website — a single wide-format image showing the full above-the-fold view of a hero webpage.

PHASE 1 · BACKGROUND: Full-bleed radial gradient emanating from center-right. Inner zone: saturated vivid color, 40-50% of background area. Outer zone: very dark tinted black at all edges.
PHASE 2 · 3D LOGO SCULPTURE: Occupies right 55-65% of image. Partially cropped by right and bottom frame edges. Rotated 20-35 degrees vertical, 10-20 degrees horizontal. Camera 5-10 degrees below center.
PHASE 3 · NAVIGATION BAR: Top 4-5% of image. Dark semi-transparent background. Left: brand wordmark in white.
PHASE 4 · TEXT BLOCK: Left 35-40%, vertically centered.
PHASE 6 · LIGHTING: Single primary warm dramatic light behind and upper-right of 3D object.
PHASE 7 · COMPOSITION: 16:9 landscape. Left 35-40%: text zone. Right 60-65%: sculpture zone.
PHASE 8 · TECH SPECS: Octane/Redshift render quality.
```
- 산출물: Nike/JUST DO IT 테스트에서 우측 대형 브러시드 메탈 스우시 + 좌측 `JUST / DO / IT` 헤비 컨덴스드 조판.
- 배울 점: **구도를 전부 백분율로 못박는다** — 배경 비율, 오브젝트 점유율, 크롭 여부, 회전각, 카메라 고도, 텍스트 존 폭. 우리 LC-51(점유율)·LC-3(좌측 앵커)이 있지만 **회전각·크롭·카메라 고도 어휘가 없다.**

### P-15 · v0 시스템 프롬프트(유출본) — 도구가 내부적으로 강제하는 디자인 규칙
- 출처: https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/v0%20Prompts%20and%20Tools/Prompt.txt
```
ALWAYS use exactly 3-5 colors total. … 1 primary brand color … 2-3 neutrals … 1-2 accents
NEVER exceed 5 total colors without explicit user permission
NEVER use purple or violet prominently, unless explicitly asked for
Avoid gradients entirely unless explicitly asked for. Use solid colors. … Maximum 2-3 color stops
ALWAYS limit to maximum 2 font families total. … line-height between 1.4-1.6 for body text
NEVER use decorative fonts for body text or fonts smaller than 14px
ALWAYS design mobile-first … Flexbox for most layouts … CSS Grid only for complex 2D layouts
NEVER generate abstract shapes like gradient circles
Use consistent icon sizing: typically 16px, 20px, or 24px … NEVER use emojis as icons
You ALWAYS PREFER creating real images with the GenerateImage tool. Do NOT leave placeholder images.
```
- 배울 점: **색 ≤5 / 폰트 ≤2 / 보라 금지 / 그래디언트 금지**가 도구 레벨에서 하드코딩돼 있다. 우리 LC-28·LC-26·LC-21과 겹치나 **"색 총량 상한"과 "그래디언트 기본 금지"는 우리에게 없다.**

### P-16 · Lovable 시스템 프롬프트(유출본) — 반대 방향의 증거
- 출처: https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/Lovable/Agent%20Prompt.txt
```
- ALWAYS generate beautiful and responsive designs.
- CRITICAL: The design system is everything. You should never write custom styles in components …
- Beautiful designs are your top priority, so make sure to edit the index.css and tailwind.config.ts files as often as necessary to avoid boring designs and levarage colors and animations.
- Images can be great assets to use in your design. You can use the imagegen tool to generate images. Great for hero images, banners, etc. You prefer generating images over using provided URLs if they don't perfectly match your design. You do not let placeholder images in your design, you generate them.
- This is the first interaction of the user with this project so make sure to wow them with a really, really beautiful and well coded app!
```
- 배울 점: **"wow"를 형용사로만 요구하면 슬롭이 나온다**(P-12가 그 산출물). 우리 스킬이 수치 합격선을 두는 이유의 반증 사례. 단, `--gradient-primary` / `--shadow-glow` / `--shadow-elegant` 를 **토큰으로 미리 정의**하고 컴포넌트에서 재사용하는 규율은 우리 "스니펫 토큰 치환"과 동일한 처방.

### P-17 · Anti-Slop 마스터 프롬프트 (금지 목록형의 정본)
- 출처: https://www.sailop.com/blog/anti-slop-prompt-template-2026
```
Hard constraints:
- Visual archetype: pick ONE among [Bauhaus grid, brutalist editorial, Swiss minimal, terminal/HUD, atelier/craft, art deco, riso print]. Commit to it for the whole output.
- Palette: do NOT use the default Tailwind blue/purple/indigo gradient family. Pick a palette anchored on ONE of: clay/ochre/terracotta, ink/bone/mustard, charcoal/lime, oxblood/cream, navy/copper, monochrome with one accent.
- Typography: do NOT use Inter as your only font. Pair two faces … Use one mono in the UI.
- Layout: forbid 3-equal-card grids, hero-with-floating-screenshot, gradient mesh hero, rounded-2xl on every container, generic shadow-md, blob SVG decorations, centered-everything. Use asymmetric 60/40 or 70/30 splits. Distribute visual weight unevenly.
- Detail layer: include at least 3 of [corner brackets, scan lines, ASCII rules, hairline tickers, rotated labels, monospace metadata, low-opacity grid, hand-drawn arrows].
- Microcopy: include at least one specific number, one date, one named tool.

Process:
1. Before writing code, describe the chosen archetype in 3 lines.
2. Describe palette and type in 3 lines, with hex codes.
3. Build the component.
4. After writing, audit yourself: list 3 ways the output could still look AI-generated.
5. Fix those 3 issues in a second pass before returning final output.
```
- 배울 점: **자기 감사 2패스**(4~5단계)가 프롬프트 안에 들어 있다. 우리 §2.5 스토리보드 게이트와 §5 검증 사이에 "빌드 직후 자기 슬롭 감사 3건" 단계가 비어 있다.

### 부록 · 이미지 프롬프트 3종 (에셋 어휘 원본)
- 출처: https://blog.designhero.tv/ai-art-direction-prompts-flux-midjourney/
```
A cinematic street scene at night in the rain, anamorphic lens flares, horizontal blue light streaks, heavy oval bokeh, wet asphalt reflecting neon signage, T-stop 2.0, shot on Panavision C-Series anamorphic lenses, 35mm anamorphic 2.39:1 aspect ratio, cinematic teal and orange color grade, heavy atmospheric haze, film grain
```
```
A portrait of an elderly artisan in a dim workshop, Rembrandt lighting setup, soft dust particles dancing in a single beam of light from a high window, deep shadows on one side of face, triangle of light on opposite cheek, textures of worn wood and rusted metal tools, chiaroscuro, 10-bit color grade, moody atmosphere, shot on Arri Alexa Mini with 85mm lens, f/1.8, natural window light
```
```
Film noir style scene … harsh single-source street lamp creating deep shadows and bright highlights, 10:1 lighting ratio, venetian blind shadow patterns, cigarette smoke catching light, shot on vintage Cooke Panchro lenses, Kodak Double-X black and white film stock, high contrast silver halide grain structure
```
- 출처: https://miraflow.ai/blog/ai-prompts-creator-website-hero-images-templates
```
… the left half of the frame has a clean darker or slightly blurred studio environment providing a consistent zone for headline text and CTA button overlay … 16:9 landscape format at 1920x1080
```
```
… the left frame is the darkest and cleanest zone of the composition providing maximum contrast suitable for white headline text and course enrollment CTA … 16:9 landscape format at 1920x1080
```
- 출처: https://iamkhanphd.com/10-ai-prompts-for-modern-website-hero-images/ (10종 템플릿 공통 구조)
  · `Negative space: ~40% on left/right for headline, text, CTA` · `Aspect ratio: 16:9, wide website hero banner` · `Avoid: readable text, watermarks, distorted screens, crowded backgrounds`

---

## 3. 구도 지시 어휘 사전 — 우리 LC 대응표

### 3.1 레이아웃 (페이지 형태 · 분할)

| 생태계 어휘 | 출처 | 우리 대응 | 상태 |
|---|---|---|---|
| `full-bleed hero` / `full-width hero section` | P-12, P-14 | LC-1(폴드는 스테이지) · LC-19(bleed/inset) · LC-51(풀블리드 ≥1) | ✅ 있음 |
| **`asymmetric 60/40 or 70/30 splits`** · `50/50 vertical divide` | P-17, 0xminds | — | ❌ **없음** (LC-3은 "좌측 앵커"까지만) |
| **`Left 35-40%: text zone. Right 60-65%: sculpture zone`** | P-14 | LC-51은 %만, 존 분할 없음 | ❌ **없음** |
| `text content on the left and an image on the right` | P-02 | LC-3 | △ 정성적으로만 |
| **명명된 페이지 형태**(Bento Grid / Long Document / Marquee Hero / Stat-Led / Workbench / Manifesto / Photographic / Quote-Led / Specimen / Split Studio / Feature Stack / Narrative Workflow / Catalogue / Letter / Index-First / Type Specimen / Portfolio Grid / Map-Diagram / Ecosystem Index / Component Playground) | Hallmark `macrostructures.md` | — | ❌ **없음 — 최대 결손** |
| **nav 아키타입 N1a–N13 / footer 아키타입 Ft1–Ft8** | Hallmark `component-cookbook.md` | — | ❌ **없음** (우리 코덱스에 nav/footer 규칙 자체가 부재) |
| **8종 페이지 문법**(filmic one-shot · chaptered editorial · live surface · continuous world · typographic poster · gallery · split stage · rhythmic cutlist) — 각각 **무엇을 금지하는지**로 정의 | scroll-craft `uniqueness.md` | — | ❌ **없음.** Hallmark 의 21 매크로구조보다 강함: "Each grammar names what it **forbids**. The forbids are the point." |
| **핑거프린트 게이트** — 새 빌드는 기존 모든 빌드와 grammar·nav·hero·act shape·close·signature move **6축 중 4축 이상** 달라야 통과 | scroll-craft `uniqueness.md` | §2.5 E(자기 표절 시험) | ❌ **정량 기준 없음** |
| **시그니처 무브 1개 필수** — `Every build invents one bespoke interaction that exists on that site alone. A recoloured spotlight does not count.` | scroll-craft | — | ❌ **없음** |
| **엔진은 프로젝트마다 고치지 않는다** — 6색 토큰 + 2서체로 테마만, 커스텀은 `--sc-p` 로 구동 | scroll-craft README | — | ❌ **없음 — r3→r4 실패의 일반형** |
| `strict grid` ↔ `single centered column` | P-06 | LC-6(두 레인) | △ |
| 섹션 DOM 순서 한 줄 선언 `Sections · Hero · Logos · Stats · … · Footer` | Hallmark Step 5 프리뷰 | 스토리보드에 산문으로만 | △ **한 줄 규격 없음** |

### 3.2 위계 (초점 · 강조)

| 생태계 어휘 | 출처 | 우리 대응 | 상태 |
|---|---|---|---|
| `strong visual hierarchy` | P-10 | LC-52(1등:2등 ≥2:1) | ✅ 우리가 더 구체적 |
| `Distribute visual weight unevenly` | P-17 | LC-52 | ✅ |
| **`Spend your boldness in one place`** | Anthropic frontend-design | LC-33(피크는 규모) | ✅ 동치 — 표현 채택 가치 |
| **구조 장치는 정보다**: `numbered markers (01/02/03) … only appropriate if the content actually is a sequence` | Anthropic | — | ❌ **없음** |
| **`Accenting just a single word in a headline`** 금지 · **`all caps for labels`** 금지 · **불필요한 라벨 금지** | Anthropic | — | ❌ **없음** |
| `no italic headers` (헤딩은 항상 roman) | Hallmark 규율 6 | — | ❌ **없음** |
| **스퀸트 테스트** — `Blur the page until detail is gone. You should still be able to name the primary element, the secondary element, and the major groups, in that order.` | scroll-craft `taste.md` | LC-52(면적비 ≥2:1) | ✅ 동치의 **눈 검사 절차** — §5 리뷰어 격리에 넣을 값어치 |
| **폴드 텍스트 요소 ≤4** + `Headline max two lines, subtext max 20 words, CTA visible without scrolling` + `A hero that overflows the viewport` 금지 | scroll-craft `taste.md` | LC-54(의미 단위 ≤5) | ✅ 우리와 근접 — 수치 근거 보강 |

### 3.3 크기

| 생태계 어휘 | 출처 | 우리 대응 | 상태 |
|---|---|---|---|
| `oversized typography` / `large text` / `massive calls to action` | P-03, P-06 | LC-21(3.0–4.6×) · LC-22 | ✅ 우리가 수치적 |
| `Occupies right 55-65% of image` / `Top 4-5%` / `Inner zone 40-50%` | P-14 | LC-51 | △ **섹션 내 세부 존 %가 없음** |
| **`Let the hero be the height of its content`** / `min-height:100vh 중앙정렬 히어로` 금지 | Hallmark anti-patterns | LC-10(핀 없으면 추가 높이 금지) | △ **"100vh 중앙정렬 금지"라는 명문이 없음** |
| `Cards should have soft shadows and lift on hover` | P-07 | LC-49(호버 상한) | ✅ 우리가 더 엄격 |

### 3.4 여백

| 생태계 어휘 | 출처 | 우리 대응 | 상태 |
|---|---|---|---|
| `generous vertical spacing` / `extra whitespace` / `ample spacing` | P-04, P-06, P-12 | LC-4 · LC-55(여백은 덩어리로) | ✅ 우리가 더 구체적 |
| `--space-3xl minimum between major sections` / `Don't subdivide sections into rows` | Hallmark SaaS 시퀀스 | LC-55(섹션 간격 값 ≤3종) | ✅ |
| **`Every section padded the same`** = minor 슬롭 | Hallmark anti-patterns | — | ❌ **없음**(우리는 오히려 "≤3종"으로 균일을 권장 — 재검토 필요) |
| **네거티브 스페이스의 *위치* 지정**(이미지 프롬프트 쪽) | 부록 | — | ❌ **없음 → §4 참조** |

### 3.5 리듬

| 생태계 어휘 | 출처 | 우리 대응 | 상태 |
|---|---|---|---|
| SaaS 섹션 시퀀스(Hero → Logo wall → Features → Testimonials → Pricing → FAQ → Final CTA → Footer) | Hallmark | LC-33~35(피크·기아·메트로놈) | ✅ 우리가 리듬을, 그들이 인벤토리를 규정 |
| **다양화 규칙**: 연속 산출물은 macrostructure·nav·footer·theme를 반드시 달리한다 + `.hallmark/log.json` 프로젝트 메모리 | Hallmark Step 2 / 2.5 | §2.5 E(자기 표절 시험) | △ **이전 런을 읽는 메커니즘이 없다** |
| `Commit to it for the whole output` (아키타입 1개 선언 후 완주) | P-17 | §2 액센트 전략 선언 | △ 색만, 형태는 아님 |

---

## 4. 에셋 지시 어휘 사전 — `skills/omd-aphrodite/SKILL.md` §3 대비 **빠진 항목**

우리 §3이 이미 갖고 있는 것: 프롬프트 순서(배경→피사체→디테일→제약→용도) · `8k/masterpiece` 금지 · 조명 세팅 이름 · 렌즈 mm · 스타일 접미사 일관성 · 회피 문구의 긍정 전환 · 비율은 슬롯에서 · 영상 루프 규칙.

| # | 빠진 항목 | 생태계 원문/근거 | 왜 필요한가 | 근거 URL |
|---|---|---|---|---|
| A1 | **네거티브 스페이스의 위치·비율을 프롬프트에 명시** | `~40% negative space on left/right for headline, text, CTA` · `the left half of the frame is the darkest and cleanest zone … suitable for white headline text` · `subject positioned for text overlay on right third` | r4에서 이미지가 "배경/카드"로만 쓰인 원인. 텍스트가 앉을 자리를 **이미지 생성 단계에서** 만들어야 LC-36(피크 속 읽기 레인)이 성립한다 | iamkhanphd / miraflow / prompt-architects |
| A2 | **조리개(f-stop) 명시** | `f/2.8` `f/5.6` `f/8` `f/11` `T-stop 2.0` | set.json groupSuffix엔 이미 있는데 **SKILL.md 규격에는 없다** → 규격으로 승격 | designhero.tv |
| A3 | **카메라 바디·센서 명시** | `Phase One XF IQ4 150MP` · `Arri Alexa Mini` · `RED Komodo 6K` · `Leica M11` · `Sony A7R IV with 61MP sensor` | "AI 그림"과 "촬영물"을 가르는 두 번째 토큰(첫째는 렌즈) | designhero.tv, P-13 |
| A4 | **필름 스톡 이름** | `Kodak Portra 400` `Fujifilm Velvia 50` `Kodak Double-X` `Kodak Vision3` · `silver halide grain structure` | 우리는 "fine 35mm film grain"까지. 스톡 이름이 색·대비·입자를 한 번에 잠근다 | designhero.tv, P-13 |
| A5 | **렌더러 이름 (CG 계열)** | `Rendered with Arnold or Octane` · `Octane/Redshift render quality` | 힉스젠 같은 제품 오브젝트/추상 재질 컷에서 사실성 앵커 | P-13, P-14 |
| A6 | **광학 현상 토큰** | `caustics` · `sub-surface scattering` · `chromatic aberration emulation (subtle)` · `anamorphic lens flares` · `10:1 lighting ratio` · `global illumination` `ray-traced refractions` | 우리 조명 지시는 "방향 1개 + 정직한 감쇠"까지. 현상 이름이 빛을 **행동**시킨다 | designhero.tv, P-13 |
| A7 | **표면 결함을 열거로 지정** | `fine polished scratches … minor internal inclusions (dust particles/seed bubbles, very few) to avoid "CGI plastic."` · `natural skin imperfections` | 우리 styleSuffix의 `dust, fingerprints, wear` 를 **재질별 결함 목록**으로 확장 | P-13 |
| A8 | **일관성: 참조 이미지 / style reference** | Midjourney `--sref <url>` + `--sw` (style weight, 기본 100) — "generate one perfect image, then use it as a style reference for all subsequent generations" | 우리는 "시드 없음 → styleSuffix로만"이라고 못박았는데, **참조 이미지 경로**를 대안으로 명문화하지 않았다(Recraft `style_id`만 언급) | weirdwonderfulai.art, crepal.ai |
| A9 | **같은 세션 연속 생성으로 세트 잠그기** | "generate the hero section first … then generate individual section mockups as follow-up prompts **in the same session**, with the AI carrying the color system, typography, and brand language forward" | **시드/참조가 없는 우리 채널에서 당장 쓸 수 있는 무료 기법.** 61장 배치를 병렬로 던진 것이 세트 일관성 손실의 원인일 수 있다 | blog.mulerun.com |
| A10 | **에셋 등급 사다리(0→A→B→C→D→E)** | `Tier 0 Typography only → A pure CSS art → B hand-built SVG → C generated still → D library illustration → E Lottie (last resort)` · "Reaching for Lottie when CSS would have built it is the new tell" · "Better nothing than bad something" | 우리 §3은 "채널 없으면 추상 SVG"만. **타이포그래피 온리가 최상위 정답일 수 있다**는 규정이 없다 | Hallmark `hero-enrichment.md` |
| A11 | **이미지 필요 여부 게이트(image-need detection)** | 브리프 신호별 표: dev-tool/API/docs → `No imagery` · SaaS/manifesto → kit-led · e-commerce/food/team/travel → real photos required | 우리는 밀도 예산(미디어 ≥ vh×1.0)이 **항상 이미지를 요구**한다. 업종에 따라 이 바닥이 오히려 슬롭을 만든다 | Hallmark `hero-enrichment.md` |
| A12 | **플레이스홀더 규율** | `alt` 는 *의도한* 피사체를 서술 · `<!-- TODO: Replace with real <thing>, target size: WxH -->` · 모든 placeholder URL은 단일 상수 참조 | 우리 LI-32(alt 구체성)는 있으나 "미완 자리임을 드러내라"는 반대 방향 규율이 없다 | Hallmark `assets.md` |
| A13 | **아이콘 규율** | 프로젝트당 **라이브러리 1종** · 크기는 `16 / 20 / 24 / 32` 만 · `stroke 2px` · `currentColor` 상속 · 브랜드색 아이콘은 단일 primary CTA에만 | 우리는 "이모지 금지"만 | Hallmark `assets.md`, P-15 |
| A14 | **재드로잉 크롬 금지** | 가짜 브라우저바(URL pill + 신호등 점) · 가짜 폰 베젤/노치 · 가짜 코드창 타이틀바 · 가짜 IDE 크롬 전부 금지. 실제 스크린샷을 `<figure>`+헤어라인으로 | AI 생성 제품 랜딩에서 가장 흔한 유혹. 우리 코덱스에 없다 | Hallmark 규율 4 |
| A15 | **가짜 수치 금지 → "숫자 모양의 구멍"** | `+47% conversion` / `trusted by 50,000+ teams` 는 슬롭. 대안: `—` + 라벨된 회색 블록("metric to confirm"), 사용자에게 묻기, 또는 **그 매크로구조를 버리기** | 우리 하드룰의 "가상 통계 금지"에 **대체 표현 3안**이 없다 | Hallmark 규율 2 |
| A17 | **스크러빙용 인코딩 규격** | 클립은 *재생*이 아니라 *스크럽*되도록 인코딩해야 한다(전체 ffmpeg 빌드 필요, 스트립된 빌드는 `scale` 필터 부재로 오작동). 포스터는 **살아있는 프레임 홀더** — 실제 비디오 프레임이 그려질 때까지 유지(iOS 는 seek-but-never-played muted 비디오를 빈 화면으로 둔다) | https://github.com/nateherkai/scroll-craft/blob/main/plugins/nateherk-design/skills/scroll-craft/references/devices.md |
| A18 | **`src` 대신 Blob 페치** | `data-sc-src` 로 클립을 Blob 으로 받아 HTTP range 지원 없이 seek. reduced-motion 에서는 페치 자체를 건너뜀 | 위 URL |
| A19 | **스타일 프리앰블 방식 + 브랜드킷 우선** | 세트 일관성을 접미사가 아니라 *월드(art direction) 프리앰블*로 잡고, `Brand guidelines are inputs, not decoration … its hard rules win, including rules that forbid things the skill would otherwise reach for` | https://github.com/nateherkai/scroll-craft/blob/main/plugins/nateherk-design/skills/scroll-craft/references/worlds.md |
| A16 | **레이어드 히어로 합성법** | 투명 PNG 추상 오브젝트를 헤드라인 **뒤에**, "bigger than you think it should be", off-centre, `mix-blend-mode` 사용 — "abstract gradient on top of headline — that's the AI default" | 에셋을 *배치*하는 문법. 우리 LC-19(bleed/inset) 2종뿐 → 3번째 배치(behind/layered)가 없다 | Hallmark `imagery-kit.md` |

---

## 5. 모션 지시 — 이 생태계는 우리에게 도움이 되는가

**판정: 프롬프트 갤러리는 도움이 안 된다. 안티슬롭 스킬 계열(Hallmark / Anthropic)은 부분적으로 도움이 된다.**

### 5.1 프롬프트 갤러리의 모션 어휘 실측
- 최상급이 `Add a hero section with scroll-triggered fade-in animations` (P-09) 수준. `Add gentle floating animation and smooth hover interactions` (Lovable 문서), `lift on hover` (P-07), `soft motion blur` (P-05)가 전부다.
- **스크럽·핀·정착·홀드·동사(줌스루/와이프/컷 연결) 어휘는 단 하나도 등장하지 않는다.** 즉 r4가 지적당한 "딱딱한 스크롤"은 이 생태계가 **문제로 인식조차 하지 않는다** — 그들의 기준선이 fade-in이기 때문이다.
- 유일한 소득은 Lovable의 **스크롤 패턴 8종 + 각각의 "쓰지 말아야 할 때"** 목록(P-09 출처). 우리 §2 동사 목록에 "언제 쓰지 말아야 하는가"가 없다.

### 5.2 안티슬롭 계열이 주는 실제 보강
| 원문 | 우리 대응 | 조치 |
|---|---|---|
| `Motion has intent or motion is cut.` / "if I removed this animation, would anyone notice?" | LC-53 T1~T4 | ✅ 동치 |
| **default-on 아키타입**: `Bento Grid · Stat-Led · Workbench · Marquee Hero · Conversational FAQ` 는 **모션이 없으면 스크린샷처럼 읽히므로 2~3개를 자동 탑재**. 반대로 `Editorial · Manifesto · Letter · Quote-Led · Type Specimen · Long Document` 는 default-off | — | ❌ **없음 → 채택 후보.** 우리는 "밀도 다이얼"만 있고 "형태에 따라 모션이 필수/금지"라는 축이 없다 |
| `No more than three distinct animation primitives per page` | LC-52(동시 채널 ≤2) | ✅ 우리가 더 엄격(동시), 그들은 총량 |
| **타이밍 캐논**: 80–120 / 150–200 / 250–300 / 400–500 / **0ms** ("The right answer surprisingly often") | LC-29·30 | △ **0ms 버킷이 없다** |
| **`Exit durations are 60-75% of the corresponding entrance. Never the reverse.`** | LC-57(호버 in/out) | △ 호버에만 있고 **일반 규칙이 없다** |
| `Stagger reveal … One-shot only — never re-fires on scroll.` | — | ❌ **없음** |
| `Universal scroll-triggered fade-up … The page never settles.` → "One orchestrated entrance on first load. After that, content is just there." | LC-12(리빌 다이얼) | △ 우리는 개수만, **"한 번의 안무된 등장"이라는 형태 규정이 없다** |
| Anthropic: `A single orchestrated moment — one page-load sequence or one reveal — lands better than scattered effects; fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated.` | LC-52 · LC-53 | ✅ 근거 보강 |
| 절대 금지: **커서 팔로워**("Always slop") · 섹션별 fade-up-stagger · 배경 그래디언트 시프트 · 본문 텍스트 스크롤 리빌 · 일시정지 없는 자동 캐러셀 · `transition-all` · 범용 `hover:scale-105` · 바운스/일래스틱 이징 | LC-44는 커스텀 커서를 **허용**한다 | ⚠️ **충돌.** LC-44(미디어 표면 커서)는 재검토 필요 |

### 5.4 ★ scroll-craft 가 주는 것 — 이 생태계에서 유일하게 우리 문제를 푸는 문서

| 항목 | 원문 수치/규칙 | 우리 상태 |
|---|---|---|
| **플레이헤드 감쇠** | `Lerp 0.18 per frame`, 클램프 0.02~1, **0 금지**, reduced-motion 에서 1.0(무감쇠). 별도 rAF 루프가 타깃을 향해 걷는다 — 스크롤은 절대 `currentTime` 을 직접 쓰지 않는다 | ❌ r4 는 스크롤 이벤트에서 직접 값 계산(감쇠·rAF·속도 항 전무) |
| **데드밴드** | 데스크탑 8ms · 모바일 20ms 미만 쓰기는 버림 | ❌ 없음(대신 0.0015 양자화가 있었다 — 반대 방향의 땜질) |
| **seek 합치기** | 디코더가 이전 seek 해결 중이면 새 seek 대기열에 넣지 않음 | ❌ 없음 |
| **클립 시간 ≠ 큐 시간** | 클립은 핀 이동 구간이 아니라 **스테이지의 가시 수명 전체**에 매핑(기본값). 큐만 `p` 사용 | ❌ **없음 — r4 홀드 구간 정지의 직접 원인 후보** |
| **dwell 리매핑** | `data-sc-dwell` 0~0.6: 양끝은 빠르게, 중앙에서 정착 → 정착이 카피 피크와 겹친다 | △ LC-48(정착은 섹션 안에서)과 목적 동일, **구현 파라미터 없음** |
| **핀 스팬 하한** | `Minimum useful span is about 1.2` (1 이하면 travel 이 1px → 진행도가 두 노치 사이에서 0→1 로 점프해 모든 큐가 스냅). 히어로는 2.2~3.0, 1.8 미만은 날아가고 3.5 초과는 고장처럼 보인다 | ❌ 수치 없음 |
| **디바이스 다양성 법칙** | 비트 단위로 고르고, **4개 이상 패밀리**, 같은 것 연속 금지. `scrub` 은 페이지당 최대 2개 | △ 우리 "이미지마다 동사 1개"는 있으나 **패밀리 하한·연속 금지·상한이 없다** |
| **큐 고원(plateau)** | 큐는 삼각형이면 안 된다 — 고원이 없으면 완전 불투명이 한 순간뿐이라 모든 헤딩이 살짝 흐리게 읽힌다. 히어로 큐는 **greet 형식**(`"0 0.78 0"`) 필수 | ❌ **없음. r4 "정착 상태를 볼 시간"(LC-48/56)의 미시 구현** |
| **큐 겹침** | 15% 겹침. `A gap between cues reads as a loading failure` | ❌ 없음 |
| **UI 모션 바닥** | `transform`/`opacity` 만(와이프는 `clip-path`), `transition: all` 금지, **UI 는 `ease-in` 절대 금지**, 커스텀 이징 `cubic-bezier(0.23, 1, 0.32, 1)`, UI 전환 <300ms(호버 120–180 · 버튼 100–160), 스태거 30–80ms, `scale(0)` 금지(0.95 에서 진입), 프레스 피드백 `scale(0.97)`/`translateY(1px)` | ✅ LC-41·57 과 대부분 겹침 · △ `ease-in` 금지·`scale(0)` 금지·스태거 30–80ms 는 없음 |
| **reduced-motion 철학** | `Reduced motion means **fewer and gentler, not zero.** Keep the opacity that carries comprehension, drop every position change.` | △ 우리는 "정지"로 처리 — 재검토 |
| **스크롤 디바이스는 duration 예외** | `Scroll devices are exempt: they are paced by the hand, not by a duration.` | ❌ 명문 없음(LC-29 지배 duration과 충돌 소지) |

**r4 지적에 대한 최종 판정 (수정):** §5.3 에서 "이 생태계는 답을 주지 못한다"고 썼으나, **사용자가 준 게시물이 정확히 그 예외였다.** `/scroll-craft` 는 우리의 두 지적(① 딱딱한 스크롤 ② 무입력 모션)에 대해 ①은 **lerp·데드밴드·seek 합치기·클립 매핑·dwell** 이라는 완결된 처방을, ②는 **`drift`(바탕이 함께 움직임)·포인터 디바이스·greet 큐** 로 "입력 없이도 보이는 것"을 보장하는 계약을 갖고 있다.

### 5.3 결론
r4의 "자율 모션 부재"에 대해 **이 생태계는 어휘를 주지 못하며, 오히려 자율 모션을 줄이라고 말한다.** 우리 문제는 모션 *개수*가 아니라 **이미지에 동사가 없다**(§2 "정지 60% 초과")는 것이고, 그 해법은 프롬프트 갤러리가 아니라 스크롤 안무 레시피 쪽(레인 A~D 소관)에 있다. 다만 **default-on/off 아키타입**과 **0ms 버킷 · exit=enter×0.6~0.75 · one-shot stagger** 세 가지는 그대로 가져올 값어치가 있다.

---

## 6. 안티패턴 목록 — 전형적 AI 슬롭과 회피 표현

### 6.1 색 · 서체
| 슬롭 | 회피 표현(원문) |
|---|---|
| **blue→purple / indigo 그래디언트** ("the single loudest AI tell in 2026", Tailwind indigo-500 기본값에서 유래) | `NEVER use purple or violet prominently` (v0) · `do NOT use the default Tailwind blue/purple/indigo gradient family` (P-17) · "Pick a single anchor hue. One accent. No gradient backgrounds on heroes." (Hallmark) |
| **Inter를 디스플레이+본문 모두에** ("Inter unchosen signals nobody made a typography decision") | `do NOT use Inter as your only font. Pair two faces …` (P-17) · "avoid Arial, Inter, Roboto" (Anthropic 쿡북) — **우리 LC-47과 동일** |
| **그래디언트 헤드라인**(`background-clip:text`) | "Solid ink. If you want the headline to feel alive, use weight or italic or a display face — not a gradient fill." |
| **순수 #000 / #fff** | "Tint toward your anchor hue." — 우리 LC-28과 동치 |

### 6.2 레이아웃
| 슬롭 | 회피 표현 |
|---|---|
| **3등분 피처 그리드**(아이콘 위, 2줄 헤딩, 3줄 본문) | "Break the grid. Vary column widths. Mix card heights. Remove one card and use negative space. Move the icons inline, not above. Or drop the cards entirely and use typographic rhythm." |
| **풀뷰포트 중앙정렬 히어로**(`min-height:100vh` + 중앙 + 한 문장 + 큰 CTA) | "Let the hero be the height of its content. Bias left or right. Put more than a sentence in it." |
| **카드 인 카드** | "Pick one containment layer. Usually the outer one is the wrong one." |
| **좌측 4–6px 컬러 스트라이프 카드** | "Use a hairline border all around, or no border, or a small accent square beside the heading." |
| **AI nav**(워드마크 + 인라인 링크 몇 개 + 우측 버튼) / **AI footer**(링크 4열 + 소셜 + 작은 카피라이트) | "Default away from N1a and Ft3 … reach for N1b / N5 / N11 / N13 by default" |
| **모든 섹션의 동일 패딩** | Hallmark minor 슬롭 목록 |
| **섹션마다 ALL-CAPS eyebrow 라벨** · `A · B · C` 중점 조인 메타 · `WORD — fragment` · 링크 끝 `→` | Anthropic: "template chrome that appears whatever the subject" |

### 6.3 에셋
| 슬롭 | 회피 표현 |
|---|---|
| **오로라 블롭 배경**(보라-핑크-시안 메시) | "Solid surface. Or a subtle two-stop CSS gradient + SVG `<feTurbulence>` grain at < 0.1 opacity." — **우리 LC-38·LC-46과 정확히 일치** |
| **떠다니는 오브(3D 구/블러 원)** | "Cut them. The hero doesn't need depth; it needs a strong typographic anchor." |
| **AI 일러스트 룩**(관절 없는 메시 블롭 캐릭터, 대칭 기본 조명의 미드저니 구도, 코퍼릿 두들) | "Hand-build in pure CSS or SVG. If you must generate, use … with reference images, **asymmetric crop, and grain post-processing — never raw output.**" |
| **이모지를 아이콘으로**(✨🚀⚡🔥🎯✅) | "Pick a single icon library and ship it. Or build a custom SVG mark. Or omit the icon entirely." |
| **아이콘 세트 혼용** | "Icons are typography. You wouldn't ship a page with three different body fonts." |
| **재드로잉 UI 크롬**(가짜 브라우저바·폰 베젤·코드창) | "Use a real screenshot wrapped in `<figure>` … The page's job is to show content, not to imitate the OS." |
| **지어낸 수치** | `—` + "metric to confirm" 회색 블록 / 사용자에게 묻기 / 매크로구조 교체 |
| **Lottie 남용** | "Reaching for Lottie when CSS would have built it is the new tell." |

### 6.4 카피
- 금지어(P-17): `empower` `leverage` `seamless` `robust` `harness` `delve` `tapestry` `revolutionize` `in today's fast-paced`
- 무게 없는 헤드라인("Build faster. Ship smarter.") ↔ 처방: "headlines say something only your product could say" (925studios)
- Anthropic: "A CTA says exactly what happens when it is used: 'Save changes,' not 'Submit.'" · "An action keeps the same name through the whole flow"

### 6.5b scroll-craft 의 refuse list — 우리 목록에 없는 항목만
> 전제: `Category defaults, not bans on principle. The brief's own words can earn any of them; reaching for one when the axis is free means you were not deciding.`

- **구조**: `The hero-metric template: big number, small label, supporting stats, accent` · `More than two consecutive image-left / text-right zigzag sections` · `The same layout family twice on one page` · `A split header: giant headline left, small explainer paragraph floating right`
- **라벨**: eyebrow 는 **3섹션당 최대 1개** · `Scroll cues: "scroll", "↓ scroll", "scroll to explore", animated mouse icons. They are looking at the hero. They know.` · `Decoration text strips (BRAND. MOTION. SPATIAL.) across the hero bottom` · `Locale, time and weather strips` · `Pills and tags overlaid on photos`
- **표면**: `Glass and blur as decoration rather than as a specific effect` · `Coloured border-left above 1px` · `Monospace as a costume for "technical"` · **`Custom cursors`(금지)** — ⚠️ 우리 LC-44 와 정면 충돌(Hallmark 도 커서 팔로워를 "always slop" 이라 함 → **LC-44 재검토 확정 사유 2건**)
- **콘텐츠**: `Em dash anywhere visible` · `Div-built fake screenshots, fake dashboards, fake terminals` · **`Text baked into a generated image. Real markup, always.`** (우리 set.json 이 "no text/letters/numerals" 로 이미 지키는 것 — 근거 보강) · 필러 동사 `elevate, seamless, unleash, next-gen, revolutionize, supercharge`

### 6.5 ⚠️ 우리에게 직접 겨눠진 경고 — Anthropic의 "AI 생성 디자인 5대 군집"
> 출처: https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design (SKILL.md 원문)
> 1. `a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta or warm-clay accent (often near #D97757 — Anthropic's own Claude-interaction accent, so on a user's brief it reads as a tell)`
> 2. `a near-black background with a single bright acid-green or vermilion accent`
> 3. `a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns`
> 4. `the SaaS-card kit: content chopped into identical rounded cards, one border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each, and gradient washes as decoration`
> 5. `template chrome that appears whatever the subject: a tracked-out ALL-CAPS eyebrow label above every heading; meta strings joined with middle dots ('A · B · C'); labels built as 'WORD — fragment' with a spaced em dash; tinted near-black (#0B0B0B, #111) standing in for black; a monospace face for small data labels; a '→' appended to link and button text`
>
> 결정타: `Where it leaves an axis free, don't spend that freedom on one of these defaults.`

**힉스젠 r4는 군집 #2(near-black + 단일 밝은 액센트)에 정면으로 해당한다.** 우리 BRIEF의 "다크 우선 + 이미지가 빛난다"가 곧 Claude의 자유축 기본값이라는 뜻 — 90점을 못 넘는 구조적 이유의 유력 후보다.

---

## 7. 우리 스킬에 반영할 것

### 7.1 `SKILL.md` §3 "에셋 — 최고급 프롬프트 규격"에 추가

1. **네거티브 스페이스 절(신설, 최우선).** 모든 텍스트 동반 이미지 프롬프트는 *텍스트가 앉을 존*을 명시한다: 위치(좌/우/상/하 절반 또는 1/3) · 목표 비율(≈35–45%) · 그 존의 밝기 성격(`the darkest and cleanest zone … providing maximum contrast for white headline text`). 근거: https://miraflow.ai/blog/ai-prompts-creator-website-hero-images-templates , https://iamkhanphd.com/10-ai-prompts-for-modern-website-hero-images/
2. **TECH SPECS 블록 의무화.** 프롬프트 말미에 `렌더러(해당 시) · 카메라 바디 · 렌즈 mm · 조리개 f/ · 광원 성격 · 필름 스톡 · 광학 현상` 을 한 블록으로. 근거: https://x.com/AmirMushich/status/2043027633114333543 , https://blog.designhero.tv/ai-art-direction-prompts-flux-midjourney/
3. **결함 열거 규칙.** 재질별로 어떤 결함이 있어야 하는지 명시(`fine polished scratches`, `seed bubbles`, `chipped edges`) + `to avoid "CGI plastic"` 같은 **목적 문장을 붙인다**(회피 문구를 이유와 함께). 근거: 위 X 원문
4. **세트 일관성 3단 사다리로 교체.** (1) 참조 이미지/`style_id`(Recraft) → (2) **같은 세션에서 히어로부터 순차 생성**(색·조판·브랜드 언어를 세션이 이어받음) → (3) 토씨 불변 styleSuffix. 현행 §3은 (3)만 규정. 근거: https://blog.mulerun.com/p/how-to-design-a-website-hero-section-with-ai-2026/ , https://weirdwonderfulai.art/resources/a-guide-to-sref-style-reference-in-midjourney/
5. **에셋 등급 사다리 + 이미지 필요 여부 게이트.** `Tier 0 타이포그래피 온리 → A 순수 CSS → B 수제 SVG → C 생성 스틸 → D 라이브러리 → E Lottie(최후)`, 그리고 브리프 신호별 이미지 필요 판정표. "Better nothing than bad something." 근거: https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/references/hero-enrichment.md
6. **아이콘 규율 신설**: 라이브러리 1종 · 16/20/24/32 · stroke 2px · `currentColor` · 브랜드색은 단일 CTA만. 근거: 위 repo `assets.md`, https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/v0%20Prompts%20and%20Tools/Prompt.txt
7. **생성 이미지 후처리 의무**: `asymmetric crop + grain post-processing — never raw output`. 근거: Hallmark `anti-patterns.md` § AI-illustration look

### 7.2 브리프 템플릿에 추가할 슬롯

| 슬롯 | 형식 | 근거 |
|---|---|---|
| `단일 목표` | 한 문장 + "제거할 것" 목록 (`Design: Single goal - X. Remove all distractions.`) | P-11 |
| `CTA 원문` | 1차/2차 버튼 문구를 원문 그대로 | P-03, P-04 |
| `매크로구조` | 21종 중 1개 이름 + "직전 런과 다른 이유" 한 줄 | Hallmark Step 2 |
| `nav 아키타입 / footer 아키타입` | 각 1개 + 직전 런과 다른 이유 | Hallmark |
| `분할 비율` | 섹션별 `60/40` `70/30` `50/50` `35/65` 중 하나 | P-17, P-14 |
| `섹션 DOM 순서 한 줄` | `Hero · Logos · … · Footer` | Hallmark Step 5 |
| `모션 default-on/off` | 매크로구조에서 자동 유도 + 프리미티브 2~3개 이름 | Hallmark `microinteractions.md` |
| `이미지 필요 판정` | 업종 신호 → `real photos / kit-led / no imagery` | Hallmark `hero-enrichment.md` |
| `금지 목록` | 이번 런에서 절대 안 쓸 것 5줄(Anthropic 5군집 중 우리가 기본값으로 흐를 것 포함) | Anthropic frontend-design |

### 7.3 새 LC 규칙 후보

| 후보 | 내용 | 근거 URL |
|---|---|---|
| **LC-60 매크로구조를 지명한다** | 스토리보드 첫 줄에 명명된 페이지 형태 1개 + 직전 런과 다른 축을 선언. 무명 상태로 빌드 금지 | https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/references/macrostructures.md |
| **LC-61 분할은 비대칭이고 수치다** | 모든 2열 구성은 `60/40 · 70/30 · 35/65` 중 하나를 선언. `50/50`은 의도적 대칭일 때만. 중앙정렬 풀뷰포트 히어로 금지 | https://www.sailop.com/blog/anti-slop-prompt-template-2026 |
| **LC-62 nav·footer는 페이지 지문이다** | nav/footer 아키타입을 각 1개 지명. "워드마크+인라인 링크+우측 버튼" 및 "링크 4열+소셜+카피라이트"는 기본값 금지 | Hallmark `component-cookbook.md` |
| **LC-63 구조 장치는 정보다** | 번호(01/02/03)·구분선·eyebrow·라벨은 **콘텐츠가 실제로 그 구조일 때만**. 헤드라인 한 단어 강조·ALL-CAPS 라벨·이탤릭 헤딩 금지 | https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design |
| **LC-64 등장은 한 번, 안무된 한 순간** | 페이지 로드 시 orchestrated entrance 1회. 섹션별 fade-up-stagger 금지, stagger는 one-shot(재발화 금지). 종료 duration = 진입의 60–75% | Anthropic 위 URL + Hallmark `microinteractions.md` |
| **LC-65 형태가 모션의 필요를 정한다** | Bento/Stat-Led/Workbench/Marquee/FAQ = 모션 default-on(프리미티브 2~3), Editorial/Manifesto/Letter/Quote-Led/Type-Specimen/Long-Document = default-off | Hallmark `microinteractions.md` |
| **LC-66 재드로잉 크롬 금지** | 가짜 브라우저바·폰 베젤·코드창 타이틀바·IDE 크롬 금지. 실제 스크린샷 `<figure>`+헤어라인 | Hallmark 규율 4 |
| **LC-67 자유축에 기본값을 쓰지 않는다** | 브리프가 지정하지 않은 축은 Anthropic 5군집(크림+세리프+테라코타 / 니어블랙+산성 액센트 / 브로드시트 / SaaS 카드킷 / 템플릿 크롬)으로 채우지 않는다 | Anthropic 위 URL |
| **LC-68 빌드 직후 자기 슬롭 감사 3건** | 코드를 쓴 직후 "여전히 AI처럼 보일 수 있는 3가지"를 스스로 적고 2패스로 고친 뒤 제출 | https://www.sailop.com/blog/anti-slop-prompt-template-2026 |
| **LC-69 플레이헤드/진행도는 감쇠된다** | 스크롤 이벤트가 값을 직접 쓰지 않는다. 상시 rAF 루프가 타깃을 향해 프레임당 고정 비율(**0.18** 기준)로 걷는다. 데드밴드 데스크탑 8ms·모바일 20ms, seek 합치기 필수. reduced-motion 에서는 비율 1.0 | scroll-craft `devices.md` |
| **LC-70 클립 시간 ≠ 큐 시간** | 스크럽 미디어는 핀 이동 구간이 아니라 **스테이지 가시 수명 전체**에 매핑한다. 큐만 act 진행도를 쓴다. `dwell` 로 양끝은 빠르게·중앙 정착 | 같은 URL |
| **LC-71 큐에는 고원이 있다** | 리빌 큐는 삼각형 금지 — in/plateau/out. 히어로 큐는 **greet**(시작 시 이미 완전 불투명). 마지막 act 만 hold, 중간 act 는 반드시 1에서 닫는다. 큐끼리 ~15% 겹친다 | 같은 URL |
| **LC-72 핀 스팬 하한 1.2·히어로 2.2~3.0** | 스팬 ≤1 이면 travel 이 1px 라 모든 애니가 스냅한다. 그 비트는 핀이 아니라 flow 다 | 같은 URL |
| **LC-73 문법을 고르고 시그니처 1개를 발명한다** | 8종 페이지 문법 중 1개(각 문법이 *금지하는 것*으로 정의) + 그 사이트에만 있는 상호작용 1개 + 기존 빌드 대비 6축 중 4축 이상 상이 | scroll-craft `uniqueness.md` |
| **LC-74 감정 곡선을 act 보다 먼저 쓴다** | act 당 한 줄 `감정 → 원인`. 인접 두 act 의 감정이 같으면 하나는 필러다. 피크는 **하나**이고 에셋 예산·앞의 침묵·최대 스크롤 공간을 독점한다 | scroll-craft `feel.md` |
| **LC-75 엔진은 런마다 고치지 않는다** | 메커니즘(스크롤 엔진)은 고정, 프로젝트는 색 토큰 6개 + 서체 2종 + 자체 시맨틱 HTML 로만 다르게 한다. 커스텀은 엔진이 발행하는 진행도 변수로 구동 | scroll-craft README |

### 7.4 검사기(LI) 후보
- `LI-41` 3등분 균등 피처 그리드 검출(동일 폭 3열 + 각 열 아이콘+헤딩+본문) → FAIL
- `LI-42` `min-height:100vh` + 중앙정렬 히어로 → FAIL
- `LI-43` `background-clip:text` 그래디언트 헤드라인 / 히어로 배경 그래디언트 → FAIL
- `LI-44` 아이콘 라이브러리 혼용 · 이모지 아이콘 검출 → FAIL
- `LI-45` 가짜 크롬 검출(신호등 3원 + URL pill 패턴) → WARN
- `LI-46` 섹션 패딩 값 종류 = 1 (완전 균일) → WARN (현행 LC-55의 "≤3종"과 함께 하한도 둔다)
- **`LI-47` 죽은 스크롤(dead scroll)** — 스크롤이 화면을 전혀 바꾸지 않는 구간 검출 → FAIL. *r4 "딱딱함"을 기계로 잡는 유일한 항목* (scroll-craft `verify.md`)
- **`LI-48` 완전 불투명에 도달하지 못하는 큐** — 독자가 영원히 흐릿하게만 볼 수 있는 카피 → FAIL
- **`LI-49` 포스터에 멈춘 클립** — 디코드에 조용히 실패해 정지 사진처럼 보이는 비디오 → FAIL
- **`LI-50` 합성 후 대비** — 그 줄 밑을 지나가는 **가장 밝은 프레임**에서, 줄 단위로, 방향(명/암)을 줄마다 골라 측정 (현행 `text-contrast.mjs` 는 정지 상태 1회 측정)

---

## 8. 한계 — 못 읽은 것과 이유

0. **사용자 지정 게시물(@nateherk)은 본문을 실제로 읽었다** — `api.fxtwitter.com` JSON 미러. 다만 **답글 10개는 못 읽었고**(fxtwitter 단일 트윗 한정), X Article `article/2091265388067569835` 본문도 못 읽었다(제목만). 첨부 50.5초 영상은 재생·분석하지 않았다. §1.5 의 "답글 = 저장소 링크" 연결은 **동일 계정 8/22 스레드의 확인된 선례에 근거한 추론**이며 원문 대조는 미완이다.
1. **X 직접 fetch는 전부 실패(HTTP 402).** `x.com/...` 을 WebFetch로 열면 402 Payment Required. **우회 성공**: `https://api.fxtwitter.com/<user>/status/<id>` 가 JSON으로 본문을 반환 → P-13은 **X 원문을 실제로 읽고 인용한 것**이다. nitter.net(오프라인) · nitter.poast.org(무응답) · **xcancel.com은 2026-08-24 X Corp. 서한으로 서비스 중단** — 나머지 미러는 모두 죽었다.
2. **스레드 답글은 못 읽었다.** fxtwitter는 단일 트윗만 반환한다. P-14(히어로 웹디자인 프롬프트, `status/2054622754134020191`)의 본문은 답글에 있어 **2차 출처(mulerun 블로그)의 인용으로 대체**했다 — 원문 대조 미완.
3. **403으로 막힌 소스**: bitcot.com(v0 케이스 스터디, 검색 스니펫만 확보) · medium.com "hero-video website in 20 minutes"(정확한 플로우+프롬프트 미확보).
4. **유료 장벽**: scrolltide.co 템플릿 프롬프트(라이프타임 $239 뒤) · lovable-prompts.com 개별 프롬프트 전문("Show full prompt" 클릭 필요, 제목 11종만 확보).
5. **저수확 소스**: Magic Patterns / Subframe / Readdy / Uizard / Galileo / Dora / Durable / Framer AI / Relume / 21st.dev / shadcnblocks — 검색 결과가 전부 마케팅 문서였고 **인용 가능한 사용자 프롬프트 원문이 공개돼 있지 않았다.** `awesome-v0-prompts` / `awesome-lovable-prompts` 라는 정확한 이름의 GitHub 저장소는 **존재하지 않는다**(convertscout/awesome-ai-prompts, dontriskit/awesome-ai-system-prompts 등 유사 저장소만 존재).
6. **eng0ai 스킬(awwwards-landing-page 등)은 헛발.** SKILL.md가 `git clone` + `vercel deploy` 절차서일 뿐, 디자인 사양이 전혀 없다 — 이름만 awwwards다.
7. Bolt 시스템 프롬프트(오픈소스판)에는 **디자인·레이아웃·이미지 관련 조항이 사실상 없다**(grep 결과 실질 0건). v0/Lovable과 달리 Bolt는 미학을 시스템 레벨에서 다루지 않는다.
