# rx4-B — UX/UI 분석 문헌 리서치: 호버 관문 · 이미지 스케일 · 화려함 속의 간결함

> Lane B / r4 리서치. 2026-09-04. 모든 인용은 **실제 fetch 한 URL**에서 가져왔다.
> fetch 실패한 소스는 §6에 실패로 명시했다(대체 출처를 쓰거나, 규칙 근거에서 뺐다).
> 대상 결함: r3(60점) 사용자 피드백 3종 — ①이미지가 소극적 ②호버해야 펼쳐지고 떼면 닫힘 ③화려함 속의 간결함·시원시원함 부재.

---

## 1. 한 줄 결론

**스펙터클은 "사용자가 노동해서 얻는 것"이 아니라 "가만히 있어도 도착하는 것"이어야 한다 — 콘텐츠는 기본 상태에서 100% 보이고(호버는 증폭만), 주인공 이미지는 뷰포트를 실제로 지배하는 크기여야 하며(≥35% 면적, 페이지에 풀블리드 1개 이상), 한 화면에는 2등보다 2배 이상 큰 초점이 정확히 하나 있어야 한다.**

---

## 2. 원칙 표 (LC-49~LC-59 후보)

각 후보는 **기존 코덱스 규칙 중 무엇을 확장/보정하는지** 명시했다.
(기존: LC-1~48, LI-1~23·33, 스토리보드 게이트 A1~A6·B1~B5·C1~C8)

### 2.1 호버 = 관문 금지

| # | 원칙 | 출처 | 근거 인용 | 규칙 후보 | r3 위반 지점 |
|---|---|---|---|---|---|
| B-1 | **호버로 드러나는 콘텐츠는 접근성 3요건(해제·호버가능·지속)을 만족해야 하고, 애초에 "의도하지 않은 노출"이 문제로 규정된다** | W3C WCAG 2.1 SC 1.4.13 *Content on Hover or Focus* (Level AA) — https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html | "Additional content that appears and disappears in coordination with keyboard focus or pointer hover often leads to accessibility issues" / **Persistent**: "The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid" | **LC-49 호버는 증폭이지 관문이 아니다.** 섹션의 정보 단위(이미지·제목·설명·수치)는 호버 없이 기본 상태에서 **100%** 도달 가능해야 한다. 호버는 이미 보이는 것의 **강조만** 한다(스케일 ≤1.06, 밝기/그림자/감속/커서). *호버로만 도달 가능한 콘텐츠 = 0개.* | S2 `stack-fan-hover`(장르 스택이 **호버해야 펼쳐짐**), S8 `hover-cross-open`(주변 4장이 호버 전에는 안 보임) → 두 섹션 모두 이미지가 호버 뒤에 숨어 있다 |
| B-2 | **호버 노출은 0.3~0.5초 의도 확인이 필요하고, 해제는 0.5초 지연을 둬야 한다. 노출이 클수록 확신이 더 필요하다** | NN/g, Aurora Harley, 2015-01-11 — https://www.nngroup.com/articles/timing-exposing-content/ | "Revealing hidden content too quickly on mouseover can result in accidental activations and creates a jarring user experience." / "the more disruptive the content displayed, the more certain designers need to be of user's intent before triggering the animation." (수치: 시각 피드백 0.1s, 노출 지연 **0.3–0.5s**, 숨김 지연 **0.5s**) | **LC-50 펼침은 잠기고(latch), 닫힘은 명시적이다.** 펼침 연출을 쓴다면 ①**뷰포트 진입 시 자동 1회 펼침**이 기본, ②호버는 그 위의 미세 강조, ③**마우스가 떠나도 접히지 않는다**. 부득이 호버 토글을 쓰면 in-delay 0.3–0.5s / out-delay ≥0.5s, 그리고 재진입 시 되감기 금지. | S2·S8 모두 "호버 → 펼침 / 이탈 → 원복". 사용자는 12장을 보려면 12번 호버해야 하고, 손을 떼면 전부 닫힌다 = **사용자 노동으로 유지되는 스펙터클** |
| B-3 | **호버는 1차 입력이 호버 가능한 기기에서만 존재한다 — 기본 UI는 호버 없이 완결돼야 한다** | MDN, `@media (hover)` — https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover | "`none`: The primary input mechanism cannot hover at all or cannot conveniently hover (e.g., many mobile devices emulate hovering when the user performs an inconvenient long tap)" | **LC-59 터치에서 호버 층은 "사라지는" 게 아니라 "펼쳐진 상태가 기본"이 된다.** `@media (hover: none)` 에서 모든 호버 상태의 **기본형 = 펼쳐진 형태**. 호버 층을 끄기만 하는 구현은 FAIL. | r3 모바일 안무는 핀 해제·원통 자동회전까지는 했으나, `stack-fan-hover`/`hover-cross-open`의 터치 대체 상태가 스토리보드에 없다(= 모바일에서 그 이미지들은 영영 안 보임) |
| B-4 | **호버 네비게이션은 통제감 상실과 접근성 장벽을 만든다 — 클릭이 "그냥 더 쉽게 옳다"** | Chemistry Agency, 2026(Friedman 2021·Laubheimer 2022 인용) — https://www.chemistryagency.com/insights/navigational-design-the-click-vs-hover-debate/ | Vitaly Friedman 인용: "a common user's complaint about this pattern has been the absolute lack of certainty and control about how and when the sub-navigation opens and closes." / "Hover navigation creates barriers for keyboard users, those with motor impairments, and low-vision users relying on screen magnification." | (LC-49 보강) **호버 상태는 키보드 `:focus-visible` 과 항상 짝을 이룬다.** 기존 **LC-42**(브라우저 기본값 금지)를 "포커스 링을 브랜드화한다"에서 "**포커스가 호버와 동일한 상태를 만든다**"로 확장. | r3 호버 팟 3종에 focus 대응 기술 없음 |

### 2.2 이미지 스케일

| # | 원칙 | 출처 | 근거 인용 | 규칙 후보 | r3 위반 지점 |
|---|---|---|---|---|---|
| B-5 | **사용자는 정보를 담은 이미지만 본다. 장식 이미지는 통째로 무시된다** | NN/g, Jakob Nielsen, 2010-10-31(2026-08-13 재검토) — https://www.nngroup.com/articles/photos-as-web-content/ | "Users **pay attention to information-carrying images** that show content that's relevant to the task at hand. And users **ignore purely decorative images** that don't add real content to the page." | **LC-51 주인공 이미지는 뷰포트를 지배한다.** 섹션의 최대 미디어는 뷰포트 면적의 **≥35%**, 페이지 전체에서 **≥1개 섹션**은 풀블리드(≥90%, LC-1 의 폴드 외 재현). 면적 <20% 미디어는 "장식"으로 분류하고 **섹션당 ≤2개**만 허용. | S5b **원통 갤러리가 뷰포트 폭의 ~30%** — 12장을 담았지만 각 포스터는 화면의 몇 %에 불과. "이미지를 소극적인 사이즈로 쓴다"의 정확한 계측 지점 |
| B-6 | **폴드 바로 위/아래의 주목도 차이는 배(倍) 단위다 — 첫 화면에 무엇을 얼마나 크게 두느냐가 페이지 전체를 결정** | NN/g, Amy Schade, 2015 — https://www.nngroup.com/articles/page-fold-manifesto/ | "the 100 pixels just above the fold were **viewed 102% more** than the 100 pixels just below" / "**84% is the average difference in how users treat info above vs. below the fold**" / "Designs shouldn't need an arrow to tell users to scroll." | (LC-1·LC-3 보강) **LC-55 첫 10초에 명제가 끝난다** — 폴드 요소 수 **≤5**(h1 · 서브 1문장 · CTA · 주 미디어 · 액센트 1). 스크롤 유도 화살표 금지. | r3 폴드는 `ambient-fold` + `drift-collage` 두 유휴 효과가 동시 진행 → 요소 수·초점 수가 5를 넘김 |
| B-7 | **크기·색 강조는 탐지 속도를 최대 4배 높이고, 연령 격차를 없앤다 — 스케일은 미학이 아니라 성능** | Google Design (Material 3 Expressive 리서치) — https://design.google/library/expressive-material-design-google-research | "Participants were able to spot key UI elements up to **four times faster** in the M3 Expressive designs" / 45세 이상 참가자의 탐지 속도가 젊은 층과 같아짐 | (LC-51 보강) **스케일은 "과감함"이 아니라 "탐지 속도"의 문제**로 스토리보드에 적는다. B3(피크 1개) 옆에 **"이 섹션에서 가장 먼저 보여야 하는 것"** 칸을 신설. | r3 는 섹션마다 무엇이 1등인지 스토리보드에 없음 |
| B-8 | **이미지가 작거나 확대가 안 되면 이탈이 발생한다** | Baymard Institute — https://baymard.com/blog/ensure-sufficient-image-resolution-and-zoom (검색 결과 요약 경유; 원문 fetch 미실시 → **낮은 신뢰도**) | "both low-quality images and images that couldn't be zoomed sufficiently to see product details were a cause of product abandonments" / "56% of users explore product images as their first action" | (참고만) 이미지 주도 랜딩에서 **클릭 확대(라이트박스) ≥1** 제공. IL-6 의 대안으로 기록. | — |
| B-9 | **어워드 심사에서 디자인 40% + 창의성 20% = 60% 가 시각 임팩트, 유용성 30%** | Awwwards Evaluation System — https://www.awwwards.com/about-evaluation/ | Design 40% / Usability 30% / Creativity 20% / Content 10%. HM 은 "6.5 or more from the jury" | (게이트 보정) **와우 목표는 "시각 60 : 사용성 30"의 배분**임을 스킬 문서에 명시. 사용성 30%를 호버 관문으로 깎으면 상위 점수 자체가 불가능. | r3 는 시각(원통·스택·크로스)을 늘리면서 사용성을 깎았다 = 배분을 역행 |

### 2.3 간결함 · 초점 · 여백 (시원시원함)

| # | 원칙 | 출처 | 근거 인용 | 규칙 후보 | r3 위반 지점 |
|---|---|---|---|---|---|
| B-10 | **선택지가 늘면 결정 시간이 늘어난다** | Laws of UX — Hick's Law — https://lawsofux.com/hicks-law/ | "The time it takes to make a decision increases with the number and complexity of choices." (Hick 1952 / Hyman) | **LC-52 한 화면 한 초점.** 섹션당 시각적 1등 요소 **정확히 1개**, 1등:2등 **면적비 ≥2:1**. 동시에 움직이는 독립 요소 **≤2**. | S1·S5b 는 동시 움직임 3층(스크롤 동사 + 유휴 동사 + 호버 동사) — 코덱스 C1 은 "주1+보조1"이지만 **유휴 층 도입 후 사실상 3층**이 됐다 |
| B-11 | **비슷한 것들 사이에서 다른 하나만 기억된다 — 강조는 아껴야 작동** | Laws of UX — Von Restorff Effect — https://lawsofux.com/von-restorff-effect/ | "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered." / "Apply emphasis sparingly to prevent competing elements" | (A2·LC-27 확장) **LC-52 보강**: 강조 장치(액센트색·모션·스케일 점프)를 **섹션당 1종**만. 두 종이 겹치면 둘 다 죽는다. | S2 는 펼침(모션) + 팟 강조(호버) 두 종이 같은 대상에 걸림 |
| B-12 | **시각 위계는 크기 3단계 이하로, 여백이 많은 요소가 더 주목받는다** | NN/g, Kelley Gordon, 2021-01-17 — https://www.nngroup.com/articles/visual-hierarchy-ux-definition/ | "An element that has more space around it will be perceived as one group and thus will receive more attention." / 크기 변형은 3단계(small/medium/large) 이하 권장 | **LC-56 시원시원함은 여백의 "덩어리 크기"다.** 빈 면적 비율(LC-4)만으로는 부족 — 페이지에서 **가장 큰 연속 빈 블록 ≥0.25vh**, 섹션 간 간격 **값 종류 ≤3**, 섹션당 텍스트 크기 단계 **≤3**. | r3 는 LC-4(빈 면적 0.46+)는 통과하지만 여백이 **잘게 흩어져** 있다 — 큰 숨 구간이 없다 |
| B-13 | **미니멀리즘의 실측 특성: 요소 제거 87%, 여백 최대화 84%, 극적 타이포 75%** | NN/g, Kate Moran, 2015 (112개 사이트 분석) — https://www.nngroup.com/articles/characteristics-minimalism/ | "Restricted Features and Elements (87%)" — 디자이너는 "eliminate any that are not required to support the core functionality or message" / "Dramatic Use of Typography (75%): Bold or large typography becomes another tool for communicating meaning **when there are few elements on the page**." | **LC-57 큰 타이포는 폴드 밖에도 산다.** 디스플레이 급 텍스트(본문의 ≥3.0×, LC-21)가 **최소 3개 섹션**에 등장. 단, "요소가 적을 때만" 작동하므로 LC-52(초점 1) 와 **동시 충족**이어야 함. | r3 는 큰 타이포가 히어로에만 있고, 중반부는 이미지+캡션 리듬만 반복 |
| B-14 | **F 패턴은 "안내 신호가 없을 때 나오는 최소 노력 경로"다 — 신호를 주면 깨진다** | NN/g, Kara Pernice, 2017(2026-08-19 재검토) — https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/ | "In the absence of any signals to guide the eye, they will choose the path of minimum effort." | (B2·LC-2 보강) 섹션마다 **시선 진입점 1개**를 스토리보드에 좌표로 적는다(기존 B2 는 히어로만 규정). | r3 스토리보드에 섹션별 진입점 없음 |
| B-15 | **미감은 사용성 문제를 "작은 것"까지만 가려준다** | NN/g, Kate Moran, 2024 — https://www.nngroup.com/articles/aesthetic-usability-effect/ | "The aesthetic-usability effect has limits." 미감은 minor usability problems 는 용서받게 하지만 "not of large ones." (Kurosu & Kashimura 1995, ATM 26종·252명) | (게이트 원칙) **호버 관문·숨은 콘텐츠는 "large usability problem"** 이므로 미감으로 상쇄되지 않는다 = r3 가 r2 보다 화려한데 점수가 내려간 메커니즘의 문헌적 설명. | r2 70 → r3 60 의 역행을 설명 |

### 2.4 모션 · 유휴 스펙터클

| # | 원칙 | 출처 | 근거 인용 | 규칙 후보 | r3 위반 지점 |
|---|---|---|---|---|---|
| B-16 | **자동 전진은 통제감을 뺏고, 움직이면 광고로 읽혀 무시된다** | NN/g, Jakob Nielsen, 2013-01-19 — https://www.nngroup.com/articles/auto-forwarding/ | "because it moves, users automatically assume that it might be an advertisement, which makes them more likely to ignore it." / "Single-item visibility is reduced by having to take turns being on display." (Siemens 사례: 할인 패널이 전체 시간의 **20%** 만 노출) / 권고: "show a new panel only when users ask for it. Otherwise, it should stand still and let users read the information in peace." | **LC-53 유휴 자동 모션은 "장식 레인"에만.** 자동 회전/전진이 허용되는 4조건 — ①항목별 **고유 정보 없음**(같은 종류의 반복), ②호버·스크롤·포커스로 **감속 또는 정지** 가능, ③그 안에 **유일한 CTA/사실이 없다**, ④전체 1바퀴 ≤ 15s. 하나라도 어기면 정지 상태 기본 + 사용자 요청 시 전진. | S5b 원통은 ①②④는 만족(장르 샘플·호버 감속·6deg/s) — 그러나 **12장 각각이 "장르"라는 고유 정보를 운반**하도록 설계돼 조건 ①이 회색. §3 참조 |
| B-17 | **캐러셀은 46%가 사용성 결함이고, 정적 섹션이 대부분의 사용자에게 더 낫다** | Baymard Institute, Edward Scott, 2019-04-30(2025-04-03 갱신) — https://baymard.com/blog/homepage-carousel | "Most users won't see all the slides in a homepage carousel, even if it autorotates." / "46% of desktop and mobile sites with a homepage carousel have an implementation with usability issues." / "Static content sections avoid any of the issues associated with nonoptimized carousels" | (LC-53 보강) **콘텐츠가 캐러셀 안에 있으면, 그 캐러셀 밖에 같은 콘텐츠의 정적 대안이 있어야 한다.** (LC-15 "가로 스크롤러는 밀도 밸브" 를 "밀도 밸브이되 유일 경로 금지"로 보정) | S5b 12장은 원통 밖에 정적 대안이 없다 |
| B-18 | **애니메이션은 100–500ms, 500ms부터 방해가 되며, ease-out 이 기본** | NN/g, Page Laubheimer, 2020 — https://www.nngroup.com/articles/animation-duration/ | "In general, the duration of most animations should be in the range of 100–500 ms" / "At 500ms, animations start to feel like a real drag for users — they become cumbersome and annoying." / "Completely linear motion looks weird and unnatural to users." | **LC-58 호버 응답은 지연 0 · ≤150ms.** 콘텐츠 이동 100–400ms, 500ms 초과는 스크럽/핀 연출 외 금지. 호버는 **delay: 0**(NN/g 의 0.3–0.5s 지연은 "파괴적 노출"에만 적용, 미세 강조엔 즉시 반응). LC-29/30/41 확장. | r3 호버 팟의 duration/delay 가 스토리보드에 숫자로 없음 |
| B-19 | **좋은 애니메이션은 300ms 이하이고, 중단 가능해야 하며, 반복되는 동작에는 붙이지 않는다** | Emil Kowalski, *Great Animations* — https://emilkowal.ski/ui/great-animations | "Your animations should also usually be shorter than 300ms." / "The best type of easing for this purpose is `ease-out`." / "Interruptibility helps your animations feel more natural and responsive." / "Never animate keyboard initiated actions." | (LC-58 보강) **모든 호버/유휴 전이는 interruptible** — 진행 중 상태에서 반대 방향 입력이 오면 현재 값에서 이어간다(되감기 금지). | r3 팟 펼침은 이탈 시 처음부터 되감김 |
| B-20 | **진입은 빠르게, 퇴장은 느긋하게. 호버 이탈에는 지연을 둬 깜빡임을 막는다** | Josh W. Comeau, 2021 — https://www.joshwcomeau.com/animation/css-transitions/ | "enter animation is quick and snappy, while the exit animation can be a bit more relaxed" (125ms 진입 / 450ms 퇴장) / 드롭다운에 **300ms delay**: "when the user moves their mouse outside...nothing happens for 300ms." | (LC-58 보강) 호버 강조: in 120–160ms / out 250–450ms + out-delay ≥200ms. | — |
| B-21 | **반복 빈도가 높은 인터랙션에 과한 모션은 인지 부담이 된다; 모션 방향은 공간적 의미를 갖는다** | Rauno Freiberg, *Invisible Details of Interaction Design* — https://rauno.me/craft/interaction-design | 고빈도 인터랙션은 "shouldn't animate excessively, as novelty diminishes and animation becomes 'cognitive burden.'" / 중단 가능성: 파괴적 동작은 제스처 종료 시에만, 탐색적 동작은 진행 중 반응 | (LC-49 보강) **12장짜리 갤러리처럼 "여러 번 반복될 호버"에는 큰 모션을 걸지 않는다.** 반복 호버 대상의 변화량 상한: scale ≤1.06, translate ≤8px. | S2 장르 스택은 12번 반복될 호버에 **펼침(대형 변형)** 을 걸었다 |
| B-22 | **인터랙션이 유발한 모션은 끌 수 있어야 한다(AAA)** | W3C WCAG 2.1 SC 2.3.3 *Animation from Interactions* (Level AAA) — https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html | "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed." | (LC-32·C6 확장) 리듀스드 모션에서 **호버 층은 "정지"가 아니라 "펼쳐진 최종 상태"** 로 고정. | r3 C6 은 "원통 정지·커튼 즉시 완료"만 — 호버 팟의 리듀스드 상태가 없음 |
| B-23 | **애플의 강점은 모션의 양이 아니라 위계다 — 시네마틱 하중은 결정적 순간에만** | Brad Holmes, 2025 — https://www.brad-holmes.co.uk/web-performance-ux/why-most-scroll-animations-miss-what-apple-gets-right/ | "Apple builds motion around hierarchy. Text and UI move with subtle intent; visuals carry the cinematic load only at key moments." / "Most teams try to make every scroll moment cinematic..." / "The less users notice it, the more effective it is." | (LC-33/34/35 보강) **시네마틱 하중(대형 미디어 변형)은 페이지에서 ≤2 섹션.** 나머지 섹션의 모션은 opacity/transform 미세 전이로 제한. | r3 는 8개 섹션 중 5개가 대형 미디어 변형(줌·팬·펼침·원통·크로스) |

### 2.5 랜딩의 UX 관점 (사용자가 실제로 하는 것)

| # | 원칙 | 출처 | 근거 인용 | 규칙 후보 | r3 위반 지점 |
|---|---|---|---|---|---|
| B-24 | **첫 10초 안에 가치가 전달되지 않으면 떠난다** | NN/g, Jakob Nielsen, 2011-09-11 (Microsoft Research, 205,873 페이지 분석) — https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/ | "The first 10 seconds of the page visit are critical" / "To gain several minutes of user attention, you must clearly communicate your value proposition within 10 seconds." | **LC-55**(위) 의 근거. 폴드는 **읽는 데 10초 이내**로 완결되는 명제 1개만. 폴드 진입 애니메이션(커튼 등) 총 길이 **≤1.2s**. | r3 진입 커튼 + ambient-fold + drift-collage 가 폴드 10초를 소비 |
| B-25 | **주목의 42%가 페이지 상단 20%, 65%가 상단 40%에 몰린다** | NN/g, Therese Fessenden, 2018 — https://www.nngroup.com/articles/scrolling-and-attention/ | "People spent disproportionately more time viewing the top 20% of a page." (42% top 20% / 65% top 40% / 74% 첫 두 화면) | (LC-33 보정) **압도 피크는 페이지 진행 40% 이전**에 둔다. 코덱스 LC-33 은 "피크는 이르다"를 실측으로만 말했는데, 여기에 **행동 데이터 근거**가 붙는다. | r3 피크(S5b 원통)는 페이지 중후반 — 주목이 남아 있지 않은 구간 |
| B-26 | **85%가 첫 뷰포트를 넘어가지만 절반까지 가는 사람은 55%, 끝까지는 45%** | Sculpt Digital(20,000+ 세션, GTM scroll-depth 트리거) — https://sculpt.digital/85-users-scroll-death-of-above-the-fold-content/ *(에이전시 자체 데이터, 연도 미표기 → 중간 신뢰도)* | "85% of users scrolled past the first viewport, 55% reached half way down the page and 45% scrolled to the bottom of the page." / "when a user scrolls half way down the page, over 80% scrolled to the bottom." | (LC-8 보정) 스크롤 예산 10–16vh 유지의 근거를 "**절반 지점(≈5~8vh)까지 오면 대부분 끝까지 간다**"로 재서술 — 즉 **중간 지점에 최대 미끼**를 둔다. | r3 는 중간 지점이 가장 조용한 구간 |
| B-27 | **진행형 노출은 "자주 쓰는 것을 먼저"가 원칙 — 드물게 쓰는 것만 뒤로** | NN/g, Jakob Nielsen, 2006-12-03 — https://www.nngroup.com/articles/progressive-disclosure/ | "Initially, show users **only a few** of the most important options." / 뒤로 미룰 것은 "Rarely used settings, such as scaling and printing the pages in reverse sequence" | (LC-49 의 이론적 근거) **랜딩의 이미지는 "rarely used option"이 아니다** — 진행형 노출의 정당한 대상이 아니라는 뜻. 숨겨도 되는 것은 상세 스펙·FAQ·법적 고지뿐. | S2·S8 은 **제품의 핵심 증거(생성 결과 이미지)** 를 호버 뒤로 숨겼다 |

---

## 3. 모순·뉘앙스 — 장식(OK) vs 콘텐츠 관문(NG)의 선

**모순:** Nielsen 2013 / Baymard 2019 는 *자동 회전 = 유해*라고 말한다. 그러나 우리 r2 피드백은 *"스크롤을 멈추면 화면이 죽어 있다"* 였고, 유휴 스펙터클은 와우의 필수 요소다. 둘은 같은 층에 대한 진술이 아니다.

두 문헌이 실제로 공격하는 것은 **"자동으로 움직인다"** 가 아니라 **"움직임이 정보 접근의 유일한 경로다"** 이다. Nielsen 의 지멘스 사례에서 문제는 할인 정보가 전체 시간의 20%만 존재했다는 것이고, Baymard 의 문제는 "클릭하려는 순간 슬라이드가 바뀌어 엉뚱한 페이지가 열렸다"는 것이다. 둘 다 **정보/행동이 타이밍에 인질로 잡힌 상태**를 가리킨다.

### 선 긋기 — 4가지 시험 (모두 통과해야 "장식")

| 시험 | 장식(OK) | 콘텐츠 관문(NG) |
|---|---|---|
| **T1 정보 유일성** | 움직이는 항목들이 **같은 종류의 반복 샘플**(질감·분위기 증명). 어느 하나를 못 봐도 손실이 없다 | 항목마다 **고유한 사실·기능·CTA**가 있다. 못 보면 정보 손실 |
| **T2 도달 대체 경로** | 같은 콘텐츠에 **정적 대안**(그리드·리스트·아래 섹션)이 있다 | 그 연출이 **유일한 경로** |
| **T3 사용자 제어** | 호버/스크롤/포커스로 **감속·정지** 가능, 리듀스드 모션에서 정지 | 통제 불가, 계속 지나감 |
| **T4 노동 요구** | 가만히 있어도 **저절로 도착**한다 | 호버·드래그를 **반복해야** 볼 수 있다 |

**우리 r3에 적용하면:**
- **S5b 원통 갤러리** — T3 ✓(호버 감속) T4 ✓(자동 회전). 그러나 T1 회색(12장이 "장르"라는 고유 정보를 운반하도록 설계됨) · T2 ✗(정적 대안 없음). → **처방: 원통은 유지하되 폭을 뷰포트 지배 수준으로 키우고(LC-51), 그 아래에 같은 12장의 정적 그리드 또는 "펼친 상태" 섹션을 둔다.** 그러면 원통은 순수 장식이 되고 콘텐츠는 별도 경로를 얻는다.
- **S2 장르 스택 / S8 크로스 프리뷰** — T4 ✗(호버 반복 노동) · T2 ✗. → **처방: 뷰포트 진입 시 자동 1회 펼침 + latch(LC-50). 호버는 개별 항목의 미세 강조로 강등.**
- **폴드 `ambient-fold` / `drift-collage`** — T1~T4 전부 ✓. **정당한 장식.** 다만 LC-52(동시 움직임 ≤2)와 LC-55(폴드 요소 ≤5)에는 걸린다 → 둘 중 하나만.

**한 문장 규칙:** *움직임이 "무엇을 볼 수 있는가"를 바꾸면 콘텐츠 관문(NG), "얼마나 아름다운가"만 바꾸면 장식(OK).*

---

## 4. "화려함 속의 간결함"의 조작적 정의 — 검사기로 잴 수 있는 형태

r3 의 실패는 "화려함"이 모자라서가 아니라 **화려함이 간결함을 잡아먹어서**다. 아래는 두 축을 동시에 재는 지표다. 기존 `measure-landing.mjs` / `probe-reflexes.mjs` 좌표계로 계산 가능.

### 4.1 간결함 지표 (LI-24~LI-30 후보)

| ID | 지표 | 측정 정의 | PASS |
|---|---|---|---|
| **LI-24** | **초점 수** | 섹션 내 최대 시각 요소(미디어 또는 디스플레이 텍스트)의 면적 A1, 2등 A2 | 섹션마다 `A1/A2 ≥ 2.0`. 위반 섹션 ≤1개 |
| **LI-25** | **폴드 요소 수** | 첫 뷰포트에서 렌더된 **의미 단위** 수(텍스트 블록·CTA·미디어·액센트 개체; 배경 그라디언트/그레인 제외) | **≤5** |
| **LI-26** | **주 미디어 점유율** | 각 섹션 최대 미디어의 뷰포트 면적 대비 비율 | 섹션 중앙값 **≥0.35**, 페이지 최대값 **≥0.90**(풀블리드 ≥1개) |
| **LI-27** | **호버 관문 수** | 기본 상태(`:hover` 미적용, `pointer: coarse`)에서 `visibility/opacity/clip`으로 감춰졌다가 호버로만 노출되는 **콘텐츠 노드** 수 | **0** |
| **LI-28** | **동시 모션 채널** | 한 섹션에서 동시에 진행 가능한 독립 애니메이션 소스 수(스크롤 스크럽 / 유휴 루프 / 호버 전이 / 진입 리빌) | **≤2** |
| **LI-29** | **여백 덩어리** | 텍스트·미디어가 없는 **연속 세로 구간**의 최대값(vh) / 섹션 간 간격 값의 고유 개수 | 최대 연속 여백 **≥0.25vh**, 간격 값 종류 **≤3** |
| **LI-30** | **시네마틱 하중 섹션 수** | 대형 미디어 변형(스케일/회전/3D/시퀀스)이 주효과인 섹션 수 | **≤2** (나머지는 opacity/transform 미세 전이) |

### 4.2 화려함 지표 (기존 유지 + 1개 추가)

기존 LC-8(예산 10–16vh) · LC-17(29–63 이미지) · LC-21(디스플레이 3.0–4.6×) · A2(액센트 ≤3요소·≤3%) · C2(효과 종류 ≤7) 는 그대로 둔다. 추가:

| ID | 지표 | PASS |
|---|---|---|
| **LI-31** | **디스플레이 급 텍스트가 등장하는 섹션 수** (본문의 ≥3.0×) | **≥3** (LC-57) |

### 4.3 두 축의 관계 — 실패 모드 표

| | 간결함 낮음 | 간결함 높음 |
|---|---|---|
| **화려함 낮음** | r0(30점) — 아무것도 없음 | 무난한 SaaS 랜딩 |
| **화려함 높음** | **r3(60점) — 효과 3층 · 이미지 작음 · 호버 관문** | **목표 — 큰 이미지 1개, 초점 1개, 저절로 도착하는 모션** |

**r2(70) → r3(60) 의 역행 원인:** 화려함 축은 올렸지만(효과 7종·핀 4·유휴 10종) 간결함 축을 4개 지표에서 동시에 깎았다(LI-24 초점, LI-26 스케일, LI-27 호버 관문, LI-28 동시 채널). B-15(미감-사용성 효과의 한계)가 예측하는 그대로다 — 미감은 **작은** 결함만 상쇄한다.

### 4.4 "시원시원함"의 분해

사용자가 말한 시원시원함은 감상어가 아니라 4개 지표의 합이다:
1. **큰 것 하나** — LI-26 (주 미디어 ≥35%, 풀블리드 ≥1)
2. **경쟁 없음** — LI-24 (1등:2등 ≥2:1)
3. **큰 숨** — LI-29 (연속 여백 ≥0.25vh)
4. **노동 없음** — LI-27 (호버 관문 0) + LI-28 (동시 채널 ≤2)

---

## 5. 규칙 후보 요약 (LC-49~LC-59)

| ID | 한 줄 | 확장하는 기존 규칙 |
|---|---|---|
| **LC-49** | 호버는 증폭이지 관문이 아니다 — 호버로만 도달하는 콘텐츠 0 | C8(유휴 층) 재정의, LC-42 보강 |
| **LC-50** | 펼침은 뷰포트 진입 시 자동 1회 + latch, 이탈해도 안 접힌다 | LC-48(정착)의 호버 축 |
| **LC-51** | 주 미디어 ≥35% 뷰포트 면적, 페이지에 풀블리드 ≥1 | LC-1(폴드) → 본문 섹션으로 확장, IL-3 |
| **LC-52** | 섹션당 초점 1개(면적비 ≥2:1), 동시 움직임 ≤2 | C1(주1+보조1)을 유휴 층 포함해 재계산, B3 |
| **LC-53** | 자동 유휴 모션은 T1~T4 4조건 통과 시에만(장식 레인) | LC-15(가로 스크롤러), C8 |
| **LC-55** | 폴드 요소 ≤5, 진입 애니 ≤1.2s, 스크롤 화살표 금지 | LC-1·LC-2 |
| **LC-56** | 여백은 덩어리로 — 최대 연속 여백 ≥0.25vh, 간격 값 ≤3종 | LC-4(빈 면적 비율) 보완 |
| **LC-57** | 디스플레이 급 타이포가 ≥3 섹션에 등장 | LC-21·LC-23 |
| **LC-58** | 호버 in 120–160ms delay 0 / out 250–450ms delay ≥200ms, 500ms 초과 금지, interruptible | LC-29·LC-30·LC-41 |
| **LC-59** | `hover: none` 에서 호버 층의 기본형 = 펼쳐진 상태 | LC-44(커스텀 커서) 짝 규칙 |

*(LC-54 는 결번 — LC-52 에 흡수)*

---

## 6. 참고문헌 (전부 실제 fetch)

**성공 (본문 인용에 사용):**
1. W3C. *Understanding SC 1.4.13: Content on Hover or Focus* (WCAG 2.1, Level AA). https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html
2. W3C. *Understanding SC 2.3.3: Animation from Interactions* (Level AAA). https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html
3. Harley, Aurora (NN/g), 2015-01-11. *Timing Guidelines for Exposing Hidden Content*. https://www.nngroup.com/articles/timing-exposing-content/
4. Nielsen, Jakob (NN/g), 2013-01-19. *Auto-Forwarding Carousels and Accordions Annoy Users*. https://www.nngroup.com/articles/auto-forwarding/
5. Nielsen, Jakob (NN/g), 2006-12-03. *Progressive Disclosure*. https://www.nngroup.com/articles/progressive-disclosure/
6. Nielsen, Jakob (NN/g), 2010-10-31 (rev. 2026-08-13). *Photos as Web Content*. https://www.nngroup.com/articles/photos-as-web-content/
7. Nielsen, Jakob (NN/g), 2011-09-11. *How Long Do Users Stay on Web Pages?*. https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/
8. Fessenden, Therese (NN/g), 2018. *Scrolling and Attention*. https://www.nngroup.com/articles/scrolling-and-attention/
9. Schade, Amy (NN/g), 2015. *The Fold Manifesto*. https://www.nngroup.com/articles/page-fold-manifesto/
10. Pernice, Kara (NN/g), 2017 (rev. 2026-08-19). *F-Shaped Pattern of Reading on the Web*. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
11. Gordon, Kelley (NN/g), 2021-01-17. *Visual Hierarchy in UX: Definition*. https://www.nngroup.com/articles/visual-hierarchy-ux-definition/
12. Moran, Kate (NN/g), 2015. *Characteristics of Minimalism in Web Design*. https://www.nngroup.com/articles/characteristics-minimalism/
13. Moran, Kate (NN/g), 2024. *The Aesthetic-Usability Effect*. https://www.nngroup.com/articles/aesthetic-usability-effect/
14. Laubheimer, Page (NN/g), 2020. *Executing UX Animations: Duration and Motion Characteristics*. https://www.nngroup.com/articles/animation-duration/
15. Scott, Edward (Baymard Institute), 2019-04-30 / upd. 2025-04-03. *Homepage Carousel UX*. https://baymard.com/blog/homepage-carousel
16. Laws of UX. *Hick's Law*. https://lawsofux.com/hicks-law/
17. Laws of UX. *Von Restorff Effect*. https://lawsofux.com/von-restorff-effect/
18. Kowalski, Emil. *Great Animations*. https://emilkowal.ski/ui/great-animations (연도 미표기)
19. Freiberg, Rauno. *Invisible Details of Interaction Design*. https://rauno.me/craft/interaction-design
20. Comeau, Josh W., 2021. *An Interactive Guide to CSS Transitions*. https://www.joshwcomeau.com/animation/css-transitions/
21. MDN Web Docs. *`hover` (@media feature)*. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover
22. Google Design. *Expressive Material Design — Google Research*. https://design.google/library/expressive-material-design-google-research
23. Awwwards. *Evaluation System*. https://www.awwwards.com/about-evaluation/
24. Chemistry Agency. *Navigational Design: The Click vs. Hover Debate*. https://www.chemistryagency.com/insights/navigational-design-the-click-vs-hover-debate/
25. Holmes, Brad, 2025. *Why Most Scroll Animations Miss What Apple Gets Right*. https://www.brad-holmes.co.uk/web-performance-ux/why-most-scroll-animations-miss-what-apple-gets-right/
26. Figma Resource Library. *Top Web Design Trends for 2026*. https://www.figma.com/resource-library/web-design-trends/

**fetch 실패 — 인용하지 않음 (근거로 쓰지 않았다):**
- `https://m3.material.io/styles/motion/overview` · `.../easing-and-duration/tokens-specs` — 본문이 JS 렌더라 제목만 반환. **Material 3 모션 토큰 수치는 이 문서에 없다.**
- `https://developer.apple.com/design/human-interface-guidelines/motion` — 동일 사유. **Apple HIG 모션 인용 없음.**
- `https://www.awwwards.com/about-evaluation.html` — 404 (슬래시 버전으로 재시도해 성공).
- `https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-...` — 403. **Refactoring UI 인용 없음** (여백 근거는 NN/g Gordon 2021 · Moran 2015 로 대체).
- `https://www.creativebloq.com/design/hover-dead-long-live-hover-4132957` — 본문 미반환.

**fetch 성공했으나 신뢰도 하향 표기:**
- Sculpt Digital, *85% of users scroll…* (B-26) — https://sculpt.digital/85-users-scroll-death-of-above-the-fold-content/ 원문 fetch 성공. 다만 에이전시 자체 GTM 데이터·연도 미표기·"research is clearly in its infancy" 라고 스스로 밝힘 → **중간 신뢰도**.

**검색 결과 요약만 확보(원문 미fetch) — 규칙 근거로 쓰지 않음:**
- Baymard, *Ensure Sufficient Image Resolution and Zoom* (B-8) — https://baymard.com/blog/ensure-sufficient-image-resolution-and-zoom 는 검색 요약만 확보. 참고 항목으로만 기록.
