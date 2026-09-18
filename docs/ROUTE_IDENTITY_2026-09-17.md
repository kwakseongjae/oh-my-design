# 라우트 정체성 — `/design-systems`는 없앨 게 아니라, AGENTS.md가 틀렸다

작성 2026-09-17. 오너 지시: *"우리 builder가 핵심 라우트거든? … 근데 SEO랑 AEO보면 자꾸
design-systems 라우트로 가더라고. design-systems는 사실 그냥 아무것도 아니거든.
차라리 저걸 없애든가, 대체하든가 방법을 강구해야할 거 같아. 너만 해도 지금 10번은 실수하고 있어."*

## 실측 결과: 지목된 라우트가 반대였다

| 라우트 | 규모 | 사이트맵 | robots | canonical | 역할 |
|---|---|---|---|---|---|
| `/builder` | client component | 1건 | index | 자기 자신 | **퍼널 본체**. `?step=`·`ref=`·`cfg=`·`color=` 수신 |
| `/design-systems/<id>` | 269 + 478줄 | **440건** | index | 자기 자신 | 영문 SEO/AEO 랜딩. JSON-LD, answer-first 발췌, builder 진입 CTA |
| `/design-systems/<id>/evolution` | — | 5건 | index | 자기 자신 | 영문 5개 전용(baemin·toss·kakao·naver·karrot) |
| `/reference/<id>` | **61줄** | **0건** | **noindex** | **`/design-systems/<id>`** | `<ReferencePreview>` 하나만 렌더 |

`/design-systems/[id]/detail-view.tsx:188`에 이미 이렇게 있다:

```tsx
/* Primary funnel CTA — this page is where Claude/Brave citations
   land; convert that visitor into the builder with the reference
   preselected (step=customize). */
<Link href={`/builder?step=customize&ref=${detail.id}`} …>
```

그리고 `web/src/lib/builder/preview-path.ts`에 `canonicalBuilderPreviewPath(id)`가 있어
`/builder?step=preview&ref=<id>&cfg=<…>` 딥링크를 만든다. **대체 대상이 이미 연결돼 있다.**

즉 `/design-systems/<id>`는 "아무것도 아닌" 라우트가 아니라 **SEO/AEO가 착지해서 builder로
넘기는 전환 페이지**다. 없애면 440개 색인 페이지와 유일한 JSON-LD 표면이 사라지고,
`/builder`는 `"use client"`라 SSR·구조화 데이터를 대신 질 수 없다.

**"아무것도 아닌" 라우트는 `/reference/<id>`다** — 61줄, noindex, 사이트맵 부재,
canonical을 이미 `/design-systems/<id>`로 넘기고 있다.

## 오너 관찰은 맞다. 원인이 다른 곳에 있었을 뿐

*"너만 해도 지금 10번은 실수하고 있어"* — 이 실수에는 기계적 원인이 있다.
`AGENTS.md`의 **Product surface ownership(mandatory)** 절이 이렇게 적혀 있었다:

> `/reference/[id]` is the catalog/detail and reference-data diagnostic surface.

**죽은 라우트를 "카탈로그 상세"라고 지목하고 있었다.** 실제 카탈로그 상세는
`/design-systems/[id]`(269+478줄)이고, `/reference/[id]`는 61줄짜리 noindex 진단면이다.
AGENTS.md는 모든 세션에 주입되므로, 이 문장을 읽는 에이전트는 매번 같은 쪽으로 틀린다.
이번 세션에서 내가 "Not backed by evidence" 광고 UI를 `design-systems/[id]/detail-view.tsx`에
넣으면서도 그게 카탈로그 상세라는 걸 문장과 맞춰 인식하지 못한 것이 같은 원인이다.

### 고친 것

`AGENTS.md`의 해당 절을 수정했다 — `/design-systems/[id]`를 카탈로그 상세로 명시하고,
`/reference/[id]`를 noindex 진단면으로 정정. "Unknown means absent" 규칙의 라우트 지목도
`/reference/[id]` → `/design-systems/[id]`로 교정.

## AEO는 깨끗하지 않다 (정정)

`web/public/llms.txt`만 보면 `<id>/design.md` 440건 + `/builder` 2건으로 깔끔하고
design-systems는 1건뿐이다. 그래서 처음에 "AEO는 문제 없다"고 판단했는데 **틀렸다.**

Perplexity·ChatGPT search·Claude web은 `llms.txt`가 아니라 **색인된 HTML**을 인용한다.
`design-systems/[id]/page.tsx`의 `buildSummary` 주석이 직접 그렇게 말한다 —
*"the 2-3 sentence summary Claude/Brave lift and cite."* 사이트맵의 440개 페이지가
곧 AEO 표면이다. 오너 관찰은 SEO·AEO 양쪽 다 맞았고, 순수 에이전트 채널
(`llms.txt` → `/<id>/design.md` → `/r/<id>`)만 깨끗하다.

덧붙여 `next.config`의 리다이렉트 주석이 *"already-published links (llms.txt, npm launch
copy, agent caches)"*에서 `/design-systems/:id.md`가 쓰였다고 기록한다. 과거 llms.txt는
design-systems를 광고했고, 에이전트 캐시에는 아직 남아 있을 수 있다.

## 권고 — 없애지 말고, 역할을 문서와 일치시킨다

1. **`/design-systems/<id>` 유지.** 440개 색인·JSON-LD·전환 CTA의 유일한 담지자.
2. **AGENTS.md 교정 완료** — 반복 실수의 기계적 원인 제거. (이번에 적용)
3. **`/reference/<id>` 정리 대상으로 지정.** noindex·사이트맵 부재·canonical 양도까지
   이미 끝나 있으니, 남은 건 내부 참조 6곳을 걷어내고 진단 용도만 남기거나 제거하는 것.
   builder 인수 검증에는 쓰지 않는다(AGENTS.md 명시).
4. **JSON-LD의 `url`/`mainEntityOfPage`를 builder 딥링크로 돌릴지는 별건 결정.**
   `canonicalBuilderPreviewPath`가 이미 있으므로 구현 비용은 낮지만, 색인 대상과
   canonical을 분리하면 SEO 영향이 생긴다. 측정 없이 건드리지 않는다.
5. **미측정 항목:** `/design-systems/*` 착지 세션 수와 `/builder` 도달률(GA4, 90일).
   이 수치가 있어야 4번을 결정할 수 있다. 현재 없음.

## 건드리지 않은 것

`/<id>/design.md → /r/<id>` rewrite와 `/design-systems/:id.md → /<id>/design.md` 301
체인은 그대로 둔다. 에이전트 캐시와 이미 발행된 링크가 여기 의존한다.
